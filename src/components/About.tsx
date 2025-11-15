import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/19302811/pexels-photo-19302811.jpeg" alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Full Stack Developer & Designer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With over 1+ years of experience in web development, I specialize in building scalable,
              user-friendly applications using modern technologies. My passion lies in creating
              elegant solutions to complex problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I have a strong foundation in both frontend and backend development, with expertise
              in React, Node.js, TypeScript, and cloud technologies. I'm always eager to learn
              new technologies and best practices to deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-1">11+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="p-4 bg-cyan-50 dark:bg-slate-800 rounded-lg">
                <div className="text-3xl font-bold text-cyan-500 mb-1">1.5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
