/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useContext } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "./utils/hooks/contexts/UserContext";

export function PostContainer() {
  const [data, setData] = useState("hellow");
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <span>PostContainer</span>
      </div>
      <div>{userContextData.displayName}</div>
      <PostContent data={data} />
    </div>
  );
}
