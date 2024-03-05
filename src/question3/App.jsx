// 3. Välj Favoritfärg via Dropdown 3p
// Skapa två React-komponenter: ParentComponent och ChildComponent.
// ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
// När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
// ParentComponent ska visa användarens valda favoritfärg.

// I ChildComponent, implementera ett <select>-element med några färgalternativ.
// Använd en callback-funktion för att meddela ParentComponent om användarens val.
// ParentComponent ska ta emot och visa det valda färgalternativet.

import { useState } from "react";

// ParentComponent
function ParentComponent() {
  const [selectedColor, setSelectedColor] = useState();

  // Här är callback-funktionen - uppdaterar vald färg när det ändras i ChildComponent
  function handleColorChange(color) {
    setSelectedColor(color);
  }

  return (
    <div>
      <h2>Parent component</h2>
      <p style={{ backgroundColor: selectedColor }}>{selectedColor}</p>
      <ChildComponent onColorChange={handleColorChange} />
    </div>
  );
}

// ChildComponent
function ChildComponent({ onColorChange }) {
  // Hantera ändringar i dropdown-listan + skicka valt värde till ParentComponent
  function handleChange(e) {
    const selectedColor = e.target.value;
    onColorChange(selectedColor); // Anropa callback-funktionen med valt värde
  }

  return (
    <>
      <h2>Child component</h2>
      <select name="colorPicker" onChange={handleChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
        <option value="azure">Azure</option>
      </select>
    </>
  );
}

function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

export default App;
