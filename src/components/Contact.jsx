import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = ({ data }) => {
    return (
        <section id="contact" className="py-32 bg-tech-bg/50 relative overflow-hidden text-center">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
                <div className="w-[40rem] h-[40rem] bg-gradient-to-t from-neon-blue/20 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-neon-blue font-mono mb-4"
                >
                    06. What's Next?
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg mb-12 leading-relaxed"
                >
                    Whether you have a question, a project idea, or just want to discuss the future of AI and Biotech, my inbox is always open. I'll get back to you as soon as possible!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a
                        href={`mailto:${data.email}`}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-neon-blue text-neon-blue font-mono rounded hover:bg-neon-blue/10 transition-all duration-300"
                    >
                        <MessageSquare size={20} />
                        Say Hello
                    </a>
                </motion.div>

                <motion.div
                    className="mt-20 flex justify-center gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:-translate-y-1 transition-all"><Github size={24} /></a>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:-translate-y-1 transition-all"><Linkedin size={24} /></a>
                    <a href={`mailto:${data.email}`} className="text-gray-500 hover:text-white hover:-translate-y-1 transition-all"><Mail size={24} /></a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
