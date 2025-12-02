import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  DollarSign, 
  FileText, 
  Shield, 
  Smartphone, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  Plus, 
  Minus,
  Activity,
  Heart,
  Zap,
  TrendingUp,
  Lock,
  Zap as Lightning
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Animation variants - Ease-out for clinical precision
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const glowVariant = {
  initial: { boxShadow: "0 0 0 0 rgba(0, 184, 255, 0)" },
  animate: { boxShadow: "0 0 20px 4px rgba(0, 184, 255, 0.1)" }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section - Clinical Minimalism */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Surgical Contrast Background */}
        <div className="absolute inset-0 bg-background z-0">
          {/* Subtle gradient overlays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-[900px] h-[700px] bg-cyan-500/5 rounded-full blur-[120px] opacity-15"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('./grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
          
          {/* Fine dividing lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-8 max-w-2xl"
          >
            {/* Status Badge */}
            <motion.div 
              variants={fadeIn} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-medium text-cyan-300 uppercase tracking-widest">Tecnologia que compreende</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              variants={fadeIn} 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              Cuidar de <br />
              <span className="text-gradient-blue">Quem Cuida</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              variants={fadeIn} 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-light"
            >
              O primeiro aplicativo criado <strong className="font-semibold text-foreground">por médicos para médicos</strong> que reúne agenda, finanças e documentos em um só lugar.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={fadeIn} 
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-primary/20 transition-all"
                >
                  <Smartphone className="mr-2 h-5 w-5" /> Baixar na App Store
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/10 hover:bg-white/5 text-foreground rounded-full px-8 h-14 text-base font-semibold transition-all"
                >
                  <Smartphone className="mr-2 h-5 w-5" /> Google Play
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Social Proof */}
            <motion.div 
              variants={fadeIn} 
              className="flex items-center gap-4 mt-8 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-cyan-500/40 border border-white/10 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p>Mais de <strong className="text-foreground font-semibold">10.000 médicos</strong> já usam</p>
            </motion.div>
          </motion.div>

          {/* Right Column - App Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
            className="relative hidden lg:flex justify-center"
          >
            {/* Phone Frame with Glassmorphism */}
            <motion.div 
              animate={glowVariant.animate}
              initial={glowVariant.initial}
              className="relative w-[320px] h-[680px]"
            >
              <div className="absolute inset-0 bg-card rounded-[40px] border-8 border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
                {/* Notch */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-black/80 z-30 flex justify-center">
                  <div className="w-32 h-4 bg-black rounded-b-xl"></div>
                </div>
                
                {/* App Content */}
                <div className="w-full h-full bg-gradient-to-b from-background to-background/95 flex flex-col p-4 pt-12 overflow-hidden">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <div className="text-xs text-muted-foreground font-light">Bom dia,</div>
                      <div className="font-bold text-lg text-foreground">Dr. Carlos</div>
                    </div>
                    <motion.div 
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30"
                    >
                      <Activity size={18} />
                    </motion.div>
                  </div>
                  
                  {/* Balance Card - Glassmorphism */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-gradient-to-br from-primary/20 to-cyan-500/10 rounded-2xl p-5 text-white mb-6 border border-primary/30 backdrop-blur-sm"
                  >
                    <div className="text-xs opacity-70 mb-2 font-light">Ganhos em Novembro</div>
                    <div className="text-2xl font-bold mb-4 tracking-tight">R$ 24.500,00</div>
                    <div className="flex gap-2">
                      <div className="bg-white/10 rounded-lg px-3 py-1 text-xs backdrop-blur-sm border border-white/10">
                        Plantões: 12
                      </div>
                      <div className="bg-white/10 rounded-lg px-3 py-1 text-xs backdrop-blur-sm border border-white/10">
                        Horas: 144h
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Next Shifts */}
                  <div className="mb-3 font-semibold text-sm text-foreground">Próximos Plantões</div>
                  <div className="space-y-3 flex-1">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 4 }}
                        className="bg-card/60 border border-white/5 rounded-xl p-3 flex items-center gap-3 backdrop-blur-sm hover:border-white/10 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm ${
                          i === 1 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}>
                          {i === 1 ? '✓' : '→'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-foreground">Hospital Santa Cruz</div>
                          <div className="text-xs text-muted-foreground">12h • UTI Geral</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-bold text-sm text-foreground">R$ 1.200</div>
                          <div className="text-[10px] text-muted-foreground">24 Nov</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Notification Cards */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] -right-12 bg-card/70 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30">
                  <DollarSign size={16} />
                </div>
                <div className="text-sm font-semibold text-foreground">Recebido</div>
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">Plantão Hospital São Lucas pago com sucesso.</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] -left-12 bg-card/70 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <Lock size={16} />
                </div>
                <div className="text-sm font-semibold text-foreground">Docs Seguros</div>
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">CRM e Diploma salvos na nuvem criptografada.</div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest font-light">Scroll</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section - Bento Grid Style */}
      <section className="py-32 bg-background relative border-t border-white/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">O Problema Que Resolvemos</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Médicos plantonistas enfrentam múltiplos vínculos, escalas desorganizadas e ausência de clareza financeira. Chega de caos.
            </p>
          </motion.div>

          {/* Bento Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Large Card - Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-card/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-white/10 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 border border-red-500/30 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Caos na Rotina</h3>
                  <p className="text-muted-foreground leading-relaxed">Múltiplos vínculos, escalas espalhadas em diferentes plataformas e falta de sincronização. Você perde oportunidades e comete erros por desorganização.</p>
                </div>
              </div>
            </motion.div>

            {/* Small Card - Right Top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-white/10 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Confusão Financeira</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Sem controle sobre ganhos, descontos e prazos de pagamento. Difícil negociar e planejar o futuro.</p>
            </motion.div>

            {/* Small Card - Left Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-white/10 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 border border-yellow-500/30 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Documentos Perdidos</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">CRM, diploma, certificados espalhados. Insegurança e perda de tempo procurando.</p>
            </motion.div>

            {/* Small Card - Right Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-card/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-white/10 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Burnout Invisível</h3>
                  <p className="text-muted-foreground leading-relaxed">Sem visibilidade sobre carga de trabalho, descanso e equilíbrio. A profissão que deveria ser gratificante vira fonte de estresse.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section - Features */}
      <section className="py-32 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">A Solução Plantão 360</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Um painel de controle intuitivo que centraliza tudo o que você precisa para trabalhar com clareza e viver com equilíbrio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Agenda Inteligente",
                description: "Todos os seus plantões em um só lugar. Sincronização automática, alertas precisos e visualização clara de sua carga de trabalho.",
                color: "from-blue-500/20 to-cyan-500/10"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Gestão Financeira",
                description: "Controle total de ganhos, descontos e prazos. Relatórios detalhados para negociar melhor e planejar seu futuro.",
                color: "from-green-500/20 to-emerald-500/10"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Gavetas Digitais",
                description: "Documentos seguros na nuvem criptografada. CRM, diploma, certificados sempre à mão, em qualquer lugar.",
                color: "from-purple-500/20 to-pink-500/10"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Insights Pessoais",
                description: "Visualize seu bem-estar. Análises sobre carga de trabalho, descanso e equilíbrio para tomar decisões melhores.",
                color: "from-orange-500/20 to-red-500/10"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${feature.color} border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-white/10 transition-colors group`}
              >
                <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background relative border-t border-white/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Histórias de Transformação</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Médicos que recuperaram seu tempo, sua saúde mental e sua paixão pela profissão.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Plantão 360 mudou minha vida. Agora tenho clareza sobre meus ganhos e consigo planejar melhor. Menos estresse, mais tranquilidade.",
                author: "Dr. Felipe Mendes",
                role: "Cardiologista, São Paulo"
              },
              {
                quote: "Finalmente tenho controle sobre minha agenda. Não perco mais oportunidades e consigo descansar sabendo que tudo está organizado.",
                author: "Dra. Marina Costa",
                role: "Médica de Família, Rio de Janeiro"
              },
              {
                quote: "A segurança dos meus documentos e a facilidade de acesso foram game-changers. Recomendo para todo colega que conheço.",
                author: "Dr. Lucas Ferreira",
                role: "Cirurgião, Belo Horizonte"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-white/10 transition-colors relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-primary flex items-center justify-center rounded-full text-white">
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit mb-8 backdrop-blur-sm"
            >
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-widest">Nosso Manifesto</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-16 leading-tight tracking-tight"
            >
              Não é sobre fazer mais.<br />
              <span className="text-gradient-blue">É sobre viver melhor.</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1 border border-red-500/30">
                    <Minus className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">O que deixamos para trás</h3>
                    <p className="text-muted-foreground leading-relaxed">Chega de glorificar o cansaço, romantizar o burnout e medir sucesso apenas por horas trabalhadas.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-1 border border-green-500/30">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">O que construímos</h3>
                    <p className="text-muted-foreground leading-relaxed">Médicos que trabalham com propósito, descansam com consciência e vivem com equilíbrio.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 p-8 bg-card/50 border border-white/5 rounded-3xl relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
              <p className="text-xl md:text-2xl font-medium text-foreground relative z-10 leading-relaxed">
                "É sobre tecnologia que <span className="text-primary font-semibold">liberta</span>, não que aprisiona. <br className="hidden md:block" />
                É sobre humanidade que <span className="text-primary font-semibold">acolhe</span>, não que julga."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-background relative border-t border-white/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Planos e Preços</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">Escolha o plano ideal para sua carreira</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-white/5 rounded-3xl p-8 flex flex-col backdrop-blur-sm hover:border-white/10 transition-colors"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Gratuito</h3>
                <p className="text-muted-foreground text-sm">Experimente gratuitamente</p>
                <div className="mt-6 text-4xl font-bold text-foreground">R$ 0<span className="text-lg font-normal text-muted-foreground">/mês</span></div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Gestão básica de plantões",
                  "Calendário simples",
                  "Relatórios básicos",
                  "Até 2 gavetas digitais"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 h-12 rounded-xl font-semibold">
                  Começar Grátis
                </Button>
              </motion.div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-cyan-500/10 border border-primary/30 rounded-3xl p-8 flex flex-col relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                MAIS POPULAR
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-primary">Premium</h3>
                <p className="text-muted-foreground text-sm">Experiência completa</p>
                <div className="mt-6 text-4xl font-bold text-foreground">R$ 9,90<span className="text-lg font-normal text-muted-foreground">/mês</span></div>
                <div className="text-xs text-muted-foreground mt-2">ou R$ 99,90/ano (economize 16%)</div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Tudo do Gratuito",
                  "Backup em nuvem ilimitado",
                  "Gavetas digitais ilimitadas",
                  "Relatórios avançados",
                  "Plantões recorrentes",
                  "Alertas personalizados",
                  "Suporte prioritário"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-semibold shadow-lg shadow-primary/20">
                  Assinar Premium
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-32 bg-background border-t border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Blog e Recursos</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">Conteúdo para impulsionar sua carreira médica</p>
            </div>
            <motion.div whileHover={{ x: 4 }} className="hidden md:block">
              <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80 font-semibold">
                Ver todos os artigos <ArrowRight size={18} />
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Bem-estar",
                title: "Como Evitar o Burnout na Medicina: 7 estratégias práticas",
                readTime: "5 min de leitura",
                color: "from-blue-900/30 to-slate-900/30"
              },
              {
                category: "Finanças",
                title: "Gestão Financeira para Médicos Plantonistas: Guia completo",
                readTime: "8 min de leitura",
                color: "from-emerald-900/30 to-slate-900/30"
              },
              {
                category: "Carreira",
                title: "Escalas de Plantão: Como negociar e gerenciar múltiplos vínculos",
                readTime: "6 min de leitura",
                color: "from-purple-900/30 to-slate-900/30"
              }
            ].map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`aspect-video rounded-2xl mb-4 overflow-hidden bg-gradient-to-br ${post.color} relative border border-white/5`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-white border border-white/10">
                    {post.category}
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-foreground">{post.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="ghost" className="gap-2 text-primary font-semibold">
              Ver todos os artigos <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-background border-t border-white/5">
        <div className="container max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Perguntas Frequentes</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">Tire suas dúvidas sobre o Plantão 360</p>
          </motion.div>
          
          <div className="space-y-4">
            {[
              {
                q: "O Plantão 360 funciona offline?",
                a: "Sim! Você pode acessar todo seu histórico mesmo sem internet. Os dados sincronizam automaticamente quando você voltar online."
              },
              {
                q: "Meus dados estão seguros?",
                a: "Sim. Usamos criptografia de ponta a ponta e servidores seguros. Você é o único dono dos seus dados."
              },
              {
                q: "Posso usar no celular e no tablet?",
                a: "Sim! Com o backup em nuvem (plano Premium), seus dados ficam sincronizados em todos os dispositivos."
              },
              {
                q: "Qual a diferença entre Gratuito e Premium?",
                a: "O plano gratuito oferece funcionalidades básicas. O Premium inclui backup ilimitado, gavetas ilimitadas, relatórios avançados e muito mais."
              },
              {
                q: "Posso cancelar a assinatura quando quiser?",
                a: "Sim, você pode cancelar a qualquer momento. Sem multas, sem complicação."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-white/5 bg-transparent overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between py-6 text-left hover:opacity-70 transition-opacity group"
                >
                  <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{i + 1}. {item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-muted-foreground text-base leading-relaxed font-light">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-[url('./grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Comece sua jornada rumo ao equilíbrio
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed font-light">
              Junte-se a milhares de médicos que já transformaram suas rotinas com o Plantão 360.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-semibold shadow-xl transition-all">
                <Smartphone className="mr-2 h-5 w-5" /> Baixar Agora - Grátis
              </Button>
            </motion.div>
            
            <div className="mt-8 text-sm text-blue-200 font-light">
              Disponível para iOS e Android
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
