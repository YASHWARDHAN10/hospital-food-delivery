import React, { useState } from 'react';
import axios from 'axios';

const DietChartForm = () => {
  const [patientId, setPatientId] = useState('');
  const [dietPlan, setDietPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/diet-charts', { patientId, dietPlan });
    setPatientId('');
    setDietPlan('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        placeholder="Patient ID"
        required
      />
      <textarea
        value={dietPlan}
        onChange={(e) => setDietPlan(e.target.value)}
        placeholder="Diet Plan"
      ></textarea>
      <button type="submit">Add Diet Chart</button>
    </form>
  );
};

export default DietChartForm;