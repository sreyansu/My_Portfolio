"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { useState } from "react"
import { SocialIcon } from 'react-social-icons'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sreyansu90@gmail.com",
      href: "mailto:sreyansu90@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9861634516",
      href: "tel:+919861634516",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhadrak, Odisha, India",
      href: "https://maps.app.goo.gl/LDqh2tp7cxQp7WYp8",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/sreyansu", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sreyansu-sekhar-mohanty-3a1472193", label: "LinkedIn" },
  ]

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Let's collaborate on exciting projects or discuss opportunities in technology and innovation
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                action="https://formsubmit.co/sreyansu90@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                {/* Disable captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Redirect after submission */}
                <input type="hidden" name="_next" value="https://sreyansusekharmohanty.netlify.app" />
                {/* Custom subject */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    required
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  className="bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <info.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <a href={info.href} className="text-white hover:text-cyan-400 transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 bg-transparent p-0 h-10 w-10"
                    asChild
                  >
                    <a href="https://x.com/SekharSreyansu" aria-label="Twitter">
                      <SocialIcon
                        url="https://x.com/SekharSreyansu"
                        style={{ height: 36, width: 36 }}
                        bgColor="transparent"
                        fgColor="rgb(34 211 238)" // text-cyan-400
                        className="hover:opacity-80 transition-opacity"
                      />
                    </a>
                  </Button>
                </div>
                <p className="text-gray-400 mt-4 text-sm">
                  Feel free to connect with me on social media or check out my latest projects on GitHub!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-semibold mb-3">Let's Build Something Amazing</h3>
                <p className="text-gray-400 text-sm">
                  I'm always excited to work on innovative projects and collaborate with like-minded individuals.
                  Whether you have a project idea, job opportunity, or just want to chat about technology, don't
                  hesitate to reach out!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
