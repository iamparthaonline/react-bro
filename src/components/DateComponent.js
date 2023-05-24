import { useState } from "react";
import Counter from "./Counter";

const DateComponent = ({ children, name }) => {
  const [dateVal, setDateVal] = useState(true);
  return (
    <div>
      <b>{name}</b>
      <p> Dyna = {+new Date()} </p>
      <p> State = {dateVal} </p>

      <button onClick={() => setDateVal(!dateVal)}> {`${dateVal}`}</button>

      {dateVal && <Counter />}
    </div>
  );
};
export default DateComponent;
