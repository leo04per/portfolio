import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Academic Formation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Bachelor's degree in Computer Engineering</h3>
                <p className="text-sm text-muted-foreground">IPVC - ESTG (Escola Superior de Tecnologia e Gestão)</p>
                <p className="text-sm text-muted-foreground">2022 - 2025</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold"> Science and Technology</h3>
                <p className="text-sm text-muted-foreground">Escola Secundária de Monção</p>
                <p className="text-sm text-muted-foreground">2019 - 2022</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge className="w-5 h-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Coming soon ...</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 