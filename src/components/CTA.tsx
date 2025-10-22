import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { useEffect, useRef, useState } from "react";

interface CTAProps {
  onJoinWaitlist: () => void;
}

import { Sparkles, Award, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Proprietary Tech",
    description: "We leverage cutting-edge technology to enhance your footwear experience.",
  },
  {
    icon: Award,
    title: "Premium Leather",
    description: "Sourced from the finest tanneries, ensuring durability and unmatched quality.",
  },
  {
    icon: Heart,
    title: "Comfort Redefined",
    description: "Engineered for all-day wear without compromising on style or elegance.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary delivery on all orders, because luxury knows no borders.",
  },
];


const CTA = ({ onJoinWaitlist }: CTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  

  return (
    <div>
      <section id="features" ref={sectionRef} className="pt-20 pb-10 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-wide mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="pt-20 pb-10 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold uppercase text-white mb-6 tracking-tight fade-in-up">
          <SplitText text="Step Into Comfort" />
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto fade-in-up delay-200">
          Discover the perfect pair that complements your style and ambition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-400">
          <Button 
            onClick={onJoinWaitlist}
            variant="outline" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 border-0 group"
          >
            Join Waitlist to get 50% Off
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
              <div className="pt-5  text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Easivo Shoes. Crafted with purpose.
          </p> 
         </div>
    </section>
        </div>
  );
};

export default CTA;
