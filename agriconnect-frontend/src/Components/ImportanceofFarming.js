import React from 'react';

const ImportanceofFarming = () => {
  const backgroundStyle = {
    backgroundImage: `url('./Components/images-1.jpeg')`, // Use backticks or quotes
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Full screen height
    width: '100%',   // Full screen width
    color: 'white',  // Text color, if needed
  };

  return (
    <div style={backgroundStyle}>
      <h1>Importance of Farming</h1>
      <p>Farming plays a vital role in sustaining life on Earth by providing food, raw materials, and economic growth.</p>
    </div>
  );
};

export default ImportanceofFarming;
