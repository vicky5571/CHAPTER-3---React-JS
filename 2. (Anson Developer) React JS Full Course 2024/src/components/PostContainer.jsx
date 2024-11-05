/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useContext, useState } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "./utils/contexts/UserContext";

export function PostContainer() {
  const [data, setData] = useState("hellow");
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <span>PostContainer</span>
      </div>
      <div>Display Name: {userContextData.name}</div>
      <div>ID: {userContextData.id}</div>
      <div>Email: {userContextData.email}</div>
      <div>Username: {userContextData.username}</div>
      {/* <PostContent data={data} /> */}
    </div>
  );
}
