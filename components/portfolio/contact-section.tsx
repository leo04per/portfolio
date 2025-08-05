import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Vamos conversar!</h3>
              <p className="text-muted-foreground mb-8">
                Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo através
                dos canais abaixo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>joao.silva@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/joaosilva" target="_blank">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com/in/joaosilva" target="_blank">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:joao.silva@email.com">
                    <Mail className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo e entrarei em contato em breve.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Nome</label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Assunto</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                      placeholder="Sua mensagem..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 