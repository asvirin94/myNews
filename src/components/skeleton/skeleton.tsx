import styles from "./styles.module.css";
import Card from "../card/card";
import HorizontalCard from "../horizontal-card/horizontal-card";
import VerticalCard from "../vertical-card/vertical-card";

export default function Skeleton(): JSX.Element {

  return (
    <section className={styles.news}>
      <div className={styles.topHorizontalCard}>
        <HorizontalCard/>
      </div>
      <div className={styles.firstCard}>
        <Card/>
      </div>
      <div className={styles.secondCard}>
        <Card/>
      </div>
      <div className={styles.thirdCard}>
        <Card/>
      </div>
      <div className={styles.botHorizontalCard}>
        <HorizontalCard/>
      </div>
      <div className={styles.verticalCard}>
        <VerticalCard/>
      </div>
    </section>
  );
}
