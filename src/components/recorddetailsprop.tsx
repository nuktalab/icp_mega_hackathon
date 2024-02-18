import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft, faMedkit, faUserMd, faEye, faTooth, faHeartbeat, faCapsules } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RecordDetailsProps {
  record: {
    id: number;
    date: string;
    diagnosis: string;
    attendingDoctor: string;
    location: string;
    prescription: string;
  };
  goBack: () => void;
}

const RecordDetails: React.FC<RecordDetailsProps> = ({ record, goBack }) => {
  return (
    <div>
      <Link to="/" onClick={goBack}><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
      <h2>Record Details</h2>
      <div>
        <h3>{record.diagnosis}</h3>
        <p>Attending Doctor: {record.attendingDoctor}</p>
        <p>Location: {record.location}</p>
        <p>Prescription: {record.prescription}</p>
      </div>
    </div>
  );
};

export default RecordDetails;
