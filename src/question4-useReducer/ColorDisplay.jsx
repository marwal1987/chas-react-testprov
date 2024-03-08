import { useContext } from "react";
import { ColorContext } from "./colorContext";

export default function ColorDisplay() {
  const { state } = useContext(ColorContext);
  const { color } = state;

  return (
    <div>
      <h2 style={{ backgroundColor: color }}>{color}</h2>
    </div>
  );
}
