import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ScanDocumentsScreen from '../components/scanner';
const RecordsScreen: React.FC = () => {
  const userName = 'Moussa Moustapha';

  const handleLogout = () => {
    // Remove the identity from local storage
    localStorage.removeItem('identity');

    // You may also want to redirect the user to the login page or perform other logout actions
  };

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      {/* <ScanDocumentsScreen/> */}
      <p style={styles.welcomeText}>Welcome back, {userName}!</p>
        <p style={styles.welcomeText}>This feature unlocks soon to allow you to document paper records</p>




    </div>
  );
};
const styles: Record<string, React.CSSProperties> = {
  stickyHeader: {
    position: 'sticky',
    top: '0',
    width: '100%',
    zIndex: '100',

  },
  header: {
    backgroundColor: '#1D2430',
    padding: '16px',
    marginBottom: '10px',
    borderRadius: 10,
  },
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    color: 'gray',
    fontSize: '18px',
    textAlign:'start',
    padding: '20px'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    paddingLeft: '10px',
  },
  searchInput: {
    flex: '1',
    height: '40px',
    color: '#333',
    border: 'none',
    outline: 'none',
    backgroundColor: '#fff',
    borderRadius: '8px',
    backgroundImage: 'url("path/to/search-icon.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center',
    paddingLeft: '40px', // Adjusted padding to accommodate the icon
  },
  searchIcon: {
    position: 'absolute',
    left: '30px',
    color: '#333'
  },
};
export default RecordsScreen;
