"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react"

interface Experience {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  skills: string[]
}

const internships: Experience[] = [
  {
    role: "Cybersecurity VAPT Intern",
    company: "SafeYourWeb",
    location: "Remote",
    startDate: "Oct 2024",
    endDate: "Jan 2025",
    description: [
      "Conducted vulnerability assessments on 4 projects, identifying and mitigating 80% of critical risks.",
      "Verified security activities and prepared detailed reports, improving risk assessment processes by 25%.",
      "Researched and analyzed cybersecurity threats, enhancing proactive threat detection by 60%.",
      "Investigated and Reported security incidents, contributing to a 30% improvement in incident response time.",
    ],
    skills: ["Vulnerability Assessment", "Web Testing", "API Testing", "Security Documentation"],
  },
  {
    role: "Cybersecurity Job Simulation",
    company: "JP Morgan Chase & Co. ",
    location: "Forage - Remote",
    startDate: "Aug 2024",
    endDate: "Sept 2024",
    description: [
      "Processed and analyzed 50,000+ email records, applying data cleaning and classification techniques using Python and Pandas.",
      "Developed and integrated an OTP-based authentication system in a Django web app, enhancing login security by 80%.",
      "Designed and trained an email classification model with 97.4% accuracy using Logistic Regression.",
      ": Processed 10,000+ email samples, applied CountVectorizer for feature extraction, and optimized model performance with an 80-20 training-test split.",
    ],
    skills: ["Data Analysis", "Machine Learning", "Python", "Django and Pandas Frameworks"],
  },
  {
    role: "Cybersecurity Intern",
    company: "Wesecure Technologies",
    location: "Rohini, Delhi",
    startDate: "May 2024",
    endDate: "Jun 2024",
    description: [
      "Streamlined firewall configurations to reduce exposure to external threats.",
      "Enforced security policies for mobile devices and remote access.",
      "Provided technical support during maintenance to minimize disruptions.",
      "Tested state-of-the-art security tools, like SIEM, XDR, EDR, etc. enhancing threat detection capabilities.",
    ],
    skills: ["Networking", "Firewalls", "SIEM", "Endpoint Security", "Technical Support", "XDR/EDR"],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="w-full">
      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-red-900/50 transform -translate-y-1/2"></div>

        {/* Timeline Container */}
        <div className="flex justify-between items-center relative">
          {internships.map((internship, index) => (
            <div key={index} className="relative flex-1 mx-4">
              {/* Card */}
              <motion.div
                className="relative mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="bg-zinc-900 rounded-lg border border-red-900/20 overflow-hidden cursor-pointer group"
                  whileHover={{
                    scale: 1.05,
                    zIndex: 20,
                    boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Basic Info - Always Visible */}
                  <div className="p-6">
                    <div className="flex flex-col space-y-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                        {internship.role}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Briefcase className="h-3 w-3 mr-2 text-red-500" />
                        <span>{internship.company}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="h-3 w-3 mr-2 text-red-500" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-3 w-3 mr-2 text-red-500" />
                        <span>
                          {internship.startDate} - {internship.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Expandable content - Visible on Hover */}
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="mt-6 pt-4 border-t border-red-900/20">
                        <h4 className="font-semibold text-red-500 mb-3 text-sm">Key Responsibilities:</h4>
                        <ul className="space-y-2 mb-4">
                          {internship.description.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: i * 0.1 }}
                            >
                              <ChevronRight className="h-3 w-3 text-red-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-300 text-xs leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <h4 className="font-semibold text-red-500 mb-2 text-sm">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {internship.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.2, delay: i * 0.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden">
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Mobile Timeline dot */}
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-red-600 border-2 border-zinc-900"></div>
              {index < internships.length - 1 && (
                <div className="absolute left-1.5 top-9 bottom-0 w-px bg-red-900/50"></div>
              )}

              {/* Mobile Card */}
              <motion.div
                className="ml-8 bg-zinc-900 rounded-lg border border-red-900/20 overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(220, 38, 38, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-base font-bold text-white">{internship.role}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Briefcase className="h-3 w-3 mr-2 text-red-500" />
                      <span className="text-xs">{internship.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-3 w-3 mr-2 text-red-500" />
                      <span className="text-xs">{internship.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-3 w-3 mr-2 text-red-500" />
                      <span className="text-xs">
                        {internship.startDate} - {internship.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Mobile content - Always visible */}
                  <div className="mt-4 pt-3 border-t border-red-900/20">
                    <h4 className="font-semibold text-red-500 mb-2 text-sm">Responsibilities:</h4>
                    <ul className="space-y-1 mb-3">
                      {internship.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="h-3 w-3 text-red-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-xs leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-red-500 mb-2 text-sm">Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {internship.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-red-950/50 text-red-400 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
