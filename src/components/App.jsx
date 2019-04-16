import React from 'react';
import Locations from './Locations';
import ProduceList from './ProduceList';
import Navbar from './Navbar';

function App() {
  const gridStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  };

  return(
    <div>
      <Navbar/>
      <div>
        <Locations/>
      </div>
      <ProduceList/>
    </div>
  );

}

export default App;
