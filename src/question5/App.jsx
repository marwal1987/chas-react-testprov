// 5. Skapa Custom Hook för API-anrop 3p
// Målet med denna uppgift är att skapa en custom
// hook i React, useFetchData, för att hämta data från
//en angiven URL. Din hook ska enbart hantera datahämtning och laddningsstatus.

// Skapa en custom hook som heter: useFetchData, som tar en URL som argument
// och använder fetch för att hämta data.
// Hooken ska returnera ett objekt med två egenskaper: data (datan som hämtats)
// och isLoading (en boolean som indikerar om datahämtningen pågår).

// Använd https://jsonplaceholder.typicode.com/users som test-URL för att demonstrera
// hur din hook kan användas i en komponent för att visa användardata och en
// laddningsindikator.

// Exempel på användning:
import useFetchData from "./useFetchData";

function UserList() {
  const { data, isPending } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isPending) return <div>Laddar...</div>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;