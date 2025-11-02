import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Insights from "@/components/Insights";
import Publications from "@/components/Publications";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="hero">
        <Hero />
        <About />
        <Experience />
        <Insights />
        <Publications />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
