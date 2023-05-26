import React, { Component } from "react";
import { ChildToParent } from "./components/childToParentRender/index";
import ShowHide from "./components/ShowHide";
import Parent from "./components/parentToChildRender/index";
import TextComponent from "./components/text";
import TodoList from "./components/TodoList";
import Memo from "./components/memo";
import Dating from "./components/girl";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
        {/* <TextComponent /> */}
        {/* <Memo /> */}

        <Dating
          names={["pooja", "archana", "savitri", "aksha", "kesha", "luna"]}
        />
      </div>
    );
  }
}

export default App;
