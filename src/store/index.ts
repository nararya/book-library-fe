import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "./slices/books";

const makeStore = () =>
  configureStore({
    reducer: {
      books: booksSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export { makeStore };
