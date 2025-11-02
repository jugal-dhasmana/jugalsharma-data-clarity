import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-lighter/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in discussing data strategy, RWD/RWE, or potential collaborations? Reach out.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <div className="bg-card rounded-xl p-8 shadow-medium border border-border">
                <h3 className="text-xl font-bold text-primary mb-6">Get in Touch</h3>

                {/* Email */}
                <a
                  href="mailto:jugal_s@hotmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary-lighter transition-all duration-300 group mb-4"
                >
                  <div className="w-12 h-12 bg-secondary-lighter rounded-lg flex items-center justify-center group-hover:bg-secondary transition-all">
                    <Mail className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">jugal_s@hotmail.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jugal-sharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary-lighter transition-all duration-300 group mb-4"
                >
                  <div className="w-12 h-12 bg-secondary-lighter rounded-lg flex items-center justify-center group-hover:bg-secondary transition-all">
                    <Linkedin className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/jugal-sharma</p>
                  </div>
                </a>

                {/* Resume Download */}
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-large transition-all mt-6"
                  asChild
                >
                  <a href="#" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume (PDF)
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-card rounded-xl p-8 shadow-medium border border-border">
                <h3 className="text-xl font-bold text-primary mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Subject"
                      required
                      className="border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="border-border focus:border-secondary focus:ring-secondary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-medium hover:shadow-large transition-all"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
