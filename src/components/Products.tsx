import { useEffect, useRef, useState } from "react";
import black_shoe_1 from "@/assets/footwear_ad/black/black_shoe_2.png";
import black_shoe_2 from "@/assets/footwear_ad/black/black_shoe_1.png";
import black_shoe_3 from "@/assets/footwear_ad/black/black_explain.png";
import black_shoe_4 from "@/assets/footwear_ad/black/black_shoe_4.png";
import black_shoe_5 from "@/assets/footwear_ad/black/black_shoe_3.png";
import brown_shoe_2 from "@/assets/footwear_ad/dark_brown/brown_shoe_2.png";
import brown_shoe_1 from "@/assets/footwear_ad/dark_brown/brown_shoe_1.png";
import brown_shoe_3 from "@/assets/footwear_ad/dark_brown/brown_explain.png";
import brown_shoe_4 from "@/assets/footwear_ad/dark_brown/brown_shoe_4.png";
import brown_shoe_5 from "@/assets/footwear_ad/dark_brown/brown_shoe_3.png";
import tan_shoe_1 from "@/assets/footwear_ad/tan/shoe_image_4.png";
import tan_shoe_2 from "@/assets/footwear_ad/tan/shoe_image_1.png";
import tan_shoe_3 from "@/assets/footwear_ad/tan/tan_explain.png";
import tan_shoe_4 from "@/assets/footwear_ad/tan/shoe_image_3.png";
import female_black_1 from "@/assets/footwear_ad/female_black/women_shoe_4.png";
import female_black_2 from "@/assets/footwear_ad/female_black/women_shoe_2.png";
import female_black_3 from "@/assets/footwear_ad/female_black/women_shoe_1.png";
import female_black_4 from "@/assets/footwear_ad/female_black/women_shoe_3.png";
import female_beige_1 from "@/assets/footwear_ad/female_beige/shoe_image_1-2.png";
import female_beige_2 from "@/assets/footwear_ad/female_beige/shoe_image_2.png";
import female_beige_3 from "@/assets/footwear_ad/female_beige/beige_explain.png";
import female_beige_4 from "@/assets/footwear_ad/female_beige/shoe_image_4-2.png";
import female_beige_5 from "@/assets/footwear_ad/female_beige/shoe_image_3-2.png";
import female_tan_1 from "@/assets/footwear_ad/female_tan/split_image_2.png";
import female_tan_2 from "@/assets/footwear_ad/female_tan/split_image_1.png";
import female_tan_3 from "@/assets/footwear_ad/female_tan/split_image_3.png";

import { Check } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { Button } from "@/components/ui/button";

export const products = [
  { name: "Oxford", images: [black_shoe_1, black_shoe_2, black_shoe_3, black_shoe_4, black_shoe_5], price: "Rs 3200", discounted: "Rs 1600", category: 'men', description: "A classic Oxford shoe", inclusions: ["Handcrafted by Master Artisans","Goodyear Welt Construction","Free Shipping"], exclusions: ["Limited Edition","Custom Sizing","Express Shipping"] },
  { name: "Derby", images: [brown_shoe_1, brown_shoe_2, brown_shoe_3, brown_shoe_4, brown_shoe_5], price: "Rs 4200", discounted: "Rs 2100", category: 'men', description: "A stylish Derby shoe", inclusions: ["Goodyear Welt Construction","Free Shipping"], exclusions: ["Limited Edition","Custom Sizing","Express Shipping"] },
  { name: "Monk Strap", images: [tan_shoe_1, tan_shoe_2, tan_shoe_3, tan_shoe_4], price: "Rs 4800", discounted: "Rs 2400", category: 'men', description: "A sophisticated Monk Strap shoe", inclusions: ["Handcrafted by Master Artisans","Goodyear Welt Construction","Free Shipping"], exclusions: ["Limited Edition","Custom Sizing","Express Shipping"] },
  { name: "Loafers", images: [female_black_1, female_black_2, female_black_3, female_black_4], price: "Rs 3900", discounted: "Rs 1950", category: 'women', description: "A comfortable Loafer shoe", inclusions: ["Handcrafted by Master Artisans","Goodyear Welt Construction","Free Shipping"], exclusions: ["Limited Edition","Custom Sizing","Express Shipping"] },
  { name: "Heels", images: [female_beige_1, female_beige_2,female_beige_3,female_beige_4,female_beige_5], price: "Rs 5200", discounted: "Rs 2600", category: 'women', description: "Elegant Heels for women", inclusions: ["Handcrafted by Master Artisans","Goodyear Welt Construction","Free Shipping"], exclusions: ["Limited Edition","Custom Sizing","Express Shipping"] },
  { name: "Classic Boots", images: [female_tan_1, female_tan_2, female_tan_3], price: "Rs 5800", discounted: "Rs 2900", category: 'women', description: "Timeless Classic Boots", inclusions: ["Handcrafted by Master Artisans","Goodyear Welt Construction","Free Shipping"], exclusions: ["Limited Edition","Custom Sizing","Express Shipping"] },
];

interface ProductsProps {
  selectedProducts: string[];
  onProductClick: (product: { name: string; image: string; price: string }) => void;
}

const Products = ({ selectedProducts, onProductClick }: ProductsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'men' | 'women'>('all');

  const sectionRef = useRef<HTMLDivElement>(null);
  const filteredProducts = products.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

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
        <div className="text-center mb-10">
          <h2 className={`text-5xl font-bold uppercase mb-4 text-foreground tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SplitText text="Featured Collection" />
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Timeless elegance meets modern craftsmanship
          </p>
        </div>

              <div className="flex justify-center gap-3 mb-10">
                <Button onClick={() => setActiveCategory('all')} variant={activeCategory === 'all' ? 'default' : 'outline'} size="sm" className=" tracking-wide"> All Designs</Button>
                <Button onClick={() => setActiveCategory('men')} variant={activeCategory === 'men' ? 'default' : 'outline'} size="sm" className=" tracking-wide"> Men's</Button>
                <Button onClick={() => setActiveCategory('women')} variant={activeCategory === 'women' ? 'default' : 'outline'} size="sm" className="tracking-wide"> Women's</Button>
            </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
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
                  src={product.images[0]}
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
