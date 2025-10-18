import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["hsl(230 35% 7% / 0.5)", "hsl(230 35% 7% / 0.95)"]
  );

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/#team" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Code2 className="w-8 h-8 text-primary glow" />
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient-primary"
            >
              NeuralForge
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="relative text-foreground/80 hover:text-primary transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/moamine11/G7-team4-portfolio-project/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center space-x-2 px-5 py-2.5 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
              <div className="absolute inset-0 border border-primary/30 rounded-full group-hover:border-primary/60 transition-colors" />
              <motion.div
                className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Github className="w-4 h-4 text-primary relative z-10 group-hover:animate-bounce-slow" />
              <span className="text-primary relative z-10 font-medium">GitHub</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/moamine11/G7-team4-portfolio-project/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 py-2 text-primary"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
