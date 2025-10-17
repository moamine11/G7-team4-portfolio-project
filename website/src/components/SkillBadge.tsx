import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.15, 
        y: -5,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      className="relative group px-5 py-2.5 rounded-xl glass border-2 border-primary/30 hover:border-primary/60 text-primary font-semibold text-sm cursor-default overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <motion.div
        className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
      />
      <span className="relative z-10">{skill}</span>
      
      {/* Sparkle effect on hover */}
      <motion.div
        className="absolute top-1 right-1 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />
    </motion.div>
  );
};

export default SkillBadge;
