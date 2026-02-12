import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Award, Trophy } from 'lucide-react';

const Skills = ({ skills, achievements }) => {
    return (
        <section id="skills" className="py-20 bg-tech-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Skills Column */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-8 flex items-center gap-3"
                        >
                            <span className="text-neon-blue">04.</span> Technical Arsenal
                        </motion.h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 bg-tech-card p-4 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all duration-300"
                                >
                                    <Terminal size={20} className="text-neon-blue" />
                                    <span className="text-gray-300 font-mono text-sm">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-8 flex items-center gap-3"
                        >
                            <span className="text-neon-purple">05.</span> Achievements
                        </motion.h2>

                        <div className="space-y-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="p-2 bg-yellow-500/10 rounded-full text-yellow-500 mt-1">
                                        <Trophy size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-200">{achievement}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
