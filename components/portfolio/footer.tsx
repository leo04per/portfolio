import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Leonardo Pereira. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 