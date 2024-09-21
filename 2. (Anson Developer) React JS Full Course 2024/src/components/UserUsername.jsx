/* eslint-disable react/prop-types */
export function UserUsername(props) {
  console.log(props.username);
  return (
    <div>
      <b>Username: </b>
      <span>{props.username}</span>
    </div>
  );
}
