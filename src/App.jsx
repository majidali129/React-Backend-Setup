import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <h2>Front-End + Backend {"=>"} Fullstack 🚀🚀🚀</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            <h4>{joke.question}</h4>
            <p>{joke.answer}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
