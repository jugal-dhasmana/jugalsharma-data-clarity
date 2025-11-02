import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Associate Director, Data Analytics & Data Quality Lead",
    company: "Takeda Pharmaceutical Company",
    period: "October 2022 – Present",
    location: "RWD Center of Excellence",
    highlights: [
      "Lead enterprise-wide RWD ingestion quality program ensuring trustworthy analytics across therapeutic areas",
      "Architect and implement data validation controls, quality frameworks, and best practices for fit-for-purpose evidence generation",
      "Collaborate with cross-functional teams to translate complex data challenges into actionable, regulatory-grade insights",
    ],
    color: "secondary",
  },
  {
    role: "Manager, Data Architect",
    company: "HealthVerity",
    period: "December 2017 – October 2022",
    highlights: [
      "Designed and implemented data mapping and modeling across 835/837 claims, Rx, lab, EMR, and Common Data Models (CDM)",
      "Built scalable ETL pipelines in big-data environments processing multi-million-record datasets",
      "Established data governance standards ensuring quality and interoperability across healthcare ecosystems",
    ],
    color: "primary",
  },
  {
    role: "BI Implementation Manager",
    company: "MMIS (Model N)",
    period: "2016 – 2017",
    highlights: [
      "Led implementation and rollout of Medispend Aggregate Spend dashboards for 17+ pharmaceutical clients",
      "Designed executive-level reporting frameworks providing actionable insights into pricing and rebate strategies",
    ],
    color: "secondary",
  },
  {
    role: "Senior Consultant",
    company: "IMS Health (IQVIA)",
    period: "2007 – 2016",
    highlights: [
      "Specialized in government pricing analytics, rebate/chargeback calculations, and master data management",
      "Delivered complex pricing models and compliance reporting for Fortune 500 pharmaceutical companies",
    ],
    color: "primary",
  },
  {
    role: "Project Manager",
    company: "Dakota Services",
    period: "2000 – 2007",
    highlights: [
      "Managed cross-functional projects delivering data-driven solutions for healthcare clients",
    ],
    color: "secondary",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Experience & Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two decades of transforming healthcare data into trusted evidence and actionable insights
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-secondary border-4 border-background rounded-full -translate-x-1/2 shadow-medium z-10" />

                  {/* Card */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                    }`}
                  >
                    <div className="bg-card rounded-xl p-6 md:p-8 shadow-medium border border-border hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-secondary" />
                            <span className="font-semibold text-foreground">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-secondary" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                        {exp.location && (
                          <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                        )}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-foreground">
                            <span className="text-secondary mt-1 flex-shrink-0">▸</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-16 p-8 bg-secondary-lighter rounded-xl border border-secondary/20 animate-fade-in">
            <h3 className="text-xl font-bold text-primary mb-3">Education</h3>
            <p className="text-foreground">
              <span className="font-semibold">Bachelor of Science, Mathematics</span>
              <br />
              <span className="text-muted-foreground">Sambalpur University</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
