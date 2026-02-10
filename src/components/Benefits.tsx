import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
      title: "Estilo Único",
      desc: "Peças curadas para você"
    },
    {
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      title: "Sofisticação",
      desc: "Elegância em cada detalhe"
    },
    {
      url: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1972&auto=format&fit=crop",
      title: "Autoconfiança",
      desc: "Vista-se de si mesma"
    },
    {
      url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
      title: "Liberdade",
      desc: "Conforto sem perder o estilo"
    },
    {
      url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
      title: "Versatilidade",
      desc: "Looks para todos os momentos"
    },
    {
      url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
      title: "Essência",
      desc: "Sua personalidade refletida"
    }
  ];

  return (
    <section id="beneficios" className="py-10 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <Quote className="mx-auto text-gold-500 w-10 h-10 mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-serif text-[#1c1917] leading-tight mb-6">
            "A moda é a armadura para sobreviver <br />
            <span className="text-gray-400 italic">à realidade do dia a dia."</span>
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Inspire-se com composições reais criadas para mulheres reais.
          </p>
        </motion.div>

        {/* Gallery Grid / Mobile Carousel */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
           {galleryImages.map((item, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className={`group relative overflow-hidden rounded-lg cursor-pointer h-[400px] min-w-[85vw] md:min-w-0 snap-center ${index === 1 || index === 4 ? 'md:col-span-1' : ''}`}
             >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white/90 text-xs font-bold tracking-widest uppercase mb-2">
                    {item.title}
                  </span>
                  <p className="text-white font-serif text-2xl">
                    {item.desc}
                  </p>
                </div>
                
                {/* Mobile Text Overlay (Always visible on mobile, hidden on desktop) */}
                <div className="md:hidden absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-white/90 text-xs font-bold tracking-widest uppercase mb-2">
                    {item.title}
                  </span>
                  <p className="text-white font-serif text-2xl">
                    {item.desc}
                  </p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
