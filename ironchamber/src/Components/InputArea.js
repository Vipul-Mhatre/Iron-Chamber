// InputArea.js
import React, { useState } from 'react';

const InputArea = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(message);
      setMessage('');
    }
  }

  return (
    <div className="input-area">
      <textarea
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Write something...."
      />
    </div>
  );
}

export default InputArea;
