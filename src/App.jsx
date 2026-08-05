import { Hero } from "@/sections/Hero";
import { about } from "@/sections/about";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Testimonials } from "@/sections/Testimonials";

function App(){
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
    </main>
  </div>
}