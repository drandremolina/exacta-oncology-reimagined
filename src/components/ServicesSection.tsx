import { Button } from "@/components/ui/button";
import { Stethoscope, Scissors, Shield } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Oferecemos tratamento especializado em oncologia com foco na 
            excelência e humanização do cuidado.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              Especialidades Integradas
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              A Exacta Centro Oncológico cuida de reunir os profissionais necessários 
              para cada caso de forma personalizada, garantindo um tratamento integral 
              e coordenado.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Oncologia Clínica
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Cirurgia Oncológica
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Acompanhamento Multidisciplinar
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-accent to-accent/50 rounded-2xl p-8">
            <Stethoscope className="w-16 h-16 text-accent-foreground mb-6" />
            <h4 className="text-2xl font-bold text-accent-foreground mb-4">
              Cuidado Personalizado
            </h4>
            <p className="text-accent-foreground/80">
              Cada paciente recebe um plano de tratamento único, desenvolvido 
              especificamente para suas necessidades e condições.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cirurgia Oncológica */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <Scissors className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Cirurgia Oncológica
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Procedimentos cirúrgicos especializados com precisão e segurança, 
              utilizando técnicas avançadas para o tratamento cirúrgico do câncer.
            </p>
            <Button variant="outline" className="w-full">
              Saiba Mais
            </Button>
          </div>

          {/* Câncer de Pele */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Câncer de Pele
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Diagnóstico precoce e tratamento eficaz do câncer de pele, com métodos 
              avançados de detecção e terapias especializadas.
            </p>
            <Button variant="outline" className="w-full">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};