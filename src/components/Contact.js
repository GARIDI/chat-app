import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

Contact.proTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    
}    


function Contact (props) {
    
        
    return (
    <div className = 'Contact'>
        <img className ='avatar' src={props.avatar} alt={props.name}/> 
    
    <div>
        <h4 className ="name">{props.name}</h4>
   
    <div className="status">
        <span classeName={props.online ? 'status-online : status-offline'}></span>
        <p className="status-text">{props.online ? 'online' : 'offline'}</p>
    </div>
    </div>
    </div>
);
}

export default Contact; 