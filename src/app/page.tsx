"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootState } from "@/store";
import { fetchBooks } from "@/store/slices/books";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books);
  const { data, status, error } = books;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {data.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
