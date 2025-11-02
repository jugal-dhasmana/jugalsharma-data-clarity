import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin } from "lucide-react";

const insights = [
  {
    title: "Building Trust in Real-World Evidence",
    summary:
      "How enterprise data quality frameworks transform fragmented RWD into regulatory-grade insights.",
    link: "https://www.linkedin.com/in/jugal-sharma/",
  },
  {
    title: "From Managed Markets to RWE",
    summary:
      "Lessons learned bridging pricing analytics and clinical evidence generation in life sciences.",
    link: "https://www.linkedin.com/in/jugal-sharma/",
  },
  {
    title: "Quality by Design in Healthcare Data",
    summary:
      "Why validation controls must be built in at ingestion, not bolted on at analysis.",
    link: "https://www.linkedin.com/in/jugal-sharma/",
  },
  {
    title: "Fit-for-Purpose Evidence Generation",
    summary:
      "Aligning data quality standards with clinical and regulatory requirements across therapeutic areas.",
    link: "https://www.linkedin.com/in/jugal-sharma/",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 md:py-32 bg-neutral-lighter/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Thought Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights on data quality, real-world evidence, and healthcare analytics
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 shadow-medium border border-border hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{insight.summary}</p>
                <Button
                  variant="ghost"
                  asChild
                  className="text-secondary hover:text-secondary-light hover:bg-secondary-lighter p-0 h-auto font-semibold group"
                >
                  <a href={insight.link} target="_blank" rel="noopener noreferrer">
                    Read on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-medium hover:shadow-large transition-all"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/jugal-sharma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Follow for More Insights
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
