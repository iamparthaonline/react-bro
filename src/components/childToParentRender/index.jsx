import { useState } from "react";

export const ChildToParent = () => {
  const [dateVal, setDateVal] = useState(+new Date());
  return (
    <div
      style={{
        border: "1px solid #444",
        padding: "10px",
        margin: "50px",
      }}
    >
      Child Date Value {dateVal}{" "}
      <button onClick={() => setDateVal(+new Date())}>Update</button>
    </div>
  );
};
