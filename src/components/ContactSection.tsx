import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-muted" role="region" aria-labelledby="contact-title">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para cuidar de você. Entre em contato conosco para 
            agendar sua consulta ou esclarecer suas dúvidas.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Informações de Contato
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Telefones</h4>
                <p className="text-muted-foreground">
                  (11) 3258-3636<br />
                  (11) 97164-4726
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <p className="text-muted-foreground">
                  contato@exactaoncologia.com.br
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Endereço</h4>
                <a 
                  href="https://maps.app.goo.gl/Cb8W9j2LFWLt1uE38" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Rua Adma Jafet, 74, cj 161<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP 01308-050
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Horário de Funcionamento</h4>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 19h
                </p>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Agende Sua Consulta
            </h3>
            <p className="text-muted-foreground mb-8">
              Entre em contato conosco para agendar sua consulta ou esclarecer 
              suas dúvidas. Nossa equipe está pronta para atendê-lo.
            </p>

            <div className="space-y-4">
              <Button 
                variant="appointment" 
                size="lg" 
                className="w-full justify-start gap-4"
                asChild
              >
                <a href="https://wa.me/5511971644726" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Agendar via WhatsApp
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-start gap-4"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </Button>
              
              <Button 
                variant="medical" 
                size="lg" 
                className="w-full justify-start gap-4"
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};