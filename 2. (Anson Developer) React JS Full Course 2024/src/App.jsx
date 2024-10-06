import { useState, useEffect } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);
  const [sync, setSync] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "vicky",
      email: "vicky@gmail.com",
    },
    {
      id: 2,
      username: "Huang Xing",
      email: "huangxing@gmail.com",
    },
  ]);

  useEffect(() => {
    console.log("Rendering...");
    document.title = "React Tutorial" + counter;
  }, [sync]);

  useEffect(() => {
    const controller = new AbortController();
    controller.signal;
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal });
        const json = await response.json();
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
    };
  });

  return (
    <div>
      <div>
        <div>You clicked {counter} times</div>
        <button onClick={() => setCounter((count) => count + 1)}>Click Me</button>
        <button onClick={() => setSync((current) => !current)}>Sync</button>
      </div>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            username,
            email,
          };
          setCounter((currentCounter) => currentCounter + 1);
          setUsers((currentUsersState) => [...currentUsersState, newUser]);
        }}
      >
        <div>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="email"
            id="username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button>Add User</button>
      </form>
      <br />
      <br />
      <br />
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}
