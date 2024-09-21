/* eslint-disable react/prop-types */
import styles from "./style.module.css";

export function UserUsername(props) {
  console.log(props.username);
  return (
    <>
      <b className={styles.username}>Username: </b>
      <span>{props.username}</span>
      <br />
    </>
  );
}
