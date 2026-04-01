/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Layers, Star, ArrowUpRight, Instagram, Linkedin, Globe } from "lucide-react";
import { useEffect, useState, FormEvent } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-display font-extrabold tracking-tighter">NEXUS</div>
        <div className="hidden md:flex space-x-12 text-sm font-medium tracking-widest uppercase opacity-70">
          <a href="#expertise" className="hover:opacity-100 transition-opacity">Expertise</a>
          <a href="#processo" className="hover:opacity-100 transition-opacity">O Processo</a>
          <a href="#social" className="hover:opacity-100 transition-opacity">Social</a>
        </div>
        <a 
          href="https://wa.me/message/F4ZGMVBPOM4UB1" 
          className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all"
        >
          Orçamento
        </a>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-20 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className="font-display text-5xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-8"
        >
          SITES QUE DEFINEM<br />O NOVO PADRÃO.
        </motion.h1>
        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 font-light"
        >
          Combinamos estética de luxo e performance brutal para marcas que não aceitam o comum. O próximo nível da sua presença digital começa aqui.
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <a 
            href="https://wa.me/message/F4ZGMVBPOM4UB1" 
            className="cta-pulse inline-block bg-white text-black px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Inicie seu projeto
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = [
    "Design Impecável", "+450 Projetos", "Performance de Elite", "UI/UX Premium", "Código Limpo"
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-surface overflow-hidden">
      <div className="flex whitespace-nowrap opacity-30 animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className={`text-4xl font-display font-bold uppercase tracking-tighter mx-10 ${i % 2 !== 0 ? "text-outline" : ""}`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-20"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">A EXCELÊNCIA<br />NOS DETALHES.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card md:col-span-2 p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] overflow-hidden relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" 
            alt="Design"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted">Qualidade</span>
            <h3 className="text-3xl font-display mt-4">Arquitetura Visual de<br />Altíssima Fidelidade.</h3>
          </div>
          <p className="relative z-10 text-muted max-w-sm">Cada pixel é posicionado estrategicamente para guiar o olhar do seu cliente até a conversão final.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white hover:text-black transition-colors group"
        >
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-black/20">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-display mb-2">Preço Inovador</h3>
            <p className="text-sm opacity-60">Modelos de investimento disruptivos para o mercado premium.</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-10 rounded-[2.5rem] flex flex-col justify-between"
        >
          <div className="text-5xl font-display font-bold">24/7</div>
          <div>
            <h3 className="text-2xl font-display mb-2">Suporte de Elite</h3>
            <p className="text-sm text-muted">Atendimento impecável e dedicado para garantir sua tranquilidade.</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card md:col-span-2 p-10 rounded-[2.5rem] flex items-center gap-10 bg-white text-black"
        >
          <div className="hidden md:block w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
              className="rounded-2xl grayscale" 
              alt="Code"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-display mb-4 tracking-tighter">Performance Brutal.</h3>
            <p className="opacity-70 leading-relaxed">Não apenas beleza. Nossos sites carregam em milissegundos, garantindo que nenhum cliente seja perdido pela espera.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="processo" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tighter">TRANSFORMAMOS VISÃO<br />EM REALIDADE DIGITAL.</h2>
          <div className="space-y-6 text-muted text-lg font-light">
            <p>Atuamos na intersecção entre arte e engenharia. Para o público jovem e exigente, um site não é apenas um cartão de visitas, é a própria prova de autoridade da marca.</p>
            <p>Nossa metodologia foca em exclusividade. Cada projeto é construído do zero, sem templates prontos, sem limitações criativas.</p>
          </div>
          <div className="mt-12 flex gap-8">
            <div>
              <div className="text-3xl font-display font-bold">100%</div>
              <div className="text-xs uppercase tracking-widest text-muted mt-1">Exclusivo</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold">0.8s</div>
              <div className="text-xs uppercase tracking-widest text-muted mt-1">LCP Médio</div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
              alt="Escritório" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block">
            <p className="text-2xl font-display italic">"A elite do desenvolvimento."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "Gabriel Santos", role: "CEO, TechFlow", text: "O nível de detalhe e a fluidez do site superaram todas as expectativas da nossa startup." },
    { name: "Mariana Costa", role: "Founder, Bloom", text: "Finalmente uma agência que entende a estética moderna e entrega performance real." },
    { name: "Lucas Oliveira", role: "Marketing Dir, Nexa", text: "Atendimento impecável do início ao fim. O melhor investimento que fizemos este ano." }
  ]);

  const [newReview, setNewReview] = useState({ name: "", role: "", text: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([newReview, ...reviews]);
      setNewReview({ name: "", role: "", text: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <section id="social" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-left">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">FEEDBACK DE QUEM<br />DOMINA O MERCADO.</h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all cursor-pointer"
          >
            Deixar Feedback
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bento-card p-8 rounded-3xl"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg italic mb-8 opacity-80">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-muted" />
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-xs text-muted uppercase">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Feedback */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-lg bg-surface border border-white/10 p-10 rounded-[2.5rem] z-10"
          >
            <h3 className="text-3xl font-display font-bold mb-6 tracking-tighter">SEU FEEDBACK</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">Nome</label>
                <input 
                  required
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className="w-full bg-dark border border-white/5 rounded-xl px-4 py-3 focus:border-white/20 outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">Empresa / Cargo</label>
                <input 
                  type="text"
                  value={newReview.role}
                  onChange={(e) => setNewReview({...newReview, role: e.target.value})}
                  className="w-full bg-dark border border-white/5 rounded-xl px-4 py-3 focus:border-white/20 outline-none transition-colors"
                  placeholder="Ex: CEO, TechFlow"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">Mensagem</label>
                <textarea 
                  required
                  rows={4}
                  value={newReview.text}
                  onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  className="w-full bg-dark border border-white/5 rounded-xl px-4 py-3 focus:border-white/20 outline-none transition-colors resize-none"
                  placeholder="Sua experiência conosco..."
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="submit"
                  className="flex-1 bg-white text-black py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all"
                >
                  Enviar
                </button>
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 border border-white/10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-3xl font-display font-extrabold tracking-tighter">NEXUS</div>
          <div className="flex gap-12 text-xs font-bold uppercase tracking-widest opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-2"><ArrowUpRight className="w-4 h-4" /> Behance</a>
            <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a>
          </div>
          <div className="text-xs text-muted font-medium uppercase tracking-[0.2em]">
            &copy; 2026 Nexus Digital. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BentoGrid />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
