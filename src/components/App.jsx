import React from 'react';
import Locations from './Locations';
import ProduceList from './ProduceList';
import Navbar from './Navbar';

function App() {
  const gridStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  };
  return(
    <div>
      <Navbar/>
      <div style={gridStyle}>
        <Locations/>
        <ProduceList/>
      </div>
    </div>
  );

}

export default App;
