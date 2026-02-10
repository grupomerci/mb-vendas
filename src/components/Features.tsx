import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, Map, Shirt, Armchair, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      Icon: ClipboardList,
      title: "Seu Perfil",
      description: "Você conta quem você é, como vive e o que espera do seu estilo."
    },
    {
      Icon: UserCheck,
      title: "Sua Curadora",
      description: "Uma especialista analisa seu perfil e começa a desenhar sua identidade visual."
    },
    {
      Icon: Map,
      title: "Mapa de Estilo",
      description: "Vocês alinham referências, objetivos e preferências."
    },
    {
      Icon: Shirt,
      title: "Sua Seleção",
      description: "Criamos combinações que funcionam entre si e com você."
    },
    {
      Icon: Armchair,
      title: "O Ritual",
      description: "Você prova tudo com calma, no seu tempo."
    },
    {
      Icon: Heart,
      title: "O que fica",
      description: "Você paga apenas pelo que amar. O resto, a gente busca."
    }
  ];

  return (
    <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#fcfbf9] flex items-center justify-center text-[#1c1917] mb-6 group-hover:bg-[#1c1917] group-hover:text-gold-500 transition-all duration-300">
                 <feature.Icon strokeWidth={1} size={32} />
              </div>
              
              <h3 className="text-xl font-serif font-medium text-[#1c1917] mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
