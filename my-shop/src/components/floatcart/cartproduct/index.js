import React, { Component } from 'react';
import Thumb from './../../Thumb';

class CartProduct extends Component {
  render() {
    return (
        <div className="">
        <div
          className="shelf-item__del"
          onMouseOver=""
          onMouseOut=""
          onClick=""
        />
        <Thumb
          classes="shelf-item__thumb"
          src=""
          alt=""
        />
        <div className="shelf-item__details">
          <p className="title">Title</p>
          <p className="desc">
             <br />
            Quantity: 
          </p>
        </div>
        <div className="shelf-item__price">
          <p>product price</p>
        </div>

        <div className="clearfix" />
      </div>
    );
  }
}

export default CartProduct;
