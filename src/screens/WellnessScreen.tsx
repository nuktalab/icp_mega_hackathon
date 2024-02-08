import React from 'react';

// improvements---feature extension --image scan feature for 
// accessibility in places that use paper records.




const WellnessScreen: React.FC = () => {
  const handleLogout = () => {
    // Remove the identity from local storage
    localStorage.removeItem('identity');

    // You may also want to redirect the user to the login page or perform other logout actions
  };

  return (
    // remember to remove or harmonise div
    <div
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fff', // Adjust background color as needed
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1>Record</h1>
      
        <button
          style={{
            fontSize: '16px',
            padding: '10px 20px',
            marginTop: '20px',
            backgroundColor: '#a53662', // Adjust button color as needed
            color: '#fff', // Adjust text color as needed
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
         
        >
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default WellnessScreen;