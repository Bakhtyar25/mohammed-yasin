"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  ShieldCheck,
  Server,
  Zap,
  Code,
  Rocket,
  Cpu,
  Globe,
  Lock,
  FileCode,
  BarChart,
} from "lucide-react";

export default function DeveloperAdvisory() {
  const advisoryCategories = [
    {
      id: "seo",
      name: "SEO",
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Search Engine Optimization",
      description:
        "Strategies to improve visibility and ranking in search results",
      items: [
        "Technical SEO audits and implementation",
        "Semantic HTML structure for better indexing",
        "Performance optimization for SEO signals",
        "Structured data and schema markup",
        "SEO-friendly URL structures and redirects",
      ],
    },
    {
      id: "security",
      name: "Security",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Web Application Security",
      description: "Protecting applications from vulnerabilities and threats",
      items: [
        "Security audits and vulnerability assessments",
        "Authentication and authorization best practices",
        "OWASP Top 10 mitigation strategies",
        "Data encryption and secure storage",
        "XSS, CSRF, and SQL injection prevention",
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Development Operations",
      description: "Streamlining development and deployment processes",
      items: [
        "CI/CD pipeline setup and optimization",
        "Docker containerization strategies",
        "Kubernetes orchestration",
        "Infrastructure as Code (IaC)",
        "Monitoring and logging best practices",
      ],
    },
    {
      id: "rendering",
      name: "Rendering",
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Modern Rendering Strategies",
      description: "Choosing the right rendering approach for your application",
      items: [
        "Server-Side Rendering (SSR) implementation",
        "Static Site Generation (SSG) for performance",
        "Incremental Static Regeneration (ISR) strategies",
        "Client-Side Rendering optimization",
        "Hybrid rendering approaches",
      ],
    },
    {
      id: "clean-code",
      name: "Clean Code",
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Clean Code Principles",
      description: "Writing maintainable, readable, and efficient code",
      items: [
        "Code architecture and design patterns",
        "SOLID principles implementation",
        "Code refactoring techniques",
        "Testing strategies and test-driven development",
        "Documentation and code commenting best practices",
      ],
    },
    {
      id: "performance",
      name: "Performance",
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Web Performance Optimization",
      description: "Creating lightning-fast web experiences",
      items: [
        "Core Web Vitals optimization",
        "Asset optimization and delivery",
        "Caching strategies",
        "Lazy loading and code splitting",
        "Performance monitoring and analytics",
      ],
    },
  ];

  return (
    <section id="advisory" className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm">Developer Advisory</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Expert Guidance
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Helping developers build better web applications through expert
              advice and best practices
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="seo" className="w-full">
            <div className="overflow-auto pb-2 -mb-2">
              <TabsList className="inline-flex w-max min-w-full">
                {advisoryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {advisoryCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-6"
              >
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    {category.icon}
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1 rounded-full bg-primary/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <Cpu className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Technical Excellence</CardTitle>
                <CardDescription>
                  Building with the right technologies for your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I provide guidance on selecting the optimal tech stack and
                  architecture based on project requirements, scalability needs,
                  and team expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Accessibility Focus</CardTitle>
                <CardDescription>
                  Creating inclusive web experiences for all users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I help implement WCAG guidelines and best practices to ensure
                  your applications are accessible to users with disabilities
                  and comply with regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Compliance & Standards</CardTitle>
                <CardDescription>
                  Navigating regulatory requirements and industry standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I provide guidance on implementing GDPR, CCPA, and other
                  regulatory requirements while maintaining excellent user
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <FileCode className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Code Reviews</CardTitle>
                <CardDescription>
                  Improving code quality through expert review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I offer detailed code reviews to identify potential issues,
                  suggest improvements, and ensure adherence to best practices
                  and coding standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <BarChart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Performance Audits</CardTitle>
                <CardDescription>
                  Identifying and resolving performance bottlenecks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I conduct comprehensive performance audits to identify issues
                  affecting speed and user experience, with actionable
                  recommendations for improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <Rocket className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Team Mentoring</CardTitle>
                <CardDescription>
                  Elevating your development team&apos;s capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I provide mentoring and knowledge sharing sessions to help
                  your development team stay current with best practices and
                  emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
