import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-white to-cream-100 overflow-hidden h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-black text-gold-500 px-4 py-1.5 rounded-full text-xs font-regular uppercase tracking-wider"
            >
              <Star size={12} fill="#d4af37" />
              Moda Inteligente
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900"
            >
              Seu estilo pronto. <br />
              <span className="text-gold-500 italic">No seu tempo.</span> <br />
              Na sua casa.
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 max-w-lg"
            >
              <p className="text-xl font-medium text-gray-800">
                Você não precisa mais procurar roupas. <br />
                Seu estilo chega até você.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                A <span className="font-bold text-gray-900">Minha Box</span> é uma experiência de moda personalizada criada para mulheres que querem se vestir bem sem perder tempo, sem errar e sem comprar por impulso.
              </p>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/analise-cobertura')}
              className="bg-stone-900 text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-gray-800 transition-colors uppercase w-full sm:w-auto shadow-lg shadow-gray-200 cursor-pointer"
            >
              Quero criar meu perfil agora
            </motion.button>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div className="text-gold-500 flex-shrink-0">
                  <CheckCircle size={18} />
                </div>
                <span className="text-xs text-gray-600 font-medium">Peças escolhidas por especialistas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-gold-500 flex-shrink-0">
                  <CheckCircle size={18} />
                </div>
                <span className="text-xs text-gray-600 font-medium">Looks pensados para sua rotina real</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-gold-500 flex-shrink-0">
                  <CheckCircle size={18} />
                </div>
                <span className="text-xs text-gray-600 font-medium">Você só paga pelo que ama</span>
              </div>
            </motion.div>
          </div>

          <div className="relative h-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center lg:block">
            {/* Main large image (right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block absolute top-0 right-0 w-[70%] h-[55%] bg-gray-100 rounded-2xl overflow-hidden shadow-lg z-0"
            >
                <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Mulher elegante" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
            
            {/* Floating card (left-center) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative lg:absolute lg:top-1/4 lg:-left-4 w-full max-w-sm lg:w-[55%] aspect-[4/3] rounded-2xl p-1 shadow-2xl z-20 rotate-0 lg:-rotate-2 transform hover:rotate-0 transition-transform duration-500"
            >
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" 
                        alt="Look flatlay" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            {/* Bottom image (bottom-right) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden lg:block absolute bottom-8 right-8 w-[60%] h-[45%] bg-gray-100 rounded-2xl overflow-hidden shadow-md z-10 border-4 border-white"
            >
                 <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Roupas organizadas" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
