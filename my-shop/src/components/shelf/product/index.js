import React, { Component } from 'react';
import Thumb from '../../thumb';

class Product extends Component {
  render() {
    return (
        <div
      className="shelf-item"
     
    >
      
        <div className="shelf-stopper">Free shipping</div>
      
      <Thumb
        classes="shelf-item__thumb"
        src=""
        alt=""
      />
      <p className="shelf-item__title">Title</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>Currency Format</small>
          <b>Formatted Price</b>
          <span>Formatted Price 2</span>
        </div>
        
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
    );
  }
}

export default Product;
