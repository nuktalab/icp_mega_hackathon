import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

interface CustomHeaderProps {
  userName: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ userName }) => {
  return (
    <div style={styles.stickyHeader}>
      {/* safechain logo */}
      <div style={styles.header}>
        <div style={styles.welcomeContainer}>
          <p style={styles.welcomeText}>Welcome, {userName}!</p>
          <div style={styles.iconContainer}>
            {/* Person profile icon */}
            <FaUserCircle size={30} color="#fff" style={{ marginRight: '10px' }} />
          </div>
        </div>

        {/* <div style={styles.descriptionContainer}>
          <p style={styles.descriptionText}>What would you like to do?</p>
        </div> */}

        <div style={styles.searchContainer}>
          <input
            type="text"
            style={styles.searchInput}
            placeholder="Fast Search Records..."
          />
          <FaSearch size={20} color="#333" style={styles.searchIcon} />
        </div>
      </div>
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
    color: '#fff',
    fontSize: '18px',
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

export default CustomHeader;
