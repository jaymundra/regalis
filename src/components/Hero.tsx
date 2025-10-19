import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/perplexity.mov";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { FlipWords } from '@/components/ui/shadcn-io/flip-words';

interface HeroProps {
  onJoinWaitlist: () => void;
}

const words = ['all day', 'every day', 'any where'];

const Hero = ({ onJoinWaitlist }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pb-20 pt-20">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-5xl max-md:text-center md:text-7xl font-bold uppercase tracking-tight mb-6 fade-in-up text-foreground">
              <SplitText text="As Comfy As" /> <br />
              <span className="text-primary"><SplitText text="SNEAKERS" /></span>
            </h1>
            
            <p className="text-base max-md:text-center md:text-xl text-muted-foreground mb-8 fade-in-up delay-200">
              Where comfort meets design. Formal Shoes you can wear {' '}
        <FlipWords 
          words={words} 
          duration={2500}
          className="text-primary font-semibold"
        />{' '}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-400">
              <Button onClick={onJoinWaitlist} variant="hero" size="lg" className="group">
                Join Waitlist to get 50% off
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#collection">Explore Collection</a>
              </Button>
            </div>
          </div>

          {/* Hero Image - Now in Front */}
              <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",           // show only 90% of the height
                overflow: "hidden",       // hides the cropped part
                borderRadius: "12px",

              }}
            >
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",          // ensures the video still fills the space
                  objectFit: "cover",      // maintain aspect ratio and fill
                  transform: "translateY(-5%)", // shift up a bit to center crop if needed
                }}
              />
    </div>
          {/* <div className="relative fade-in-up delay-300">
            <div className="relative z-20">
              <video className="w-full h-auto drop-shadow-2xl rounded-md" autoPlay loop muted playsInline>
                <source src={heroVideo} type="video/mp4" />
              </video> */}
              {/* <img
                src={heroShoes}
                alt="Luxury formal shoes"
                className="w-full h-auto drop-shadow-2xl"
              /> */}
            {/* </div>
          </div> */}

          
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
