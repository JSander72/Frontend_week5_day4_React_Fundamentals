import React from "react";

const Header = () => {
    return (
      <header style={{ 
        backgroundImage: `url('src/img/Image1586.jpeg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px', // Adjust as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white' // Adjust text color as needed
      }}>
        <h1>Your Header Text</h1>
      </header>
    );
  };
  
  export default Header;