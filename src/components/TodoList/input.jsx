import { useState } from "react";

const Input = (props) => {
  const [text, setText] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleTodoAddition(text);
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            // target vs current target - vishnu
            setText(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Input;
