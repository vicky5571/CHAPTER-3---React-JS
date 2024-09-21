import { createElement } from "react";

export function UserFavoriteFood() {
  return createElement(
    "section",
    {},
    <span>Favorite Food: </span>,
    <br />,
    <ul>
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Ramen</li>
    </ul>
  );
}
