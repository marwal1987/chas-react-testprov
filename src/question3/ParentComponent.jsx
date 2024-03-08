import ChildComponent from "./ChildComponent";
import { useState } from "react";

export default function ParentComponent() {
  const [color, setColor] = useState();

  // Här är callback-funktionen - uppdaterar vald färg när det ändras i ChildComponent
  function handleColor(color) {
    setColor(color);
  }

  return (
    <div>
      <h2 style={{ backgroundColor: color }}>Parent component {color}</h2>
      <ChildComponent handleColor={handleColor} />
    </div>
  );
}
