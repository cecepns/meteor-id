import { useState } from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-28 h-auto" />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-500 transition-colors">Beranda</a>
            <a href="#services" className="text-gray-700 hover:text-primary-500 transition-colors">Layanan</a>
            <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors">Tentang Kami</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-500 transition-colors">Testimoni</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors">Kontak</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="btn-primary">Hubungi Kami</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-primary-500 py-2">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-primary-500 py-2">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-primary-500 py-2">Tentang Kami</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-500 py-2">Testimoni</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-500 py-2">Kontak</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;