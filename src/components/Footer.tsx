import { Phone, Mail, MapPin } from "lucide-react";
import exactaFooterLogo from "@/assets/exacta-footer-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center">
                <img 
                  src={exactaFooterLogo} 
                  alt="Exacta Centro Oncológico Logo" 
                  className="h-10 object-contain"
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
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#inicio" className="hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 3258-3636</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@exactaoncologia.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  Rua Adma Jafet, 74, cj 161<br />
                  Bela Vista, São Paulo - SP
                </span>
              </div>
            </div>
          </div>
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