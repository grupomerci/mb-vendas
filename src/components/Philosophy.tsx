import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-[#1e1b18] rounded-[2rem] p-12 md:p-12 text-center relative overflow-hidden shadow-2xl"
        >
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10 space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-500 text-xs font-bold tracking-widest uppercase"
                >
                    <Star size={10} fill="#d4af37" />
                    Construímos Identidade
                </motion.div>

               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="text-3xl md:text-5xl text-white text-center"
               >
  A Minha Box existe porque<br />
  mulheres estão cansadas de:
</motion.h2>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
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
                        className="bg-white/10 text-gray-300 px-6 py-2 rounded-full text-sm font-medium border border-white/5 backdrop-blur-sm"
                      >
                          {text}
                      </motion.span>
                    ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="pt-6 border-t border-white/10 max-w-lg mx-auto"
                >
                    <p className="font-serif text-xl text-gray-200">
                        "Aqui, estilo não é moda passageira. <br />
                        É pertencimento. É praticidade. <br />
                        <span className="text-gold-500 font-bold">É se sentir bem sem precisar pensar."</span>
                    </p>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
