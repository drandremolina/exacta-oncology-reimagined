import { Phone, Mail, MapPin } from "lucide-react";
import exactaFooterLogo from "@/assets/exacta-footer-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center">
                <img 
                  src={exactaFooterLogo} 
                  alt="Logotipo do Exacta Centro Oncológico rodapé - Especialista em oncologia e cirurgia oncológica" 
                  className="h-10 object-contain"
                  width="auto"
                  height="40"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Exacta Centro Oncológico</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Cuidado especializado em oncologia no combate ao câncer. 
              Sua jornada de tratamento com a expertise e o acolhimento que você merece.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Menu de navegação do rodapé">
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a 
                  href="/" 
                  className="hover:text-secondary transition-colors"
                  aria-label="Página inicial do Exacta Centro Oncológico"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="hover:text-secondary transition-colors"
                  aria-label="Saiba mais sobre o Exacta Centro Oncológico"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="hover:text-secondary transition-colors"
                  aria-label="Conheça nossos serviços de oncologia"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="hover:text-secondary transition-colors"
                  aria-label="Entre em contato conosco"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a href="tel:+551132583636" className="hover:text-secondary transition-colors">
                  (11) 3258-3636
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a href="mailto:contato@exactaoncologia.com.br" className="hover:text-secondary transition-colors">
                  contato@exactaoncologia.com.br
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" aria-hidden="true" />
                <a 
                  href="https://maps.app.goo.gl/Cb8W9j2LFWLt1uE38" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="Endereço do Exacta Centro Oncológico no Google Maps"
                >
                  Rua Adma Jafet, 74, cj 161<br />
                  Bela Vista, São Paulo - SP
                </a>
              </div>
            </div>
          </address>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Exacta Centro Oncológico. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};