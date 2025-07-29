"use client";

import { Send } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 items-center mt-32">
      <h1 className="text-5xl font-bold text-white">
        What can I help you refine?
      </h1>
      {/* <div className="flex flex-col justify-between w-4xl h-28 bg-gradient-to-r from-[#222a2b] to-[#1D2020] border border-[#595a5a] rounded-xl px-4 py-2">
        <input
          type="text"
          placeholder="Paste your tweet"
          className="text-neutral-100 text-sm outline-none py-3"
        />
        <div className="flex justify-between items-center">
          <Select>
            <SelectTrigger className="shadow-[inset_0px_1px_2px_3px_rgba(255,255,255,0.1)] hover:bg-[#7f7f7f] cursor-pointer text-white font-bold border-gray-500 px-6 py-0.5">
              <SelectValue className="text-white" placeholder="Casual" />
            </SelectTrigger>
          </Select>
        </div>
      </div> */}
      <div className="flex flex-col justify-between backdrop-blur-xl w-[60vw] bg-gradient-to-r from-[#222a2b] to-[#1D2020] rounded-2xl border border-gray-500 px-4 py-3">
        <Textarea
          placeholder="Paste your tweet"
          className="w-full resize-none border-0 focus:!ring-transparent focus:border-none focus:outline-none shadow-none font-medium dark:bg-transparent"
          rows={1}
        />
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="btn border-gray-600 dark:text-white !text-center cursor-pointer focus:outline-none rounded-lg backdrop-blur-lg">
                <SelectValue placeholder="Casual" className="dark:text-white" />
              </SelectTrigger>
              <SelectContent className="bg-gray-400 bg-opacity-20 backdrop-blur-lg border dark:border-white/20">
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
              <SelectTrigger className="btn border-gray-600 dark:text-white px-5 cursor-pointer">
                <SelectValue placeholder="Formatting" className="" />
              </SelectTrigger>
              <SelectContent className="bg-gray-400 bg-opacity-20 backdrop-blur-lg border dark:border-white/20">
                <SelectGroup>
                  <SelectItem value="formatting">Formatting</SelectItem>
                  <SelectItem value="improving">Improving</SelectItem>
                  <SelectItem value="correcting">Correcting</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="bg-transparent border border-white/20 p-2 rounded-lg dark:hover:bg-neutral-600/20 cursor-pointer transition-colors duration-300">
            <Send size={"1.2em"} />
          </div>
        </div>
      </div>
    </div>
  );
}
