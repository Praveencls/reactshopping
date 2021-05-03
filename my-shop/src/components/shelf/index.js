import React, { Component } from 'react';
import Product from './product';
import Filter from './filter';
import ShelfHeader from './shelfheader';
import Clearfix from '../clearfix';
import Spinner from '../spinner';
import './style.scss';

class Shelf extends Component {
  render() {
    <Product />
    return (
        <React.Fragment>
         <Spinner />
        <Filter />
        <div className="shelf-container">
          <ShelfHeader productsLength="" />
          
          <Clearfix />
        </div>
        <Clearfix />
      </React.Fragment>
    );
  }
}

export default Shelf;
