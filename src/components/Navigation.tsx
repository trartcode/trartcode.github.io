import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, User, Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: '首页', icon: Home },
  { path: '/blog', label: '博客', icon: BookOpen },
  { path: '/about', label: '关于', icon: User },
];

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-xl ${
        isScrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="seal-stamp w-12 h-12 group-hover:rotate-[-5deg] transition-transform">
              <span className="font-calligraphy text-accent-seal text-sm rotate-[-5deg]">墨</span>
            </div>
            <span className="font-calligraphy text-2xl text-ink-dark tracking-wide group-hover:text-ink-gray transition-colors">
              墨韵斋
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`ink-underline flex flex-row items-center gap-2 text-lg transition-colors ${
                    isActive ? 'text-ink-dark font-medium' : 'text-ink-light hover:text-ink-gray'
                  }`}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-ink-gray hover:text-ink-dark transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden overflow-hidden border-t border-paper-200">
          <div className="px-6 pb-4 pt-2 space-y-4">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-2 text-lg transition-colors ${
                    isActive ? 'text-ink-dark font-medium' : 'text-ink-light hover:text-ink-dark'
                  }`}
                >
                  <Icon size={18} strokeWidth={1.5} style={{ verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle' }}>{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
