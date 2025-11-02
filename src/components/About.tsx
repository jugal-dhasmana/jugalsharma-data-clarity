const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-neutral-lighter/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">About</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none animate-slide-up">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium border border-border">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                My journey in healthcare began in{" "}
                <span className="font-semibold text-primary">Managed Markets</span>, where I
                learned to navigate the complex intersection of pricing, rebates, and reimbursement
                data. That foundation taught me a crucial lesson: healthcare data isn't just
                numbers—it's the story of patient access, clinical outcomes, and organizational
                trust.
              </p>

              <p className="text-lg leading-relaxed text-foreground mb-6">
                Today, I lead{" "}
                <span className="font-semibold text-secondary">
                  Real-World Data (RWD) and Real-World Evidence (RWE)
                </span>{" "}
                strategy on the clinical side, where fragmented datasets from claims, EMRs, labs,
                and registries must be transformed into evidence that withstands regulatory scrutiny
                and drives better decisions. My work focuses on{" "}
                <span className="font-semibold text-primary">data quality at scale</span>—building
                enterprise-wide controls, validation frameworks, and best practices that ensure our
                analytics are fit-for-purpose and trustworthy.
              </p>

              <p className="text-lg leading-relaxed text-foreground mb-6">
                I believe{" "}
                <span className="italic font-accent text-xl text-secondary">
                  quality is built in, not tested in
                </span>
                . By collaborating with clinicians, data scientists, and policy stakeholders, I help
                translate complex data challenges into clear, actionable insights that accelerate
                evidence generation and ultimately improve patient outcomes.
              </p>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">Core Values</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Integrity", desc: "Data quality by design, not by accident" },
                    { title: "Clarity", desc: "Translate complexity into actionable insights" },
                    { title: "Impact", desc: "Evidence that drives better patient outcomes" },
                  ].map((value) => (
                    <div
                      key={value.title}
                      className="p-4 rounded-lg bg-secondary-lighter border border-secondary/20"
                    >
                      <h4 className="font-semibold text-secondary mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
