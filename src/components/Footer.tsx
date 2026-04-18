import { Instagram, Facebook, Copyright } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/_mental_health.1", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1D3eX8sath/", label: "Facebook" },
  ];

  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container-narrow mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img
              src="/mentalHealthLogo.jpg"
              alt="MentalHealth Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-serif text-xl font-medium">MentalHealth</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 my-8" />

        {/* Copyright */}
        <p className="text-center text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
          <Copyright className="w-4 h-4" />
          <span>{new Date().getFullYear()} MentalHealth. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
