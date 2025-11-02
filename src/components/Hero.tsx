import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-data-network.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Healthcare data network visualization"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-lighter border border-secondary/20 mb-8">
            <span className="text-sm font-medium text-secondary">Healthcare Data Strategy Leader</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Turning Fragmented Healthcare Data into{" "}
            <span className="text-gradient-accent">Trusted Insights</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Healthcare data strategy leader focused on RWD/RWE and enterprise data quality—helping
            organizations build trusted analytics and real-world evidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-large transition-all duration-300 group"
              onClick={() => scrollToSection("about")}
            >
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/jugal-sharma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          {/* Value Pillars */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Integrity", desc: "Quality by design" },
              { label: "Clarity", desc: "Complex to simple" },
              { label: "Impact", desc: "Outcomes-driven" },
            ].map((pillar) => (
              <div
                key={pillar.label}
                className="p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-1 text-foreground">{pillar.label}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
