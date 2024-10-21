import { useContext } from "react";
import { UserContext } from "./utils/hooks/contexts/UserContext";
import { PostContentButton } from "./PostContainer";

export function PostContent() {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <span>PostContent</span>
      </div>
      <div>
        <PostContentButton />
        {userContextData.email}
      </div>
    </div>
  );
}
