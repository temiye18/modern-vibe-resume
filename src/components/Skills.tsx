
import { motion } from "framer-motion";
import { FileCode, GitBranch, MousePointerClick, PenTool, Server } from "lucide-react";

// Define skills categories
const skillCategories = [
  {
    name: "Frontend Development",
    icon: <FileCode size={24} />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native"],
  },
  {
    name: "Backend Development",
    icon: <Server size={24} />,
    skills: ["Node.Js", "Express"],
  },
  {
    name: "Tools & Version Control",
    icon: <GitBranch size={24} />,
    skills: ["Git", "GitHub"],
  },
  {
    name: "Design & Prototyping",
    icon: <PenTool size={24} />,
    skills: ["Figma"],
  },
  {
    name: "Professional Skills",
    icon: <MousePointerClick size={24} />,
    skills: ["Problem Solving", "Team Collaboration", "Agile Development"],
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
            A comprehensive list of my technical skills and competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    skills: string[];
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
      
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar 
            key={skillIndex} 
            skill={skill} 
            value={85 + Math.random() * 15} 
            delay={skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillBar = ({ skill, value, delay }: { skill: string; value: number; delay: number }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <p className="text-sm font-medium text-foreground/80">{skill}</p>
        <p className="text-xs text-foreground/60">{Math.round(value)}%</p>
      </div>
      <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
          className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default Skills;
