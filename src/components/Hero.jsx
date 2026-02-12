import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

const Hero = ({ data }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-neon-purple/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] left-[10%] w-[30rem] h-[30rem] bg-neon-blue/20 rounded-full blur-[100px] animate-pulse pointer-events-none delay-1000" />

            <motion.div
                className="text-center z-10 max-w-4xl mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-4 inline-block">
                    <span className="py-1 px-3 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-mono border border-neon-blue/20">
                        Hello, World! I am
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        {data.name}
                    </span>
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-3xl text-gray-300 font-light mb-8"
                >
                    {data.tagline}
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
                >
                    Building intelligent systems at the nexus of <span className="text-neon-blue font-bold">AI</span>, <span className="text-bio-green font-bold">Biotech</span>, and <span className="text-neon-purple font-bold">Defense</span>.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                    >
                        <Github size={20} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                    >
                        <Mail size={20} />
                        <span>Email</span>
                    </a>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-12 animate-bounce cursor-pointer flex justify-center"
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                    <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors">
                        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
                        <ArrowRight className="rotate-90" size={20} />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
