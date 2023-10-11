import { NewsType } from "../../types";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { getFormatTimeAgo } from "../../utils";

type props = {
  news: NewsType;
};

export default function Card({ news }: props): JSX.Element {
  return (
    <Link to={news.url} target="_blank">
      <div className={styles.card}>
        <div className={styles.date}>{getFormatTimeAgo(news.published)}</div>
        <div className={styles.author}>{`by ${news.author}`}</div>
        <div className={styles.img} style={{backgroundImage: `url(${news.image})`, backgroundColor: 'rgb(94, 94, 94)'}}></div>
        <div className={styles.title}>{news.title.length > 100 ? news.title.slice(0, 101) : news.title}</div>
        <div className={styles.text}>{news.description.length > 100 ? `${news.description.slice(0, 100)}...` : news.description}</div>
      </div>
    </Link>
  );
}
