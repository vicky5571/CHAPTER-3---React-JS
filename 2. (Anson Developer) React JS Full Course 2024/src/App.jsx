/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./components/utils/hooks/contexts/UserContext";
import { PostContentButton } from "./components/utils/hooks/contexts/UserContext";

export default function App() {
  const [userData, setUserData] = useState({
    id: 1,
    username: "Vicky",
    email: "vicky@gmail.com",
    displayName: "Vicky5571",
  });
  return (
    <div>
      <>
        <UserContext.Provider value={{ ...userData, setUserData }}>
          <div>
            <PostContainer />
          </div>
        </UserContext.Provider>
        <PostContentButton />
      </>
    </div>
  );
}
