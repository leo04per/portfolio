import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experience = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "Jan 2022 - Presente",
      description:
        "Liderança técnica no desenvolvimento de aplicações web escaláveis, mentoria de desenvolvedores júnior e implementação de melhores práticas de desenvolvimento.",
      achievements: [
        "Reduziu tempo de carregamento das aplicações em 40%",
        "Implementou arquitetura de microserviços",
        "Liderou equipe de 5 desenvolvedores",
      ],
    },
    {
      company: "Digital Agency Pro",
      position: "Full Stack Developer",
      period: "Mar 2020 - Dez 2021",
      description:
        "Desenvolvimento de sites e aplicações web para clientes diversos, desde startups até grandes empresas.",
      achievements: [
        "Entregou mais de 20 projetos com sucesso",
        "Implementou sistema de CI/CD",
        "Melhorou performance de aplicações legadas",
      ],
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "Jun 2018 - Fev 2020",
      description:
        "Desenvolvimento de interfaces de usuário modernas e responsivas, colaboração próxima com designers UX/UI.",
      achievements: [
        "Criou biblioteca de componentes reutilizáveis",
        "Implementou testes automatizados",
        "Otimizou SEO resultando em 60% mais tráfego",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experiência Profissional</h2>
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experience.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-full bg-border" />}
              <div className="flex gap-6 mb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle>{exp.position}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Principais Conquistas:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 