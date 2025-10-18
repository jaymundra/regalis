import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Chen",
    role: "CEO, Tech Ventures",
    quote: "The best pair I've ever owned — elegant and unbelievably comfortable. I wear them to every important meeting.",
  },
  {
    name: "Isabella Martinez",
    role: "Corporate Lawyer",
    quote: "Regalis shoes are my secret weapon. They command attention and respect in every room I enter.",
  },
  {
    name: "James Sullivan",
    role: "Investment Banker",
    quote: "I've tried dozens of luxury brands, but nothing compares to the craftsmanship and attention to detail at Regalis.",
  },
];

const Testimonials = () => {
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
    <section id="testimonials" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold uppercase mb-4 text-foreground tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Trusted by Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-card p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary mb-6" />
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground uppercase tracking-wide text-sm">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
