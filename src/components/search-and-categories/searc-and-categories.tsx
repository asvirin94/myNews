import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  decPageNumber,
  incPageNumber,
  selectCategory,
  setKeywords,
  setPageNumber,
} from "../../store/actions";
import styles from "./styles.module.css";

export default function SearchAndCategories(): JSX.Element {
  const [inputValue, setInputValue] = useState("");

  const categories = useAppSelector((state) => state.categories);
  const params = useAppSelector((state) => state.paramsForFetch);
  const className = (category: string) =>
    category === params.selectedCategory
      ? styles.activeCategory
      : styles.category;
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <nav className={styles.nav}>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        dispatch(setKeywords(inputValue))}
      }>
        <input
          className={styles.input}
          type="text"
          placeholder="Search themes here"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
      </form>

      <div className={styles.paggination}>
        <button
          className={styles.pagButton}
          onClick={() => dispatch(decPageNumber())}
          disabled={1 === params.page_number}
        >
          {"<"}
        </button>
        {[1, 2, 3, 4, 5].map((number) => {
          return (
            <button
              className={styles.pagButton}
              onClick={() => dispatch(setPageNumber(number))}
              disabled={number === params.page_number}
            >
              {number.toString()}
            </button>
          );
        })}
        <button
          className={styles.pagButton}
          onClick={() => dispatch(incPageNumber())}
          disabled={5 === params.page_number}
        >
          {">"}
        </button>
      </div>
      <div className={styles.categories}>
        {categories.map((category) => {
          return (
            <div
              key={category}
              className={className(category)}
              onClick={() => {
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
