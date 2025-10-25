import { Target, Heart, Users } from "lucide-react";

export const WhyChooseUs = () => {
  return (
    <section id="sobre" className="py-20 bg-muted" role="region" aria-labelledby="why-choose-title">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="why-choose-title" className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Por que escolher a Exacta Centro Oncológico?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa missão é oferecer cuidado excepcional através de uma abordagem 
            integrada e humanizada no tratamento oncológico.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12" role="list" aria-label="Nossos diferenciais">
          {/* Atendimento Personalizado */}
          <article className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2" role="listitem">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-6 mx-auto" aria-hidden="true">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Atendimento Personalizado
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Cuidado personalizado focado no bem-estar e conforto do paciente e família, 
              proporcionando suporte emocional durante toda a jornada de tratamento.
            </p>
          </article>

          {/* Tratamento Especializado */}
          <article className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2" role="listitem">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 mx-auto" aria-hidden="true">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Tratamento Especializado
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Equipe multidisciplinar com vasta experiência em oncologia e cirurgia oncológica, 
              focada na precisão do tratamento e nas mais avançadas técnicas médicas.
            </p>
          </article>

          {/* Abordagem Integral */}
          <article className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2" role="listitem">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 mx-auto" aria-hidden="true">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Abordagem Integral
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              A Exacta cuida de reunir os profissionais necessários para cada caso, 
              proporcionando tratamento completo desde o diagnóstico até o acompanhamento pós-tratamento.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};