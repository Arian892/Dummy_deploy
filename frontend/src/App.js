import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend not responding");
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>PERN Hackathon Demo</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App; 
