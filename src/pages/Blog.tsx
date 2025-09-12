import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Heart } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Avanços na Imunoterapia contra o Câncer",
      excerpt: "Descubra como os tratamentos de imunoterapia estão revolucionando o combate ao câncer, oferecendo novas esperanças aos pacientes.",
      content: "A imunoterapia representa uma das maiores revoluções no tratamento oncológico dos últimos anos. Este tratamento utiliza o próprio sistema imunológico do paciente para combater as células cancerígenas...",
      author: "Dr. João Silva",
      date: "15 de Janeiro, 2024",
      category: "Tratamentos",
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "A Importância do Diagnóstico Precoce",
      excerpt: "Entenda por que a detecção precoce do câncer pode aumentar significativamente as chances de cura e qualidade de vida do paciente.",
      content: "O diagnóstico precoce é fundamental no tratamento do câncer. Quando detectado em seus estágios iniciais, muitos tipos de câncer têm taxas de cura muito elevadas...",
      author: "Dra. Maria Santos",
      date: "10 de Janeiro, 2024",
      category: "Prevenção",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Cuidados Paliativos: Humanização no Tratamento",
      excerpt: "Os cuidados paliativos focam na qualidade de vida e bem-estar do paciente e família durante todo o processo de tratamento.",
      content: "Os cuidados paliativos são uma abordagem médica especializada que visa melhorar a qualidade de vida de pacientes e familiares enfrentando doenças graves...",
      author: "Dr. Carlos Oliveira",
      date: "5 de Janeiro, 2024",
      category: "Cuidados",
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Nutrição Durante o Tratamento Oncológico",
      excerpt: "Dicas essenciais de alimentação para manter a força e energia durante o tratamento contra o câncer.",
      content: "Uma alimentação adequada durante o tratamento oncológico é fundamental para manter a imunidade, energia e ajudar na recuperação...",
      author: "Dra. Ana Costa",
      date: "28 de Dezembro, 2023",
      category: "Nutrição",
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Apoio Psicológico no Combate ao Câncer",
      excerpt: "O suporte emocional é fundamental para enfrentar os desafios do tratamento oncológico com força e esperança.",
      content: "O diagnóstico de câncer traz grandes impactos emocionais para pacientes e familiares. O apoio psicológico especializado é essencial...",
      author: "Psic. Roberto Ferreira",
      date: "20 de Dezembro, 2023",
      category: "Apoio",
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Tecnologias Avançadas em Radioterapia",
      excerpt: "Conheça as mais modernas técnicas de radioterapia que oferecem tratamentos mais precisos e menos invasivos.",
      content: "A radioterapia moderna utiliza tecnologias de ponta para direcionar a radiação com precisão milimétrica, minimizando efeitos colaterais...",
      author: "Dr. Paulo Martins",
      date: "15 de Dezembro, 2023",
      category: "Tecnologia",
      image: "/api/placeholder/600/300"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Tratamentos": "bg-primary/10 text-primary",
      "Prevenção": "bg-secondary/10 text-secondary",
      "Cuidados": "bg-accent/10 text-accent-foreground",
      "Nutrição": "bg-green-100 text-green-800",
      "Apoio": "bg-blue-100 text-blue-800",
      "Tecnologia": "bg-purple-100 text-purple-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Blog Exacta Oncologia
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Informações atualizadas, dicas de saúde e novidades sobre tratamentos oncológicos 
              para pacientes, familiares e profissionais da saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <Heart className="w-12 h-12 text-primary/30" />
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group">
                    Ler Artigo Completo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="medical" size="lg">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Receba Nossas Novidades
            </h2>
            <p className="text-muted-foreground mb-8">
              Inscreva-se em nossa newsletter e fique por dentro das últimas notícias 
              e avanços na área de oncologia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="appointment" size="lg">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;