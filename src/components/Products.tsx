import { useEffect, useRef, useState } from "react";
import oxford from "@/assets/oxford.jpg";
import derby from "@/assets/derby.jpg";
import monk from "@/assets/monk.jpg";
import loafers from "@/assets/loafers.jpg";
import heels from "@/assets/heels.jpg";
import boots from "@/assets/boots.jpg";
import { Check } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

export const products = [
  { name: "Oxford", image: oxford, price: "$450" },
  { name: "Derby", image: derby, price: "$420" },
  { name: "Monk Strap", image: monk, price: "$480" },
  { name: "Loafers", image: loafers, price: "$390" },
  { name: "Heels", image: heels, price: "$520" },
  { name: "Classic Boots", image: boots, price: "$580" },
];

interface ProductsProps {
  selectedProducts: string[];
  onProductClick: (product: { name: string; image: string; price: string }) => void;
}

const Products = ({ selectedProducts, onProductClick }: ProductsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold uppercase mb-4 text-foreground tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SplitText text="Featured Collection" />
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Timeless elegance meets modern craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const isSelected = selectedProducts.includes(product.name);
            return (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isSelected ? 'ring-4 ring-primary' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => onProductClick(product)}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
              )}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onProductClick(product);
                  }}
                  className="text-white border-2 border-white px-8 py-3 rounded-md uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  View Details
                </button>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold uppercase tracking-wide mb-2 text-foreground">
                  {product.name}
                </h3>
                <p className="text-lg text-primary font-bold">{product.price}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
