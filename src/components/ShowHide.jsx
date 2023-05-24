import { useState } from "react";

const ShowHide = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        border: "1px solid #444",
        margin: "50px",
        padding: "10px",
      }}
    >
      <p> Normal JS Expression = {+new Date()} </p>
      <p> State = {`${show}`} </p>
      <button onClick={() => setShow(!show)}>
        {`${show ? "Hide" : "Show"}`}
      </button>
      {show && children}
    </div>
  );
};
export default ShowHide;
