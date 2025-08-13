// "use client";

// import { TypewriterProps } from "@/types/Typewriter";
// import { useEffect, useState } from "react";
// import { ShineBorder } from "./ui/shine-border";

// export default function Typewriter({ text, speed = 50 }: TypewriterProps) {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   useEffect(() => {
//     if (currentIndex < text.length) {
//       const timer = setTimeout(() => {
//         setDisplayedText(prev => prev + text[currentIndex])
//         setCurrentIndex(prev => prev + 1)
//       }, speed)
//       return () => clearTimeout(timer);
//     }
//   }, [currentIndex, text, speed]);
//   useEffect(() => {
//     setDisplayedText('')
//     setCurrentIndex(0)
//   }, [text])
//   return (
//     <div className="relative w-full overflow-hidden whitespace-pre-wrap py-4 px-6">
//       <ShineBorder className="text-sm w-full  bg-white/10 backdrop-blur-lg overflow-hidden rounded-lg border dark:md:shadow-xl" shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
//       {displayedText}
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { ShineBorder } from './ui/shine-border';


interface TypeWriterProps {
  text: string;
  speed?: number;
}

export default function TypeWriter({ text, speed = 50 }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  return (
    <div className="relative rounded-lg py-4 px-5 backdrop-blur-lg bg-white/10 dark:shadow-xl whitespace-pre-wrap">
      <ShineBorder
        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      />
      <span className=''>{displayedText}</span>
    </div>
  );
} 