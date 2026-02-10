import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section id="como-funciona" className="py-18 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=" space-y-8"
        >
            <h4 className="font-serif text-3xl text-white tracking-wide">Simples. Elegante. Inteligente.</h4>
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
    </section>
  );
};

export default HowItWorks;
