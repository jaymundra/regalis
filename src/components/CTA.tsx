import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

interface CTAProps {
  onJoinWaitlist: () => void;
}

const CTA = ({ onJoinWaitlist }: CTAProps) => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
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
            Join Waitlist Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
              <div className="pt-5  text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Regalis Shoes. Crafted with purpose.
          </p> 
         </div>
    </section>
  );
};

export default CTA;
