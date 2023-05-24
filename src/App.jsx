import React, { Component } from "react";
import { ChildToParent } from "./components/childToParentRender/index";
import ShowHide from "./components/ShowHide";
import Parent from "./components/parentToChildRender/index";

import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
