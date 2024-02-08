import React from 'react';

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
          <img
            src="path/to/person-circle-outline-icon.png"
            alt="person-circle-outline"
            style={{ width: '30px', height: '30px', color: '#fff' }}
          />
        </div>

        {/* Uncomment the following block if you want to include the description */}
        {/* <div style={styles.descriptionContainer}>
          <p style={styles.descriptionText}>What would you like to do?</p>
        </div> */}

        <div style={styles.searchContainer}>
          <img
            src="path/to/search-icon.png"
            alt="search"
            style={{ width: '20px', height: '20px', color: '#333', marginRight: '10px' }}
          />
          <input
            type="text"
            style={styles.searchInput}
            placeholder="Search..."
          />
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
    backgroundColor: '#a53662',
    padding: '16px',
    marginBottom: '10px',
  },
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: '18px',
    marginRight: '10px',
  },
  descriptionContainer: {
    marginTop: '10px',
  },
  descriptionText: {
    color: '#fff',
    fontSize: '16px',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
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
  },
};

export default CustomHeader;