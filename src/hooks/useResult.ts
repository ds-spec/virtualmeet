"use client";

import { ResultContext } from "@/context/ResultContext";
import { useContext } from "react";

export default function useResult() {
  const context = useContext(ResultContext);
  if (!context) {
    throw new Error("useResult must be used within a ResultProvider");
  }
  return context;
}
