import React from 'react';
import Explore from '../components/Cards';
import CustomHeader from '../components/CustomHeader';

const HomeScreen = () => {
  const userName = 'Jane Doe';

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ width: '100%' }}>
        <CustomHeader userName={userName} />
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0px auto',
          padding: '0px',
          borderRadius: '10px',
          paddingTop: '15px'
          
        }}
      >
        <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#a53662'}}>
          Records
        </div>
        <div style={{ fontSize: '16px', fontWeight: '300', marginBottom: '20px', color: '#a53662' }}>
          View your medical passport
        </div>
        <Explore history={{
                  push: function (path: string): void {
                      throw new Error('Function not implemented.');
                  }
              }}        />

        <div style={{ marginTop: '20px' }}>
          <div>{/* Your content goes here */}</div>
        </div>
        {/* <div style={{ fontSize: '30px', fontWeight: 'bold' }}>
              Explore
        </div> */}
      </div>
    </div>
  );
};

export default HomeScreen;