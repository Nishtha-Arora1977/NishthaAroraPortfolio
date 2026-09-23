import { Award, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

const certifications = [
  'Oracle Certified Professional – Generative AI (OCI 2024)',
  'AWS Academy Graduate – Cloud Foundations',
  'Microsoft – Generative AI for Data Analysis (Coursera)',
  'IBM – Python for Data Science & AI',
  'Deloitte Australia – Data Analytics Job Simulation (Forage)'
];

const achievements = [
  'Winner – Techathon 3.0',
  'Smart India Hackathon (SIH) Nominee'
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-carbon-900 relative overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-slate-200/80 font-mono">{'/* '}Recognition and continuous learning{' */'}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-carbon-850/50 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all border border-violet-500/20 group hover:border-violet-400/40"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/50"
              >
                <Award className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-100">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-500/10 transition-all border border-transparent hover:border-violet-500/30"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-400 to-violet-600 mt-2 flex-shrink-0 shadow-sm shadow-violet-500/50"></span>
                  <span className="text-slate-100/90 font-medium">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-carbon-850/50 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all border border-violet-500/20 group hover:border-violet-400/40"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/50"
              >
                <Trophy className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-neutral-100">Achievements</h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={achievement}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-500/10 transition-all border border-transparent hover:border-violet-500/30"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-400 to-violet-600 mt-2 flex-shrink-0 shadow-sm shadow-violet-500/50"></span>
                  <span className="text-neutral-100/90 font-medium">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
