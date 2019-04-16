import React from 'react';
import PropTypes from 'prop-types';


function MonthlyProduce(props) {
  const textStyle = {
    fontFamily: 'sans-serif'
  };
  return(
    <div>
      <h1>{props.month}</h1>
      <h4 style={textStyle}>
        {
          props.selection.map((produce, index) => {
            return <p key={index}>{produce}</p>;
          })
        }
      </h4>
    </div>

  );
}

MonthlyProduce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};
export default MonthlyProduce;
