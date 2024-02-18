import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { profile } from '../declarations/profile';

interface ProfileScreenProps {
  userId: string; // Define the type of userId
}

interface UserData {
  id: string;
  weight: bigint;
  heigh: bigint;
  dateOfBirth: string;
  name: string;
  location: string;
}

const Header: React.FC<{ name: string }> = ({ name }) => (
  <div style={styles.header}>
    <div style={styles.headerContent}>
      <FontAwesomeIcon icon={faUser} size="2x" color="#fff" style={styles.icon} />
      <div style={styles.name}>{name}</div>
    </div>
  </div>
);

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <div style={styles.infoContainer}>
    <div style={styles.infoLabel}>{label}</div>
    <div style={styles.info}>{value}</div>
  </div>
);

const ProfileScreen: React.FC<ProfileScreenProps> = ({ userId }) => {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const [showUserId, setShowUserId] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await profile.getUserData(userId);
        console.log(result[0]);
        setUserData(result[0]); // Assuming the result is an object with user data properties
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]); // Fetch data whenever userId changes

  return (
    <div style={styles.container}>
      <Header name={userData?.name || 'Loading...'} />

      <div style={styles.body}>
        <button onClick={() => setShowUserId(!showUserId)}>
          {showUserId ? 'Hide User ID' : 'Show User ID'}
        </button>
        {showUserId && <InfoItem label="User ID" value={userData?.id || 'Hidden'} />}
        <InfoItem label="Location" value={userData?.location || ''} />
        <InfoItem label="Date of Birth" value={userData?.dateOfBirth || ''} />
        <InfoItem label="Height" value={String(userData?.heigh || '0') + ' cm'} />
        <InfoItem label="Weight" value={String(userData?.weight || '0') + ' kg'} />
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: '100vw',
    height: '100vh',
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1D2430',
    position: 'sticky',
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20,
  },
  icon: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    padding: 20,
  },
  infoContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  info: {
    fontSize: 20,
    color: '#555',
  },
};

export default ProfileScreen;
