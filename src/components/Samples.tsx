'use client'
import { ArrowUpRight } from "lucide-react";
import { samples } from "../../constants/samples";
import useTweet from "@/hooks/useTweet";

export default function Samples() {
  const { setTweet } = useTweet()
  return <div className="flex items-center justify-center mt-10 gap-4">
    {samples.map((sample, idx) => (
      <button key={idx} className="flex items-center gap-3 border dark:border-white/30 dark:hover:bg-white/10 hover:bg-black/10 transition-colors duration-300 backdrop-blur-lg cursor-pointer rounded-full px-3 py-1" onClick={() => setTweet(sample)}>
        <h3 className="text-[11px] font-bold">{sample}</h3>
        <ArrowUpRight size={"1em"} />
      </button>
    ))}
  </div>
}