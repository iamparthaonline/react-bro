import React, { useContext } from "react";
import Grandson from "./grandson";
import { GrannyContext } from "./granny";

const Son = () => {
  const grannyData = useContext(GrannyContext);

  console.log("grannyData", grannyData);

  return (
    <div>
      <span onClick={() => grannyData.handleChangeName({ name: "wayd" })}>
        Change
      </span>
      <br />
      son {grannyData.state.name} <br />
      age - {grannyData.state.age} - <Grandson />
    </div>
  );
};

export default Son;
