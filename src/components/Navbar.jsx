import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {


  return(
    <div>
      <style jsx>{`
          h1 {
            background-color: lightblue;
            text-align: center;
            padding: 50px 0;
            font-size: 75px;
            font-family: monospace;
            border: 10px solid blue;
          }
        `}
      </style>
      <h1>Avery's Marketplace!</h1>
      <Link to='/'>Home</Link> | <Link to='/produce'>Produce</Link>
    </div>
  );
}

export default Navbar;
