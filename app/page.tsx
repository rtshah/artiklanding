'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const howArtikWorksRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToHowArtikWorks = () => {
    howArtikWorksRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen cosmic-background">
      <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold font-space-grotesk text-glow">Artik</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover-glow">
                Get Started
              </button>
            </motion.div>
          </div>
        </nav>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-8 font-space-grotesk text-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Influencer Marketing with AI Agents
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Artik’s AI-powered platform automates social media lead generation and outreach, streamlining your brand’s marketing.
              </motion.p>
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={scrollToHowArtikWorks}
            >
              Discover Artik
            </motion.button>
          </div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            <div className="stars absolute inset-0"></div>
          </div>
        </section>

        <section className="py-20 relative" ref={howArtikWorksRef}>
          <div className="container mx-auto px-6">
            <motion.h3
              className="text-4xl md:text-5xl font-bold mb-12 text-center font-space-grotesk text-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollY > 200 ? 1 : 0, y: scrollY > 200 ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              How Artik Works
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "Intelligent Discovery", description: "Artik scans TikTok for trending creators based on your custom keywords and qualitative and quantitative criteria." },
                { title: "Influencer Analysis", description: "Assesses follower counts, view averages, audience and comment sentiment, engagement, and creator characteristics." },
                { title: "Automated Outreach", description: "Sends personalized messages, emails, and post interactions, managing your entire outreach process with precision." },
                { title: "Smart Follow-ups", description: "CRM system tracks responses and automates timely follow-ups, ensuring no opportunity is missed." },
                { title: "Complete Control", description: "Artik uses the criteria you input, from keywords to influencer attributes, giving you the right influencers for your brand." },
                { title: "Seamless Integration", description: "From initial discovery to final negotiations, Artik integrates smoothly with your existing workflow." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 bg-opacity-50 rounded-lg p-6 hover:bg-opacity-70 transition duration-300 ease-in-out transform hover:scale-105 hover-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: scrollY > 300 ? 1 : 0, y: scrollY > 300 ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-bold mb-4 font-space-grotesk">{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.h3
              className="text-4xl md:text-5xl font-bold mb-12 text-center font-space-grotesk text-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollY > 800 ? 1 : 0, y: scrollY > 800 ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              Elevate Your Influencer Strategy
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: scrollY > 900 ? 1 : 0, x: scrollY > 900 ? 0 : -50 }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-3xl font-bold mb-6 font-space-grotesk">Unparalleled Efficiency</h4>
                <p className="text-lg mb-6">Artik's AI Agents revolutionize influencer discovery and outreach, saving you countless hours and resources.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Customizable search parameters</li>
                  <li>In-depth audience analysis</li>
                  <li>Automated, personalized communication</li>
                  <li>Intelligent follow-up management</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: scrollY > 900 ? 1 : 0, x: scrollY > 900 ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-3xl font-bold mb-6 font-space-grotesk">Advanced Features</h4>
                <ul className="space-y-4">
                  {[
                    { title: "Sentiment Analysis", description: "Gauge audience reactions and engagement levels accurately." },
                    { title: "Multi-Platform Integration", description: "Seamlessly manage campaigns across TikTok, Instagram, and more." },
                    { title: "Customizable Outreach Sequences", description: "Design and automate personalized communication flow." }
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="bg-purple-900 bg-opacity-20 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: scrollY > 950 ? 1 : 0, y: scrollY > 950 ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h5 className="text-xl font-bold mb-2">{feature.title}</h5>
                      <p>{feature.description}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="container mx-auto px-6 text-center">
            <motion.h3
              className="text-4xl md:text-5xl font-bold mb-12 font-space-grotesk text-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollY > 1400 ? 1 : 0, y: scrollY > 1400 ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Transform Your Influencer Marketing?
              </motion.h3>
            <motion.p
              className="text-xl mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollY > 1500 ? 1 : 0, y: scrollY > 1500 ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Artik's AI Agents are ready to save you time, money, and empower you to scale faster.
              </motion.p>
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollY > 1600 ? 1 : 0, y: scrollY > 1600 ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get Started with Artik
            </motion.button>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Artik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

