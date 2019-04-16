import React from 'react';
import MonthlyProduce from './MonthlyProduce';
import availableProduce from '../modelData/ProduceData';

function ProduceList() {
  return(
    <div>
      {availableProduce.map((item, index) =>
        <MonthlyProduce month = {item.month}
          selection = {item.selection}
          key = {index}/>
      )}
    </div>
  );
}

export default ProduceList;
