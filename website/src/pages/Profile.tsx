import { motion } from "framer-motion";
import { useEffect } from "react";
import { Github, ArrowLeft, Mail, Linkedin, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/SkillBadge";
import { teamMembers } from "@/components/TeamGrid";



const Profile = () => {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  // Ensure the page is scrolled to the top when this component mounts or when the slug changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [slug]);

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
          <Link
            to="/"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }
            }}
            className="text-primary hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Use data directly from the member object
  const profileData = member;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-30" />

          <div className="relative container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                  }
                }}
                className="inline-flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Team</span>
              </Link>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Hide image and show placeholder if it fails to load
                        e.currentTarget.style.display = 'none';
                        const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                      <User className="w-20 h-20 text-primary/60" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Info */}
                <div className="flex-1">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl sm:text-5xl font-bold mb-2"
                  >
                    {member.name}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl text-primary font-semibold mb-6"
                  >
                    {member.role}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mb-6"
                  >
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-card border border-border/50 p-8"
            >
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {member.bio}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {member.aboutMe}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-card border border-border/50 p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-card border border-border/50 p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="space-y-6">
                {member.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-background border border-border/30 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  >
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-primary text-sm">
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;