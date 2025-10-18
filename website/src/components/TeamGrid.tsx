import { motion } from "framer-motion";
import TeamMember from "./TeamMember";
import { Users } from "lucide-react";

// Team data - NeuralForge AI Engineering Students
const teamMembers = [
  {
    name: "Chaouchi Mohamed Amine",
    role: "AI Engineering Student (Leader)",
    bio: "Leading our team in developing innovative AI solutions and machine learning applications.",
    image: "/images/chaouchi.jpg",
    github: "https://github.com/chaouchi-amine",
    slug: "chaouchi-mohamed-amine",
  },
  {
    name: "Boucenna Rabah",
    role: "AI Engineering Student",
    bio: "Passionate about neural networks, deep learning architectures, and AI model optimization.",
    image: "/images/boucenna.jpg",
    github: "https://github.com/boucenna-rabah",
    slug: "boucenna-rabah",
  },
  {
    name: "Bensaddek Kaouther",
    role: "AI Engineering Student • Designer • ETC planning manager",
    bio: "AI student at ENSIA and passionate Full-Stack Developer & Designer, blending technical expertise with creative vision to build smart, user-focused digital experiences. Driven by innovation, teamwork, and hands-on learning.",
    image: "/images/bensaddek.jpg",
    github: "https://github.com/kaoutherbensaddek",
    slug: "bensaddek-kaouther",
  },
  {
    name: "Cherbal Sonia",
    role: "AI Engineering Student",
    bio: "Exploring machine learning algorithms and data science for intelligent systems.",
    image: "/images/cherbal.jpg",
    github: "https://github.com/cherbal-sonia",
    slug: "cherbal-sonia",
  },
  {
    name: "Chergui Mohamed Bahae Eddine",
    role: "AI Engineering Student",
    bio: "Focused on AI research, neural network architectures, and intelligent automation.",
    image: "/images/chergui.jpg",
    github: "https://github.com/chergui-bahae",
    slug: "chergui-mohamed-bahae-eddine",
  },
];

const TeamGrid = () => {
  return (
    <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">NeuralForge Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">AI Engineers</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A dedicated team of AI Engineering students building the future of intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.slug} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
export { teamMembers };
