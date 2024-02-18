import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit, faUserMd, faEye, faTooth, faHeartbeat, faCapsules, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import { records } from '../declarations/records';
import { JSX } from 'react/jsx-runtime';

interface ExploreProps {
  history: {
    push: (path: string) => void;
  };
  userId: string; 
}

interface MedicalRecord {
  title: string;
  date: string;
  category: string;
  hospitalName: string;
  doctorName: string;
  description: string;
  treatment: string;
}

const Explore: React.FC<ExploreProps> = ({ history, userId }) => {
  const [recordsData, setRecordsData] = useState<MedicalRecord[] | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAnalytics, setShowAnalytics] = useState<boolean>(false);
  const [categoryStats, setCategoryStats] = useState<{ recordCount: number; averageDescriptionLength: number } | null>(null);

  const categoriesData: { [key: string]: IconDefinition } = {
    Vitals: faHeartbeat,
    General: faUserMd,
    Cardiology: faHeartbeat,
    Ophthalmology: faEye,
    Dentistry: faTooth,
    Dermatology: faCapsules
  };

  useEffect(() => {
    const fetchMedicalRecord = async () => {
      try {
        const fetchedRecord = await records.getMedicalRecord(userId);
        if (fetchedRecord.length) {
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

  const handleCardPress = (category: string) => {
    setSelectedCategory(category);
    calculateCategoryStats(category);
    setShowAnalytics(true);
  };

  const calculateCategoryStats = (category: string) => {
    if (!recordsData) return;

    const categoryRecords = recordsData.filter(record => record.category === category);
    const recordCount = categoryRecords.length;
    const totalDescriptionLength = categoryRecords.reduce((acc, record) => acc + record.description.length, 0);
    const averageDescriptionLength = totalDescriptionLength / recordCount || 0;

    setCategoryStats({ recordCount, averageDescriptionLength });
  };

  const closeAnalytics = () => {
    setShowAnalytics(false);
    setSelectedCategory(null);
    setCategoryStats(null);
  };

  // Generate category cards
  const generateCards = () => {
    const rows: JSX.Element[] = [];
    const recordsChunks = chunkArray(recordsData || [], 2); // Split recordsData into chunks of 2 records per row

    recordsChunks.forEach((chunk, rowIndex) => {
      const cards = chunk.map((record, colIndex) => (

          <div
            className={`card cardelevated ${selectedCategory === record.category ? 'selected' : ''}`}
            style={styles.card}
            onClick={() => handleCardPress(record.category)}
          >
            <div style={styles.cardContent}>
              <FontAwesomeIcon icon={categoriesData[record.category]} size="4x" color="#333" className="icon" />
              <div className="title" style={styles.title}>
                {record.category}
              </div>
            </div>
          </div>
      
      ));
      
      rows.push(
        <div key={rowIndex} style={styles.row}>
          {cards}
        </div>
      );
    });

    return rows;
  };

  // Function to split array into chunks
  const chunkArray = (array: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className="scrollContainer">
      {recordsData && recordsData.length > 0 ? (
        generateCards()
      ) : (
        <div>No records available</div>
      )}
      {showAnalytics && (
        <div className="modal" style={styles.modal}>
          <div className="modal-content">
            <span className="close" onClick={closeAnalytics}>
              &times;
            </span>
            <h2>{selectedCategory} Analytics</h2>
            <p>Total Records: {categoryStats?.recordCount}</p>
            <p>Average Description Length: {categoryStats?.averageDescriptionLength}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    width: '45%',
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '10px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  cardContent: {
    textAlign: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: '8px',
    color: '#1D2430',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
  },
};

export default Explore;
