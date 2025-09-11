import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

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
              <span>Rua Adma Jafet, 74, cj 161 - Bela Vista, SP</span>
            </div>
          </div>
          <div className="hidden md:flex items-center text-xs">
            <span>Segunda a Sexta: 8h às 18h</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">
                  Exacta Centro Oncológico
                </h1>
                <p className="text-xs text-muted-foreground">
                  Cuidado Especializado e Humanizado
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>

            <Button variant="appointment" size="lg">
              Agendar Consulta
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};