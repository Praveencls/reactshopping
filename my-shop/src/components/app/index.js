import React, { Component } from 'react';
import Shelf from '../shelf';
import FloatCart from '../floatcart';

class App extends Component {
  render() {
    return (
      <div className="app">
         <main>
          <Shelf />
        </main>
        <FloatCart />
      </div>
    );
  }
}

export default App;
