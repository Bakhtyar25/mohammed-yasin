"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="font-bold text-xl">
          Mohammed Yassen
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#advisory" className="text-sm font-medium hover:text-primary transition-colors">
            Advisory
          </Link>
          <Link href="#advisory-projects" className="text-sm font-medium hover:text-primary transition-colors">
            Case Studies
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container flex flex-col items-center justify-center gap-8 py-8">
            <Link href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#skills" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Skills
            </Link>
            <Link href="#projects" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#advisory" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Advisory
            </Link>
            <Link href="#advisory-projects" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Case Studies
            </Link>
            <Link href="#contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
