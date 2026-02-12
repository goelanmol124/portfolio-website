import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = ({ jobs, leadership }) => {
    return (
        <section id="experience" className="py-20 bg-tech-bg/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <span className="text-neon-blue">02.</span> Experience
                </motion.h2>

                <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-12">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-tech-bg border-2 border-neon-blue" />

                            <div className="bg-tech-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl shadow-black/50">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white">{job.role} <span className="text-neon-blue">@ {job.company}</span></h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 md:mt-0 font-mono">
                                        <Calendar size={14} />
                                        <span>{job.duration}</span>
                                    </div>
                                </div>
                                {job.team && <p className="text-sm text-gray-400 mb-2 italic">{job.team}</p>}
                                <p className="text-gray-300 leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold mt-20 mb-8 flex items-center gap-3"
                >
                    <span className="text-neon-purple">Leadership & Responsibility</span>
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {leadership.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-tech-card p-6 rounded-xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-lg font-bold text-white">{role.role}</h4>
                                    <p className="text-neon-purple text-sm">{role.organization}</p>
                                </div>
                                <span className="text-xs text-gray-500 font-mono bg-gray-900 px-2 py-1 rounded">{role.duration}</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                {role.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
