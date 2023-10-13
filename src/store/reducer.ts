import { createReducer } from "@reduxjs/toolkit"
import { setNews, changeNewsLoadingStatusAction, selectCategory, setPageNumber, incPageNumber, decPageNumber, setKeywords, goToLastPage, goToFirstPage, setFirstTimeLoaded} from './actions';
import { NewsType } from "../types";

export type initialStateType = {
    news: NewsType[];
    isFirstTimeLoaded: boolean;
    areNewsloaded: boolean;
    categories: string[];
    pagesNumber: number;
    paramsForFetch: {
        selectedCategory: string;
        page_size: number;
        page_number: number;
        keywords: string
    }    
}

const initialState: initialStateType = {
    news: [],
    isFirstTimeLoaded: false,
    areNewsloaded: false,
    pagesNumber: 30,
    categories: ['all', 'world', 'science', 'finance', 'sports', 'celebrity', 'culture'],
    paramsForFetch: {
        selectedCategory: 'all',
        page_size: 6,
        page_number: 1,
        keywords: ''
    }
}

export const reducer = createReducer(initialState, (builder) => {
    builder   
        .addCase(selectCategory, (state, action) => {
            state.paramsForFetch.selectedCategory = action.payload;
        })
        .addCase(setNews, (state, action) => {
            state.news = action.payload;
        })
        .addCase(changeNewsLoadingStatusAction, (state, action) => {
            state.areNewsloaded = action.payload;
        })
        .addCase(setPageNumber, (state, action) => {
            state.paramsForFetch.page_number = action.payload;
        })
        .addCase(incPageNumber, (state) => {
            state.paramsForFetch.page_number = state.paramsForFetch.page_number + 1;
        })
        .addCase(decPageNumber, (state) => {
            state.paramsForFetch.page_number = state.paramsForFetch.page_number - 1;
        })
        .addCase(setKeywords, (state, action) => {
            state.paramsForFetch.keywords = action.payload;
        })
        .addCase(goToLastPage, (state) => {
            state.paramsForFetch.page_number = state.pagesNumber;
        })
        .addCase(goToFirstPage, (state) => {
            state.paramsForFetch.page_number = 1;
        })
        .addCase(setFirstTimeLoaded, (state) => {
            state.isFirstTimeLoaded = true;
        })
})