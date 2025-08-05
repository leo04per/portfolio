import { Button } from "@/components/ui/button"
import { Code, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Leonardo Pereira</h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              I am a recently graduated developer with a strong interest in 
              building modern and functional digital solutions. 
              I have been deepening my knowledge in technologies such as React, 
              Next.js, and Node.js, focusing on best development practices, performance, 
              and user experience. I am also passionate about Artificial Intelligence and continuously 
              exploring how to integrate AI into web development. I am eager to apply my skills in real-world 
              projects and contribute to scalable and impactful applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild>
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">
                  <Code className="w-4 h-4 mr-2" />
                  My Projects
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/leo04per">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/in/leonardo-pereira-535088347/">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="/Leonardo_pereira.jpg"
                alt="Leonardo Pereira"
                width={300}
                height={300}
                className="rounded-full border-4 border-primary/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full">
                <Code className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 