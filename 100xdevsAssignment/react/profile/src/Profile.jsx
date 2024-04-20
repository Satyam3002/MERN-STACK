import React from 'react';
import './Profile.css'; 
import coverimg from './images.jpeg'; 
import profilePic from './satyam.jpeg';


function Profile({ name, age, bio, profilePicture }) {
    return (
        <div className='container'>
            <div className='coverpic'>
                <img src={coverimg} alt="" className='coverimage' />
                <div className='profile-picture'>
                    <img src={profilePic} alt="" />
                </div>
            </div>

            <div className='details'>
                <h3>{name} </h3>
                <p>New Delhi</p>
                
            </div>
           
            <hr className='details-hr' /> 

            <div className='account'>
              <div className='Followers'>
                <h3>Followers</h3>
                <p>279</p>
                </div> 

                <div className='Likes'>
                 <h3>Likes</h3>
                 <p>1k</p>
                </div>

                <div className='Photos'>
               <h3>Photos</h3>
                <p>1.5k</p>
                </div>
            </div>

        </div>
    );
}

export default Profile;
