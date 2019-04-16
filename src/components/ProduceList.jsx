import React from 'react';
import MonthlyProduce from './MonthlyProduce';
import availableProduce from '../modelData/ProduceData';

const gridLayout = {
  display: 'grid',
  // gridTemplateRows: "repeat(4, 1fr)",
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2%'
};

function ProduceList() {
  return(
    <div style={gridLayout}>
      {availableProduce.map((item, index) =>
        <MonthlyProduce month = {item.month}
          selection = {item.selection}
          key = {index}/>
      )}
    </div>
  );
}

export default ProduceList;
