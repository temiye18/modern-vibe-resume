
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ShareSafe",
    description: "A comprehensive social media application with geofencing technology and real-time location services for emergency notifications, enhancing user safety.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["React Native", "NodeJS", "TypeScript", "MongoDB", "Webhook", "Web-socket"],
    github: "https://github.com",
    liveLink: "#",
  },
  {
    title: "Chart Reel",
    description: "A live chart to track multiple financial markets including trades, quotes, aggregates, reference data, and news with instant access to real-time and historical stock markets.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Trading Widgets API", "React.js", "TypeScript", "React Router", "Context-API", "Styled Components"],
    github: "https://github.com",
    liveLink: "https://chartreelapp.com",
  },
  {
    title: "Transportation Queue",
    description: "An app to manage transportation queue for a logistic company, incorporating customer list, planner and drag-and-drop functionality to streamline delivery processes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    technologies: ["JavaScript", "React", "MongoDB", "NodeJS"],
    github: "https://github.com",
    liveLink: "#",
  },
  {
    title: "Diagmentia",
    description: "An expert system for dementia diagnosis using production rules, inference engines, heuristics and a robust knowledge base of patient CDR and MMSE scores.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    github: "https://github.com",
    liveLink: "https://diagmentia.org",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my technical abilities and problem-solving skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    liveLink: string;
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden group tech-glow h-full flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"
        ></motion.div>
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <motion.span 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent/90"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <motion.a
            whileHover={{ y: -2 }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm text-foreground/70 hover:text-accent"
          >
            <Github size={16} className="mr-1" />
            Code
          </motion.a>
          
          {project.liveLink !== "#" && (
            <motion.a
              whileHover={{ y: -2 }}
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm text-foreground/70 hover:text-accent"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
