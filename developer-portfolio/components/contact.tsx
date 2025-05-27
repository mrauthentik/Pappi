"use client"

import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">umokeuchennaofficial@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="h-6 w-6 text-cyan-400 mr-3" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">Nigeria</p>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center md:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transform hover:scale-110 transition-all duration-200"
                asChild
              >
                <a href="https://github.com/mrauthentik" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transform hover:scale-110 transition-all duration-200"
              >
                 <a href="https://www.linkedin.com/in/uchenna-umoke-34006123b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transform hover:scale-110 transition-all duration-200"
              >
              <a href="https://x.com/UmokeUchenna" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-blue-400/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-blue-400/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-blue-400/50 focus:outline-none transition-colors resize-none"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-200">
              <a href='mailto:umokeuchennaofficial@gmail.com'> 
              Send Message
              </a>
                
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-white/10">
          <p className="text-white/50">© 2025 UCHE 🚀</p>
        </div>
      </div>
    </section>
  )
}
