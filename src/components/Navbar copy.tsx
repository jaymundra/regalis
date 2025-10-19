import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onJoinWaitlist: () => void;
}

const Navbar = ({ onJoinWaitlist }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Collection", href: "#collection" },
    { label: "Features", href: "#features" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-screen flex left-0 right-0 z-50 transition-all duration-500 bg-secondary ${
        scrolled ? "top-0 bg-secondary backdrop-blur-sm shadow-sm py-3" : "bg-secondary py-3"
      }`}
    >


        {/* Mobile Menu Button */}
        <div className = "grid grid-cols-3 items-center h-16 bg-gray-100 px-4">
        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground left-0 px-6 "
          >
            {isOpen ? <X className="" /> : <Menu className="" />}
          </button>

          {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>


      <div className="absolute left-1/2 -translate-x-1/2 text-center">
        {/* <div className="container mx-auto px-6 md:flex items-center justify-center max-md:text-center max-md:absolute max-md:inset-0"></div> */}
        <a href="/" className="text-2xl font-bold text-foreground tracking-wider uppercase">
          Regalis
        </a>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
          <Button onClick={onJoinWaitlist} variant="default" size="sm" className="uppercase tracking-wide">
            Join Waitlist
          </Button>
        </div>

        <div className="md:hidden text-right bg-black w-6">
          <ShoppingBag className="w-6" />
        </div>
          </div>
          </div>
    </nav>
  );
};

export default Navbar;
