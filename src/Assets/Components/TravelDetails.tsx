import React from 'react';

interface TravelDetailsProps {
  destination: string;
  startDate: string;
  endDate: string;
}

const TravelDetails: React.FC<TravelDetailsProps> = ({
  destination,
  startDate,
  endDate,
}) => {
  return (
    <div>
      <h2>Your Travel Break Details</h2>
      <p>
        <strong>Destination:</strong> {destination}
      </p>
      <p>
        <strong>Start Date:</strong> {startDate}
      </p>
      <p>
        <strong>End Date:</strong> {endDate}
      </p>
    </div>
  );
};

export default TravelDetails;