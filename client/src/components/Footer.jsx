import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { to: 'home', label: 'Home' },
    { to: 'features', label: 'Features' },
    { to: 'how-it-works', label: 'How It Works' },
    { to: 'team', label: 'Team' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-mealr-bg py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img src="/logo.png" alt="Mealr Logo" className="h-12 md:h-16" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 mb-8 md:mb-0">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-mealr-text hover:text-mealr-pink cursor-pointer transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-mealr-text-light text-sm">
            © {currentYear} Mealr. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 