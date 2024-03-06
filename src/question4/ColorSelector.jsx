import { useContext } from "react";
import { ColorContext } from "./colorContext";

export default function ColorSelector() {
  const { setColor } = useContext(ColorContext);

  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
