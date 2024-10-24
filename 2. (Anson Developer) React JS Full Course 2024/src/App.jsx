/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./components/utils/contexts/UserContext";
import { PostContentButton } from "./components/utils/contexts/UserContext";
import { Outlet } from "react-router-dom";

export default function App() {
  const { user, loading, error } = useFetchUser(2);
  console.log(user, loading, error);

  useEffect(() => {
    if (!loading && !error && user) setUserData(user);
  }, [loading, error, user]);
  return (
    <div>
      <>
        <nav>
          <ul>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="/blog-posts">Blogs</a>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{ ...userData, setUserData }}>
          <div>{loading ? "Loading..." : <PostContainer />}</div>
        </UserContext.Provider>
        <PostContentButton />
        <Outlet />
      </>
    </div>
  );
}
