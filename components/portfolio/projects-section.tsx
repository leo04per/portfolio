import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "ON IPVC Development Team",
      description:
        "Worked on the ON IPVC platform with interactive dashboards and data visualization.",
      image: "/ipvc.jpg",
      technologies: ["Svelte", "PostgreSQL", "Prisma.io", "Chart.js", "TypeScript"],
      github: "",
      demo: "",
      highlights: [
        "Sistema de autenticação completo",
        "Integração com gateway de pagamento",
        "Dashboard administrativo",
        "Responsivo e otimizado para SEO",
      ],
    },
    {
      title: "CP Train Tracking - MCP Server",
      description: "Provide simplified natural language access to real-time data about the national railway network, including train schedules, locations, delays, and disruptions. Integrate easily with MCP-compatible applications to deliver informative and contextual responses. Enable seamless interaction with public API of CP - Comboios de Portugal",
      image: "/smithery.png",
      technologies: ["modelcontextprotocol.io", "Python"],
      github: "https://github.com/leo04per/cp-train-tracking",
      demo: "https://smithery.ai/server/@leo04per/cp-train-tracking",
      highlights: [
        "Integration with public APIs from Comboios Portugal",
        "Converting natural language into structured queries",
        "Informative and contextual responses for end users",
        "Compatibility with MCP clients",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden w-full max-w-sm sm:max-w-md">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    {project.github && /^https?:\/\//.test(project.github) && (
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                    {project.demo && /^https?:\/\//.test(project.demo) && (
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                    {!((project.github && /^https?:\/\//.test(project.github)) ||
                      (project.demo && /^https?:\/\//.test(project.demo))) && (
                      <Badge variant="outline" className="text-[10px] opacity-70">
                        No link
                      </Badge>
                    )}
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tecnologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Highlights:</h4>
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