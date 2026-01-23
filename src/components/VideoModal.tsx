import { X, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
}

const VideoModal = ({ isOpen, onClose, studentName }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-none">
        <DialogClose className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
          <X className="h-5 w-5 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        {/* Video placeholder - replace with actual video when available */}
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse">
            <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
          </div>
          <p className="text-white/80 text-lg font-medium mb-2">
            {studentName}'s Story
          </p>
          <p className="text-white/50 text-sm">
            Video coming soon
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
