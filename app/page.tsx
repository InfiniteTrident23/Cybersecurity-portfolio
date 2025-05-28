import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Code, Terminal, Lock, Server, Github, Linkedin, Mail, ChevronRight, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/50">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-red-500">
            <Shield className="h-6 w-6" />
            <span>CyberPortfolio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm hover:text-red-500 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:text-red-500 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:text-red-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-950 hover:text-white">
            Resume
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-red-900/20 to-transparent"></div>
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-red-900/10"></div>
            ))}
          </div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-red-950/50 border border-red-500/20 text-red-500 text-sm font-medium mb-4">
              Certified Ethical Hacker
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Cybersecurity Professional & <span className="text-red-500">Penetration Tester</span>
            </h1>
            <p className="text-lg text-gray-400 md:text-xl max-w-2xl mx-auto">
              3rd year B.Tech student specializing in cybersecurity with a passion for identifying and exploiting
              vulnerabilities to strengthen security systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                View Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-950 hover:text-white">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-red-500/50 relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg">
                <Shield className="h-12 w-12" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  About Me <div className="h-1 w-12 bg-red-500 ml-4"></div>
                </h2>
                <p className="text-gray-400 mb-4">
                  I'm a passionate cybersecurity enthusiast currently pursuing my B.Tech degree with a focus on network
                  security and penetration testing. My journey in the world of cybersecurity began with a curiosity
                  about how systems can be protected from malicious attacks.
                </p>
                <p className="text-gray-400 mb-4">
                  As a Certified Ethical Hacker (CEH), I've developed a strong foundation in identifying vulnerabilities
                  and implementing robust security measures. I'm particularly interested in red teaming, vulnerability
                  assessment, and security architecture.
                </p>
                <p className="text-gray-400">
                  When I'm not hunting for vulnerabilities, I enjoy participating in CTF competitions, contributing to
                  open-source security tools, and staying updated with the latest cybersecurity trends and threats.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>B.Tech Student (3rd Year)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Certified Ethical Hacker</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Penetration Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Network Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-black relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-red-900/10"></div>
            ))}
          </div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Skills & Certifications</h2>
            <p className="text-gray-400">
              My expertise spans across various cybersecurity domains, with a strong focus on offensive security
              techniques and defensive strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 hover:border-red-500/50 transition-colors group">
              <div className="bg-red-950/30 p-3 rounded-lg inline-block mb-4 group-hover:bg-red-900/50 transition-colors">
                <Terminal className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
              <p className="text-gray-400 mb-4">
                Expert in identifying and exploiting vulnerabilities in networks, applications, and systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>Web Application Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>Network Penetration</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>Social Engineering</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 hover:border-red-500/50 transition-colors group">
              <div className="bg-red-950/30 p-3 rounded-lg inline-block mb-4 group-hover:bg-red-900/50 transition-colors">
                <Lock className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security Tools</h3>
              <p className="text-gray-400 mb-4">
                Proficient with industry-standard security tools and frameworks for comprehensive assessments.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>Metasploit Framework</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>Burp Suite</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>Wireshark</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 hover:border-red-500/50 transition-colors group">
              <div className="bg-red-950/30 p-3 rounded-lg inline-block mb-4 group-hover:bg-red-900/50 transition-colors">
                <Code className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Programming</h3>
              <p className="text-gray-400 mb-4">
                Strong programming skills for developing security tools and automating security processes.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>Bash Scripting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>PowerShell</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-red-900/20">
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 flex items-center gap-6">
                <div className="bg-red-950/30 p-4 rounded-lg">
                  <Shield className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Certified Ethical Hacker (CEH)</h4>
                  <p className="text-gray-400">EC-Council</p>
                </div>
              </div>

              <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 flex items-center gap-6 opacity-60">
                <div className="bg-red-950/30 p-4 rounded-lg">
                  <Server className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">CompTIA Security+</h4>
                  <p className="text-gray-400">In Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400">
              A showcase of my cybersecurity projects, vulnerability assessments, and security research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="overflow-hidden rounded-lg border border-red-900/20 bg-black aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=700"
                  alt="Network Vulnerability Scanner"
                  width={700}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Network Vulnerability Scanner</h3>
                  <p className="text-gray-400 mb-4">
                    A custom-built vulnerability scanner that identifies security weaknesses in network infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Network Security</span>
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Automation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-lg border border-red-900/20 bg-black aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=700"
                  alt="Web Application Firewall Bypass Techniques"
                  width={700}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">WAF Bypass Research</h3>
                  <p className="text-gray-400 mb-4">
                    Research on techniques to bypass modern Web Application Firewalls and recommended mitigations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Web Security</span>
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Research</span>
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Exploitation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-lg border border-red-900/20 bg-black aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=700"
                  alt="Phishing Campaign Simulator"
                  width={700}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Phishing Campaign Simulator</h3>
                  <p className="text-gray-400 mb-4">
                    A tool for organizations to test employee awareness through simulated phishing campaigns.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Social Engineering</span>
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Security Awareness</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-lg border border-red-900/20 bg-black aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=700"
                  alt="IoT Security Framework"
                  width={700}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">IoT Security Framework</h3>
                  <p className="text-gray-400 mb-4">
                    A comprehensive security framework for assessing and securing Internet of Things devices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">IoT Security</span>
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Firmware Analysis</span>
                    <span className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">Hardware Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              View All Projects <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-black relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-red-900/20 to-transparent"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400">
              Interested in collaborating on a security project or need a penetration test? Feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-gray-400">contact@yourname.com</p>
                </div>
              </div>

              <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 flex items-start gap-4">
                <Linkedin className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">LinkedIn</h3>
                  <p className="text-gray-400">linkedin.com/in/yourname</p>
                </div>
              </div>

              <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6 flex items-start gap-4">
                <Github className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">GitHub</h3>
                  <p className="text-gray-400">github.com/yourusername</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-red-900/20 rounded-lg p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 bg-black border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 bg-black border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-black border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-red-900/20 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-xl font-bold text-red-500 mb-4 md:mb-0">
              <Shield className="h-6 w-6" />
              <span>CyberPortfolio</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-red-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-red-900/10 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="mt-2">Designed and built with security in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
