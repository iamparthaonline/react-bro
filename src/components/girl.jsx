import { useReducer, useState, useMemo, useRef } from "react";
import { reducerFunc, initialArgs } from "./girl.reducer";

const Dating = ({ names }) => {
  const [candidate, setCandidate] = useState("");

  const [data, dispatch] = useReducer(reducerFunc, initialArgs);

  const girls = useMemo(() => {
    const k = names.find((name) => name.indexOf("k") === 0);
    return k;
  }, [names]);

  const inputRef = useRef("hi");
  console.log("inputRef", inputRef);
  // what does computed in vue do

  const handler = () => {
    // async
    // dispatch
  };
  return (
    <div>
      <h2>Dating</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("inputRef", inputRef);
          inputRef.current.value = "shiva";
          dispatch({ type: "ASK_DATE", payload: candidate });
        }}
      >
        <input id="shiba" type="text" ref={inputRef} />
      </form>
      <p>Status: {data.status} </p>
      <ul>
        {/* {girls.map((name) => (
          <li key={name}>{name}</li>
        ))} */}
        <li>{girls}</li>
      </ul>
    </div>
  );
};

export default Dating;
