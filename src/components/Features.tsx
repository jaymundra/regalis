import { useEffect, useRef, useState } from "react";
import { Sparkles, Award, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted Precision",
    description: "Each pair is meticulously crafted by skilled artisans with decades of experience.",
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
    description: "Complimentary worldwide delivery on all orders, because luxury knows no borders.",
  },
];

const Features = () => {
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
    <section ref={sectionRef} className="py-32 bg-secondary">
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
  );
};

export default Features;
