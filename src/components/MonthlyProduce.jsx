import React from 'react';
import PropTypes from 'prop-types';

function MonthlyProduce(props) {
  return(
    <div>
      <h3>{props.month}</h3>
      <h4>{props.selection}</h4>
    </div>

  );
}

MonthlyProduce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};
export default MonthlyProduce;
