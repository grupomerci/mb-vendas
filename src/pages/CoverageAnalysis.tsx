import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const CoverageAnalysis = () => {
  const [formData, setFormData] = useState({
    cep: '',
    fullName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-12 lg:p-16 justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="flex justify-center mb-12">
             <div className="flex flex-col items-center gap-2">
                <img src={logo} alt="MB Logo" className="h-12 w-auto rounded-sm" />
                <span className="text-2xl text-gray-900 font-medium font-serif">Minha Box</span>
             </div>
          </div>

          {/* Back Link & Title */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Análise de cobertura</h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Informe seu CEP e email para sabermos se você está a na área de cobertura
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>CEP
              </label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                placeholder="CEP"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder-gray-300"
                required
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>Nome Completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nome Completo"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder-gray-300"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder-gray-300"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>Celular/Whatsapp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Celular/Whatsapp"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder-gray-300"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#f4c444] hover:bg-[#e0b030] text-gray-900 font-bold py-3 px-4 rounded-md shadow-md transition-colors uppercase tracking-wider text-sm mt-8"
            >
              Continuar
            </motion.button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-[#1c1614] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
             {/* Using an image from Unsplash that looks like a luxury box or fashion context */}
             <img 
                src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1000&auto=format&fit=crop"
                alt="Minha Box Packaging" 
                className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text contrast if needed, or to match the dark vibe */}
             
             {/* Text Overlay to mimic the "Minha Box Brasil" on the box if we don't have the exact image */}
             <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h2 className="text-5xl md:text-6xl font-serif text-[#d4af37] tracking-tight">Minha<span className="font-bold">Box</span></h2>
                <span className="text-white text-xl tracking-[0.3em] mt-2 font-light">BRASIL</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageAnalysis;
