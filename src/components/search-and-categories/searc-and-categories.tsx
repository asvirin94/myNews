import {  useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectCategory } from "../../store/actions";
import styles from "./styles.module.css";

export default function SearchAndCategories(): JSX.Element {
  const categories = useAppSelector((state) => state.categories);
  const params = useAppSelector((state) => state.paramsForFetch);
  const className = (category: string) => category === params.selectedCategory ? styles.activeCategory : styles.category;
  const dispatch = useAppDispatch();
  
  return (
    <nav className={styles.nav}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search themes here"
      />
      <div className={styles.paggination}></div>
      <div className={styles.categories}>
        {categories.map((category) => {
          return (
            <div
              key={category}
              className={className(category)}
              onClick={() =>  {
                dispatch(selectCategory(category));
              }}
            >
              {category}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
