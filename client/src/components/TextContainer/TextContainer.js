import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  
      
      
  <div className="textContainer">
    <div>
      <h1>ChatzApp <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Quick Use and Throw Chat Application</h2>
      <h2>Made with <span role="img" aria-label="emoji">❤️</span> By Ratnadeep DC</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Online Members:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div>
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
  
);

export default TextContainer;