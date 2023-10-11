import styles from "./styles.module.css";
import Card from "../card/card";
import HorizontalCard from "../horizontal-card/horizontal-card";
import VerticalCard from "../vertical-card/vertical-card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loadNewsAction } from "../../store/actions";
import {useEffect} from 'react';

export default function News(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.paramsForFetch);

  useEffect(() => {
    dispatch(loadNewsAction(params))
  }, [params])

  const news = useAppSelector((state) => state.news);

  return (
    <section className={styles.news}>
      <div className={styles.topHorizontalCard}>
        <HorizontalCard news={news[0]}/>
      </div>
      <div className={styles.firstCard}>
        <Card news={news[1]}/>
      </div>
      <div className={styles.secondCard}>
        <Card news={news[2]}/>
      </div>
      <div className={styles.thirdCard}>
        <Card news={news[3]}/>
      </div>
      <div className={styles.botHorizontalCard}>
        <HorizontalCard news={news[4]}/>
      </div>
      <div className={styles.verticalCard}>
        <VerticalCard news={news[5]}/>
      </div>
    </section>
  );
}
