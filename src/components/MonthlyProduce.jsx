import React from 'react';
import PropTypes from 'prop-types';


function MonthlyProduce(props) {
  const textStyle = {
    fontFamily: 'sans-serif',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    marginLeft: '2%'
  };
  const produceStyle = {
    border: '1px solid blue'
  };

  if (props.currentMonth === props.month) {
    produceStyle.backgroundColor = 'red';
  }
  
  return(
    <div style={produceStyle}>
      <h1 style={{textAlign:'center'}}>{props.month}</h1>
      <div style={textStyle}>
        {
          props.selection.map((produce, index) => {
            return <p key={index}>{produce}</p>;
          })
        }
      </div>
    </div>

  );
}

MonthlyProduce.propTypes = {
  month: PropTypes.string,
  currentMonth: PropTypes.string,
  selection: PropTypes.array
};
export default MonthlyProduce;
