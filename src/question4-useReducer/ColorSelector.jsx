import { useContext } from "react";
import { ColorContext } from "./colorContext";

export default function ColorSelector() {
  const { dispatch } = useContext(ColorContext);

  return (
    <div>
      <select
        onChange={(e) => dispatch({ type: "setColor", color: e.target.value })}
      >
        <option value="">Choose color...</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
