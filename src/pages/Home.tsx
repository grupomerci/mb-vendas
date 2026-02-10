import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Plans from '../components/Plans';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Philosophy from '../components/Philosophy';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-gold-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Plans />
        <Philosophy />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
