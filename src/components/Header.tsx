import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import exactaLogo from "@/assets/exacta-new-logo.png";

export const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(11) 3258-3636</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <a 
                href="https://maps.app.goo.gl/Cb8W9j2LFWLt1uE38" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Rua Adma Jafet, 74, cj 161 - Bela Vista, SP
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center text-xs">
            <span>Segunda a Sexta: 8h às 19h</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-soft sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between" role="navigation" aria-label="Menu principal">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <img 
                  src={exactaLogo} 
                  alt="Logotipo do Exacta Centro Oncológico - Cuidado especializado em oncologia" 
                  className="h-12 object-contain"
                  width="auto"
                  height="48"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">
                  Exacta Centro Oncológico
                </h1>
                <p className="text-xs text-muted-foreground">
                  Cuidado Especializado em Oncologia
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>

            <Button 
              variant="appointment" 
              size="lg"
              asChild
            >
              <a href="https://wa.me/5511971644726" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};