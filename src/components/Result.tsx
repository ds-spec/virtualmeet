import useResult from "@/hooks/useResult";
import { ResultProps } from "@/types/ResultProps";
import Image from "next/image";
import { ShinyButton } from "./ui/shiny-button";
import { Clipboard, Heart, TwitterIcon, WandSparkles, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// { improvePrompt, isImprovingField, setImprovePrompt, handleRegenerate, copyToClipboard }: ResultProps

export default function Result({ improvePrompt, isImprovingField, setImprovePrompt, handleRegenerate, copyToClipboard }: ResultProps) {
  const { result } = useResult()
  return (
    <div className={`flex flex-col gap-2 w-full p-3 ${result ? 'block' : 'hidden'}`}>
      <div className="flex justify-end gap-2 relative">
        <input onChange={(e) => setImprovePrompt(e.target.value)} type="text" value={improvePrompt} placeholder="Follow up" className={`text-white text-xs ${isImprovingField ? 'w-[30vw] border dark:border-white/20' : 'w-[30vw]'} bg-white/10 rounded-lg backdrop-blur-lg transition-all duration-100 dark:focus:border-white/20 focus:outline-none px-3`} />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ShinyButton className="p-2 hover:scale-110 cursor-pointer transition-all duration-300">
                <WandSparkles size={'0.9em'} />
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
              <button className="p-2 hover:scale-105 cursor-pointer border hover:border-white/40 rounded-sm transition-all duration-300 bg-white/10 backdrop-blur-lg before:bg-white/5 shadow-xl">
                <Heart fill="#fff" size={'0.9em'} />
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
              <button className="p-2 hover:scale-105 cursor-pointer border hover:border-white/40 rounded-sm transition-all duration-300 bg-white/10 backdrop-blur-lg before:bg-white/5 shadow-xl">
                <TwitterIcon size={'0.9em'} />
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
              <button className="p-2 hover:scale-105 cursor-pointer border hover:border-white/40 rounded-sm transition-all duration-300 bg-white/10 backdrop-blur-lg before:bg-white/5 shadow-xl">
                <Clipboard size={'0.9em'} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}