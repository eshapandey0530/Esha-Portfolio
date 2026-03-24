"use client"
import { motion } from "framer-motion"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { Typewriter } from "@/components/ui/typewriter-text"

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      <AnimatedGradientBackground
        Breathing
        gradientColors={["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"]}
        gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        breathingRange={8}
        animationSpeed={0.02}
        topOffset={20}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Lottie cat animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="w-48 h-48 md:w-64 md:h-64"
        >
          <DotLottieReact
            src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
            loop
            autoplay
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-6 max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Esha
            </span>
            <br />
            <Typewriter
              text={["a Product Builder.", "a Developer.", "a System Designer.", "a Creator.", "a Problem Solver."]}
              speed={80}
              deleteSpeed={40}
              delay={1800}
              loop
              className="text-3xl md:text-4xl font-medium text-gray-300"
            />
          </h1>

          {/* <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            A creative developer crafting beautiful digital experiences.
          </p> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center pt-4"
          >
            {/* <button className="px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 active:scale-95">
              View Work
            </button>
            <button className="px-8 py-3 text-sm font-medium text-gray-300 border border-gray-600 rounded-full hover:border-gray-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
              Contact Me
            </button> */}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Know More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  )
}
