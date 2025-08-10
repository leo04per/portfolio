import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin} from "lucide-react"

export function ExperienceSection() {
  const experience = [
    {
      company: "Bitsapiens.io",
      position: "Full Stack Developer - Curricular Intership",
      period: "March 2025 - July 2025",
      description:
        "Bitsapiens.io is a software development company that provides software development services to clients. I was responsible for the development of the internal project of the company.",
      achievements: [
        "Developed a web application using Next.js, Nodejs, TypeScript, and Tailwind CSS",
        "Implemented secure authentication with NextAuth.js",
        "Built microservices architecture with custom API endpoints for seamless application integration",
        "Built responsive UI components using Shadcn/ui and Framer Motion",
      ],
      adcanced_features: [
        "Created AI-powered chat system with natural language understanding",
        "Integrated AI models from OpenAI, Anthropic, and Perplexity",
        "Designed custom OCR system using Mistral AI",
      ],
      link: "https://bitsapiens.io/",
      location: "Barcelos, Braga (Remote), Portugal",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
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
                        <CardTitle className="text-xl font-bold">{exp.company}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {exp.position}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Advanced Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.adcanced_features.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-end">
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        Go To Company Page
                      </a>
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