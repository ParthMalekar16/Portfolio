const navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" }, 
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="#">
          PM<span>.</span>
        </a>

        {/* Desktop Nav */}
        <div>
          <div>
            {navlinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))} 
          </div>
        </div>
      </nav>
    </header>
  );
};