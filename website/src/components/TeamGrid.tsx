import { motion } from "framer-motion";
import TeamMember from "./TeamMember";
import { Users } from "lucide-react";

// Team data - NeuralForge AI Engineering Students
const teamMembers = [
  {
    name: "Chaouchi Mohamed Amine",
    role: "AI Engineering Student (Leader)",
    bio: "Leading our team in developing innovative software engineering solutions and web-based applications.",
    image: "/images/chaouchi.png",
    github: "https://github.com/moamine11",
    email: "mailto:mohamed.amine.chaouchi@ensia.edu.dz",
    linkedin: "https://www.linkedin.com/in/mohamed-amine-chaouchi-92088831b/",
    slug: "chaouchi-mohamed-amine",
    aboutMe: "As an AI Engineering student, my goal is to build a deep and comprehensive understanding of artificial intelligence while continuously expanding my knowledge through hands-on learning and exploration. I aspire to contribute to AI research and develop original innovations that positively impact my society and align with my principles. Alongside my academic journey, I plan to create impactful projects, launch AI-driven businesses, and generate real-world value. While I find all AI domains fascinating at this stage, I aim to specialize in the field that inspires me most as I progress.",
    skills: [
      "PYTHON",
      "C/C++",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "PHP",
      "SQL",
      "JAVA",
      "LINUX",
      "Git",
      "DJANGO",
      "React.js",
      "Problem Solving",
      "DSA",
      "OOP"

    ],
    projects: [
      {
        title: "Gym Management Web Platform",
        description: "Developed a full-featured gym management website that allows users to create accounts, track their progress, buy gym products from a marketplace, and book coaches or dietitians through dedicated booking pages with integrated chat support.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
      },
      {
        title: "AI-Powered Job Matching System",
        description: "Built an intelligent job matching system leveraging AI search algorithms such as A*, Greedy Search, and Genetic Algorithms to connect job seekers with suitable positions. The project includes a web platform for data visualization and interaction.",
        tech: ["Python", "Flask", "React", "AI Search Algorithms"]
      }
    ]

  },
  {
    name: "Boucenna Rabah",
    role: "AI Engineering Student",
    bio: "Building innovative software solutions through powerful websites and seamless applications",
    image: "/images/boucenna.png",
    github: "https://github.com/Rabah-boucenna",
    email: "rabah.boucenna@ensia.edu.dz",
    linkedin: "https://linkedin.com/in/rabah-boucenna-149394374",
    slug: "boucenna-rabah",
    aboutMe: "As an AI Engineering student, I am passionate about exploring the frontiers of artificial intelligence and developing innovative solutions that leverage data mining, software engineering, and data science to solve real-world problems.",
    skills: [
      "Python", "javascript", "php",
      "Html", "CSS", "Java", "C/C++",
      "React.js", "DJANGO", "SQL", "Linux","OOP","FLUTTER","Dart"
      , "Pandas", "NumPy"
    ],
    projects: [
      {
  title: "Gym Management System",
  description: "Developed a complete web-based gym management system using HTML, CSS, JavaScript, and PHP, with a MySQL database managed via phpMyAdmin. The system handles member registration, subscriptions, and attendance tracking through a clean and user-friendly interface.",
  tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "phpMyAdmin"]
},
{
  title: "Discover Algeria in 7 Days",
  description: "Built an interactive tourism web application that recommends personalized travel routes across Algeria using search algorithms. The project was developed with FastAPI as the backend and deployed as a fully functional website to help users plan their 7-day discovery journey.",
  tech: ["FastAPI", "Python", "Search Algorithms", "React.js", "JavaScript", "Web Deployment"]
}
    ]
  },
  {
    name: "Bensaddek Kaouther",
    role: "AI Engineering Student",
    bio: "Specializing in natural language processing and computer vision applications.",
    image: "/images/bensaddek.jpg",
    github: "https://github.com/bensaddek-kaouther",
    email: "bensaddek.kaouther@neuralforge.ai",
    linkedin: "https://linkedin.com/in/bensaddek-kaouther",
    slug: "bensaddek-kaouther",
    aboutMe: "As an AI Engineering student at NeuralForge, I am passionate about exploring the frontiers of artificial intelligence and machine learning. I focus on developing innovative solutions that leverage the power of neural networks, deep learning, and data science to solve real-world problems. I believe in continuous learning and staying at the forefront of AI research and development.",
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
  {
    name: "Cherbal Sonia",
    role: "AI Engineering Student",
    bio: "Exploring machine learning algorithms and data science for intelligent systems.",
    image: "/images/cherbal.jpg",
    github: "https://github.com/cherbal-sonia",
    email: "cherbal.sonia@neuralforge.ai",
    linkedin: "https://linkedin.com/in/cherbal-sonia",
    slug: "cherbal-sonia",
    aboutMe: "As an AI Engineering student at NeuralForge, I am passionate about exploring the frontiers of artificial intelligence and machine learning. I focus on developing innovative solutions that leverage the power of neural networks, deep learning, and data science to solve real-world problems. I believe in continuous learning and staying at the forefront of AI research and development.",
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
  {
    name: "Chergui Mohamed Bahae Eddine",
    role: "AI Engineering Student",
    bio: "Focused on AI research, neural network architectures, and intelligent automation.",
    image: "/images/chergui.jpg",
    github: "https://github.com/chergui-bahae",
    email: "chergui.mohamed.bahae.eddine@neuralforge.ai",
    linkedin: "https://linkedin.com/in/chergui-mohamed-bahae-eddine",
    slug: "chergui-mohamed-bahae-eddine",
    aboutMe: "As an AI Engineering student at NeuralForge, I am passionate about exploring the frontiers of artificial intelligence and machine learning. I focus on developing innovative solutions that leverage the power of neural networks, deep learning, and data science to solve real-world problems. I believe in continuous learning and staying at the forefront of AI research and development.",
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
