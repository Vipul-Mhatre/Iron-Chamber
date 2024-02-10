import React, { useState } from 'react';

const AvatarSelector = ({ avatars }) => {

  const [avatar,selectAvatar]=useState(null);

  return (
    <div className="avatar-selector">
      <h2>Select Your Avatar</h2>
      <div className="avatar-options">
        {avatars.map((avatar, index) => (
          <div key={index} className="avatar-option" onClick={() => selectAvatar(avatar)}>
            <img src={avatar.avatarUrl} alt={avatar.name} />
            <p>{avatar.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvatarSelector;
