import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            ><img src="public/PP.jpeg" alt=""
            className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-2xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Rohit Kumar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-semibold mb-6"
          >
            Full Stack Developer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12"
          >
            Crafting beautiful, performant web applications with modern technologies.
            Passionate about creating seamless user experiences and writing clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="/src/assets/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              <Download size={20} />
              View Resume
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 hover:scale-105 transition-all"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="text-blue-500 animate-bounce" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
