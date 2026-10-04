import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" }, 
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-(--color-slit1)">
          PM<span className="text-(--color-slit1)">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-sm text-(--color-lightText) hover:text-white rounded-full hover:bg-(--color-background)">
                {link.label}
              </a>
            ))} 
            </div>
        </div>

        {/*CTA Button*/}
        <div className="hidden md:block">
          <Button size = "sm">Contact Me</Button>
        </div>

        {/*Mobile menu button*/}
        <button className="md:hidden p-2 text-(--color-foreground) cursor-pointer"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          <span key={isMobileMenuOpen ? "close" : "menu"} className="block animate-fade-in">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </nav>

      {/*Mobile Menu*/}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-menu-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navlinks.map((link, index) => (
              <a href={link.href} key={index} className="text-lg text-(--color-lightText) hover:text-white py-2">
                {link.label}
              </a>
            ))}

            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
