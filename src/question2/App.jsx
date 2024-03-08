// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("user@email");
  const [edit, setEdit] = useState(false);

  function renderEmail() {
    if (edit) {
      return (
        <>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button onClick={() => setEdit(!edit)}>Save</button>
        </>
      );
    } else {
      return (
        <>
          <p>{email}</p>
          <button onClick={() => setEdit(!edit)}>Edit</button>
        </>
      );
    }
  }
  return <div>{renderEmail()}</div>;
}


// import { useState } from "react";

// const user = {
//   email: "user@email.com",
// };

// function App() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newEmail, setNewEmail] = useState(user.email);

//   function handleSave() {
//     user.email = newEmail; // Uppdatera användarens e-postadress
//     setIsEditing(false); // Avsluta redigeringsläget
//   }

//   return (
//     <div>
//       <h1>User email: {user.email}</h1>
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)} // Uppdatera newEmail-state när användaren skriver
//           />
//           <button onClick={handleSave}>Spara</button>
//         </>
//       ) : (
//         <button onClick={() => setIsEditing(true)}>Redigera</button> // Anropa setIsEditing i en funktion
//       )}
//     </div>
//   );
// }

// export default App;
