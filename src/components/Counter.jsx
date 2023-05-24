import React, { Component } from "react";
const btn = "click";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countState: 0,
    };

    this.countNormal = 0;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(newState, OldState) {
    console.log("componentDidUpdate", newState, OldState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  btnClickHandler(e) {
    console.log("hi1", e);
    const { countState } = this.state;

    this.setState(
      {
        countState: countState + 1,
      },
      () => {
        console.log("hhaha");
        this.setState({});
      }
    );
    this.countNormal += 1;
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>

        <button onClick={(e) => this.btnClickHandler(e)}>{btn}</button>
        <p>Normal: {this.countNormal}</p>
        <p>State: {this.state.countState}</p>
      </div>
    );
  }
}

export default Counter;
