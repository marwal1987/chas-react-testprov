// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.
import { useState } from "react";

let count = 1;

function App() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  function handleComment(e) {
    setInput(e.target.value);
  }

  function handleAddComment() {
    const comment = {
      id: performance.now(),
      text: input,
    };
    setComments([...comments, comment]);
  }

  // Ta bort kommentar ur listan baserat på index
  function handleRemove(id) {
    const filteredComments = comments.filter((comment) => comment.id != id);
    setComments(filteredComments);
  }

  return (
    <main>
      {comments.map((comment) => {
        return (
          <div>
            <p key={count++}>{comment.text}</p>
            <button onClick={() => handleRemove(comment.id)}>Remove</button>
          </div>
        );
      })}
      <input type="text" onChange={handleComment} />
      <button onClick={handleAddComment}>Add</button>
    </main>
  );
}

export default App;
