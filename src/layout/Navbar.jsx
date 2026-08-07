const navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" }, 
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-(--color-slit1)">
          PM<span className="text-(--color-slit1)">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-sm text-lightText hover:text-(--color-foreground) rounded-full hover:bg-(--color-background)">
                {link.label}
              </a>
            ))} 
            </div>
        </div>

        {/*CTA Button*/}
        <div>
          <button></button>
        </div>
      </nav>
    </header>
  );
};