import React, { useState } from 'react';
import './App.css';
import TravelDetails from './Assets/Components/TravelDetails.tsx'

function App() {
  const [destination, setDestination] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDetails(true);
  };

  return (
    <div className="App">
      <h1>Travel Planner with Children</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Plan Travel Break</button>
      </form>
      {showDetails && (
        <TravelDetails
          destination={destination}
          startDate={startDate}
          endDate={endDate}
        />
      )}
    </div>
  );
}

export default App;