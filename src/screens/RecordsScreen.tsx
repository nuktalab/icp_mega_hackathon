import React, { useState, useEffect } from 'react';
import './RecordsScreen.css'; // CSS for styling
import { records } from '../declarations/records';

interface RecordScreenProps {
  userId: string; // Define the type of userId
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

const RecordsScreen: React.FC<RecordScreenProps> = ({ userId }) => {
  const [recordsData, setRecordsData] = useState<Record[] | undefined>(undefined);
  const [selectedRecord, setSelectedRecord] = useState<Record | null>(null);

  useEffect(() => {
    const fetchMedicalRecord = async () => {
      try {
        const fetchedRecord = await records.getMedicalRecord(userId);
        if (fetchedRecord.length) {
          
          console.log(fetchedRecord[0]);
          setRecordsData(fetchedRecord[0]);
        } else {
          console.error('Empty or unexpected response from server.');
        }
      } catch (error) {
        console.error('Error fetching medical record:', error);
      }
    };

    fetchMedicalRecord();
  }, []);


  const handleRecordClick = (record: Record) => {
    setSelectedRecord(record);
  };

  const closeModal = () => {
    setSelectedRecord(null);
  };

  return (
    <div className="records-screen">
      <div className="header">
        <h1>Records</h1>
      </div>
      <div className="records-list">
        {recordsData?.map((record, index) => (
          <div key={index} className="record-item" onClick={() => handleRecordClick(record)}>
            <p className="record-title">{record.title}</p>
            <p className="record-date">{record.date}</p>
          </div>
        ))}
      </div>
      {selectedRecord && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedRecord.title}</h2>
            <p>Category: {selectedRecord.category}</p>
            <p>Date: {selectedRecord.date}</p>
            <p>Hospital: {selectedRecord.hospitalName}</p>
            <p>Doctor: {selectedRecord.doctorName}</p>
            <p>Description: {selectedRecord.description}</p>
            <p>Treatment: {selectedRecord.treatment}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordsScreen;
