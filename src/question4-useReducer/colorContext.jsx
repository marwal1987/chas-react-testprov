import { createContext, useReducer } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  function reducer(state, action) {
    if (action.type == "setColor") {
      return {
        ...state,
        color: action.color,
      };
    }
  }

  const [state, dispatch] = useReducer(reducer, { color: "green" });

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}
