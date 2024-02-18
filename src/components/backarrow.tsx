import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface BackArrowProps {
  goBack: () => void;
}

const BackArrow: React.FC<BackArrowProps> = ({ goBack }) => {
  return (
    <button onClick={goBack}>
      <FontAwesomeIcon icon={faArrowLeft} /> Back
    </button>
  );
};

export default BackArrow;
