import React, { Component } from 'react';
import Sort from '../sort';
import Clearfix from '../../clearfix'


class ShelfHeader extends Component {
  render() {
    return (
        <div className="shelf-container-header">
      <small className="products-found">
        <span>0 Product(s) found.</span>
      </small>
      <Sort />
      <Clearfix />
    </div>
    );
  }
}

export default ShelfHeader;
