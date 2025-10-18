import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onJoinWaitlist: () => void;
}

const Navbar = ({ onJoinWaitlist }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-foreground tracking-wider uppercase">
          Regalis
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
                    <a href="#collection" className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Collection
          </a>
          {/* <a href="#testimonials" className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a> */}
          <Button onClick={onJoinWaitlist} variant="default" size="sm" className="uppercase tracking-wide">
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
