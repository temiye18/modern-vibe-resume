
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  FileCode, 
  Figma as FigmaIcon, 
  GitBranch, 
  Github, 
  MousePointerClick, 
  Server 
} from "lucide-react";

// Define skills categories with their skills and logos
const skillCategories = [
  {
    name: "Frontend Development",
    icon: <FileCode size={24} />,
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Aurelia.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Astro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ],
  },
  {
    name: "Backend Development",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    name: "Database",
    icon: <Database size={24} />,
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    name: "Tools & Methodologies",
    icon: <GitBranch size={24} />,
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Scrum", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
      { name: "Agile", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A comprehensive showcase of my technical skills and competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, index }: {
  category: {
    name: string;
    icon: React.ReactNode;
    skills: { name: string; logo: string }[];
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 h-full tech-glow"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-lg bg-accent/10 text-accent mr-3">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold">{category.name}</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillLogo 
            key={skillIndex} 
            skill={skill} 
            delay={skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillLogo = ({ skill, delay }: { 
  skill: { name: string; logo: string }; 
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center p-3"
    >
      <div className="bg-white/5 p-3 rounded-xl mb-2 w-14 h-14 flex items-center justify-center">
        <img 
          src={skill.logo} 
          alt={`${skill.name} logo`} 
          className="w-10 h-10 object-contain" 
        />
      </div>
      <p className="text-xs text-center font-medium text-foreground/80">{skill.name}</p>
    </motion.div>
  );
};

export default Skills;
