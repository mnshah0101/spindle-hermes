import { Grid } from 'react-loader-spinner'
export default function Loader({enabled}) {


    if(!enabled) return null;




    return (

        <div className="loading ">
        
                <Grid height="200"
                    width="200"
                    radius="9"
                    color="blue"
                    
                    />
                    </div>
          
    )
}