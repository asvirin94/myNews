import { NewsType } from "../../types";
import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import { getFormatTimeAgo } from "../../utils";

type props = {
    news: NewsType
}

export default function VerticalCard({news}: props):JSX.Element {
    return (
        <Link to={news.url} target="_blank">
          <div className={styles.card}>
            <div className={styles.date}>{getFormatTimeAgo(news.published)}</div>
            <div className={styles.author}>{`by ${news.author}`}</div>
            <div className={styles.img} style={{backgroundImage: `url(${news.image})`, backgroundColor: 'rgb(94, 94, 94)'}}></div>
            <div className={styles.title}>{news.title}</div>
            <div className={styles.text}>{news.description.length > 200 ? `${news.description.slice(0, 200)}...` : news.description}</div>
          </div>
        </Link>
      );
}