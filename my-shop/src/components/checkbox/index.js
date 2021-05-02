import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
        <div className="">
        <label>
          <input
            type="checkbox"
            value=""
            checked=""
            onChange=""
          />

          <span className="checkmark">"label"</span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
