import Header from "../../components/header/header";
import styles from "./styles.module.css";
import SearchAndCategories from "../../components/search-and-categories/searc-and-categories";
import News from "../../components/news/news";

export default function MainPage(): JSX.Element {
  return (
    <div className={styles.main}>
      <Header />
      <SearchAndCategories />
      <News />
    </div>
  );
}
