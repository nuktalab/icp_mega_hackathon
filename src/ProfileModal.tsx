import React, { useState } from "react";
import { profile } from './declarations/profile';

const ProfileModal: React.FC<{ username: string; onClose: () => void }> = ({ username, onClose }) => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [heigh, setHeight] = useState<string>("0");
  const [weight, setWeight] = useState<string>("0");

  const handleSubmit = async () => {
    try {
      // Call profile.addUserData to submit the profile information
      await profile.addUserData(name, username, location, dateOfBirth, BigInt(heigh), BigInt(weight));
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error adding user data:', error);
    }
  };

  return (
    <div className="profile-modal">
      <h2>Complete Your Profile</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Date of Birth:
        <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
      </label>
      <label>
        Height (cm):
        <input type="number" value={heigh} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ProfileModal;
