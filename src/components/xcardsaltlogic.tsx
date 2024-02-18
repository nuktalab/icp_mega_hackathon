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