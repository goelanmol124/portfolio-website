import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Dna, Shield } from 'lucide-react';

const About = ({ data }) => {
    return (
        <section id="about" className="py-20 bg-tech-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                            <span className="text-neon-blue">01.</span> About Me
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300">
                            <p className="mb-4 text-lg leading-relaxed">
                                {data.about}
                            </p>
                            <p className="mb-4 text-lg leading-relaxed">
                                Currently, I am a final-year B.Tech student at <span className="text-neon-blue">IIT Delhi</span>, specializing in Biochemical Engineering & Biotechnology with a CGPA of <span className="text-neon-blue">9.21</span>. My academic journey is defined by a curiosity to bridge biological systems with computational intelligence.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-lg opacity-20 transform rotate-3 scale-105" />
                        <div className="bg-tech-card p-8 rounded-2xl border border-white/10 relative z-10 hover:border-white/20 transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Core Focus Areas</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                        <Brain size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200">Artificial Intelligence</h4>
                                        <p className="text-sm text-gray-400">Computer Vision, NLP, Signal Processing</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                                        <Dna size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200">Biotechnology</h4>
                                        <p className="text-sm text-gray-400">Molecular Dynamics, Systems Biology</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200">Defense Tech</h4>
                                        <p className="text-sm text-gray-400">Surveillance, Security Systems</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
