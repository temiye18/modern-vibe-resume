
import { motion } from "framer-motion";
import { Award, BookOpen, BriefcaseBusiness, Code, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Get to know more about my background, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-bl from-accent/20 to-primary/20 glass-card">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center px-8"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gradient">4+ Years Experience</h3>
                    <p className="text-white/90">
                      Building modern web applications and revitalizing software development lifecycles
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-accent/10 glass-card animate-pulse-glow"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-primary/10 glass-card"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Front-End Engineer with a passion for creating innovative solutions
            </h3>
            <p className="text-foreground/80">
              Driven by a passion for pixel-perfect design and seamless user experiences, I'm a front-end engineer who thrives on transforming complex requirements into fast, accessible, and beautifully crafted interfaces. Over the past 4 years, I've honed my HTML, CSS, JavaScript, and TypeScript expertise. I leverage modern frameworks - especially React and Next.js - to deliver performant, intuitive applications that delight users and drive business impact. I bring a keen eye for detail and a solutions-oriented mindset, taking pride in writing clean, maintainable code and embracing best practices like component-driven development, responsive design, and unit testing.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <InfoCard 
                icon={<BriefcaseBusiness size={20} />}
                title="Experience"
                description="4+ years in software development"
              />
              <InfoCard 
                icon={<Code size={20} />}
                title="Projects"
                description="Multiple successful applications deployed"
              />
              <InfoCard 
                icon={<BookOpen size={20} />}
                title="Education"
                description="B.Sc. Computer Science, LASU"
              />
              <InfoCard 
                icon={<Award size={20} />}
                title="Achievements"
                description="Winner, Cavista Hackathon 2024"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex items-start space-x-3 p-4 rounded-xl glass-card tech-glow"
    >
      <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 text-accent">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default About;
