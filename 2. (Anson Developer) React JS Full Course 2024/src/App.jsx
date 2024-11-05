/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./components/utils/contexts/UserContext";
// import { PostContentButton } from "./components/utils/contexts/PostContentButton";
import { PostContentButton } from "./components/PostContentButton";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserDetails } from "./components/UserDetails";
import { useFetchUser } from "./components/utils/hooks/useFetchUser";

export default function App({ usersData }) {
  const { user, loading, error } = useFetchUser(2);
  // console.log(user, loading, error);
  // const navigate = useNavigate();

  const [userData, setUserData] = useState();
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    if (!loading && !error && user) {
      setUserData(user);
      // navigate("/users");
    }
  }, [loading, error, user]);
  return (
    <>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/blog-posts">Blogs</Link>
          </li>
        </ul>
      </nav>

      <div>
        <label htmlFor="data">Enter Data</label>
        <input
          type="text"
          id="data"
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value > 10) {
              navigate("/blog-posts", {
                state: {
                  posts: [
                    {
                      id: 1,
                      title: "Hellow World",
                      content: "Welcome to my first post",
                    },
                  ],
                },
              });
            }
          }}
        />
      </div/> */}

      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>{loading ? "Loading..." : <PostContainer />}</div>
      </UserContext.Provider>
      <PostContentButton />
      <Outlet />
    </>
  );
}
