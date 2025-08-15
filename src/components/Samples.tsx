"use client";
import { ArrowUpRight } from "lucide-react";
import { samples } from "../../constants/samples";
import useTweet from "@/hooks/useTweet";
import useResult from "@/hooks/useResult";

export default function Samples() {
  const { setTweet } = useTweet();
  const { result } = useResult();
  return (
    <div className={`w-full px-4 max-w-4xl mx-auto ${result ? "hidden" : ""}`}>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center mt-10 gap-4">
        {samples.map((sample, idx) => (
          <button
            key={idx}
            className="flex items-center gap-3 border dark:border-white/30 dark:hover:bg-white/10 hover:bg-black/10 transition-colors duration-300 backdrop-blur-lg cursor-pointer rounded-full px-3 py-1"
            onClick={() => setTweet(sample)}
          >
            <h3 className="text-[11px] font-bold">{sample}</h3>
            <ArrowUpRight size={"1em"} />
          </button>
        ))}
      </div>
    </div>
  );
}
