"use client";

import { TypewriterProps } from "@/types/Typewriter";
import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);
  return <div>{displayedText}</div>;
}
