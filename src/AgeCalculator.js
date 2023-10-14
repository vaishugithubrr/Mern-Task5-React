import React, { useState } from 'react';

function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    // Calculate the age based on the date of birth
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    const ageDiff = today - birthDate;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(`You are ${calculatedAge} years old`);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <br />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>{age}</p>}
    </div>
  );
}

export default AgeCalculator;
