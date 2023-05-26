// example of useReducer function
import { useReducer } from "react";

// https://react.dev/learn/extracting-state-logic-into-a-reducer#writing-reducers-well

// https://react.dev/reference/react/useReducer

/** action: The action performed by the user. 
 It can be a value of any type. 
 By convention, an action is usually an object with a type property identifying it 
 and, optionally, other properties with additional information. */

/**
  * Reducers: Keep these two tips in mind when writing reducers:

 - Reducers must be pure. Similar to state updater functions, 
   reducers run during rendering! (Actions are queued until the next render.) 
 - Each action describes a single user interaction, 
   even if that leads to multiple changes in the data. 
   For example, if a user presses “Reset” on a form with five fields managed by a reducer, 
   it makes more sense to dispatch one reset_form action rather than five 
   separate set_field actions.
  */

/** State is read-only. Don’t modify any objects or arrays in state,
 * always return new objects from your reducer */

const TextComponent = ({ children }) => {
  const reducer = (state, action) => {
    console.log("action", action);
    if (action.type === "lowercase") {
      return { text: state.text.toLowerCase() };
    }
    if (action.type === "uppercase") {
      return { text: state.text.toUpperCase() };
    }
  };
  const [textState, dispatch] = useReducer(reducer, { text: "Hello Hi " });

  return (
    <div
      style={{
        border: "1px solid #444",
        margin: "50px",
        padding: "10px",
      }}
    >
      <p> {textState.text} </p>
      <button onClick={() => dispatch({ type: "lowercase" })}>lowercase</button>
      <button onClick={() => dispatch({ type: "uppercase" })}>uppercase</button>
    </div>
  );
};
export default TextComponent;
