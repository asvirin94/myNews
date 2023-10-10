import {  useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { store } from "../../store";
import { loadNewsAction, selectCategory } from "../../store/actions";
import styles from "./styles.module.css";

export default function SearchAndCategories(): JSX.Element {
  const categories = useAppSelector((state) => state.categories);
  const selectedCategory = useAppSelector((state) => state.selectedCategory);
  const className = (category: string) => category === selectedCategory ? styles.activeCategory : styles.category;
  const dispatch = useAppDispatch();
  


  return (
    <nav className={styles.nav}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search themes here"
      />
      <div className={styles.categories}>
        {categories.map((category) => {
          return (
            <div
              key={category}
              className={className(category)}
              onClick={() =>  {
                dispatch(selectCategory(category));
                store.dispatch(loadNewsAction());
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
