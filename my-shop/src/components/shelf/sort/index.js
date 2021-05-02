import React, { Component } from 'react';
import Selectbox from '../../selectbox';

class Sort extends Component {
  render() {
    return (
        <div className="sort">
        Order by
        <Selectbox options="" handleOnChange="" />
      </div>
    );
  }
}

export default Sort;
