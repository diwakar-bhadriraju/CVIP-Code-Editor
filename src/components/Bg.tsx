import React from 'react';

const BackgroundApp: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url('./assets/cities.jpg')`, // Replace 'path_to_your_image.jpg' with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
    </div>
  );
}

export default BackgroundApp;
