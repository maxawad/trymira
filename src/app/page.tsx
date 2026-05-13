import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Stats from "@/components/Stats";
import Privacy from "@/components/Privacy";
import Testimonials from "@/components/Testimonials";
import Press from "@/components/Press";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <ProductShowcase />
      <Stats />
      <Privacy />
      <Testimonials />
      <Press />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
