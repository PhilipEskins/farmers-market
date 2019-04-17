import React from 'react';
import MonthlyProduce from './MonthlyProduce';
import availableProduce from '../modelData/ProduceData';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2%'
};

function ProduceList() {
  let thisMonth = new Date().getMonth();
  let currentMonth = availableProduce[thisMonth].month;

  return(
    <div style={gridLayout}>
      {availableProduce.map((item, index) =>
        <MonthlyProduce month = {item.month}
        currentMonth = {currentMonth}
          selection = {item.selection}
          key = {index}/>
      )}
    </div>
  );
}

export default ProduceList;
