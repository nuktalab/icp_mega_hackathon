import React from 'react';

// Define types for props
interface HomeProps {
  onLogin: () => void; // Assuming onLogin is a function with no parameters and returns void
 
}

// Destructure props and specify their types
const Home: React.FC<HomeProps> = ({ onLogin}) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>'Not logged in'</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Home;
