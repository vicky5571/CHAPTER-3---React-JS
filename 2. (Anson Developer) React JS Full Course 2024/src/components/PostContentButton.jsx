import { useContext } from "react";
import { UserContext } from "./utils/hooks/contexts/UserContext";

export function PostContentButton() {
  const { id, setUserData } = useContext(UserContext);
  return (
    <div>
      <div>
        <span>PostContentButton</span>
      </div>
      {id}
      <br />
      <button
        onClick={() => {
          setUserData((currentState) => ({ ...currentState, name: "Updated Name" }));
        }}
      >
        Click Me
      </button>
    </div>
  );
}
