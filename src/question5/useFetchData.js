import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  return { data, isPending };
};

export default useFetchData;


// import { useState, useEffect } from "react";

// const useFetchData = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(url)
//         .then((res) => {
//           if (!res.ok) {
//             throw Error("Could not fetch the data for that resource");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setData(data);
//           setIsPending(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setIsPending(false);
//         });
//     }, 1000);
//   }, [url]);

//   return { data, isPending };
// };

// export default useFetchData;