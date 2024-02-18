import React from 'react';
import Explore from './../components/Cards';
import CustomHeader from './../components/CustomHeader';
import { profile } from '../declarations/profile';
import { useState, useEffect } from 'react';

interface Props {
  userName: string; // Explicitly define the type of userName
}

const HomeScreen: React.FC<Props> = ({ userName }) => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await profile.getUserData(userName);
        console.log(result[0]);
        // Use a fallback value to handle the case when result[0]?.name is undefined
        setUsername(result[0]?.name || ""); 
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };
    fetchData(); // Call fetchData function inside useEffect
  }, [userName]); // Add userName as a dependency to useEffect

  return (
    <div
      style={{
        width: '100vw',
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
        <CustomHeader userName={username} />
      </div>

      <div
        style={{
          width: '100%',
          padding: '0px',
          borderRadius: '10px',
          paddingTop: '15px'
        }}
      >
        <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#1D2430'}}>
          Records
        </div>
        <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '40px', color: "#FBB040" }}>
          View your medical passport
        </div>
        <Explore userId={userName} history={{ push: function (path: string): void { throw new Error('Function not implemented.'); } }} />
      </div>
    </div>
  );
};

export default HomeScreen;
