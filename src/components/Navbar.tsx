
import { Grip } from "lucide-react";
import { ThemeToggleButton } from "./ThemeToggleButton";

export default function Navbar() {
  return <div className="flex justify-between items-center px-8 py-5">
    <h3 className="dark:text-white font-bold text-xl">Flick.AI</h3>
    <div className="flex items-center gap-4">
      <ThemeToggleButton />
      <Grip size={"1.2em"} className="cursor-pointer dark:text-white hover:scale-110 transition-transform duration-300" />
    </div>
  </div>
}