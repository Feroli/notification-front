import React from 'react';
import './App.css';
import NotificationForm from './components/NotificationForm';
import NotificationLog from './components/NotificationLog';

function App() {
  return (
    <div className="App">
      <NotificationForm />
      <NotificationLog />
    </div>
  );
}

export default App;
