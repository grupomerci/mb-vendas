import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefitsList = [
    {
      title: "Corpo Real",
      desc: "Roupas que valorizam sua arquitetura única."
    },
    {
      title: "Curadoria Humana",
      desc: "Estilistas reais, sem algoritmos frios."
    },
    {
      title: "Versatilidade",
      desc: "Do trabalho ao happy hour com a mesma peça."
    },
    {
      title: "Conforto",
      desc: "Prove no seu tempo, no seu espelho."
    },
    {
      title: "Harmonia",
      desc: "Looks completos que conversam entre si."
    }
  ];

  return (
    <section id="beneficios" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <Quote className="mx-auto text-gold-500 w-10 h-10 mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-serif text-[#1c1917] leading-tight mb-6">
            "Nada é aleatório. <br />
            <span className="text-gray-400 italic">Tudo é intencional."</span>
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Cada detalhe da sua Box é pensado para funcionar na sua vida real.
          </p>
        </motion.div>

        {/* Editorial List */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 pt-12 border-t border-gray-100"
        >
           <motion.div 
             variants={{
               hidden: { opacity: 0, y: 20 },
               visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
             }}
             className="flex flex-col justify-center"
           >
              <span className="text-xs font-bold tracking-widest text-gold-600 uppercase mb-4">
                O QUE VOCÊ RECEBE
              </span>
              <h3 className="text-3xl font-serif text-[#1c1917] mb-4">
                Muito mais que roupas.
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Uma experiência completa de autoconhecimento e estilo, entregue na sua porta.
              </p>
           </motion.div>

           {benefitsList.map((item, index) => (
             <motion.div 
               key={index} 
               variants={{
                 hidden: { opacity: 0, y: 20 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
               }}
               className="group"
             >
                <span className="text-2xl font-bold text-gold-500 mb-2 block group-hover:text-gold-500 transition-colors">
                  0{index + 1}
                </span>
                <h4 className="text-xl font-serif font-bold text-[#1c1917] mb-3 group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-gold-200 transition-colors">
                  {item.desc}
                </p>
             </motion.div>
           ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;
