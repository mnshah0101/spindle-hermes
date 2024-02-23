import React from "react";

export default function APIKeys() {
    return (
<div className="my-7 rounded-3" style={{ height: '400px', overflow: 'auto'}}>
  <table  className="rounded-3" style={{fontSize: '1rem', width:'100%'}} >
    <thead>
        <tr style={{fontSize:'1.5rem'}} className="mb-3">
            <th scope="col" className="preview-table-col">API Key</th>
            <th scope="col" className="preview-table-col">Key Uses</th>
            <th scope="col" className="preview-table-col">Created At</th>
            <th scope="col" className="preview-table-col">Actions</th>
        </tr>

    </thead>

    <tbody>
   
    

<tr className="preview-table-row">
  <th  className="preview-table-col">321cba654fed987ihg</th>
  <td className="preview-table-col">214, 331</td>
  <td className="preview-table-col">Oct 5, 2021</td>
  <td className="preview-table-col">
 <button className="btn btn-outline-primary"> Revoke</button>
  
  </td>
</tr>

</tbody>


  

    </table>
  
</div>

    );
}