import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_URL } from "../consts";
import { store } from ".";

export const selectCategory = createAction('selectCategory', (category) => {
  return {
    payload: category
  }
})

export const setNews = createAction("setNews", (news) => {
  return {
    payload: news
  };
});

export const loadNewsAction = createAsyncThunk("loadNews", async (_arg, {dispatch}) => {
  try {

    dispatch(changeNewsLoadingStatusAction(false));
    const { data: {news} } = await axios.get(`${API_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
        category: store.getState().selectedCategory === 'all' ? null: store.getState().selectedCategory
      },
    });

    dispatch(setNews(news));
    dispatch(changeNewsLoadingStatusAction(true));
  } catch (error) {
    console.log(error);
  }
});

export const changeNewsLoadingStatusAction = createAction('changeNewsLoadingStatusAction', (status) => {
  return {
    payload: status
  }
});

