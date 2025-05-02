import Link from "next/link"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl">
              Mohammed Yassen
            </Link>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer specializing in MERN, Laravel, PHP, and DevOps.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium">Quick Links</div>
            <nav className="grid gap-2">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground">
                Skills
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="#advisory" className="text-sm text-muted-foreground hover:text-foreground">
                Advisory
              </Link>
              <Link href="#advisory-projects" className="text-sm text-muted-foreground hover:text-foreground">
                Case Studies
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium">Connect</div>
            <div className="flex gap-4">
              {/* <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </Link> */}
              <Link href="mailto:mahamad9yasin@gmail.com">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
