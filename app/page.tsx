"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Download, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <Card
            className={`mb-8 glass border-0 shadow-2xl transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <CardContent className="pt-12 pb-8">
              <div className="text-center space-y-6">
                <div className="relative">
                  <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-2">Mohammad Amin Khajeh Aminian</h1>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
                </div>
                <p className="text-2xl text-slate-700 font-medium">Software Engineer</p>

                <div className="flex flex-wrap justify-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                    <span>Yazd, Iran</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                    <span>(+98) 901 913 2468</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:m.aminwhat@gmail.com" className="hover:text-blue-600 transition-colors">
                      m.aminwhat@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card
            className={`mb-8 glass border-0 shadow-xl transition-all duration-700 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold gradient-text-accent mb-6">Professional Summary</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                Resourceful Software Engineer with 4+ years of experience building scalable backend services and
                mobile-first applications. Proficient in Node.js, ASP.NET Core, and modern JavaScript frameworks (React,
                Next.js). Adept at designing and deploying cloud-based architectures, real-time systems, and admin
                dashboards. Passionate about solving complex challenges and delivering high-impact solutions for mobile
                apps/games and enterprise applications.
              </p>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card
            className={`mb-8 glass border-0 shadow-xl transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold gradient-text-accent mb-8">Technical Skills</h2>
              <div className="space-y-6">
                <div className="group">
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">Backend</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Node.js", "NestJs", "Express.js", "Socket.IO", "Prisma", "ASP.NET Core"].map((skill, index) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm py-1 px-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">Databases</h3>
                  <div className="flex flex-wrap gap-3">
                    {["MySQL", "MongoDB", "Redis", "MSSQL"].map((skill, index) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm py-1 px-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">Frontend & Mobile</h3>
                  <div className="flex flex-wrap gap-3">
                    {["React.js", "Next.js", "React Native (Expo)", "Flutter"].map((skill, index) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm py-1 px-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Docker", "Kubernetes", "AppWrite", "Git", "Nginx", "Drone CI/CD"].map((skill, index) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm py-1 px-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">Cloud & Hosting</h3>
                  <div className="flex flex-wrap gap-3">
                    {["VPS Management", "Cloudflare"].map((skill, index) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm py-1 px-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">Other</h3>
                  <div className="flex flex-wrap gap-3">
                    {["REST APIs", "Authentication & Authorization", "Game Backend Development"].map((skill, index) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm py-1 px-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card
            className={`mb-8 glass border-0 shadow-xl transition-all duration-700 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold gradient-text-accent mb-8">Experience</h2>

              <div className="space-y-10">
                {/* Current Position */}
                <div className="relative pl-8 border-l-4 border-gradient-to-b from-blue-500 to-purple-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Software Engineer</h3>
                      <p className="text-blue-600 font-semibold text-lg">Pishgaman ParsiPost</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">May 2025 – Present</span>
                    </div>
                  </div>
                  <ul className="text-slate-700 space-y-3 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Design, develop, and maintain large-scale enterprise software systems supporting a high-volume
                      user base in the logistics and delivery industry.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Collaborate with backend and frontend teams to build scalable, responsive, and user-friendly
                      applications.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Optimize and refactor legacy code to improve efficiency, scalability, and maintainability across
                      both backend and frontend components.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Develop and enhance performance-critical systems, addressing bottlenecks and ensuring low-latency
                      operation under heavy load.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Implement and maintain frontend features using modern JavaScript frameworks (VueJs), ensuring
                      cross-browser compatibility and responsive design.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Participate in code reviews, implement CI/CD pipelines, and contribute to maintaining high
                      engineering standards throughout the development lifecycle.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Work closely with UI/UX designers to translate mockups and wireframes into clean, functional
                      interfaces.
                    </li>
                  </ul>
                </div>

                <Separator className="my-8" />

                {/* Baloot Games */}
                <div className="relative pl-8 border-l-4 border-gradient-to-b from-green-500 to-blue-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Software Engineer</h3>
                      <p className="text-green-600 font-semibold text-lg">Baloot Games Studio</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">February 2024 – Present</span>
                    </div>
                  </div>
                  <ul className="text-slate-700 space-y-3 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Developed backend services for Iran's most popular mobile games, supporting thousands of
                      concurrent users.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Built real-time multiplayer features and scalable APIs using Node.js(ExpressJs & NestJs), MongoDB,
                      and Redis.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Optimized game server performance and integrated in-app purchase validation systems.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Collaborated with game designers and client teams to deliver engaging player experiences.
                    </li>
                  </ul>
                </div>

                <Separator className="my-8" />

                {/* Freelance */}
                <div className="relative pl-8 border-l-4 border-gradient-to-b from-purple-500 to-pink-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Full-Stack Developer</h3>
                      <p className="text-purple-600 font-semibold text-lg">Freelance</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">July 2023 – February 2024</span>
                    </div>
                  </div>
                  <ul className="text-slate-700 space-y-3 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      Deployed cloud infrastructure and web apps for two businesses, improving uptime and scalability.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      Developed a cross-platform admin panel using Flutter, streamlining management for client
                      operations.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      Delivered end-to-end solutions including backend APIs, UI design, and deployment.
                    </li>
                  </ul>
                </div>

                <Separator className="my-8" />

                {/* Sepandyar */}
                <div className="relative pl-8 border-l-4 border-gradient-to-b from-orange-500 to-red-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Backend Developer</h3>
                      <p className="text-orange-600 font-semibold text-lg">Sepandyar</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">February 2022 – July 2023</span>
                    </div>
                  </div>
                  <ul className="text-slate-700 space-y-3 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      Modernized a legacy accounting software by transitioning core business logic from WPF client to
                      ASP.NET Core APIs.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      Engineered secure authentication and user management, enabling remote access over the internet.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      Reduced query execution time and optimized MSSQL interactions for a large user base.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selected Freelance Projects */}
          <Card
            className={`mb-8 glass border-0 shadow-xl transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold gradient-text-accent mb-8">Selected Freelance Projects</h2>

              <div className="grid gap-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      DawoodKids
                      <Badge className="bg-green-100 text-green-800 border-green-300">Released</Badge>
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">October 2024 – Present</span>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">ASP.NET Core API, Admin Dashboard, CI/CD</p>
                  <p className="text-slate-700 leading-relaxed">
                    Backend developer for an international educational mobile game, handling APIs, admin tools, and
                    deployment.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      QuraniCity
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">In Development</Badge>
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">February 2025 – Present</span>
                    </div>
                  </div>
                  <p className="text-purple-600 font-medium mb-3">Node.js, Express.js, Admin Dashboard</p>
                  <p className="text-slate-700 leading-relaxed">
                    Backend developer for a children's mobile game featuring real-time interactions and content
                    management.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      AI100
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">In Development</Badge>
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">March 2025 – Present</span>
                    </div>
                  </div>
                  <p className="text-cyan-600 font-medium mb-3">Next.js, AI APIs, AI Api</p>
                  <p className="text-slate-700 leading-relaxed">
                    Full-stack developer for an AI-powered creative platform (similar to Gencraft.com) with custom image
                    generation features.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education & Languages */}
          <div
            className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            style={{ animationDelay: "1s" }}
          >
            <Card className="glass border-0 shadow-xl">
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold gradient-text-accent mb-6">Education</h2>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
                  <h3 className="text-xl font-bold text-slate-900">Bachelor of Financial Management</h3>
                  <p className="text-indigo-600 font-semibold text-lg">Yazd University</p>
                  <div className="flex items-center gap-2 text-slate-600 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">October 2021 – Present</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0 shadow-xl">
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold gradient-text-accent mb-6">Languages</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                    <span className="font-bold text-slate-900 text-lg">English</span>
                    <Badge className="bg-green-100 text-green-800 border-green-300">Professional proficiency</Badge>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                    <span className="font-bold text-slate-900 text-lg">Persian</span>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300">Native</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pb-8">
            <p className="text-slate-600">© 2025 Mohammad Amin Khajeh Aminian. Crafted with passion and precision.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
