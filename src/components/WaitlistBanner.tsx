import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface WaitlistBannerProps {
  selectedCount: number;
  onOpenWaitlist: () => void;
}

const WaitlistBanner = ({ selectedCount, onOpenWaitlist }: WaitlistBannerProps) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-primary text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          <span className="font-semibold">
            {selectedCount} {selectedCount === 1 ? "shoe" : "shoes"} selected
          </span>
        </div>
        <Button
          onClick={onOpenWaitlist}
          variant="outline"
          size="sm"
          className="bg-white text-primary hover:bg-white/90 border-0"
        >
          Join Waitlist (50% OFF)
        </Button>
      </div>
    </div>
  );
};

export default WaitlistBanner;
