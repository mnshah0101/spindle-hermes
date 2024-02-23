import React from "react";

export default function APIForm() {
    return (
      
        <div className="container border border-info rounded-4 p-5" style={{width:'100%'}}>
             
                        <h4 className="mb-3">Create Endpoint</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="endpoint_name" className="form-label">Endpoint Name</label>
                                <input name="endpoint_name" type="text" className="form-control" id="endpoint_name" aria-describedby="endpoint_name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endpoint_slug" className="form-label">Endpoint Slug</label>
                                <input name="endpoint_slug" type="text" className="form-control" id="endpoint_slug" aria-describedby="endpoint_name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endpoint_description" className="form-label">Describe What You Want the API To Do</label>
                               <textarea className="form-control" name="endpoint_description" id="endpoint_description" cols="30" rows="5"></textarea>
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Create</button>
                        </form>
                    </div>
       
    );
}

