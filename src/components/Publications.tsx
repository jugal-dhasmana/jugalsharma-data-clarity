import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";

const Publications = () => {
  return (
    <section id="publications" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Publication</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contributing to the advancement of real-world evidence methodologies
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          </div>

          {/* Book Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-large border border-border hover:shadow-xl transition-all duration-300 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Book Icon/Visual */}
              <div className="flex-shrink-0">
                <div className="w-32 h-40 md:w-40 md:h-52 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-medium flex items-center justify-center border-4 border-secondary/20">
                  <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>

              {/* Book Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">
                  Real-World Evidence in the Pharmaceutical Landscape
                </h3>
                <p className="text-secondary font-semibold mb-4 text-lg">Co-author • 2021</p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  A comprehensive guide exploring how data, technology, and policy intersect to shape 
                  the future of evidence generation in life sciences. This book provides practical 
                  insights into leveraging real-world data to create regulatory-grade evidence that 
                  drives better healthcare decisions and patient outcomes.
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white shadow-medium hover:shadow-large transition-all duration-300 group"
                  asChild
                >
                  <a
                    href="https://www.amazon.com/Real-World-Evidence-Pharmaceutical-Landscape-ebook/dp/B08S1NLFDV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read on Amazon
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
