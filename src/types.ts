import { store } from "./store";

export type StateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export type NewsType = {
    author: string,
    category: string[],
    description: string,
    id: string,
    image: string,
    language: string,
    published: string,
    title: string,
    url: string
}