import { LoginModalProps } from "@/types/LoginModalProps";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function LoginModal({ onClose, showLoginModal }: LoginModalProps) {
  return (
    <Dialog open={showLoginModal} onOpenChange={(open) => {
      if (!open) {
        onClose()
      }
    }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}