import { ThemeToggleButton } from "./ThemeToggleButton";
import Profile from "./Profile";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-5">
      <h3 className="dark:text-white font-bold text-xl">Flick.AI</h3>
      <div className="flex items-center gap-4">
        <ThemeToggleButton />
        <Profile />
      </div>
    </div>
  );
}
