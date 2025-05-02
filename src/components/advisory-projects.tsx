"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { advisoryProjects } from "../../data/advisory-projects";

export default function AdvisoryProjects() {
  const featuredProjects = advisoryProjects.filter(
    (project) => project.featured
  );
  const otherProjects = advisoryProjects.filter((project) => !project.featured);

  return (
    <section id="advisory-projects" className="py-16 md:py-24 bg-muted/40">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm">Advisory Projects</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Developer Success Stories
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real-world examples of how I&apos;ve helped development teams overcome
              challenges and achieve their goals
            </p>
          </div>
        </motion.div>

        {/* Featured Advisory Projects */}
        <div className="mx-auto max-w-5xl py-12">
          <h3 className="text-2xl font-bold mb-8">Featured Advisory Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 flex flex-col">
                      <CardHeader className="p-0 pb-4">
                        <div className="flex flex-col gap-2">
                          <CardTitle className="text-xl">
                            {project.title}
                          </CardTitle>
                          {project.clientType && (
                            <Badge variant="outline" className="w-fit">
                              {project.clientType}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 pb-6 flex-grow">
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Key Outcomes:</h4>
                          <ul className="space-y-1">
                            {project.outcomes.map((outcome, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Advisory Projects */}
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-8">More Advisory Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  {/* <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 bg-accent-foreground"
                    />
                  </div> */}
                  <CardHeader>
                    <div className="flex flex-col gap-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      {project.clientType && (
                        <Badge variant="outline" className="w-fit text-xs">
                          {project.clientType}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="text-sm font-medium">Key outcome:</div>
                    <div className="text-sm text-muted-foreground ml-2">
                      {project.outcomes[0]}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
