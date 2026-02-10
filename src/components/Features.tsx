import { User, ShieldCheck, RefreshCcw, Armchair } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      Icon: User,
      title: "Para quem não quer escolher",
      subtitle: "Consultoria de verdade",
      description: "Você não recebe roupas. Você recebe uma decisão pronta."
    },
    {
      Icon: ShieldCheck,
      title: "Zero Risco",
      subtitle: "Prove antes de pagar",
      description: "Você só paga pelo que decidir ficar. O que não amar, a gente recolhe."
    },
    {
      Icon: RefreshCcw,
      title: "Consumo Inteligente",
      subtitle: "Guarda-roupa funcional",
      description: "Menos compras erradas. Mais roupas que se repetem no dia a dia."
    },
    {
      Icon: Armchair,
      title: "Conforto Total",
      subtitle: "Sem filas, sem stress",
      description: "Entrega e retirada no seu endereço. Sem custo extra."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
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
              
              <h3 className="text-xl font-serif font-medium text-[#1c1917] mb-2">
                {feature.title}
              </h3>
              <p className="text-[10px] font-bold tracking-widest text-gold-600 uppercase mb-4">
                {feature.subtitle}
              </p>
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
