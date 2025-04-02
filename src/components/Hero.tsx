
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] animate-spin-slow opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/5"
          >
            <p className="text-sm font-medium text-accent">Front-End Engineer</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block">Hi, I'm </span>
            <span className="text-gradient">Temiye Akinyemi</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-8"
          >
            Result-oriented software engineer with over four years of experience specializing in front-end development, 
            modern client-side frameworks, and advanced programming languages.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 rounded-lg bg-accent text-white font-medium shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-shadow"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-lg bg-secondary text-foreground font-medium border border-accent/20 hover:border-accent/50 transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ y: -3, color: "#0A66C2" }}
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#6e5494" }}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#EA4335" }}
              href="mailto:akinyemitemiye18@gmail.com"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground"
      >
        <ArrowDown size={28} />
        <span className="sr-only">Scroll Down</span>
      </motion.a>
    </section>
  );
};

export default Hero;
