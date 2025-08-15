"use client";
import useResult from "@/hooks/useResult";
import { ResultProps } from "@/types/ResultProps";
import Image from "next/image";
import { ShinyButton } from "./ui/shiny-button";
import { Clipboard, Heart, TwitterIcon, WandSparkles, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import TypeWriter from "./Typewriter";

// { improvePrompt, isImprovingField, setImprovePrompt, handleRegenerate, copyToClipboard }: ResultProps

export default function Result({
  improvePrompt,
  isImprovingField,
  setImprovePrompt,
  handleRegenerate,
  copyToClipboard,
}: ResultProps) {
  const { result } = useResult();
  console.log(result, "Result");
  return (
    <section
      className={`flex flex-col gap-2 w-full p-3 ${
        result ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end gap-2 relative">
        <input
          onChange={(e) => setImprovePrompt(e.target.value)}
          type="text"
          value={improvePrompt}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleRegenerate();
            }
          }}
          placeholder="Follow up"
          className={`text-white text-xs ${
            isImprovingField
              ? "w-[30vw] border dark:border-white/20 px-3"
              : "w-0"
          } bg-white/5 rounded-lg backdrop-blur-lg transition-all duration-100 dark:focus:border-white/20 focus:outline-none `}
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ShinyButton
                onClick={handleRegenerate}
                className="p-2 hover:scale-105 cursor-pointer border hover:dark:border-white/40 rounded-sm transition-all duration-300 bg-white/5 backdrop-blur-lg before:bg-white/5 shadow-lg"
              >
                <WandSparkles size={"0.9em"} />
              </ShinyButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow up</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button className="p-2 hover:scale-105 cursor-pointer border hover:dark:border-white/40 rounded-sm transition-all duration-300 bg-white/5 backdrop-blur-lg before:bg-white/5 shadow-lg">
                <Heart fill="#fff" size={"0.9em"} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button className="p-2 hover:scale-105 cursor-pointer border hover:dark:border-white/40 rounded-sm transition-all duration-300 bg-white/5 backdrop-blur-lg before:bg-white/5 shadow-lg">
                <TwitterIcon size={"0.9em"} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on X</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button className="p-2 hover:scale-105 cursor-pointer border hover:dark:border-white/40 rounded-sm transition-all duration-300 bg-white/5 backdrop-blur-lg before:bg-white/5 shadow-lg">
                <Clipboard size={"0.9em"} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <TypeWriter text={result} speed={30} />
    </section>
  );
}
