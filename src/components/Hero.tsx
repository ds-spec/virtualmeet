"use client";

import useTweet from "@/hooks/useTweet";
import { Send } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import Profile from "./Profile";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import LoginModal from "./login-modal";

export default function Hero() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showLoginModal, setShowLoginModal] = useState(false)
  const { data: session } = useSession();
  const adjustTextAreaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  const { tweet, setTweet } = useTweet();

  const handleGenerate = async () => {
    if (!session) {
      setShowLoginModal(true)
      return;
    }
  }

  return (
    <main className="flex flex-col gap-8 items-center mt-32 w-full px-2">
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} showLoginModal={showLoginModal} />}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight dark:text-white">
        What can I help you refine?
      </h1>
      <Profile />
      <div className="flex flex-col justify-between backdrop-blur-xl w-full sm:w-full md:w-[85vw] lg:w-[80vw] xl:w-[62vw] rounded-lg border dark:border-white/40 border-black/40 px-4 py-3 bg-white/10">
        <Textarea
          ref={textareaRef}
          placeholder="Paste your tweet"
          value={tweet}
          onChange={(e) => {
            setTweet(e.target.value);
            adjustTextAreaHeight();
          }}
          className="relative z-50 w-full resize-none border-0 focus:!ring-transparent focus:border-none focus:outline-none shadow-none font-medium dark:bg-transparent px-1 text-sm lg:text-md"
          rows={1}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="text-utility">
                <SelectValue
                  placeholder="Casual"
                  className="dark:text-white text-sm md:text-md lg:text-lg"
                />
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
                <SelectValue
                  placeholder="Formatting"
                  className="text-sm md:text-md lg:text-lg"
                />
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
    </main>
  );
}
