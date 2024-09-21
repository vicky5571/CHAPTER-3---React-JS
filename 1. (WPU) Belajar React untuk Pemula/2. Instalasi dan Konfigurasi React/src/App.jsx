/* eslint-disable react/prop-types */
import { useState } from "react";

function Header({ author }) {
  return <h1>Belajar React Bareng {author ? author : "WPU"}</h1>;
}

function App() {
  const students = ["Vicky", "Galih", "Pamungkas"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header author="Vicky" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </>
  );
}

export default App;
