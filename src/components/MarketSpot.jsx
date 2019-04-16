import React from 'react';
import PropTypes from 'prop-types';

function MarketSpot(props) {
  const textStyle = {
    fontFamily: 'sans-serif'
  };
  const dayWeek = {
    border: '2px solid black',
    padding: '10px 20px',
    textAlign: 'center'
  };

  return(
    <div style={{width:'33%'}}>
      <h1 style = {dayWeek}>{props.day}</h1>
      <h4 style={textStyle}>Location: {props.location}</h4>
      <h4 style={textStyle}>Hours: {props.hours}</h4>
      <h4 style={textStyle}>Station: {props.booth}</h4>
      <br></br>
    </div>
  );
}

MarketSpot.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default MarketSpot;
