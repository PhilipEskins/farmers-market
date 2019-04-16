import React from 'react';

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
    </div>
  );
}

export default Navbar;
