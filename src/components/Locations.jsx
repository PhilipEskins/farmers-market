import React from 'react';
import MarketSpot from './MarketSpot';
import marketSchedule from '../modelData/LocationData';

function Locations() {
  return(
    <div>
      {marketSchedule.map((spot, index) =>
        <MarketSpot day = {spot.day}
          location = {spot.location}
          hours = {spot.hours}
          booth = {spot.booth}
          key = {index}/>
      )}
    </div>
  );
}

export default Locations;
