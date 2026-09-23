import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-carbon-950 via-carbon-950 to-carbon-950 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-fuchsia-300/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-300/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-fuchsia-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-200/80 font-mono">
            {'> '}I'm always open to discussing new opportunities and collaborations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-carbon-850/50 backdrop-blur-xl rounded-3xl p-8 border border-fuchsia-300/30 shadow-2xl shadow-fuchsia-300/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:anishtha33@gmail.com"
              className="flex items-center gap-4 p-5 bg-carbon-800/50 backdrop-blur-lg rounded-2xl hover:bg-carbon-800/70 transition-colors group border border-fuchsia-300/30 hover:border-fuchsia-300/50"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-300/30 to-fuchsia-300/30 flex items-center justify-center group-hover:from-fuchsia-300/50 group-hover:to-fuchsia-300/50 transition-all shadow-lg shadow-fuchsia-300/30"
              >
                <Mail className="w-7 h-7 text-fuchsia-200" />
              </motion.div>
              <div>
                <p className="text-sm text-fuchsia-200/70 font-mono">Email</p>
                <p className="text-slate-100 font-semibold">anishtha33@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+918283050747"
              className="flex items-center gap-4 p-5 bg-carbon-800/50 backdrop-blur-lg rounded-2xl hover:bg-carbon-800/70 transition-colors group border border-fuchsia-300/30 hover:border-fuchsia-300/50"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-300/30 to-fuchsia-300/30 flex items-center justify-center group-hover:from-fuchsia-300/50 group-hover:to-fuchsia-300/50 transition-all shadow-lg shadow-fuchsia-300/30"
              >
                <Phone className="w-7 h-7 text-fuchsia-200" />
              </motion.div>
              <div>
                <p className="text-sm text-fuchsia-200/70 font-mono">Phone</p>
                <p className="text-slate-100 font-semibold">+91 8283050747</p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/nishtha-arora-22aab626b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-carbon-800/50 backdrop-blur-lg rounded-2xl hover:bg-carbon-800/70 transition-colors group border border-fuchsia-300/30 hover:border-fuchsia-300/50"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-300/30 to-fuchsia-300/30 flex items-center justify-center group-hover:from-fuchsia-300/50 group-hover:to-fuchsia-300/50 transition-all shadow-lg shadow-fuchsia-300/30"
              >
                <Linkedin className="w-7 h-7 text-fuchsia-200" />
              </motion.div>
              <div>
                <p className="text-sm text-fuchsia-200/70 font-mono">LinkedIn</p>
                <p className="text-slate-100 font-semibold">Nishtha Arora</p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Nishtha-Arora1977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-carbon-800/50 backdrop-blur-lg rounded-2xl hover:bg-carbon-800/70 transition-colors group border border-fuchsia-300/30 hover:border-fuchsia-300/50"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-300/30 to-fuchsia-300/30 flex items-center justify-center group-hover:from-fuchsia-300/50 group-hover:to-fuchsia-300/50 transition-all shadow-lg shadow-fuchsia-300/30"
              >
                <Github className="w-7 h-7 text-fuchsia-200" />
              </motion.div>
              <div>
                <p className="text-sm text-fuchsia-200/70 font-mono">GitHub</p>
                <p className="text-slate-100 font-semibold">Nishtha-Arora1977</p>
              </div>
            </motion.a>
          </div>

          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:anishtha33@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fuchsia-300 to-fuchsia-300 text-white rounded-full font-semibold hover:from-fuchsia-200 hover:to-fuchsia-300 transition-all shadow-xl shadow-fuchsia-300/50"
            >
              <Send className="w-5 h-5" />
              <span>Send me a message</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 text-fuchsia-200/70 font-mono"
        >
          <p>{'// '}© 2026 Nishtha Arora. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
