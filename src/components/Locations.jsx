import React from 'react';
import MarketSpot from './MarketSpot';
import marketSchedule from '../modelData/LocationData';

function Locations() {
  let today = new Date().getDay();
  let currentDay = marketSchedule[today].day;

  const maxWidth = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };
  return(
    <div style={maxWidth}>
      {marketSchedule.map((spot, index) =>
        <MarketSpot day = {spot.day}
          location = {spot.location}
          currentDay = {currentDay}
          hours = {spot.hours}
          booth = {spot.booth}
          key = {index}/>
      )}
    </div>
  );
}

export default Locations;
