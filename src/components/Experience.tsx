
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Cavista",
    position: "Full-Stack Engineer",
    period: "August 2024 - Present",
    location: "Lagos State, Nigeria",
    description: [
      "Resolved frontend and backend bugs within the palliative care solution, enhancing system stability and user experience.",
      "Implemented minor enhancements to existing features, improving usability and aligning with user feedback.",
      "Collaborated with cross-functional teams for seamless integration between AureliaJS frontend and C# backend services.",
    ],
  },
  {
    company: "Axxess",
    position: "Full Stack Engineer",
    period: "August 2024 - Present",
    location: "United States",
    description: [
      "Resolved frontend and backend bugs within the palliative care solution, enhancing system stability and user experience.",
      "Implemented minor enhancements to existing features, improving usability and aligning with user feedback.",
      "Collaborated with cross-functional teams for seamless integration between AureliaJS frontend and C# backend services.",
    ],
  },
  {
    company: "Aufera",
    position: "Front End Engineer",
    period: "January 2023 - Present",
    location: "Lagos",
    description: [
      "Utilize HTML, CSS, React, JavaScript, and TypeScript in developing the insurance dashboard, increasing website traffic by 10% and enhancing user experience.",
      "Create more than 17 reusable UI components with React-js's architecture, thus streamlining development processes.",
      "Capitalize on React.js's component reusability feature to build modular solutions, facilitating testing, scalability and maintenance of the insurance dashboard.",
      "Leverage TypeScript to introduce static typing to JavaScript, improving durability and reliability of the code.",
    ],
  },
  {
    company: "Y-Creators",
    position: "Front End Engineer",
    period: "August 2022 - May 2023",
    location: "Lagos",
    description: [
      "Designed and implemented a responsive and visually appealing user interface for YCreators.com, resulting in improved user engagement and overall user experience.",
      "Optimized website loading speed, increasing page load time by 71%, website traffic and reduced bounce rates.",
      "Collaborated with the design team to create an aesthetically pleasing website layout, receiving positive feedback from users and contributing to increased website conversions.",
      "Resolved several website bugs to improve website stability and reduce downtime.",
      "Adopted the agile framework to transform high-fidelity designs into functional and dynamic web applications that meet customer requirements.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            My professional journey as a Front-End Engineer across different companies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/80 via-primary/50 to-accent/30 transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, index }: { 
  experience: {
    company: string;
    position: string;
    period: string;
    location: string;
    description: string[];
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background rounded-full border-2 border-accent flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10">
        <Briefcase size={16} className="text-accent" />
      </div>
      
      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${
        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
      }`}>
        <div className="glass-card p-6 rounded-xl tech-glow">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{experience.position}</h3>
              <h4 className="text-lg font-medium text-accent">{experience.company}</h4>
            </div>
            <div className="flex items-center text-sm text-foreground/70 mt-2 sm:mt-0">
              <Calendar size={14} className="mr-1" />
              <span>{experience.period}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {experience.description.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Empty space for alternate layout */}
      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  );
};

export default Experience;
