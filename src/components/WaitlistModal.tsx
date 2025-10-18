import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Check } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: Array<{ name: string; image: string; price: string }>;
  onSuccess: () => void;
}

const WaitlistModal = ({ isOpen, onClose, selectedProducts, onSuccess }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate form submission
    toast.success("Welcome to the waitlist! Check your email for confirmation.", {
      description: "You'll receive 50% off when we launch your selected shoes.",
    });
    
    setFormData({ name: "", email: "" });
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold uppercase tracking-tight">
            Join the Waitlist
          </DialogTitle>
          <p className="text-muted-foreground mt-2">
            Get 50% off these exclusive shoes when we launch
          </p>
        </DialogHeader>

        <div className="mt-6">
          {/* Selected Products */}
          {selectedProducts.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Your Selection</h3>
              <div className="grid grid-cols-2 gap-4">
                {selectedProducts.map((product) => (
                  <div key={product.name} className="flex items-center gap-3 bg-secondary p-3 rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold text-sm">{product.name}</p>
                      <p className="text-xs text-muted-foreground line-through">{product.price}</p>
                      <p className="text-sm text-primary font-bold">
                        50% OFF at Launch
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
              />
            </div>

            <div className="bg-secondary p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  By joining, you'll be first to know when we launch and receive an exclusive 50% discount code for your selected shoes.
                </p>
              </div>
            </div>

            <Button type="submit" variant="cta" size="lg" className="w-full">
              Join Waitlist
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
