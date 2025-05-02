"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 container mx-auto">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm">About Me</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who I Am</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A passionate full-stack developer with expertise in modern web technologies
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I&apos;ve worked on a variety of projects ranging from
                small business websites to large-scale enterprise applications. My journey began with PHP and Laravel,
                and I&apos;ve since expanded my expertise to include the entire MERN stack, DevOps practices, and cloud
                infrastructure.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code and creating intuitive user experiences. My approach
                combines technical expertise with a deep understanding of business needs to deliver solutions that not
                only work well but also provide real value.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">20+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
