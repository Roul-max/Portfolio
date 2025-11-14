import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Layers, Palette, Cloud } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'State Management',
      icon: Layers,
      skills: ['Redux', 'Zustand', 'React Query', 'Context API'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: ['Responsive Design', 'Wireframing', 'Prototyping', 'Accessibility'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Vercel', 'Netlify', 'CI/CD', 'Supabase'],
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Skills & <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
