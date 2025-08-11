import axios from "axios";
import { useRef } from "react";

export default function CorePrompt() {
  const promptRef = useRef<HTMLTextAreaElement>(null)
  const savedCorePRompt = async () => {
    try {
      await axios.post("/api/coreprompt/save", {
        // corePrompt: promptRef.current?.value
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div></div>
    </div>
  );
}
