import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "../hooks/useInView";
import img1 from "../assets/ecommerce.jpg";
import img2 from "../assets/taskmanagement.jpg";
import img3 from "../assets/aicontent.jpg";
import img4 from "../assets/portfolio.jpg";
import img5 from "../assets/analyticdashboard.jpg";
import img6 from "../assets/socialmedia.jpg";

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with cart, checkout, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: img1,
      github: "https://github.com/Roul-max/Wellness",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team features.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      image: img2,
      github: "#",
      demo: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation tool for marketing and social media posts.",
      tech: ["React", "OpenAI API", "Express", "PostgreSQL"],
      image: img3,
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Builder",
      description:
        "No-code portfolio website builder with drag-and-drop functionality.",
      tech: ["React", "DnD Kit", "Firebase", "Tailwind"],
      image: img4,
      github: "#",
      demo: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts and data visualization.",
      tech: ["Next.js", "Chart.js", "PostgreSQL", "Redis"],
      image: img5,
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media App",
      description:
        "Modern social networking platform with posts, comments, and real-time chat.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      image: img6,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* UPDATED IMAGE/GRADIENT HANDLER */}
              <div className="h-48 flex items-center justify-center relative overflow-hidden">
                {project.image.startsWith("from-") ? (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.image}`}
                  ></div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-slate-700 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
