import { useContext } from "react";
import { UserContext } from "./utils/contexts/UserContext";
import { PostContentButton } from "./PostContainer";

export function PostContent() {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <h3>PostContent</h3>
      </div>
      <div>
        <PostContentButton />
        {userContextData.email}
      </div>
    </div>
  );
}
