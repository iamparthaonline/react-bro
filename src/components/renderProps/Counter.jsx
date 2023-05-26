import React, { Component } from "react";
import hoc from "./hoc";
const btn = "click";

class Counter extends Component {
  render() {
    const { counter, handleIncrease } = this.props;
    return (
      <div>
        <h1>Counter</h1>

        <button onClick={(e) => handleIncrease(e)}>{btn}</button>
        <p>State: {counter}</p>
      </div>
    );
  }
}

export default hoc(Counter);
