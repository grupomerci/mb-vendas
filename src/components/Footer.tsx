import { Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="font-serif text-2xl font-bold mb-6 text-white">Minha Box</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 text-stone-400">
              Construímos identidade. Estilo não é moda passageira. É pertencimento. É praticidade. É se sentir bem sem precisar pensar.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-stone-400">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className=" hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Spacer Column (Hidden on mobile, used for layout balance) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Empresa Column */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-center lg:text-left">
            <h4 className="font-serif text-md font-bold mb-6 text-white">Empresa</h4>
            <ul className="space-y-2">
              {['Sobre Nós', 'Carreiras', 'Blog', 'Imprensa'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-400 hover:text-[#dcb13c] text-xs transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ajuda & Legal Column */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-center lg:text-left">
            <h4 className="font-serif text-md font-bold mb-6 text-white">Ajuda & Legal</h4>
            <ul className="space-y-2">
              {['Central de Ajuda', 'Termos de Uso', 'Política de Privacidade', 'Trocas e Devoluções'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-400 hover:text-[#dcb13c] text-xs transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left"
        >
          <div className="text-[10px] text-stone-400 space-y-1">
            <p>© 2024 Minha Box. Todos os direitos reservados.</p>
            <p>Franquia Minha Box Comércio e Serviços Ltda | CNPJ: 58.825.232/0001-80</p>
            <p>Rua Narciso Sturlini 204, Centro, Osasco/SP</p>
          </div>
          <div className="text-[10px] text-stone-500">
            <p>Feito com estilo para você.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;