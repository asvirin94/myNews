import styles from "./styles.module.css";
import FormattedDate from "../date/date";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [actualDate, setActualDate] = useState(new Date());

  setTimeout(() => {
    setActualDate(new Date());
  }, 30000);
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>The News</div>
      <div className={styles.dateContainer}>
        <FormattedDate date={actualDate} />
      </div>
    </header>
  );
}
