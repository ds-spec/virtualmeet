"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 items-center mt-32">
      <h1 className="text-5xl font-bold dark:text-white">
        What can I help you refine?
      </h1>
      <div className="flex flex-col justify-between backdrop-blur-xl w-[62vw] rounded-2xl border dark:border-white/40 border-black/40 px-4 py-3 bg-white/10">
        <Textarea
          placeholder="Paste your tweet"
          className="relative z-50 w-full resize-none border-0 focus:!ring-transparent focus:border-none focus:outline-none shadow-none font-medium dark:bg-transparent px-1"
          rows={1}
        />
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="text-utility">
                <SelectValue placeholder="Casual" className="dark:text-white" />
              </SelectTrigger>
              <SelectContent className="dark:text-white text-black backdrop-blur-lg border dark:border-white/20">
                <SelectGroup>
                  <SelectItem value="funny">Funny</SelectItem>
                  <SelectItem value="serious">Serious</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                  <SelectItem value="sarcastic">Sarcastic</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="text-utility">
                <SelectValue placeholder="Formatting" className="" />
              </SelectTrigger>
              <SelectContent className="dark:text-white text-black backdrop-blur-lg border dark:border-white/20">
                <SelectGroup>
                  <SelectItem value="formatting">Formatting</SelectItem>
                  <SelectItem value="improving">Improving</SelectItem>
                  <SelectItem value="correcting">Correcting</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="bg-transparent border dark:border-white/20 p-2 rounded-lg dark:hover:bg-neutral-600/20 cursor-pointer transition-colors duration-300 hover:bg-neutral-300/20">
            <Send size={"1.1em"} />
          </div>
        </div>
      </div>
    </div>
  );
}
