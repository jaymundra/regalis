import { useEffect, useRef, useState } from "react";
import craftsmanship from "@/assets/craftsmanship.jpg";
import SplitText from "@/components/ui/SplitText";

const About = () => {
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
    <section id="about" ref={sectionRef} className="m-0 p-0 bg-secondary">
      <div className="w-screen">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 bg-black ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={craftsmanship} 
                alt="Artisan crafting shoes" 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          

          {/* Text Content */}
          <div className={`transition-all duration-1000 px-10 py-10 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-5xl font-bold uppercase mb-6 text-foreground tracking-tight">
              <SplitText text="Every Step" /> <br />
              <span className="text-primary"> <SplitText text="A Statement" /></span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Regalis, each shoe is meticulously crafted by artisans who believe in timeless style and lasting comfort.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We source only the finest leather and materials, ensuring every pair is a masterpiece of form and function. Our dedication to excellence has made us a symbol of refined taste for those who demand the best.
            </p>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default About;
