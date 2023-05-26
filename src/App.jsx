import React, { Component } from "react";
import { ChildToParent } from "./components/childToParentRender/index";
import ShowHide from "./components/ShowHide";
import Parent from "./components/parentToChildRender/index";
import TextComponent from "./components/text";
import TodoList from "./components/TodoList";
import Memo from "./components/memo";
import Dating from "./components/girl";
import Granny from "./components/context/granny";

import Counter from "./components/hoc/Counter";
import Hover from "./components/hoc/Hover";

import Wrapper from "./components/renderProps/Wrapper";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter name="shiva" />
        <Hover color="red" />
        <Granny /> */}

        <Wrapper
          render={(count, setCount) => {
            return (
              <Counter
                handleIncrease={() => setCount(count + 1)}
                counter={count}
              />
            );
          }}
        />
        <Wrapper
          render={(count, setCount) => {
            return (
              <Hover
                handleIncrease={() => setCount(count + 1)}
                counter={count}
              />
            );
          }}
        />

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
