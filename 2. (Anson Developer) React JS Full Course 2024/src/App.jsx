import { UserDetails } from "./components/UserDetails";

export default function App() {
  const mockUsers = [
    {
      id: 1,
      username: "vicky",
      email: "vicky@gmail.com",
    },
    {
      id: 2,
      username: "eder",
      email: "eder@gmail.com",
    },
    {
      id: 3,
      username: "nolan",
      email: "nolan@gmail.com",
    },
  ];

  return (
    <div>
      {mockUsers.map((user) => {
        return <UserDetails key={user.id} user={user} />;
      })}
    </div>
  );
}
