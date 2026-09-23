import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const education = [
  {
    degree: 'B.Tech Computer Science Engineering (AI/ML)',
    institution: 'Chandigarh University, India',
    period: '2022 - 2026',
    score: 'CGPA: 7.6',
    gradient: 'from-fuchsia-300 to-fuchsia-300'
  },
  {
    degree: 'High School',
    institution: 'Holy Child Public School, Faridabad',
    period: '2022',
    score: 'Percentage: 77.4%',
    gradient: 'from-fuchsia-300 to-fuchsia-300'
  },
  {
    degree: 'Secondary School',
    institution: 'Holy Child Public School, Faridabad',
    period: '2020',
    score: 'Percentage: 85.8%',
    gradient: 'from-fuchsia-300 to-fuchsia-300'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-carbon-950 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Gradient effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-fuchsia-300 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-slate-200/80 font-mono">{'// '}Academic background and qualifications</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ x: 10, scale: 1.02 }}
              className="bg-carbon-850/50 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:shadow-fuchsia-300/20 transition-all border border-fuchsia-300/20 group hover:border-fuchsia-300/40"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-300/30`}
                >
                  <GraduationCap className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{edu.degree}</h3>
                  <p className="text-slate-200/70 mb-3 font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-fuchsia-200/80 bg-carbon-800/50 px-3 py-1.5 rounded-full border border-fuchsia-300/20"
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{edu.period}</span>
                    </motion.div>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-1.5 bg-gradient-to-r from-fuchsia-300/20 to-fuchsia-300/20 backdrop-blur-sm rounded-full text-sm font-bold text-slate-100 border border-fuchsia-300/30 shadow-sm shadow-fuchsia-300/30"
                    >
                      {edu.score}
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
