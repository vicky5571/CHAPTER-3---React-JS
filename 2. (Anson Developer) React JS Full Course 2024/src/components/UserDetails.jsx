/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <div data-testid={`user-details-${user.id}`}>
      <div>
        <button
          data-testid={`edit-btn-${user.id}`}
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button
          data-testid={`delete-btn-${user.id}`}
          onClick={() => {
            setUsers((currentUsersState) => {
              return currentUsersState.filter((currentUser) => currentUser.id !== user.id);
            });
          }}
        >
          Delete
        </button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) => (currentUser.id === user.id ? { ...currentUser, username, email } : currentUser));
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>ID: </b>
        <span>{user.id}</span>
        <br />
        {isEditing ? <label htmlFor="username">Username:</label> : <b>Username:</b>}
        {isEditing ? (
          <input
            aria-label="username"
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        {isEditing ? <label htmlFor="email">Email:</label> : <b>Email:</b>}
        {isEditing ? (
          <input
            aria-label="email"
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        ) : (
          <span>{user.email}</span>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  setUsers: PropTypes.func.isRequired,
};
