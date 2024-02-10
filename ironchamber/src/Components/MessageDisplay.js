// MessageDisplay.js
import React from 'react';

const MessageDisplay = ({ messages }) => {
  return (
    <div className="messagearea">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.user === "Thor" ? "in" : "out"}`}>
          <div className="message-content">
            <div className="user-info">
              <img className="avatar-img" src={msg.avatarUrl} alt={msg.user} />
              <h4>{msg.user}</h4>
            </div>
            <p>{msg.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageDisplay;
