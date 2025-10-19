import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import WaitlistBanner from "@/components/WaitlistBanner";
import { Check, X } from "lucide-react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    images: string [];
    inclusions: string[];
    exclusions: string[];
    price: string;
    discounted?: string;
    description?: string;
  } | null;
  isSelected: boolean;
  onToggleSelect: () => void;
  canSelect: boolean;
  onOpenWaitlist: () => void;
}

const ProductModal = ({ isOpen, onClose, product, isSelected, onToggleSelect, canSelect,onOpenWaitlist }: ProductModalProps) => {
  if (!product) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold uppercase tracking-tight">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {product.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square">
                      <img
                        src={img}
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-3xl font-bold text-primary mb-6">{product.price}
                
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">Product Details</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {/* Handcrafted with premium Italian leather, each pair represents the pinnacle of shoemaking excellence. 
                  Features cushioned insoles for all-day comfort, Goodyear welt construction for durability, and a timeless 
                  design that complements both formal and business casual attire. */}
                  {product.description || "Experience unparalleled comfort and style with our meticulously crafted shoes, designed to elevate your every step."}
                </p>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                {product.inclusions.map((inclusion: string,index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <Check className="w-4 h-4 text-primary" />
                    <span>{inclusion}</span>
                  </div>
                ))}

                {product.exclusions.map((exclusion: string,index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <X className="w-4 h-4 text-primary" />
                    <span>{exclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selection Button */}
            <div className="mt-8 space-y-4">
              {isSelected ? (
                <Button
                  onClick={onToggleSelect}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <X className="mr-2 w-5 h-5" />
                  Remove from Waitlist Selection
                </Button>
              ) : (
                <Button
                  onClick={onToggleSelect}
                  disabled={!canSelect}
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Check className="mr-2 w-5 h-5" />
                  Add to Waitlist Selection {!canSelect && "(Max 2)"}
                </Button>
              )}
              
              <button className="text-sm items-center justify-center underline w-full" onClick={onOpenWaitlist}>
                 Join our waitlist and get <span className="font-bold text-primary">50% OFF</span> when we launch 
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
