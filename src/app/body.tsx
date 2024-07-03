"use client";

import { Inter } from "next/font/google";

import StoreProvider from "@/components/store-provider";
import { FC, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface BodyProps {
  children: ReactNode;
}

const Body: FC<BodyProps> = ({ children }) => {
  return (
    <body className={inter.className}>
      <StoreProvider>{children}</StoreProvider>
    </body>
  );
};

export default Body;
