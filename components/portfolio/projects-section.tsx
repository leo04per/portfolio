import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/usuario/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      highlights: [
        "Sistema de autenticação completo",
        "Integração com gateway de pagamento",
        "Dashboard administrativo",
        "Responsivo e otimizado para SEO",
      ],
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.",
      image: "/task-management-interface.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com/usuario/task-manager",
      demo: "https://taskmanager-demo.vercel.app",
      highlights: [
        "Colaboração em tempo real",
        "Sistema de notificações",
        "Drag & drop interface",
        "Filtros e busca avançada",
      ],
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Dashboard analítico para visualização de dados meteorológicos com gráficos interativos e previsões.",
      image: "/placeholder-x5wsf.png",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "PostgreSQL"],
      github: "https://github.com/usuario/weather-dashboard",
      demo: "https://weather-analytics.vercel.app",
      highlights: [
        "Visualizações interativas",
        "API de dados meteorológicos",
        "Previsões baseadas em ML",
        "Exportação de relatórios",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Destaques:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 