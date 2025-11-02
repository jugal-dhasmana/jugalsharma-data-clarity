import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Jugal Sharma</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Healthcare data strategy leader focused on Real-World Evidence and enterprise data quality.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="#about"
                    className="hover:text-secondary-light transition-colors inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-secondary-light transition-colors inline-block"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#insights"
                    className="hover:text-secondary-light transition-colors inline-block"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-secondary-light transition-colors inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jugal-sharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:jugal_s@hotmail.com"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/70">
            <p>
              © {currentYear} Jugal Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
