import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const navigate = useNavigate();

  return (
    <section id="planos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f0eee9] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-wide">
            ESCOLHA SUA EXPERIÊNCIA
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* Card Consultoria (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative"
          >
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              Consultoria de Estilo Contínua
            </h3>
            <p className="text-gray-500 mb-8">
              Tenha alguém que conhece você de verdade.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-1">
                DE R$ 79,90 POR
              </p>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-4xl md:text-5xl font-bold text-gray-900">R$ 39</span>
                <span className="font-serif text-2xl font-bold text-gray-900">,90</span>
                <span className="text-gray-500 ml-1">/ mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Acompanhamento contínuo",
                "Sugestões inteligentes",
                "Sua consultora onde você estiver"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-gray-600" />
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/analise-cobertura')}
              className="w-full bg-[#191817] text-white py-4 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-black transition-colors uppercase cursor-pointer"
            >
              QUERO MINHA CONSULTORA
            </motion.button>
          </motion.div>

          {/* Card Assinatura (Right - Highlighted) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-stone-900 rounded-3xl p-8 md:p-12 shadow-2xl relative text-white transform md:-translate-y-4"
          >
            {/* Tag Mais Escolhido */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#dcb13c] text-[#191817] px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg">
              <span className="text-lg">♔</span> MAIS ESCOLHIDO
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 mt-4">
              Assinatura Minha Box
            </h3>
            <p className="text-gray-400 mb-8">
              Seu guarda-roupa evolui todo mês, sem esforço.
            </p>

            <div className="bg-[#2a2a2a] rounded-xl p-6 mb-8 border border-white/15">
              <p className="text-xs text-[#dcb13c] font-bold tracking-wider uppercase mb-1">
                DE R$ 35,90 POR
              </p>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-4xl md:text-5xl font-bold text-white">R$ 23</span>
                <span className="font-serif text-2xl font-bold text-white">,90</span>
                <span className="text-gray-400 ml-1">/ mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Looks completos e funcionais",
                "Curadoria personalizada",
                "Sem peças aleatórias",
                "Do casual ao sofisticado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#dcb13c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#191817]" />
                  </div>
                  <span className="text-white text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/analise-cobertura')}
              className="w-full bg-white text-[#191817] py-4 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-gray-100 transition-colors uppercase cursor-pointer"
            >
              COMEÇAR AGORA
            </motion.button>
          </motion.div>
        </div>

        {/* Risk Free Guarantee Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#dcb13c]" />
            <span className="font-serif text-xl font-bold text-[#191817] tracking-wide uppercase">
              VOCÊ NÃO CORRE RISCO
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Devolução gratuita",
              "Cancelamento simples",
              "Você só paga pelo que ficar",
              "Sem taxas escondidas"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-gray-600 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;