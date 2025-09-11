import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Exacta Centro
            <span className="block text-secondary">
              Oncológico
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Cuidado especializado e humanizado no combate ao câncer. 
            Sua jornada de tratamento com a expertise e o acolhimento que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Agendar Consulta
            </Button>
            <Button variant="outline-medical" size="lg" className="text-lg px-8 py-4">
              Nossos Serviços
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Equipe Multidisciplinar</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Atendimento Humanizado</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Tratamento Completo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};