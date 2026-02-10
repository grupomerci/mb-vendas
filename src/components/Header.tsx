import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center gap-3">
              <img src={logo} alt="MB Logo" className="h-9 w-auto rounded-sm" />
              <span className="text-lg text-gray-900 font-medium  font-serif">Minha Box</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('como-funciona')} className="text-gray-600 hover:text-black text-xs font-medium transition-colors cursor-pointer">Como Funciona</button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-600 hover:text-black text-xs font-medium transition-colors cursor-pointer">Benefícios</button>
            <button onClick={() => scrollToSection('planos')} className="text-gray-600 hover:text-black text-xs font-medium transition-colors cursor-pointer">Planos</button>
            <button onClick={() => scrollToSection('duvidas')} className="text-gray-600 hover:text-black text-xs font-medium transition-colors cursor-pointer">Dúvidas</button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/analise-cobertura')}
              className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider hover:bg-gray-800 transition-colors uppercase cursor-pointer"
            >
              Criar Perfil
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-600 hover:text-black cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('como-funciona')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Como Funciona</button>
            <button onClick={() => scrollToSection('beneficios')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Benefícios</button>
            <button onClick={() => scrollToSection('planos')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Planos</button>
            <button onClick={() => scrollToSection('duvidas')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer">Dúvidas</button>
            <div className="pt-4 px-3">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/analise-cobertura')}
                className="w-full bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase cursor-pointer"
              >
                Criar Perfil
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
