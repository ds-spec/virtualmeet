import { LoginModalProps } from "@/types/LoginModalProps";
import { Chrome } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Separator } from "./ui/separator";

export default function LoginModal({ onClose, showLoginModal }: LoginModalProps) {
  return (
    <Dialog open={showLoginModal} onOpenChange={(open) => {
      if (!open) {
        onClose();
      }
    }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center mb-2">Login to continue</DialogTitle>
          <Separator />
          <DialogDescription>
            You&apos;ve reached the free tier usage limit. Sign in to unlock full access.
          </DialogDescription>
        </DialogHeader>
        <Button className="cursor-pointer" onClick={() => signIn('google')}>
          Login with Google
        </Button>
      </DialogContent>
    </Dialog>
  )
}