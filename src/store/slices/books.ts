import { API_URL } from "@/constants";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface Book {
  title: string;
}

interface BookState {
  data: Book[];
  status: string;
  error?: string;
}

const initialState: BookState = {
  data: [],
  status: "idle",
};

const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const url = API_URL + "books";
  const response = await fetch(url);
  const newBooks: Book[] = await response.json();
  return newBooks;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    refreshBook: (state) => {},
    addBook: (state, action: PayloadAction<Book>) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch books";
      });
  },
});

export { fetchBooks, booksSlice };
