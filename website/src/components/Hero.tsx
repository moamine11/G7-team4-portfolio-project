import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import brainImage from "@/assets/digital_brain.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient mesh background */}
      <motion.div 
        className="absolute inset-0 gradient-mesh"
        style={{ y }}
      />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />
      
      {/* 3D AI Brain Animation */}
      <motion.div
        className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          // subtle sway and slight vertical drift only
          rotateY: [-6, 0, 6, 0],
          y: [0, -8, 0],
        }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          <img 
            src={brainImage} 
            alt="AI Neural Network" 
            className="w-[520px] h-[520px] xl:w-[620px] xl:h-[620px] object-contain drop-shadow-[0_0_60px_rgba(34,211,238,0.6)]"
          />
          
          {/* Additional glow effect */}
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-5xl mx-auto lg:mx-0 lg:pr-[28rem] space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass border-2 border-primary/30 text-primary"
          >
            <Sparkles className="w-5 h-5 animate-glow-pulse" />
            <span className="text-sm font-semibold tracking-wide">NeuralForge - Building the Future with AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <motion.span
              className="block mb-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Meet the
            </motion.span>
            <motion.span 
              className="block text-gradient-primary animate-gradient-shift bg-[length:200%_auto]"
              style={{
                backgroundImage: "linear-gradient(90deg, hsl(230 60% 20%), hsl(188 95% 50%), hsl(280 85% 65%), hsl(188 95% 50%), hsl(230 60% 20%))",
              }}
            >
              AI Engineers
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            A team of talented AI Engineering students collaborating to create{" "}
            <span className="text-primary font-semibold">intelligent solutions</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#team"
              className="group relative px-10 py-4 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <span className="relative z-10 flex items-center space-x-2 text-background font-bold text-lg">
                <span>View Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
