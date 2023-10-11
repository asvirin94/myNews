import { createReducer } from "@reduxjs/toolkit"
import { setNews, changeNewsLoadingStatusAction, selectCategory} from './actions';
import { NewsType } from "../types";

export type initialStateType = {
    news: NewsType[];
    areNewsloaded: boolean;
    categories: string[];
    paramsForFetch: {
        selectedCategory: string;
        page_size: number;
        page_number: number;
    }    
}

const initialState: initialStateType = {
    news: [],
    areNewsloaded: false,
    categories: ['all', 'world', 'science', 'finance', 'sports', 'celebrity', 'culture'],
    paramsForFetch: {
        selectedCategory: 'all',
        page_size: 6,
        page_number: 1
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
})