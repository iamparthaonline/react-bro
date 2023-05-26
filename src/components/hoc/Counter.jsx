import React, { Component } from "react";
import hoc from "./hoc";
const btn = "click";

class Counter extends Component {
  render() {
    const { counter, handleIncrease, name } = this.props;
    return (
      <div>
        <h1>Counter = {name}</h1>

        <button onClick={(e) => handleIncrease(e)}>{btn}</button>
        <p>State: {counter}</p>
      </div>
    );
  }
}

export default hoc(Counter);
