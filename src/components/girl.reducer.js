const reducerFunc = (state, action) => {
  if (action.type === "UPDATE_VALUE" && action.payload === "Vedant") {
    return {
      ...state,
      status: "Pass",
    };
  } else {
    return {
      ...state,
      status: "Fail",
    };
  }
};

const initialArgs = {
  status: "Na",
};

export { reducerFunc, initialArgs };
