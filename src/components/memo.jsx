//https://react.dev/reference/react/useMemo
import { useMemo, useState } from "react";

/**
 * useMemo Parameters:
    calculateValue: The function calculating the value that you want to cache. 
    It should be pure, should take no arguments, and should return a value of any type.
    React will call your function during the initial render. 
    On next renders, React will return the same value again if the 
    dependencies have not changed since the last render.
    Otherwise, it will call calculateValue, return its result, and store it 
    so it can be reused later.

    dependencies: The list of all reactive values referenced inside of the calculateValue 
    code. Reactive values include props, state, and all the variables and functions 
    declared directly inside your component body. If your linter is configured for 
    React, it will verify that every reactive value is correctly specified as a 
    dependency. The list of dependencies must have a constant number of 
    items and be written inline like [dep1, dep2, dep3]. 
    React will compare each dependency with its previous value using the Object.is 
    comparison.


 */

const Memo = () => {
  const [arr, setArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 22, 121,
  ]);
  const evenNumbers = useMemo(() => arr.filter((a) => a % 2 === 0), [arr]);
  return (
    <div>
      {evenNumbers.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  );
};

export default Memo;
