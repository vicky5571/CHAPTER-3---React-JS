import { useContext } from "react";
// import { UserContext } from "./utils/hooks/contexts/UserContext";
import { UserContext } from "./utils/contexts/UserContext";
export function PostContentButton() {
  const { id, setUserData } = useContext(UserContext);
  const { value, setValue } = useState("");
  return (
    <div>
      <div>
        <span>PostContentButton</span>
      </div>
      {id}
      <br />
      <label htmlFor="updateName">Update Name:</label>
      <input id="updateName" value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          setUserData((currentState) => ({ ...currentState, name: value }));
        }}
      >
        Save Display Name
      </button>
    </div>
  );
}
