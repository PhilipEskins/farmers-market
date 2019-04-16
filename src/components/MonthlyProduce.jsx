import React from 'react';
import PropTypes from 'prop-types';


function MonthlyProduce(props) {
  const textStyle = {
    fontFamily: 'sans-serif',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  };
  const produceStyle = {
    border: '1px solid blue'
  };
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
  selection: PropTypes.string
};
export default MonthlyProduce;
