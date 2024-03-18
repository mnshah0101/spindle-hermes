import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

import Loader from '../Loader';


function checkLowerCaseString(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '-' && !/[a-z]/.test(input[i])) {
            return false;
        }
    }
    return true;
}


export default function APIForm({ id, isOwner, onSubmit }) {
    const router = useRouter();
    const { data: session, status } = useSession();

    const [endpoint_name, setEndpointName] = useState('')
    const [endpoint_slug, setEndpointSlug] = useState('')
    const [endpoint_description, setEndpointDescription] = useState('')
    const [api_id, setApiId] = useState(id)
    const [user_id, setUserId] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (status === 'loading') return;
      
        if (!session) return;
        setUserId(session.user.id);
    }, [session])

    const handleInput = async e => {
        const { name, value } = e.target;
        if (name === 'endpoint_name') {
            setEndpointName(value);
        }
        if (name === 'endpoint_slug') {


            setEndpointSlug(value);
        }
        if (name === 'endpoint_description') setEndpointDescription(value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {

            setError('');
            if (!endpoint_name || !endpoint_slug || !endpoint_description) {
                setError('Please fill out all fields');
                return;
            }

            if (!checkLowerCaseString(endpoint_slug)) {
                setError('Endpoint slug must be all lowercase letters and dashes');
                return;
            }

            setLoading(true);
            const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/spindle/createAPI', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ endpoint_name, endpoint_slug, endpoint_description, id, user_id })
            })
            setLoading(false);
            if (res.status !== 200) {
                console.error(res);
                return;
            }
            const data = await res.json();
         
            setError('');

            router.push(`/apis/${id}`);
            onSubmit();

        } catch (error) {
            setLoading(false);
            setError('Error creating endpoint');
            console.error('Error creating endpoint:', error);
        }
    }



    return (
        <>
            {isOwner &&
                <div className="container border border-info rounded-4 p-5" style={{ width: '100%' }}>

                    <h4 className="mb-3">Create Endpoint</h4>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="endpoint_name" className="form-label">Endpoint Name</label>
                            <input onChange={e => handleInput(e)} name="endpoint_name" type="text" className="form-control" id="endpoint_name" aria-describedby="endpoint_name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="endpoint_slug" className="form-label">Endpoint Slug</label>
                            <input onChange={e => handleInput(e)} name="endpoint_slug" type="text" className="form-control" id="endpoint_slug" aria-describedby="endpoint_name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="endpoint_description" className="form-label">Describe What You Want the API To Do</label>
                            <input onChange={e => handleInput(e)} className="form-control" name="endpoint_description" id="endpoint_description" />
                        </div>

                        <button type="submit" className="btn btn-primary">Create</button>

                        <p className="text-danger my-3">{error}</p>
                    </form>

                    <Loader enabled={loading} />


                </div>
            }
        </>



    );
}

