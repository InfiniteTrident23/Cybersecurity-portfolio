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
    role: "Security Analyst Intern",
    company: "CyberDefense Corp",
    location: "New Delhi, India",
    startDate: "May 2023",
    endDate: "Aug 2023",
    description: [
      "Conducted vulnerability assessments on web applications and network infrastructure",
      "Assisted in implementing security controls and monitoring solutions",
      "Participated in incident response drills and security awareness training",
      "Documented security findings and presented recommendations to senior management",
    ],
    skills: ["Vulnerability Assessment", "SIEM", "Incident Response", "Security Documentation"],
  },
  {
    role: "Penetration Testing Intern",
    company: "SecureNet Solutions",
    location: "Remote",
    startDate: "Jan 2023",
    endDate: "Apr 2023",
    description: [
      "Performed web application penetration testing using OWASP methodology",
      "Identified and exploited security vulnerabilities in test environments",
      "Created detailed reports outlining findings and remediation steps",
      "Collaborated with development teams to implement security fixes",
    ],
    skills: ["Web App Pentesting", "OWASP Top 10", "Burp Suite", "Technical Documentation"],
  },
  {
    role: "Junior Security Researcher",
    company: "InfoSec Labs",
    location: "Bangalore, India",
    startDate: "Jun 2022",
    endDate: "Aug 2022",
    description: [
      "Researched emerging threats and attack vectors in cybersecurity landscape",
      "Analyzed malware samples and documented attack patterns",
      "Contributed to threat intelligence reports for enterprise clients",
      "Assisted in developing security awareness training materials",
    ],
    skills: ["Threat Intelligence", "Malware Analysis", "Research", "Technical Writing"],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="w-full">
      {/* Horizontal Timeline */}
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-red-900/50 transform -translate-y-1/2"></div>

        {/* Timeline Container */}
        <div className="flex justify-between items-center relative">
          {internships.map((internship, index) => (
            <div key={index} className="relative flex-1 mx-4">
              {/* Timeline dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-600 border-4 border-zinc-900 z-10"></div>

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

                {/* Date indicator above the card */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-900/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium border border-red-900/30"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {internship.startDate.split(" ")[1]} {/* Year */}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Mobile View */}
      <div className="md:hidden mt-12">
        <div className="space-y-8">
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
              <div className="absolute left-1.5 top-9 bottom-0 w-px bg-red-900/50"></div>

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

                  {/* Mobile Expandable content */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mt-4 pt-3 border-t border-red-900/20">
                      <h4 className="font-semibold text-red-500 mb-2 text-sm">Responsibilities:</h4>
                      <ul className="space-y-1 mb-3">
                        {internship.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight className="h-3 w-3 text-red-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{item}</span>
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
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
