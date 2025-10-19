import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { addToWaitlist } from "@/lib/firebaseService";
import { trackEvent } from "@/hooks/useAnalytics";
import { Check, X, Plus } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: Array<{ name: string; images: string[]; price: string, discounted: string }>;
  onSuccess: () => void;
  onRemoveProduct: (productName: string) => void;
  onAddProducts: () => void;
}

const WaitlistModal = ({ isOpen, onClose, selectedProducts, onSuccess, onRemoveProduct, onAddProducts }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await addToWaitlist({
        name: formData.name,
        email: formData.email,
        selectedProducts,
      });

      if (result.success) {
        trackEvent('waitlist_signup', {
          products_count: selectedProducts.length,
          products: selectedProducts.map(p => p.name),
        });

        toast.success("Welcome to the waitlist!", {
          description: "You'll receive 50% off when we launch your selected shoes.",
        });
        
        setFormData({ name: "", email: "" });
        onSuccess();
        onClose();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (!formData.name || !formData.email) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }

  //   // Simulate form submission
  //   toast.success("Welcome to the waitlist!", {
  //     description: "You'll receive 50% off when we launch your selected shoes.",
  //   });
    
  //   setFormData({ name: "", email: "" });
  //   onSuccess();
  //   onClose();
  // };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold uppercase tracking-tight">
            Join the Waitlist
          </DialogTitle>
          <p className="text-muted-foreground mt-2">
            Get 50% off for the shoes you reserve
          </p>
        </DialogHeader>

        <div className="mt-6">
          {/* Selected Products */}
          {selectedProducts.length > 0 ? (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide">Your Selection</h3>
               {selectedProducts.length < 2 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      onAddProducts();
                      onClose();
                    }}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add More
                  </Button>
                )}
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProducts.map((product) => (
                    <div key={product.name} className=" flex items-center gap-3 bg-secondary p-3 rounded-lg relative">
                   
                    <button
                      onClick={() => onRemoveProduct(product.name)}
                      className="absolute top-2 right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 flex items-center justify-center transition-colors"
                      aria-label="Remove product"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold text-sm">{product.name}</p>
                      <p className="text-xs text-muted-foreground line-through inline">{product.price} </p>
                      <p className="text-xs text-muted-foreground inline whitespace-nowrap">  {product.discounted}</p>
                      <p className="text-sm text-primary font-bold">
                        50% OFF at Launch
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ):(
            <div className="mb-6 p-6 bg-secondary rounded-lg text-center">
              <p className="text-muted-foreground mb-4">No products selected yet</p>
              <Button
                variant="outline"
                onClick={() => {
                  onAddProducts();
                  onClose();
                }}
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Browse Products
              </Button>
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
                  By joining, you'll be first to know when we launch and receive an exclusive 50% discount code for your selected shoes. We promise not to spam or share your data
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
