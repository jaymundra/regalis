import { Button } from "@/components/ui/button";
import heroShoes from "@/assets/hero-shoes.jpg";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import RotateTowardsCursor from "@/components/ui/RotateTowardsCursor";

interface HeroProps {
  onJoinWaitlist: () => void;
}

const Hero = ({ onJoinWaitlist }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-6xl md:text-7xl font-bold uppercase tracking-tight mb-6 fade-in-up text-foreground">
              <SplitText text="As Comfy As" /> <br />
              <span className="text-primary"><SplitText text="SNEAKERS" /></span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 fade-in-up delay-200">
              Where comfort meets design. Comfortable formal shoes for men and women.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-400">
              <Button onClick={onJoinWaitlist} variant="hero" size="lg" className="group">
                Join Waitlist (50% OFF)
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#collection">Explore Collection</a>
              </Button>
            </div>
          </div>

          {/* Hero Image - Now in Front */}
          <div className="relative fade-in-up delay-300">
            <div className="relative z-20">
              <img
                src={heroShoes}
                alt="Luxury formal shoes"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
