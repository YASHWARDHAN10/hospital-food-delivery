import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientForm from './components/PatientForm';
import DietChartForm from './components/DietChartForm';
import DeliveryDashboard from './components/DeliveryDashboard';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Hospital Food Delivery App</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-patient" element={<PatientForm />} />
          <Route path="/add-diet-chart" element={<DietChartForm />} />
          <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
