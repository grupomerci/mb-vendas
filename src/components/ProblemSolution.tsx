import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProblemSolution = () => {
  const navigate = useNavigate();

  const problems = [
    "Perde horas em lojas e ainda sai frustrada",
    "Compra roupas, usa uma vez e se arrepende",
    "Guarda-roupa cheio, mas nada parece funcionar",
    "Vê looks lindos nas outras pessoas, mas não em você"
  ];

  const solutionPoints = [
    "Análise de estilo e biotipo",
    "Curadoria 100% humana",
    "Looks completos e versáteis"
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1c1917] mb-4">
                Por que continuar tentando <br />
                <span className="text-gray-400 italic">do jeito difícil?</span>
            </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: The Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-[#f9f9f9] rounded-[2rem] p-10 lg:p-14 flex flex-col justify-center min-h-[500px]"
          >
            <div className="mb-8">
                <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-2 block text-center md:text-left">
                    O Cenário Comum
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#1c1917] text-center md:text-left">
                    O ciclo da frustração
                </h3>
            </div>
            
            <div className="space-y-6">
            {problems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                <XCircle className="text-red-400 w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-gray-600 font-light text-md md:text-lg leading-relaxed">
                    {item}
                </p>
                </div>
            ))}
            </div>
          </motion.div>

          {/* Right: The Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] p-10 lg:p-14 flex flex-col justify-center text-white overflow-hidden min-h-[500px]"
          >
             {/* Background Image & Overlay */}
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Closet organizado e elegante" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/85"></div>
            </div>

            <div className="relative z-10">
                <div className="mb-8">
                    <span className="text-xs font-bold tracking-widest text-gold-500 uppercase mb-2 block text-center md:text-left">
                        A Experiência Minha Box
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight text-center md:text-left">
                        Uma curadoria que <span className="italic text-gold-500">pensa</span> por você
                    </h3>
                </div>

                <p className="text-gray-200 text-md md:text-lg leading-relaxed mb-8 border-l-2 border-gold-500/50 pl-6">
                    Nós não enviamos apenas roupas. Entregamos confiança, tempo livre e a certeza de estar bem vestida.
                </p>

                <div className="space-y-4 mb-10">
                    {solutionPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                             <CheckCircle2 className="text-gold-500 w-5 h-5" />
                             <span className="text-white font-medium">{point}</span>
                        </div>
                    ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/analise-cobertura')}
                  className="w-full sm:w-auto bg-white text-[#1c1917] px-8 py-4 rounded-full text-xs font-bold tracking-widest transition-all duration-300 uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-gold-50"
                >
                    Começar minha transformação
                    <ArrowRight size={14} />
                </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
