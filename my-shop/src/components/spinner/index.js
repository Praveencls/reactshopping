import React, { Component } from 'react';
import './style.scss';

class Spinner extends Component {
  render() {
    return (
        <div className="spinner lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default Spinner;
