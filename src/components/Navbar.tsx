import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  onJoinWaitlist: () => void;
  selectedCount?: number;
}

const Navbar = ({ onJoinWaitlist, selectedCount = 0 }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#collection", label: "Collection" },
    { href: "#features", label: "Features" },
  ];

  return (
    <nav
      className={`fixed w-screen flex left-0 right-0 z-50 transition-all duration-500 h-16 ${
        scrolled ? "top-0 bg-background/95 backdrop-blur-sm shadow-sm py-3" : "bg-secondary py-3"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between md:justify-between">
        {/* Mobile: Menu on left */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - centered on mobile, left on desktop */}
        <a 
          href="/easivo/" 
          className="text-2xl font-bold text-foreground tracking-wider uppercase md:static absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0"
        >
          Easivo
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button onClick={onJoinWaitlist} variant="default" size="sm" className="uppercase tracking-wide">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile: Cart icon on right */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onJoinWaitlist}
            className="relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {selectedCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                variant="destructive"
              >
                {selectedCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
