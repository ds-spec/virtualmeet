"use client";

import { Select, SelectTrigger, SelectValue } from "./ui/select";
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
      <div className="flex flex-col justify-between backdrop-blur-xl w-4xl bg-gradient-to-r from-[#222a2b] to-[#1D2020] rounded-2xl border border-gray-500 text-white px-3 py-2">
        <Textarea
          placeholder="Paste your tweet"
          className="w-full resize-none border-none focus:outline-none focus:ring-0 focus:border-transparent font-medium text-white"
          rows={1}
        />
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="btn border-gray-600 px-5">
              <SelectValue placeholder="Casual" />
            </SelectTrigger>
          </Select>
          <Select>
            <SelectTrigger className="btn border-gray-600 placeholder-white px-5">
              <SelectValue placeholder="Funny" className="" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="flex items-center justify-between"></div>
      </div>
    </div>
  );
}
