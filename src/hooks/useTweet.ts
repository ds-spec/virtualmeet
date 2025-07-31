"use client";

import { TweetContext } from "@/context/TweetContext";
import { useContext } from "react";

export default function useTweet() {
  const context = useContext(TweetContext);
  if (!context) {
    throw new Error("useTweet must be used within a TweetProvider");
  }
  return context;
}
