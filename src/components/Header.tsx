import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
            <a href="/#como-funciona" className="text-gray-600 hover:text-black text-xs font-medium transition-colors">Como Funciona</a>
            <a href="/#beneficios" className="text-gray-600 hover:text-black text-xs font-medium transition-colors">Benefícios</a>
            <a href="/#planos" className="text-gray-600 hover:text-black text-xs font-medium transition-colors">Planos</a>
            <a href="/#duvidas" className="text-gray-600 hover:text-black text-xs font-medium transition-colors">Dúvidas</a>
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
            <a href="/#como-funciona" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">Como Funciona</a>
            <a href="/#beneficios" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">Benefícios</a>
            <a href="/#planos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">Planos</a>
            <a href="/#duvidas" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">Dúvidas</a>
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
