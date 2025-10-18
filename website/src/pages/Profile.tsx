import { motion } from "framer-motion";
import { Github, ArrowLeft, Mail, Linkedin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/SkillBadge";
import { teamMembers } from "@/components/TeamGrid";


const memberData = {
  "chaouchi-mohamed-amine": {
    skills: [
      "Python", "TensorFlow", "PyTorch", "Machine Learning",
      "Deep Learning", "Neural Networks", "Team Leadership",
      "MLOps", "Model Deployment", "FastAPI", "Docker",
      "CI/CD", "Project Management", "Agile"
    ],
    projects: [
      {
        title: "AI Model Deployment Pipeline",
        description: "Designed and implemented an end-to-end MLOps pipeline for deploying machine learning models to production with automated testing, monitoring, and scaling capabilities.",
        tech: ["Python", "Docker", "Kubernetes", "MLflow", "FastAPI"]
      },
      {
        title: "Neural Architecture Search Framework",
        description: "Developed an automated framework for discovering optimal neural network architectures using reinforcement learning and evolutionary algorithms.",
        tech: ["PyTorch", "Python", "AutoML", "Reinforcement Learning"]
      },
      {
        title: "Team Collaboration AI Platform",
        description: "Built a collaborative platform for AI researchers to share models, datasets, and experiments with version control and reproducibility features.",
        tech: ["Python", "PostgreSQL", "Redis", "React", "Git"]
      }
    ]
  },
  "boucenna-rabah": {
    skills: [
      "Python", "PyTorch", "TensorFlow", "Deep Learning",
      "Neural Networks", "NLP", "Transformers", "BERT",
      "Computer Vision", "CNNs", "OpenCV", "YOLO",
      "Keras", "Pandas", "NumPy"
    ],
    projects: [
      {
        title: "Advanced NLP Chatbot",
        description: "Created an intelligent conversational AI using transformer models and fine-tuned BERT for context-aware responses in multiple domains.",
        tech: ["PyTorch", "Transformers", "BERT", "NLP", "Python"]
      },
      {
        title: "Real-Time Object Detection System",
        description: "Implemented a real-time object detection and tracking system using YOLO architecture optimized for edge devices and low-latency applications.",
        tech: ["Python", "YOLO", "OpenCV", "Computer Vision", "TensorFlow"]
      },
      {
        title: "Multi-Modal Emotion Recognition",
        description: "Developed a system that combines facial expression analysis and text sentiment to detect emotional states with high accuracy.",
        tech: ["PyTorch", "CNNs", "NLP", "OpenCV", "Deep Learning"]
      }
    ]
  },
  "bensaddek-kaouther": {
    skills: [
      "Python", "Natural Language Processing", "spaCy", "NLTK",
      "Computer Vision", "TensorFlow", "Keras", "OpenCV",
      "Image Processing", "Text Analytics", "Deep Learning",
      "Scikit-learn", "Pandas", "Data Visualization"
    ],
    projects: [
      {
        title: "Medical Image Analysis Tool",
        description: "Built a computer vision system for analyzing medical imaging data to assist in early disease detection using convolutional neural networks.",
        tech: ["TensorFlow", "Keras", "Computer Vision", "Python", "OpenCV"]
      },
      {
        title: "Multilingual Text Summarization",
        description: "Developed an NLP system capable of extracting and summarizing key information from documents in multiple languages using transformer models.",
        tech: ["Python", "NLP", "Transformers", "spaCy", "NLTK"]
      },
      {
        title: "Visual Question Answering System",
        description: "Created a multi-modal AI system that combines computer vision and NLP to answer questions about image content.",
        tech: ["PyTorch", "Computer Vision", "NLP", "Deep Learning"]
      }
    ]
  },
  "cherbal-sonia": {
    skills: [
      "Python", "Machine Learning", "Data Science", "Scikit-learn",
      "Pandas", "NumPy", "Data Analysis", "Feature Engineering",
      "Statistical Modeling", "Matplotlib", "Seaborn",
      "Time Series Analysis", "Random Forest", "XGBoost"
    ],
    projects: [
      {
        title: "Predictive Maintenance System",
        description: "Developed a machine learning system to predict equipment failures in industrial settings, reducing downtime and maintenance costs.",
        tech: ["Python", "Scikit-learn", "XGBoost", "Time Series", "Pandas"]
      },
      {
        title: "Customer Behavior Analytics",
        description: "Built a comprehensive data science pipeline to analyze customer behavior patterns and predict churn with actionable insights.",
        tech: ["Python", "Machine Learning", "Data Analysis", "Visualization"]
      },
      {
        title: "Anomaly Detection Framework",
        description: "Created an intelligent system for detecting anomalies in large-scale datasets using ensemble methods and statistical techniques.",
        tech: ["Python", "Scikit-learn", "Statistical Modeling", "NumPy"]
      }
    ]
  },
  "chergui-mohamed-bahae-eddine": {
    skills: [
      "Python", "Deep Learning", "PyTorch", "Neural Networks",
      "Reinforcement Learning", "AI Research", "GANs",
      "Optimization Algorithms", "Automation", "ROS",
      "Robotics", "Computer Vision", "TensorFlow"
    ],
    projects: [
      {
        title: "Autonomous Navigation System",
        description: "Designed an AI-powered navigation system for autonomous robots using deep reinforcement learning and computer vision for obstacle avoidance.",
        tech: ["PyTorch", "Reinforcement Learning", "ROS", "Computer Vision"]
      },
      {
        title: "Generative Art AI",
        description: "Developed a GAN-based system for creating unique artistic images and exploring the creative potential of artificial intelligence.",
        tech: ["PyTorch", "GANs", "Deep Learning", "Neural Networks"]
      },
      {
        title: "Intelligent Process Automation",
        description: "Built an AI system that automates complex business processes by learning from user behavior and optimizing workflows.",
        tech: ["Python", "Deep Learning", "Automation", "Optimization"]
      }
    ]
  }
};

const Profile = () => {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  
  const customData = memberData[slug] || {
    skills: ["Python", "Machine Learning", "AI Engineering"],
    projects: []
  };

  
  const profileData = {
    ...member,
    email: `${member.slug.replace(/-/g, ".")}@neuralforge.ai`,
    linkedin: `https://linkedin.com/in/${member.slug}`,
  };

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
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center text-6xl font-bold text-gradient glow">
                    {member.name.split(' ').map(n => n[0]).join('')}
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
                      href={`mailto:${profileData.email}`}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                    <a
                      href={profileData.linkedin}
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
                As an AI Engineering student at NeuralForge, I am passionate about exploring the frontiers of artificial 
                intelligence and machine learning. I focus on developing innovative solutions that leverage 
                the power of neural networks, deep learning, and data science to solve real-world problems. 
                I believe in continuous learning and staying at the forefront of AI research and development.
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
                {customData.skills.map((skill, index) => (
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
                {customData.projects.map((project, index) => (
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