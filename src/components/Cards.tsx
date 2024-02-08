// import React, { useState, useEffect } from 'react';
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
// import  {faMedkit } from '@fortawesome/free-solid-svg-icons';
// import { records } from '../declarations/records';

// interface ExploreProps {
//   history: {
//     push: (path: string) => void;
//   };
// }

// interface MedicalRecord {
//   title: string;
//   date: string;
//   category: string;
//   hospitalName: string;
//   doctorName: string;
//   description: string;
//   treatment: string;
// }

// const Explore: React.FC<ExploreProps> = ({ history }) => {
//   const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//   const [categories, setCategories] = useState<MedicalRecord[]>([]);

//   useEffect(() => {
//     const fetchMedicalRecord = async () => {
//       try {
//         const fetchedRecord = await records.getMedicalRecord(BigInt(120));
//         // Check if fetchedRecord is not undefined before setting state
//         if (fetchedRecord) {
//           setCategories(fetchedRecord[0] as MedicalRecord[]);
        
//         }
//       } catch (error) {
//         console.error('Error fetching medical record:', error);
//       }
//     };

//     fetchMedicalRecord();
//   }, []);

//   const handleCardPress = (categoryId: number) => {
//     // Toggle the dropdown visibility for the selected category
//     setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
//   };

//   const calculatePercentage = (occurrences: number, totalRecords: number) => {
//     return ((occurrences / totalRecords) * 100).toFixed(2);
//   };

//   const generateCards = () => {
//     const categoryCounts: { [key: string]: number } = {};

//     categories.forEach((category) => {
//       const categoryTitle = category.category;

//       if (categoryCounts[categoryTitle]) {
//         categoryCounts[categoryTitle]++;
//       } else {
//         categoryCounts[categoryTitle] = 1;
//       }
//     });

//     const totalRecords = categories.length;

//     return Object.keys(categoryCounts).map((categoryTitle, index) => {
//       const occurrences = categoryCounts[categoryTitle];

//       return (
//         <div
//           key={index}
//           className={`card cardelevated ${selectedCategory === index ? 'selected' : ''}`}
//           style={styles.card}
//           onClick={() => handleCardPress(index)}
//         >
//           <div style={styles.cardContent}>
//             <FontAwesomeIcon icon={faMedkit} size="4x" color="#333" className="icon" />
//             <div className="title" style={styles.title}>
//               {categoryTitle}
//             </div>
//           </div>
//           {selectedCategory === index && (
//             <div className="dropdown" style={styles.dropdown}>
//               <p style={styles.dropdownText}>Number of Occurrences: {occurrences}</p>
//               <p style={styles.dropdownText}>
//                 Percentage of Total Records: {calculatePercentage(occurrences, totalRecords)}%
//               </p>
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return <div className="flexContainer">{generateCards()}</div>;
// };

// const styles: Record<string, React.CSSProperties> = {
//   card: {
//     flex: '0 0 calc(50% - 16px)',
//     backgroundColor: '#f0f0f0',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     margin: '8px',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease-in-out',
//     padding: '4px',
//   },
//   cardContent: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'left',
//     height: '100%',
//   },
//   title: {
//     fontSize: '25px',
//     marginLeft: '10px',
//     color: 'black',
//   },
//   dropdown: {
//     color: 'black', // Set the text color to black
//   },
//   dropdownText: {
//     margin: '0',
//   },
// };

// export default Explore;
// Explore.tsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { records } from '../declarations/records';

interface ExploreProps {
  history: {
    push: (path: string) => void;
  };
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

const Explore: React.FC<ExploreProps> = ({ history }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [categories, setCategories] = useState<MedicalRecord[]>([]);

  // Dummy data for testing
  const dummyData: MedicalRecord[] = [
    {
      title: 'Dummy Record 1',
      date: '2024-02-05',
      category: 'Category A',
      hospitalName: 'Dummy Hospital A',
      doctorName: 'Dr. Dummy A',
      description: 'Dummy description A',
      treatment: 'Dummy treatment A',
    },
    {
      title: 'Dummy Record 2',
      date: '2024-02-06',
      category: 'Category B',
      hospitalName: 'Dummy Hospital B',
      doctorName: 'Dr. Dummy B',
      description: 'Dummy description B',
      treatment: 'Dummy treatment B',
    },
  ];

  useEffect(() => {
    // test data for testing
    setCategories(dummyData);
  }, []);

  const handleCardPress = (categoryId: number) => {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const calculatePercentage = (occurrences: number, totalRecords: number) => {
    return ((occurrences / totalRecords) * 100).toFixed(2);
  };

  const generateCards = () => {
    const categoryCounts: { [key: string]: number } = {};

    categories.forEach((category) => {
      const categoryTitle = category.category;

      if (categoryCounts[categoryTitle]) {
        categoryCounts[categoryTitle]++;
      } else {
        categoryCounts[categoryTitle] = 1;
      }
    });

    const totalRecords = categories.length;

    const cards = Object.keys(categoryCounts).map((categoryTitle, index) => {
      const occurrences = categoryCounts[categoryTitle];

      return (
        <div
          key={index}
          className={`card cardelevated ${selectedCategory === index ? 'selected' : ''}`}
          style={styles.card}
          onClick={() => handleCardPress(index)}
        >
          <div style={styles.cardContent}>
            <FontAwesomeIcon icon={faMedkit} size="4x" color="#333" className="icon" />
            <div className="title" style={styles.title}>
              {categoryTitle}
            </div>
          </div>
          {selectedCategory === index && (
            <div className="dropdown" style={styles.dropdown}>
              <p style={styles.dropdownText}>Number of Occurrences: {occurrences}</p>
              <p style={styles.dropdownText}>
                Percentage of Total Records: {calculatePercentage(occurrences, totalRecords)}%
              </p>
            </div>
          )}
        </div>
      );
    });

    // Split the cards into rows of two
    const rows = [];
    for (let i = 0; i < cards.length; i += 2) {
      rows.push(
        <div key={i / 2} style={styles.row}>
          {cards.slice(i, i + 2)}
        </div>
      );
    }

    return rows;
  };

  return <div className="scrollContainer">{generateCards()}</div>;
};

const styles: Record<string, React.CSSProperties> = {
  scrollContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
  },
  card: {
    width: '48%',
    height: 160,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16, 
  },
  cardelevated: {
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    // textAlign: 'center',
  },
  dropdown: {
    color: 'black',
  },
  dropdownText: {
    margin: '0',
    fontSize: 12,
  },
};

export default Explore;