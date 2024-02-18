import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoHome, IoPerson, IoWater, IoFilter, IoCamera, IoDocumentLock, IoDocuments, IoCash } from 'react-icons/io5';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import WellnessScreen from './screens/WellnessScreen';
import RecordsScreen from './screens/RecordsScreen';
import { records } from './declarations/records';
import CrossInsurance from './screens/insurance';

interface BottomTabNavigatorProps {
  userName: string; // Define the type of userName as string
}

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

const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({ userName }) => {
  
  return (
  
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh', backgroundColor:'white' }}>
        <Routes>
          {/* Set /home as the default route */}
          <Route path="/" element={<HomeScreen userName={userName} />} />
          <Route path="/profile" element={<ProfileScreen userId={userName} />} />
          <Route path="/wellness" element={<WellnessScreen />} />
          <Route path="/records" element={<RecordsScreen userId={userName}/>} />
          <Route path="/insurance" element={<CrossInsurance />} />
        </Routes>

        {/* Sticky bottom navigation */}
        <nav
          style={{
            position: 'sticky',
            bottom: '0',
            background: '#fff',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.35)',
            zIndex: '100',
            textAlign: 'center',
            width: 'calc(100% - 46px)', 
            margin: '0 20px', 
            paddingBottom: '10px',
            borderRadius: '20px', // Curved corners
            // marginTop: '50px', 
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
              <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoHome size={20} />} />
                <div style={{ fontSize: '12px' }}>Home</div>
              </Link>
            </li>
           
            <li>
              <Link to="/wellness" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoDocuments size={20} />} />
                <div style={{ fontSize: '12px' }}>Scanner</div>
              </Link>
            </li>
            <li>
              <Link to="/records" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoFilter size={20} />} />
                <div style={{ fontSize: '12px' }}>Records</div>
              </Link>
            </li> 
            <li>
              <Link to="/insurance" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoCash size={20} />} />
                <div style={{ fontSize: '12px' }}>Insurance</div>
              </Link>
            </li>
            <li>
              <Link to="/profile" style={{ textDecoration: 'none', color: '#333' }}>
                <Icon icon={<IoPerson size={20} />} />
                <div style={{ fontSize: '12px' }}>Profile</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>

  );
};


export default BottomTabNavigator;
