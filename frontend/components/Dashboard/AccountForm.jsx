import React, { useState } from 'react';
export default function  AccountForm ()  {
    const [email, setEmail] = useState('admin@gmail.com');
    const [username, setUsername] = useState('admin');
    const [profilePicture, setProfilePicture] = useState('https://media.licdn.com/dms/image/D4E03AQFGNAEy8FmTew/profile-displayphoto-shrink_800_800/0/1684209357812?e=2147483647&v=beta&t=X9EqxwRvOw5--FaQ-x4X0U_llmid-q-mvrFPqm3tWvk');

    const handleInput = e => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'username') setUsername(value);
        if (name === 'profile_picture') setProfilePicture(value);


    };

    return (
      
            <div className='row'>
            <div className="col-lg-6 col-12 mb-3">
                  <form >
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

            <div className="mb-5">



                <label htmlFor="profile_picture" className="form-label">Profile Picture </label>
                <div className='d-flex flex-column my-4 '>
                
                <img src={profilePicture} alt="profile picture" className="rounded-circle mb-4 " width="100" height="100" />

                <div className="file-drop-area">
                <span className="fake-btn">Choose image</span>
                <span className="file-msg">or drag and drop image here</span>
                <input className="file-input" type="file" accept="image/png, image/gif, image/jpeg" name="profile_picture"
                  onChange={(e) => {handleInput(e)}}
                
                />
                </div>
                </div>

            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
            </div>
                        


            <div className="col-lg-6 col-12 mb-3">
    <div className="form-group" id="formBasicEmail">


   



      <label className='form-label'  for="email">Change Password</label>
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