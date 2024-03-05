// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

import { useState } from "react";

const user = {
  email: "user@email.com",
};

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState(user.email);

  function handleSave() {
    user.email = newEmail; // Uppdatera användarens e-postadress
    setIsEditing(false); // Avsluta redigeringsläget
  }

  return (
    <div>
      <h1>User email: {user.email}</h1>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)} // Uppdatera newEmail-state när användaren skriver
          />
          <button onClick={handleSave}>Spara</button>
        </>
      ) : (
        <button onClick={() => setIsEditing(true)}>Redigera</button> // Anropa setIsEditing i en funktion
      )}
    </div>
  );
}

export default App;
