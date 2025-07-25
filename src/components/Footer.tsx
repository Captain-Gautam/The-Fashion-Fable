import { Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/collections', label: 'Collections' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif">The Fashion Fable</h3>
            <p className="text-gray-300 text-sm">
              Creating beautiful traditional and modern fashion designs with expert craftsmanship 
              and personalized styling services.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/fashionbyfable12"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <Instagram className="h-8 w-8" style={{ stroke: 'url(#ig-gradient)' }} />
                <svg width="0" height="0">
                  <linearGradient id="ig-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fd5949" />
                    <stop offset="50%" stopColor="#d6249f" />
                    <stop offset="100%" stopColor="#285AEB" />
                  </linearGradient>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@thefashionfable12"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <Youtube className="h-8 w-8 text-[#FF0000]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>Designer: Minaxiben Prajapati</p>
              <p>Phone: +91-9714785080</p>
              <p>Timings: Monday to Saturday, 10:00 AM - 7:00 PM</p>
              <p>Address: Hamiparavas, Old-Main Bazar, Bhachau, Kutch, Gujarat</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} The Fashion Fable. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
