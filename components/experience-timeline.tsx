"use client"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Calendar, MapPin, Briefcase, ChevronRight, Building, Award, Target } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

type Experience = {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  longDescription: string
  category: "internship" | "simulation" | "project"
  responsibilities: string[]
  skills: string[]
}

export function ExperienceTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState<string | null>(null)
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  const experiences: Experience[] = [
    {
      id: "safeyourweb",
      role: "Cybersecurity VAPT Intern",
      company: "SafeYourWeb",
      location: "Remote",
      startDate: "Oct 2024",
      endDate: "Jan 2025",
      description: "Conducted comprehensive vulnerability assessments and penetration testing on multiple projects.",
      longDescription:
        "As a Cybersecurity VAPT Intern at SafeYourWeb, I was responsible for conducting thorough vulnerability assessments and penetration testing across various client projects. This role involved identifying security weaknesses, documenting findings, and providing actionable recommendations to improve overall security posture. I worked closely with senior security analysts to develop testing methodologies and enhance the company's security assessment capabilities.",
      category: "internship",
      responsibilities: [
        "Conducted vulnerability assessments on 4 projects, identifying and mitigating 80% of critical risks",
        "Verified security activities and prepared detailed reports, improving risk assessment processes by 25%",
        "Researched and analyzed cybersecurity threats, enhancing proactive threat detection by 60%",
        "Investigated and reported security incidents, contributing to a 30% improvement in incident response time",
      ],
      skills: ["Vulnerability Assessment", "Web Testing", "API Testing", "Security Documentation"],
    },
    {
      id: "jpmorgan",
      role: "Cybersecurity Job Simulation",
      company: "JP Morgan Chase & Co.",
      location: "Forage - Remote",
      startDate: "Aug 2024",
      endDate: "Sept 2024",
      description:
        "Completed comprehensive cybersecurity simulation focusing on data analysis and machine learning applications.",
      longDescription:
        "Participated in JP Morgan Chase & Co.'s cybersecurity job simulation through Forage, focusing on real-world applications of data science and machine learning in cybersecurity. This intensive program involved processing large datasets, developing authentication systems, and creating machine learning models for email classification. The simulation provided hands-on experience with enterprise-level security challenges and solutions.",
      category: "simulation",
      responsibilities: [
        "Processed and analyzed 50,000+ email records, applying data cleaning and classification techniques using Python and Pandas",
        "Developed and integrated an OTP-based authentication system in a Django web app, enhancing login security by 80%",
        "Designed and trained an email classification model with 97.4% accuracy using Logistic Regression",
        "Processed 10,000+ email samples, applied CountVectorizer for feature extraction, and optimized model performance with an 80-20 training-test split",
      ],
      skills: ["Data Analysis", "Machine Learning", "Python", "Django", "Pandas"],
    },
    {
      id: "wesecure",
      role: "Cybersecurity Intern",
      company: "Wesecure Technologies",
      location: "Rohini, Delhi",
      startDate: "May 2024",
      endDate: "Jun 2024",
      description: "Gained hands-on experience with enterprise security tools and network protection systems.",
      longDescription:
        "During my internship at Wesecure Technologies, I gained valuable hands-on experience with enterprise-level security tools and network protection systems. This role provided exposure to real-world security operations, including firewall management, endpoint protection, and security incident response. I worked alongside experienced security professionals to understand the practical aspects of cybersecurity implementation in enterprise environments.",
      category: "internship",
      responsibilities: [
        "Streamlined firewall configurations to reduce exposure to external threats",
        "Enforced security policies for mobile devices and remote access",
        "Provided technical support during maintenance to minimize disruptions",
        "Tested state-of-the-art security tools, like SIEM, XDR, EDR, etc. enhancing threat detection capabilities",
      ],
      skills: ["Networking", "Firewalls", "SIEM", "Endpoint Security", "Technical Support", "XDR/EDR"],
    },
  ]

  const filteredExperiences = filter ? experiences.filter((exp) => exp.category === filter) : experiences

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "internship":
        return <Briefcase className="w-5 h-5" />
      case "simulation":
        return <Target className="w-5 h-5" />
      case "project":
        return <Award className="w-5 h-5" />
      default:
        return <Building className="w-5 h-5" />
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "internship":
        return "Internship"
      case "simulation":
        return "Job Simulation"
      case "project":
        return "Project"
      default:
        return category
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-8">
      <div className="w-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Filter tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center mb-6">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-2 rounded-md text-sm transition-all duration-300 flex items-center gap-2 ${
                filter === null
                  ? "bg-red-500/20 text-red-400 border border-red-500/50"
                  : "bg-zinc-800/50 text-gray-400 border border-red-900/20 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <Building className="w-4 h-4" />
              <span className="whitespace-nowrap">All Experience</span>
            </button>
            <button
              onClick={() => setFilter("internship")}
              className={`px-3 py-2 rounded-md text-sm transition-all duration-300 flex items-center gap-2 ${
                filter === "internship"
                  ? "bg-red-500/20 text-red-400 border border-red-500/50"
                  : "bg-zinc-800/50 text-gray-400 border border-red-900/20 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="whitespace-nowrap">Internships</span>
            </button>
            <button
              onClick={() => setFilter("simulation")}
              className={`px-3 py-2 rounded-md text-sm transition-all duration-300 flex items-center gap-2 ${
                filter === "simulation"
                  ? "bg-red-500/20 text-red-400 border border-red-500/50"
                  : "bg-zinc-800/50 text-gray-400 border border-red-900/20 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <Target className="w-4 h-4" />
              <span className="whitespace-nowrap">Simulations</span>
            </button>
          </motion.div>

          {/* Experience grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredExperiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    duration: 0.3,
                  }}
                  className="group relative rounded-lg border border-red-900/20 bg-zinc-900/50 overflow-hidden hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-red-900/20"
                >
                  {/* Terminal-style header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/80 border-b border-red-900/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">experience_{experience.id}.log</div>
                    <div className="flex items-center space-x-2">{getCategoryIcon(experience.category)}</div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <h3 className="text-lg font-medium group-hover:text-red-400 transition-colors duration-300 text-white">
                        {experience.role}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-xs bg-zinc-800/50 text-red-400 border-red-500/30 self-start"
                      >
                        {getCategoryName(experience.category)}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Briefcase className="h-3 w-3 mr-2 text-red-500" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="h-3 w-3 mr-2 text-red-500" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-3 w-3 mr-2 text-red-500" />
                        <span>
                          {experience.startDate} - {experience.endDate}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm">{experience.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded text-xs bg-red-950/50 text-red-400 border border-red-900/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {experience.skills.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-red-950/50 text-red-400 border border-red-900/30">
                          +{experience.skills.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedExperience(experience)}
                      className="mt-3 sm:mt-4 w-full flex items-center justify-center px-4 py-2 rounded border border-red-900/30 bg-zinc-800/30 text-red-400 hover:bg-red-950/30 active:bg-red-950/50 transition-all duration-300 text-sm group"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Experience details modal */}
      <Dialog open={!!selectedExperience} onOpenChange={(open) => !open && setSelectedExperience(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900/95 border border-red-900/30 text-white p-4 sm:p-6">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl flex items-center gap-2 text-red-400">
                {selectedExperience?.role}
                <Badge variant="outline" className="ml-2 text-xs bg-zinc-800/50 text-red-400 border-red-500/30">
                  {selectedExperience && getCategoryName(selectedExperience.category)}
                </Badge>
              </DialogTitle>
            </div>
            <DialogDescription className="text-gray-400">{selectedExperience?.description}</DialogDescription>
          </DialogHeader>

          {selectedExperience && (
            <div className="space-y-6 mt-2">
              <div className="space-y-2">
                <div className="flex items-center text-gray-300 text-sm">
                  <Briefcase className="h-4 w-4 mr-2 text-red-500" />
                  <span className="font-medium">{selectedExperience.company}</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-red-500" />
                  <span>{selectedExperience.location}</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-red-500" />
                  <span>
                    {selectedExperience.startDate} - {selectedExperience.endDate}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-red-400">Overview</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{selectedExperience.longDescription}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-red-400">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {selectedExperience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-red-500 mr-2 mt-1">
                        <ChevronRight className="w-3 h-3" />
                      </span>
                      <span className="text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-red-400">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded text-sm bg-red-950/50 text-red-400 border border-red-900/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
