import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_URL } from "../consts";

export const selectCategory = createAction("selectCategory", (category) => {
  return {
    payload: category,
  };
});

export const setNews = createAction("setNews", (news) => {
  return {
    payload: news,
  };
});

export const loadNewsAction = createAsyncThunk<
  void,
  { selectedCategory: string; page_size?: number; page_number?: number; keywords?: string}
>("loadNews", async (params, { dispatch }) => {
  const { selectedCategory, page_size, page_number, keywords } = params;
  try {
    dispatch(changeNewsLoadingStatusAction(false));
    const {
      data: { news },
    } = await axios.get(`${API_URL}search`, {
      params: {
        apiKey: API_KEY,
        category: selectedCategory === "all" ? null : selectedCategory,
        page_size,
        page_number,
        keywords
      },
    });

    dispatch(setNews(news));
    dispatch(changeNewsLoadingStatusAction(true));
    dispatch(setFirstTimeLoaded());
  } catch (error) {
    console.log(error);
  }
});

export const changeNewsLoadingStatusAction = createAction(
  "changeNewsLoadingStatusAction",
  (status) => {
    return {
      payload: status,
    };
  }
);

export const setPageNumber = createAction("setPageNumber", (number) => {
  return {
    payload: number,
  };
});

export const decPageNumber = createAction("decPageNumber");

export const incPageNumber = createAction("incPageNumber");

export const setKeywords = createAction("setKeywords", (word) => {
  return {
    payload: word,
  };
});

export const goToFirstPage = createAction('goToFirstPage');

export const goToLastPage = createAction('goToLastPage');

export const setFirstTimeLoaded = createAction('setFirstTimeLoaded');