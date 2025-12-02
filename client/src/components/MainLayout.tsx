import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Vantagens", href: "#features" },
    { name: "Sobre", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Planos", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group" onClick={(e) => scrollToSection(e, "#hero")}>
              <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">P</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Plantão<span className="text-primary">360</span>
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alternar tema</span>
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Entrar
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20">
              Baixar Agora
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-foreground border-b border-white/5 pb-4 flex justify-between items-center"
                >
                  {link.name}
                  <ChevronRight size={16} className="text-muted-foreground" />
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <Button variant="outline" className="w-full justify-center border-white/10">
                  Entrar
                </Button>
                <Button className="w-full justify-center bg-primary hover:bg-primary/90 text-white">
                  Baixar Agora
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-white/5 pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-lg">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="font-bold text-xl tracking-tight">
                  Plantão<span className="text-primary">360</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                O primeiro aplicativo criado por médicos para médicos que reúne agenda, finanças e documentos em um só lugar.
              </p>
              <div className="flex gap-4">
                {/* Social Icons */}
                {['instagram', 'facebook', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current mask-icon" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6">Produto</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-muted-foreground hover:text-primary text-sm transition-colors">Funcionalidades</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-primary text-sm transition-colors">Planos e Preços</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-primary text-sm transition-colors">Depoimentos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Download</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6">Suporte</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Status do Sistema</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">LGPD</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 MEDFINANCE360 LTDA • Todos os direitos reservados
            </p>
            <p className="text-muted-foreground text-xs">
              CNPJ: 62.090.783/0001-07 • Feito com 💙 para médicos
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
