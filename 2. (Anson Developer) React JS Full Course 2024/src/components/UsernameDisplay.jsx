import { useEffect, useState } from "react";

export function UsernameDisplay({ username }) {
  const [timerPassed, setTimerPassed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimerPassed(true);
    }, 5000);
  }, []);

  return (
    <div>
      <span>{timerPassed && username}</span>
    </div>
  );
}
