import { UserProfile } from "./components/UserProfile";

export default function App() {
  const callMe = () => {
    console.log("Hellow");
  };

  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile
        username="Vicky"
        age={32}
        isLoggedIn={true}
        favoriteFoods={[
          {
            name: "Sushi",
            id: "Sushi",
          },
          {
            name: "Pizza",
            id: "Pizza",
          },
        ]}
        callMe={callMe}
      />
    </div>
  );
}
