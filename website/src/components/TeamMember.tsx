import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  github: string;
  slug: string;
  index: number;
}

const TeamMember = ({ name, role, bio, image, github, slug, index }: TeamMemberProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <Link to={`/profile/${slug}`}>
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ z: 50 }}
          className="relative rounded-3xl overflow-hidden glass-strong border-2 border-border/50 hover:border-primary/60 transition-all duration-500 shadow-2xl h-[500px] flex flex-col"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

          {/* Spotlight effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(188 95% 50% / 0.3), transparent 50%)",
            }}
          />

          {/* Avatar/Image */}
          <div className="relative h-[200px] overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, hsl(188 95% 50% / 0.2), transparent 50%)",
                  "radial-gradient(circle at 80% 50%, hsl(280 85% 65% / 0.2), transparent 50%)",
                  "radial-gradient(circle at 50% 20%, hsl(217 91% 65% / 0.2), transparent 50%)",
                  "radial-gradient(circle at 20% 50%, hsl(188 95% 50% / 0.2), transparent 50%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="w-full h-full flex items-center justify-center relative z-10"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="relative">
                {/* Display actual image or placeholder */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Hide image and show placeholder if it fails to load
                      e.currentTarget.style.display = 'none';
                      const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                    <User className="w-16 h-16 text-primary/60" />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Floating user icon */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <User className="w-8 h-8 text-primary/30" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative p-6 bg-card/50 backdrop-blur-sm flex flex-col flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-1 flex-1 min-h-[60px] flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300 leading-tight">
                  {name}
                </h3>
                <p className="text-sm text-primary font-semibold tracking-wide">{role}</p>
              </div>
              <motion.div
                whileHover={{ rotate: 45, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-2"
              >
                <ExternalLink className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors" />
              </motion.div>
            </div>

            <p className="text-sm text-foreground/70 line-clamp-3 leading-relaxed flex-1 mb-4">{bio}</p>

            <div className="flex items-center space-x-3 pt-2 mt-auto">
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg glass border border-primary/30 text-primary hover:border-primary/60 transition-all text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default TeamMember;
