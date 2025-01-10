import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeliveryDashboard = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      const response = await axios.get('/api/deliveries');
      setDeliveries(response.data);
    };
    fetchDeliveries();
  }, []);

  return (
    <div>
      <h1>Delivery Dashboard</h1>
      <ul>
        {deliveries.map((delivery) => (
          <li key={delivery.id}>
            {delivery.patientName} - {delivery.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryDashboard;


