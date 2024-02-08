import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoHome, IoPerson, IoWater, IoFilter } from 'react-icons/io5';
import HomeScreen from './screens/ProfileScreen';
import ProfileScreen from './screens/ProfileScreen';
import WellnessScreen from './screens/WellnessScreen';
import RecordsScreen from './screens/RecordsScreen';
import { profile } from './declarations/profile';
import { records} from './declarations/records'; // Assuming you have a MedicalRecord type

interface IconProps {
  icon: React.ReactNode;
}
interface Record {
  title: string;
  date: string;
  category: string;
  hospitalName: string;
  doctorName: string;
  description: string;
  treatment: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <div>{icon}</div>;
};

const BottomTabNavigator: React.FC = () => {
  const [medicalRecord, setMedicalRecord] =  useState<Record[] | undefined>(undefined);

  useEffect(() => {
    const fetchMedicalRecord = async () => {
      try {
        // Fetch medical record data
        const medicalRecordData = await records.getMedicalRecord(BigInt(120));
        setMedicalRecord(medicalRecordData[0]);

        console.log(medicalRecordData[0]); // Log the medical record data here or wherever needed
      } catch (error) {
        console.error('Error fetching medical record data:', error);
      }
    };

    fetchMedicalRecord();
  }, []);

  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/wellness" element={<WellnessScreen />} />
          <Route path="/records" element={<RecordsScreen />} />
        </Routes>

        {/* Sticky bottom navigation */}
        <nav
          style={{
            position: 'sticky',
            bottom: '0',
            background: '#fff',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            zIndex: '100',
            textAlign: 'center',
            width: '100vw', // Set width to 100%
            paddingBottom: '20px', // Adjust as needed
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              paddingTop: 20,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              margin: 0,
              marginTop: 1,
            }}
          >
            <li>
              <Link to="/home" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoHome size={26} />} />
                <div style={{ fontSize: '12px' }}>Home</div>
              </Link>
            </li>
            <li>
              <Link to="/profile" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoPerson size={26} />} />
                <div style={{ fontSize: '12px' }}>Profile</div>
              </Link>
            </li>
            <li>
              <Link to="/wellness" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoWater size={26} />} />
                <div style={{ fontSize: '12px' }}>Wellness</div>
              </Link>
            </li>
            <li>
              <Link to="/records" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoFilter size={26} />} />
                <div style={{ fontSize: '12px' }}>Records</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

export default BottomTabNavigator;