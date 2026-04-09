import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Pricing', path: '/pricing' }
  ];

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-6 md:px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
        <div className="flex items-center pointer-events-auto">
          <Link to="/">
            <img src="https://i.imgur.com/kRPmmDF.png" alt="Logo" className="h-16 w-auto object-contain" referrerPolicy="no-referrer" />
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 pointer-events-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`px-3 py-2 text-sm font-medium font-body transition-colors ${
                location.pathname === link.path ? 'text-white' : 'text-foreground/90 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/get-started" 
            className="ml-2 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-colors"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden pointer-events-auto">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="liquid-glass rounded-full p-3 text-white hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-7 right-6 liquid-glass rounded-full p-3 text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-heading italic transition-colors ${
                  location.pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/get-started" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 bg-white text-black rounded-full px-8 py-4 text-lg font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
            >
              Get Started
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

