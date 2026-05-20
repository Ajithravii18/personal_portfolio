import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Express', 'JavaScript', 'Git', 'Redux', 'Next.js', 'Webflow', 'REST APIs', 'SQL'];

const About = () => {
    return (
        <section id="about" className="py-24 overflow-hidden bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    
                    {/* Left: About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-6 flex flex-col items-start"
                    >
                        <span className="font-serif italic text-accent text-2xl font-normal lowercase tracking-normal mb-2">
                            who i am
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 uppercase tracking-tighter text-[var(--text-primary)]">
                            About Me
                        </h2>
                        
                        <div className="space-y-4">
                            <p className="leading-relaxed text-[var(--text-secondary)] font-light text-base md:text-lg">
                                I am a passionate Full-Stack Developer with a knack for building efficient, high-performance web applications and systems. 
                                With a strong foundation in both frontend design and backend architecture, I love turning ideas into elegant, seamless code.
                            </p>
                            <p className="leading-relaxed text-[var(--text-tertiary)] font-light text-sm md:text-base">
                                Constantly learning and exploring new technologies, I focus on performance, scalability, and usability. 
                                When I'm not coding, you can find me exploring new UI/UX trends, reading up on system design, or gaming.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Skills Marquee */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="md:col-span-6 w-full overflow-hidden"
                    >
                        <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--text-tertiary)] mb-8 font-semibold">
                            Core Competency Marquee
                        </h3>

                        {/* Infinite Marquee */}
                        <div className="relative flex overflow-x-hidden group py-4">
                            <motion.div
                                className="flex gap-5 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 18,
                                }}
                            >
                                {/* Multiplied list for seamless loop */}
                                {[...skills, ...skills, ...skills].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-6 py-3 rounded-full text-base font-serif italic font-semibold border bg-[var(--bg-secondary)] border-black/5 dark:border-white/5 text-[var(--text-primary)] shadow-sm hover:border-accent hover:text-accent transition-all duration-300 cursor-default inline-block"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Gradient Masks for fade effect */}
                            <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, var(--bg-primary), transparent)` }}></div>
                            <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, var(--bg-primary), transparent)` }}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
