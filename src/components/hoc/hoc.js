// HOC is a function that takes a component as an argument and returns updated component

import React from "react";

const hoc = (Comp) => {
  class UpdatedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        countState: 0,
      };
    }

    btnClickHandler = (e) => {
      const { countState } = this.state;

      this.setState({
        countState: countState + 1,
      });
    };

    render() {
      return (
        <Comp
          counter={this.countState}
          handleIncrease={this.btnClickHandler}
          {...this.props}
        />
      );
    }
  }

  return UpdatedComponent;
};

export default hoc;
