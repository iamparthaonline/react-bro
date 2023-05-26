import React, { useState, createContext } from "react";
import Papa from "./papa";

const GrannyContext = createContext();

const Granny = () => {
  const [state, setState] = useState({
    name: "vishnu",
    age: 32,
  });

  return (
    <div>
      granny - {state.name}
      <GrannyContext.Provider
        value={{
          state,
          handleChangeName: (n) => {
            setState(n);
          },
        }}
      >
        <Papa />
      </GrannyContext.Provider>
    </div>
  );
};

export default Granny;
export { GrannyContext };
