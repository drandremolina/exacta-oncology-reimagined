import { Target, Heart, Users } from "lucide-react";

export const WhyChooseUs = () => {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Por que escolher a Exacta Centro Oncológico?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa missão é oferecer cuidado excepcional através de uma abordagem 
            integrada e humanizada no tratamento oncológico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Precisão Especializada */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Precisão Especializada
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Equipe multidisciplinar com vasta experiência em oncologia e cirurgia oncológica, 
              focada na precisão do tratamento e nas mais avançadas técnicas médicas.
            </p>
          </div>

          {/* Atendimento Humanizado */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Atendimento Humanizado
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cuidado personalizado focado no bem-estar e conforto do paciente e família, 
              proporcionando suporte emocional durante toda a jornada de tratamento.
            </p>
          </div>

          {/* Abordagem Integral */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Abordagem Integral
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A Exacta cuida de reunir os profissionais necessários para cada caso, 
              proporcionando tratamento completo desde o diagnóstico até o acompanhamento pós-tratamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};