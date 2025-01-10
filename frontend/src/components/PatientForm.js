import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [history, setHistory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/patients', { name, age, history });
    setName('');
    setAge('');
    setHistory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        required
      />
      <textarea
        value={history}
        onChange={(e) => setHistory(e.target.value)}
        placeholder="History"
      ></textarea>
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
