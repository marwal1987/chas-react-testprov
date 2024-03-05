// 4. Dela Favoritfärg med Context 3p
// Skapa en applikation som använder React Context för att hantera och
// dela en användares val av favoritfärg mellan komponenter.
// Applikationen ska bestå av två huvudkomponenter: ColorSelector och ColorDisplay.

// Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

// Steg 2: ColorSelector-komponenten ska innehålla en dropdown-lista (select)
// där användaren kan välja en färg. När en färg väljs, uppdatera ColorContext
// med det nya värdet.

// Steg 3: ColorDisplay-komponenten ska använda ColorContext för att visa den valda
// favoritfärgen. Den ska lyssna på ändringar i context och uppdatera visningen
// automatiskt när en ny färg väljs.

// Genom att använda React Context kan du skapa en tät koppling mellan
// ColorSelector och ColorDisplay utan att direkt skicka props eller använda callbacks.

import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext();

function App() {
  // Använd useState för att hantera användarens valda favoritfärg.
  const [selectedColor, setSelectedColor] = useState("");

  return (
    // Tillhandahåll ColorContext.Provider högst upp i komponentträdet.
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      <>
        <h1>Välj din favoritfärg:</h1>
        <ColorSelector />
        <ColorDisplay />
      </>
    </ColorContext.Provider>
  );
}

// Steg 2: Skapa ColorSelector-komponenten.
function ColorSelector() {
  // Steg 2: Använd useContext för att komma åt ColorContext.
  const { selectedColor, setSelectedColor } = useContext(ColorContext);

  // Steg 2: Uppdatera ColorContext med den nya valda färgen.
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <select value={selectedColor} onChange={handleColorChange}>
      <option value="">Välj en färg</option>
      <option value="red">Red</option>
      <option value="lightgreen">Light green</option>
      <option value="lightblue">Light Blue</option>
      <option value="pink">Pink</option>
      <option value="azure">Azure</option>
    </select>
  );
}

// Steg 3: Skapa ColorDisplay-komponenten.
function ColorDisplay() {
  // Steg 3: Använd useContext för att komma åt ColorContext.
  const { selectedColor } = useContext(ColorContext);

  return (
    <div style={{ marginTop: "20px" }}>
      {/* Steg 3: Visa den valda favoritfärgen från ColorContext */}
      {selectedColor && (
        <div>
          <h2>Din valda favoritfärg är:</h2>
          <div style={{backgroundColor: selectedColor}}>
            {selectedColor}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
