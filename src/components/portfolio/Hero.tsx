import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden" data-id="y4qgeuc2q" data-path="src/components/portfolio/Hero.tsx">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50" data-id="8m0kq8ml5" data-path="src/components/portfolio/Hero.tsx" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden" data-id="8kasfv25p" data-path="src/components/portfolio/Hero.tsx">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }} />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }} />

      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10" data-id="na0uw3jbi" data-path="src/components/portfolio/Hero.tsx">
        <div className="flex flex-col items-center text-center" data-id="qy61yao43" data-path="src/components/portfolio/Hero.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3">

            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium" data-id="vc3lj2edk" data-path="src/components/portfolio/Hero.tsx">
              Web Developer & Android Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">

            Hello, I'm <span className="text-blue-600" data-id="fkqkgisec" data-path="src/components/portfolio/Hero.tsx">Vaibhav Kumawat</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">

            Web Developer with expertise in Android and Web Development, building responsive websites and intuitive mobile applications
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4">

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full"
              asChild>

              <a href="#projects" data-id="atghh98m3" data-path="src/components/portfolio/Hero.tsx">View My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full">

              <a href="/VaibhavKumawat_SDE_Resume-Copy.pdf" download data-id="q404y9hts" data-path="src/components/portfolio/Hero.tsx">Download Resume</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        whileHover={{ y: 5 }}
        whileTap={{ y: 10 }}>

        <a href="#about" aria-label="Scroll down" data-id="9yfv2zrmn" data-path="src/components/portfolio/Hero.tsx">
          <ArrowDown className="animate-bounce text-purple-600" size={32} />
        </a>
      </motion.div>
    </section>);

};

export default Hero;