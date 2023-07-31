import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationLog = () => {
  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    fetchLogEntries();
  }, []);

  const fetchLogEntries = async () => {
    try {
      const response = await axios.get('/sendNotification');
      setLogEntries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Log history</h2>
      <ul>
        {logEntries.map((entry) => (
          <li key={entry.id}>
            <strong>Category:</strong> {entry.category}
            <br />
            <strong>User:</strong> {entry.user}
            <br />
            <strong>Message:</strong> {entry.message}
            <br />
            <strong>Timestamp:</strong> {entry.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationLog;
