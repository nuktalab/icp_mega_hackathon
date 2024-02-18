import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMedkit, faUserMd, faEye, faTooth, faHeartbeat, faCapsules } from '@fortawesome/free-solid-svg-icons';

interface CategoryRecordsProps {
  category: string;
  goBack: () => void;
}

const CategoryRecords: React.FC<CategoryRecordsProps> = ({ category, goBack }) => {
  // Dummy data for records
  const records = [
    { id: 1, date: '2024-02-14', diagnosis: 'Fever', attendingDoctor: 'Dr. Smith', location: 'Hospital A', prescription: 'Paracetamol' },
    { id: 2, date: '2024-02-15', diagnosis: 'Sore throat', attendingDoctor: 'Dr. Johnson', location: 'Clinic B', prescription: 'Antibiotics' },
    // Add more records as needed
  ];

  return (
    <div>
      <Link to="/" onClick={goBack}><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
      <h2>{category} Records</h2>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            <Link to={`/record/${record.id}`}>
              {record.date} - {record.diagnosis}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryRecords;
