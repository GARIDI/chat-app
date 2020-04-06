import React from 'react';
import './Contact.css';

const user = {
    name: 'Ricky Howell',
    status: true,
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
};


function Contact () {

    const status = user.status ? 'status-online' : 'status-offline'

    return (
    <div className = "Contact">
        <img className ="avatar" src={user.image} alt="avatar"/> 
    
    <div className ="status">
        <h4 className ="name">{user.name}</h4>
   
    <div className={status}>
        <p className="status-text">{user.status ? 'online' : 'offline'}</p>
    </div>
    </div>
    </div>
);
}

export default Contact; 