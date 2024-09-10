import React from 'react';

const UserImage = ({ image, size = '60px' }) => {
  return (
    <div className={`w-${size} h-${size}`}>
      <img
        className="object-cover rounded-full"
        style={{ width: size, height: size }}
        alt="user"
        src={`http://16.170.205.207:3001/assets/${image}`}
      />
    </div>
  );
};

export default UserImage;
