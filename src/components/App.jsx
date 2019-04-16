import React from 'react';
import Locations from './Locations';
import ProduceList from './ProduceList';

function App() {
  const gridStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  };
  const center = {
    textAlign: 'center'
  };
  return(
    <div>
      <h1 style={center}>Avery's Organics</h1>
      <div style={gridStyle}>
        <Locations/>
        <ProduceList/>
      </div>
    </div>
  );

}

export default App;
