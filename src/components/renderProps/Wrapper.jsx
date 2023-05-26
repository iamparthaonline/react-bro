import React, { useState } from "react";

const Wrapper = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Wrapper<>{props.render(counter, setCounter)}</>
    </div>
  );
};

export default Wrapper;
