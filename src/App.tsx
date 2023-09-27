import React, { useState } from 'react';
import './App.css';
import TravelDetails from './Assets/Components/TravelDetails.tsx';
import travelData from './Assets/Components/travelData.json';

interface Destination {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  suitableForYoungFamilies: boolean;
  suitableForOlderChildren: boolean;
}

function App() {
  const [destination, setDestination] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [suitableForYoungChildren, setSuitableForYoungChildren] = useState(false);
  const [suitableForOlderChildren, setSuitableForOlderChildren] = useState(false);
  const [matchingDestinations, setMatchingDestinations] = useState<Destination[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDetails(true);
  };

  const handleDestinationChange = (newDestination: string) => {
    setDestination(newDestination);
    const filteredDestinations: Destination[] = travelData.filter(
      (dest) =>
        dest.destination.toLowerCase().includes(destination.toLowerCase()) &&
        dest.startDate >= startDate &&
        dest.endDate < endDate &&
        (suitableForYoungChildren ? dest.suitableForYoungFamilies : true) &&
        (suitableForOlderChildren ? dest.suitableForOlderChildren : true)
    );
  }

  /*const filteredDestinations: Destination[] = travelData.filter(
    (dest) =>
      dest.destination.toLowerCase().includes(destination.toLowerCase()) &&
      dest.startDate >= startDate &&
      dest.endDate < endDate &&
      (suitableForYoungChildren ? dest.suitableForYoungFamilies : true) &&
      (suitableForOlderChildren ? dest.suitableForOlderChildren : true)
  );*/

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
            onChange={(e) => handleDestinationChange.target.value}
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
        <div className="form-group">
          <label>
            Suitable for Young Children:
            <input
              type="checkbox"
              checked={suitableForYoungChildren}
              onChange={() => setSuitableForYoungChildren(!suitableForYoungChildren)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Suitable for Older Children:
            <input
              type="checkbox"
              checked={suitableForOlderChildren}
              onChange={() => setSuitableForOlderChildren(!suitableForOlderChildren)}
            />
          </label>
          </div>
        <button type="submit">Plan Travel Break</button>
      </form>
      {showDetails && (
        <div>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <TravelDetails
              key={dest.id}
              destination={dest.destination}
              startDate={dest.startDate}
              endDate={dest.endDate}
            />
          ))
        ) : (
          <p>No suitable destinations found.</p>
        )}
      </div>
      )}
    </div>
  );
}

export default App;
