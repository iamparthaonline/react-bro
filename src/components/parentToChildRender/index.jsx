import { useState } from "react";
import { Child } from "./child";

const Parent = (props) => {
  const [dateVal, setDateVal] = useState(+new Date());

  return (
    <div>
      <p>Parent Data: {dateVal}</p>
      <button onClick={() => setDateVal(+new Date())}>Update</button>
      <div>
        <Child />
      </div>
    </div>
  );
};

export default Parent;
