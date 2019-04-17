import React from 'react';
import Locations from './Locations';
import ProduceList from './ProduceList';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Locations} />
        <Route path='/produce' component={ProduceList} />
      </Switch>
    </div>
  );

}

export default App;
