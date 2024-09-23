import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
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

  return (
    <div>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}
