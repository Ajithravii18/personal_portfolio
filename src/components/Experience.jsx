import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experienceData = [
    {
        role: 'Junior Accountant',
        company: 'Global Suzuki, Palakkad',
        duration: '2 Years',
        responsibilities: [
            'Handled daily accounts',
            'Managed billing & customer records',
            'Assisted in financial documentation & reporting'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="font-serif italic text-accent text-2xl font-normal lowercase tracking-normal block mb-2">
                        my journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 uppercase tracking-tighter text-[var(--text-primary)]">
                        Work Experience
                    </h2>
                    <div className="w-16 h-[2px] bg-accent mx-auto"></div>
                </motion.div>

                {/* Timeline Cards */}
                <div className="max-w-4xl mx-auto">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Vertical Line for Mobile */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1.5px] bg-accent/20"></div>

                            {/* Dot for Mobile */}
                            <div className="md:hidden absolute left-[-4.5px] top-7 w-2.5 h-2.5 rounded-full bg-accent"></div>

                            <div 
                                className="p-8 rounded-3xl border bg-[var(--bg-secondary)] border-black/5 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3.5 rounded-2xl bg-accent/5 text-accent group-hover:scale-105 transition-transform duration-300">
                                            <FaBriefcase size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)]">
                                                {item.role}
                                            </h3>
                                            <h4 className="text-base text-[var(--text-tertiary)] font-light">
                                                {item.company}
                                            </h4>
                                        </div>
                                    </div>
                                    <span className="inline-block md:self-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--bg-primary)] border border-black/5 dark:border-white/5 text-accent shadow-sm">
                                        {item.duration}
                                    </span>
                                </div>

                                <div className="pl-4 md:pl-6 border-l-2 border-accent/20">
                                    <ul className="space-y-3">
                                        {item.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[var(--text-secondary)] font-light">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
