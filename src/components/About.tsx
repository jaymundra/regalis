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
    <section id="about" ref={sectionRef} className="m-0 p-0 bg-secondary w-full">
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
            <h2 className="text-5xl font-bold uppercase mb-6 text-foreground tracking-tight max-md:text-center">
              <SplitText text="Every Step," /> <br />
              <span className="text-primary"> <SplitText text="A Statement" /></span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For far too long, Indians have been wearing formal shoes designed for western feet. Well not anymore. We have designed our shoes for Indian feet which will give you the shoes you always deserved.
              Our formal shoes combine proprietary comfort technology with timeless elegance, delivering sneaker-level cushioning in executive-ready design. 
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience all-day comfort without compromising your professional image. Because you shouldn't have to choose between your feet and your career.
            </p>
          </div> 
        </div>
    </section>
  );
};

export default About;
