import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/industries", label: "Industries" },
    { path: "/solutions", label: "Solutions" },
    { path: "/capabilities", label: "Capabilities" },
    { path: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { path: "/services/data-engineering", label: "Data Engineering" },
    { path: "/services/ai-ml", label: "AI/ML Implementation" },
    { path: "/services/cloud-migration", label: "Cloud Migration" },
    { path: "/services/bi-visualization", label: "BI & Visualization" },
  ];

  const industryLinks = [
    { path: "/industries/retail", label: "Retail & eCommerce" },
    { path: "/industries/financial-services", label: "Financial Services" },
    { path: "/industries/healthcare", label: "Healthcare" },
    { path: "/industries/manufacturing", label: "Manufacturing" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Datenintelligenz
            </Link>
            <p className="text-muted-foreground text-sm">
              Transform your data into intelligence with our comprehensive data engineering and AI consulting services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:Data@aiforbussiness.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Data@aiforbussiness.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div className="flex flex-col space-y-1">
                  <a 
                    href="tel:+918374796351" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-83747-96351
                  </a>
                  <a 
                    href="tel:+919871106515" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-98711-06515
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-primary" />
                <div className="flex flex-col space-y-1">
                  <a 
                    href="https://wa.me/918374796351" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    WhatsApp: +91-83747-96351
                  </a>
                  <a 
                    href="https://wa.me/919871106515" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    WhatsApp: +91-98711-06515
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Global Offices - India, USA, Europe
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Serving clients worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Industries</h3>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Datenintelligenz. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                onClick={scrollToTop}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                onClick={scrollToTop}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                onClick={scrollToTop}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
