import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Philosophy = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] p-12 md:p-12 text-center overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-center"
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
                 alt="Mulher elegante" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-[#1e1b18]/90"></div>
            </div>

            <div className="relative z-10 space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-500 text-xs font-bold tracking-widest uppercase"
                >
                    <Star size={10} fill="#d4af37" />
                    Construímos Identidade
                </motion.div>

               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="text-3xl md:text-5xl text-white text-center font-serif leading-tight"
               >
                  A Minha Box existe porque<br />
                  mulheres estão cansadas de:
                </motion.h2>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4
                      }
                    }
                  }}
                  className="flex flex-wrap justify-center gap-3"
                >
                    {[
                      "Comprar sem sentido",
                      "Ter um armário cheio e se sentir mal",
                      "Seguir tendência vazia"
                    ].map((text, i) => (
                      <motion.span 
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="bg-white/10 text-gray-200 px-6 py-2 rounded-full text-sm font-medium border border-white/5 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default"
                      >
                          {text}
                      </motion.span>
                    ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/analise-cobertura')}
                    className="bg-[#dcb13c] text-black px-12 py-4 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-[#cda22b] transition-colors uppercase cursor-pointer"
                  >
                    Quero criar minha conta!
                  </motion.button>
                </motion.div>

            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
