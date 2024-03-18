import { config } from "dotenv";

config();

export default function DeleteEndpointButton({endpoint_name, onDelete }) {
    const handleClick = async(e) => {
        try {
            let res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL+'/database/deleteEndpoint', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ endpoint_name })
            })
            console.log(res);
            if(res.status === 200) {
                onDelete();
            }
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <button onClick={(e) => handleClick(e)} className="btn btn-danger">Delete Endpoint</button>
    );
}