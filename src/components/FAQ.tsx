import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "E se eu não gostar de nada?",
      answer: "Você devolve tudo. Simples assim."
    },
    {
      question: "Vou pagar algo antes?",
      answer: "Não, você só paga pelo que decidir ficar após provar as peças."
    },
    {
      question: "Serve para qualquer estilo?",
      answer: "Sim! Nossa consultoria é personalizada para se adaptar ao seu gosto e necessidades."
    },
    {
      question: "É fácil cancelar?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem multas."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-widest uppercase">
            PERGUNTAS QUE VOCÊ ESTÁ SE FAZENDO
          </h2>
        </motion.div>

        {/* Accordion */}
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
          className="space-y-4 mb-24"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="border border-gray-100 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors cursor-pointer ${openIndex === index ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
              >
                <span className="text-sm md:text-base font-medium text-[#1c1917]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 bg-gray-50 text-gray-500 text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-[#fffcf5] rounded-3xl p-10 md:p-16 text-center border border-orange-50/50 border-orange-100"
        >
          <h3 className="font-serif text-xl font-bold text-[#191817] mb-4 tracking-wide uppercase">
            ENTRE ANTES DE TODO MUNDO
          </h3>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Algumas curadorias não são abertas ao público. Quem entra na lista:
          </p>
          
          <ul className="space-y-2 mb-10 inline-block text-left mx-auto">
            {[
              "Recebe antes",
              "Tem acesso a seleções exclusivas",
              "Garante vagas limitadas"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dcb13c]"></span>
                {item}
              </li>
            ))}
          </ul>

          <div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#191817] text-white px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-black transition-colors uppercase shadow-lg cursor-pointer"
            >
              ASSINAR AGORA!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;