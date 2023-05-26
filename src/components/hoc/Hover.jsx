import React, { Component } from "react";
import hoc from "./hoc";

class Hover extends Component {
  render() {
    const { counter, handleIncrease } = this.props;

    return (
      <div>
        <h1>Hover = {this.props.color}</h1>

        <p onMouseOver={(e) => handleIncrease()}>State: {counter}</p>
      </div>
    );
  }
}

export default hoc(Hover);
