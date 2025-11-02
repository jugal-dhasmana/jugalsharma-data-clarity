import { Shield, Eye, Target, Users, Zap } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Quality by Design",
    description:
      "Build validation and controls into data ingestion, not as an afterthought at analysis.",
  },
  {
    icon: Eye,
    title: "Transparency Over Opacity",
    description:
      "Make data lineage, assumptions, and limitations explicit for stakeholders and regulators.",
  },
  {
    icon: Target,
    title: "Fit-for-Purpose Evidence",
    description:
      "Align data quality standards with the specific clinical and regulatory questions being asked.",
  },
  {
    icon: Users,
    title: "Clinical Relevance First",
    description:
      "Collaborate with clinicians to ensure analytics reflect real-world patient journeys and care pathways.",
  },
  {
    icon: Zap,
    title: "Actionable Analytics",
    description:
      "Deliver insights that drive decisions, not just dashboards that display data.",
  },
];

const Principles = () => {
  return (
    <section id="principles" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              Principles & Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core beliefs that guide my work in healthcare data strategy
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-medium border border-border hover:shadow-large transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-secondary-lighter rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="mt-16 text-center animate-fade-in">
            <blockquote className="text-2xl md:text-3xl font-accent italic text-secondary max-w-3xl mx-auto leading-relaxed">
              "Healthcare data isn't just numbers—it's the story of patient access, clinical
              outcomes, and organizational trust."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
