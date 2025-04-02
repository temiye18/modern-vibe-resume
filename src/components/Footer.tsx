
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 relative overflow-hidden bg-black/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] opacity-10 bg-gradient-to-t from-accent/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-background text-xl"
            >
              TA
            </motion.div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              whileHover={{ y: -3, color: "#0A66C2" }}
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#6e5494" }}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#EA4335" }}
              href="mailto:akinyemitemiye18@gmail.com"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
          
          <div className="text-center text-foreground/60 text-sm">
            <p className="flex items-center justify-center">
              © {currentYear} Temiye Akinyemi. All rights reserved.
            </p>
            <p className="mt-2 flex items-center justify-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by Temiye Akinyemi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
