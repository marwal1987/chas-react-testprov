// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [comment, setComment] = useState("");

  function handleChange(e) {
    setComment(e.target.value);
  }

  function addComment() {
    setList([...list, comment]); // Spread för att undvika mutation
    setComment(""); // Återställ inputfältet
  }

  // Ta bort kommentar ur listan baserat på index
  function removeComment(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <div>
      <input
        type="text"
        value={comment} // Kopplar input-fältet till comment-state
        onChange={handleChange}
      />
      <button onClick={addComment}>Lägg till</button>

      <ul>
        {list.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => removeComment(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
