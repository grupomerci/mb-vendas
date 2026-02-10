import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Clara",
      role: "Advogada",
      content: "Eu nunca tinha tempo para comprar roupas e acabava usando sempre a mesma coisa. A Minha Box mudou minha vida, agora me sinto sempre bem vestida e confiante.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Mariana Costa",
      role: "Empreendedora",
      content: "A curadoria é impecável! Parece que elas leem minha mente. As peças vestem super bem e a qualidade é surpreendente. Não vivo mais sem.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Juliana Mendes",
      role: "Arquiteta",
      content: "A praticidade de receber tudo em casa e só pagar o que gostar é incrível. O atendimento é super atencioso e as dicas de estilo ajudam muito.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-blob animation-delay-2000"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-wide mb-4">
            QUEM USA, AMA
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Histórias reais de mulheres que transformaram sua relação com o espelho.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-white p-8 rounded-2xl border border-gray-200 duration-300 relative group min-w-[85vw] md:min-w-0 snap-center"
            >
              <div className="absolute top-6 right-8 text-black/10 group-hover:text-gold-100 transition-colors">
                <Quote className="w-10 h-10 rotate-180" strokeWidth={1.3} />
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#dcb13c] fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;