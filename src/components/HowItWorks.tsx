import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();
  const steps = [
    {
      number: "1",
      title: "Seu Perfil",
      description: "Você conta quem você é, como vive e o que espera do seu estilo."
    },
    {
      number: "2",
      title: "Sua Curadora",
      description: "Uma especialista analisa seu perfil e começa a desenhar sua identidade visual."
    },
    {
      number: "3",
      title: "Mapa de Estilo",
      description: "Vocês alinham referências, objetivos e preferências."
    },
    {
      number: "4",
      title: "Sua Seleção",
      description: "Criamos combinações que funcionam entre si e com você."
    },
    {
      number: "5",
      title: "O Ritual",
      description: "Você prova tudo com calma, no seu tempo."
    },
    {
      number: "6",
      title: "O que fica",
      description: "Você paga apenas pelo que amar. O resto, a gente busca."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 tracking-wide">
            COMO FUNCIONA NA PRÁTICA
          </h2>
          <p className="text-gray-500 italic font-serif mb-20">
            (Passo a Passo)
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (hidden on mobile, visible on lg) */}
          <div className="hidden lg:block absolute top-[26px] left-[8.33%] w-[83.33%] h-[1px] bg-white/10 -z-0"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center group"
                variants={itemVariants}
              >
                <div className="w-[52px] h-[52px] rounded-full bg-[#191817] border border-white/20 flex items-center justify-center text-gray-500 font-medium mb-6 group-hover:border-gold-500 group-hover:text-gold-500 transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg font-serif font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed px-4 max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 space-y-8"
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
