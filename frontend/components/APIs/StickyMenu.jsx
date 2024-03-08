import React from "react";

export default function StickyMenu({titles}) {

      


    return (
       
           
             <ul className="list-unstyled border rounded-3 border-light p-3 col-12" >
            <p className="mb-7 text-white">DOCUMENTATION </p>

            {titles?.map((title, index) => (
                  <li className="text-light mb-2" key={index}><a className="text-light" href={`#${title}`} style={{fontSize:"0.9rem"}}>{title}</a></li>
                  
            ))}


      

    
            </ul>
        
    );
    }