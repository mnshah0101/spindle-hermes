import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {  useRouter } from 'next/navigation'



export default function  AccountForm ()  {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const { data: session, status } = useSession();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); 
    const [profilePicture, setProfilePicture] = useState('');
    const router = useRouter();

    const handleInput = async e => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'username') setUsername(value);
       
    
    };

    useMemo(() => {
        if(status === 'loading') return;
        if(status==='unauthenticated'){
            router.push('/login');
        }

         async function fetchData() {
            try{
            if(username != '') return;
            if(!session) return;
            const res = await fetch('/api/form/getAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: session.user.id })
            });
            if(res.status !== 200) return;
            const data = await res.json();
            if (data) {
                setEmail(data.email);
                setUsername(data.username);
                setProfilePicture(data.profile_picture);
            }
            } catch (error) {
                console.error('Error fetching account data:');
            }
           
        }
        fetchData();
    
    });
   

    const handleSubmit =async e => {
        setSuccess('');
        setError('');
        //form validation and submission
        e.preventDefault();
        if (!email || !username ) return;
        try{
            const res = await fetch('/api/form/updateAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: session.user.id, email, username })
            });
            if(res.status !== 200){
                console.error('Error updating account data:');
                setError('Your username or email is already taken!');
                return;
            };
            const data = await res.json();
            if(res.status === 200) {
                setSuccess('Account updated successfully!');
                return;
            }
        }
        catch (error) {
            console.error('Error updating account data:');
            setError('Your username or email is already taken!');

        }
    }

   

    return (
      
            <div className='row'>
            <div className="col-lg-6 col-12 ">

                 <div className="mb-1 d-flex justify-content-center">

                <div className='d-flex flex-column align-items-center justify-content-center '>
                
                <img src={profilePicture} alt="profile picture" className="rounded-circle mb-4 " width="400" height="400" />
            
                </div>
                 
            </div>
            </div>
                        


            <div className="col-lg-6 col-12 mb-3">

                 <form className='mb-5'  onSubmit={e=> handleSubmit(e)}>
               
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                    type="email" 
                    name = "email"
                    className="form-control" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 

                />
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                    type="text" 
                    name = "username"
                    className="form-control" 
                    id="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required 
                />
            </div>

           
            <button type="submit" className="btn btn-primary">Update</button>

            {error && <div className="alert alert-danger my-3" role="alert">{error}</div>}
            {success && <div className="alert alert-success my-3" role="alert">{success}</div>}


        </form>

                


    <div className="form-group" id="formBasicEmail">




   



      <label className='form-label' >Change Password</label>
      <input 
        type="email" 
        className="form-control" 
        id="email" 
        placeholder="Enter your email" 
        required
      />
    
    </div>
    <button id="passwordReset" className="btn btn-primary my-4">
      Send Link
    </button>
</div>
            </div>

    );
}