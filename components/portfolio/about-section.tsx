import { MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-lg mb-6">
              I am a full stack developer with a passion for technology and innovation. 
              I completed my Bachelor's degree in Computer Engineering at IPVC – School of Technology and Management in Viana do Castelo, 
              during three years marked by continuous learning and academic challenges. In my final year, 
              I developed a graduation project as part of an internship, which allowed me to apply my knowledge in a real-world context.
            </p>
            <p className="text-lg mb-6">
              My experience covers both frontend and backend development, with a focus on creating modern digital solutions, 
              functional user interfaces, and well-structured architectures.
              I am motivated to join dynamic teams where I can continue to grow, contribute with critical thinking, collaborate e
              ffectively, and keep learning every day.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Monção, Viana do Castelo, Portugal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 