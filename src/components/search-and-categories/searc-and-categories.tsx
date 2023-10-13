import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  decPageNumber,
  goToFirstPage,
  goToLastPage,
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
  const pagesNumberCount = useAppSelector((state) => state.pagesNumber);
  const pageNumbersArr = Array.from(
    { length: pagesNumberCount },
    (_, index) => index + 1
  );
  const numbersForPag =
    params.page_number < 4
      ? pageNumbersArr.slice(0, 5)
      : params.page_number < 29
      ? pageNumbersArr.slice(params.page_number - 3, params.page_number + 2)
      : pageNumbersArr.slice(25);

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
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setKeywords(inputValue));
        }}
      >
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
          onClick={() => dispatch(goToFirstPage())}
          disabled={1 === params.page_number}
        >
          {"<<"}
        </button>
        <button
          className={styles.pagButton}
          onClick={() => dispatch(decPageNumber())}
          disabled={1 === params.page_number}
        >
          {"<"}
        </button>
        {numbersForPag.map((number) => {
          return (
            <button
              className={`${styles.pagButton} ${
                params.page_number === number ? styles.activePagButton : ""
              }`}
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
          disabled={30 === params.page_number}
        >
          {">"}
        </button>
        <button
          className={styles.pagButton}
          onClick={() => dispatch(goToLastPage())}
          disabled={30 === params.page_number}
        >
          {">>"}
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
