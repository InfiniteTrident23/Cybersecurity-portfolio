"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Code, Terminal, Lock, Github, Linkedin, Mail, Network } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer, StaggeredItem } from "@/components/staggered-container"
import { TypewriterText } from "@/components/typewriter-text"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { motion } from "framer-motion"
import AsciiConverter from "@/components/ascii-converter"
import CodeRain from "@/components/code-rain"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background code rain effect */}
      <div className="fixed inset-0 z-0 opacity-20 dark:opacity-20 light:opacity-5">
        <CodeRain />
      </div>
      {/* Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-red-500 hover:scale-105 transition-transform"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Shield className="h-6 w-6" />
            </motion.div>
            <span>Siddharth Nigam</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-red-500 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/certificates/Siddharth%20Nigam%20Resume%20March%202025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-950 hover:text-white hover:scale-105 transition-all"
              >
                Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-48 md:pb-48 py-16 md:py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div
            className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-red-900/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
          />
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-red-900/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.01 }}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Left Side - Graphic */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center items-center h-full order-2 md:order-1"
            >
              <div className="max-h-[300px] md:max-h-[400px] w-full">
                <AsciiConverter />
              </div>
            </motion.div>

            {/* Right side - Text Content */}
            <motion.div
              className="space-y-6 text-center md:text-left order-1 md:order-2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="inline-block px-3 py-1 rounded-full bg-red-950/50 border border-red-500/20 text-red-500 text-sm font-medium mb-4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
              >
                Certified Ethical Hacker
              </motion.div>

              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Cybersecurity Professional &{" "}
                <TypewriterText text="Penetration Tester" delay={2.5} className="text-red-500" />
              </motion.h1>

              <motion.p
                className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                3rd year B.Tech student specializing in cybersecurity with a passion for identifying and exploiting
                vulnerabilities to strengthen security systems.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative">
                <motion.div
                  className="aspect-square rounded-lg overflow-hidden border-2 border-red-500/50 relative"
                  whileHover={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.8)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent"></div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Shield className="h-12 w-12" />
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div className="space-y-6">
                <div>
                  <motion.h2
                    className="text-3xl font-bold mb-6 flex items-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    About Me
                    <motion.div
                      className="h-1 w-12 bg-red-500 ml-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.h2>

                  <StaggeredContainer staggerDelay={0.2}>
                    <StaggeredItem>
                      <p className="text-gray-400 mb-4">
                        I'm a passionate cybersecurity enthusiast currently pursuing my B.Tech degree with a focus on
                        network security and penetration testing. My journey in the world of cybersecurity began with a
                        curiosity about how systems can be protected from malicious attacks.
                      </p>
                    </StaggeredItem>
                    <StaggeredItem>
                      <p className="text-gray-400 mb-4">
                        As a Certified Ethical Hacker (CEH), I've developed a strong foundation in identifying
                        vulnerabilities and implementing robust security measures. I'm particularly interested in red
                        teaming, vulnerability assessment, and security architecture.
                      </p>
                    </StaggeredItem>
                    <StaggeredItem>
                      <p className="text-gray-400">
                        When I'm not hunting for vulnerabilities, I enjoy participating in CTF competitions,
                        contributing to open-source security tools, and staying updated with the latest cybersecurity
                        trends and threats.
                      </p>
                    </StaggeredItem>
                  </StaggeredContainer>
                </div>

                <StaggeredContainer className="grid grid-cols-2 gap-4 pt-4" staggerDelay={0.1}>
                  {[
                    "B.Tech Student (3rd Year)",
                    "Certified Ethical Hacker",
                    "Penetration Testing",
                    "Network Security",
                  ].map((item, index) => (
                    <StaggeredItem key={index} className="flex items-center gap-2">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-red-500"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span>{item}</span>
                    </StaggeredItem>
                  ))}
                </StaggeredContainer>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-black">
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-red-900/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.005 }}
              />
            ))}
          </div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Skills & Certifications</h2>
            <p className="text-gray-400">
              My expertise spans across various cybersecurity domains, with a strong focus on offensive security
              techniques and defensive strategies.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.2}>
            {[
              {
                icon: Terminal,
                title: "Penetration Testing",
                description:
                  "Expert in identifying and exploiting vulnerabilities in networks, applications, and systems.",
                skills: [
                  "Web Application Testing",
                  "Network Penetration",
                  "Vulnerability Assessment",
                  "Reconnaissance & OSINT",
                ],
              },
              {
                icon: Lock,
                title: "Security Tools",
                description:
                  "Proficient with industry-standard security tools and frameworks for comprehensive assessments.",
                skills: ["Metasploit Framework", "Burp Suite", "Wireshark", "Nmap", "Dirbuster", "Katana"],
              },
              {
                icon: Code,
                title: "Programming",
                description:
                  "Strong programming skills for developing security tools and automating security processes.",
                skills: ["Python", "JavaScript", "C", "Bash Scripting", "PowerShell"],
              },
            ].map((skill, index) => (
              <StaggeredItem key={index}>
                <motion.div
                  className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 hover:border-red-500/50 transition-colors group h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-red-950/30 p-3 rounded-lg inline-block mb-4 group-hover:bg-red-900/50 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon className="h-6 w-6 text-red-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 mb-4">{skill.description}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {skill.skills.map((item, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      >
                        <motion.div
                          className="h-1.5 w-1.5 rounded-full bg-red-500"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          <AnimatedSection className="mt-12 pt-12 border-t border-red-900/20" delay={0.5}>
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
            <StaggeredContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.3}>
              <Link href={"/certificates/CEH%20Short%20training.jpg"} target="_blank" rel="noopener noreferrer">
                <StaggeredItem>
                  <motion.div
                    className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 flex items-center gap-6"
                    whileHover={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-red-950/30 p-4 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Shield className="h-8 w-8 text-red-500" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold">Certified Ethical Hacker (CEH)</h4>
                      <p className="text-gray-400">EC-Council</p>
                    </div>
                  </motion.div>
                </StaggeredItem>
              </Link>

              <Link href={"/certificates/CCNA%20Certificate.jpg"} target="_blank" rel="noopener noreferrer">
                <StaggeredItem>
                  <motion.div
                    className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 flex items-center gap-6"
                    whileHover={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-red-950/30 p-4 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Network className="h-8 w-8 text-red-500" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold">Cisco Certified Network Associate (CCNA)</h4>
                      <p className="text-gray-400">Network Bulls</p>
                    </div>
                  </motion.div>
                </StaggeredItem>
              </Link>
            </StaggeredContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-black">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-red-900/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.005 }}
              />
            ))}
          </div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-gray-400">
              My journey in cybersecurity includes hands-on experience through internships and projects.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <ExperienceTimeline />
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400">
              A showcase of my cybersecurity projects, vulnerability assessments, and security research.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" staggerDelay={0.2}>
            {[
              {
                title: "AD Security Project",
                description:
                  "This project involves setting up and securing a network environment using Active Directory, Splunk, Sysmon, and Atomic Red Team. The goal is to create a simulated network, configure logging and monitoring, and test security measures.",
                tags: ["Python", "Network Security", "Automation"],
                image: "/certificates/AD.jpg",
              },
              {
                title: "SOC Automation",
                description:
                  "An Automation Lab for Security Operations Center (SOC) tasks, focusing on automating incident response and threat detection processes using technologies like Wazuh, The Hive and Shuffle.",
                tags: ["SOC Operations", "Wazuh", "The Hive", "Shuffle", "Incident Response"],
                image: "/certificates/SOC.jpg",
              },
              {
                title: "CNN model for Packet-level Micro-behavior Classification",
                description:
                  "This project explores packet-level micro-behaviour classification using Convolutional Neural Networks (CNNs) to categorize network packets as Tor, VPN, or regular traffic",
                tags: ["Network Packet", "Python", "Machine Learning"],
                image: "/certificates/CNN.jpg",
              },
              {
                title: "KPI Management System (ongoing)",
                description: "A comprehensive system for managemnt of KPIs for Manipal University Jaipur.",
                tags: ["Web Dev", "TypeScript", "Next.js", "Tailwind CSS"],
                image: "/certificates/KPI.jpg",
              },
            ].map((project, index) => (
              <StaggeredItem key={index}>
                <motion.div className="group" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <div className="overflow-hidden rounded-lg border border-red-900/20 bg-black aspect-video relative">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={700}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-red-900/20 to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400">
              Interested in collaborating on a security project or need a penetration test? Feel free to reach out.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <StaggeredContainer className="space-y-6" staggerDelay={0.2}>
              {[
                { icon: Mail, title: "Email", info: "siddharthnigam002@gmail.com" },
                { icon: Linkedin, title: "LinkedIn", info: "linkedin.com/in/siddharth-nigam-a7bab1257/" },
                { icon: Github, title: "GitHub", info: "github.com/InfiniteTrident23" },
              ].map((contact, index) => (
                <StaggeredItem key={index}>
                  <motion.div
                    className="bg-black border border-red-900/20 rounded-lg p-6 flex items-start gap-4"
                    whileHover={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.3 }}>
                      <contact.icon className="h-6 w-6 text-red-500 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{contact.title}</h3>
                      <p className="text-gray-400">{contact.info}</p>
                    </div>
                  </motion.div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>

            <AnimatedSection direction="right" delay={0.3}>
              <motion.div
                className="bg-black border border-red-900/20 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <motion.input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 bg-zinc-900 border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      placeholder="Your Name"
                      whileFocus={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.8)" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <motion.input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-zinc-900 border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.8)" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-zinc-900 border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      placeholder="Your message..."
                      whileFocus={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.8)" }}
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-all">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <AnimatedSection>
        <footer className="py-8 border-t border-red-900/20 bg-black relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="flex items-center gap-2 text-xl font-bold text-red-500 mb-4 md:mb-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Shield className="h-6 w-6" />
                </motion.div>
                <span>CyberPortfolio</span>
              </motion.div>
              <div className="flex items-center gap-4">
                {[
                  { Icon: Github, href: "https://github.com/InfiniteTrident23" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-nigam-a7bab1257/" },
                  { Icon: Mail, href: "mailto:siddharthnigam002@gmail.com" },
                ].map(({ Icon, href }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={href} className="text-gray-400 hover:text-red-500 transition-colors">
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{Icon.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="mt-8 pt-8 border-t border-red-900/10 text-center text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </div>
        </footer>
      </AnimatedSection>

    </main>
  )
}
