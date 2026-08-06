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
            {navlinks.map((link, index) => (
              <a href={link.href} key={index}>
                {link.label}
              </a>
            ))} 
        </div>
      </nav>
    </header>
  );
};