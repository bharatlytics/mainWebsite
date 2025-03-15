import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Solutions from "@/components/sections/Solutions";
import CaseStudies from "@/components/sections/CaseStudies";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Solutions />
      <Stats />
      <CaseStudies />
      <Testimonials />
    </main>
  );
}
