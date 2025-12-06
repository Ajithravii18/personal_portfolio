import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Express', 'JavaScript', 'Git', 'Redux', 'Next.js'];

const About = () => {
    return (
        <section id="about" className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>About Me</h2>
                        <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            I am a passionate Full-Stack Developer with a knack for building efficient and scalable web applications.
                            With a strong foundation in both frontend and backend technologies, I love turning ideas into reality through code.
                            I am constantly learning and exploring new technologies to stay ahead in the ever-evolving tech landscape.
                        </p>
                        <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or gaming.
                        </p>
                    </motion.div>

                    <div className="overflow-hidden">
                        <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>My Skills</h3>

                        {/* Infinite Marquee */}
                        <div className="relative flex overflow-x-hidden group">
                            <motion.div
                                className="flex gap-4 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 20,
                                }}
                            >
                                {/* Duplicate list for seamless loop */}
                                {[...skills, ...skills, ...skills].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-6 py-3 rounded-lg text-sm border hover:border-accent hover:text-accent transition-colors duration-300 font-medium"
                                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Gradient Masks for fade effect */}
                            <div className="absolute inset-y-0 left-0 w-16 z-10" style={{ background: `linear-gradient(to right, var(--bg-primary), transparent)` }}></div>
                            <div className="absolute inset-y-0 right-0 w-16 z-10" style={{ background: `linear-gradient(to left, var(--bg-primary), transparent)` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
