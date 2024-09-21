import { createElement } from "react";
import styles from "./users.module.scss";

export function UserFavoriteFood() {
  return createElement(
    "section",
    {},
    <span className={styles.foodsTitle}>Favorite Food: </span>,
    <br />,
    <ul>
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Ramen</li>
    </ul>
  );
}
