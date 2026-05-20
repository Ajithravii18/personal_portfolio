import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
    {
        degree: 'BSc Mathematics',
        institution: 'University of Calicut',
        year: '2020 Pass Out',
        description: 'Graduated with a focus on mathematical principles and analytical thinking.'
    },
    {
        degree: 'Higher Secondary',
        institution: 'Puliyaparamb HSS',
        year: '2017 Pass Out',
        specialization: 'Computer Science',
        description: 'Completed higher secondary education with a specialization in Computer Science.'
    },
    {
        degree: 'SSLC',
        institution: 'CFG VHSS Mathur',
        year: '2015 Pass Out',
        description: 'Completed secondary school education with excellent academic performance.'
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 bg-[var(--bg-primary)]">
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
                        learning timeline
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 uppercase tracking-tighter text-[var(--text-primary)]">
                        Education History
                    </h2>
                    <div className="w-16 h-[2px] bg-accent mx-auto"></div>
                </motion.div>

                {/* Timeline container */}
                <div className="max-w-3xl mx-auto relative">
                    
                    {/* Vertical Center Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1.5px] bg-accent/20"></div>

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative flex items-center justify-between mb-12 md:mb-16 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                            }`}
                        >
                            {/* Spacer for desktop layout */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Timeline Dot (Graduation Cap) */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-accent border-4 border-[var(--bg-primary)] flex items-center justify-center z-10 shadow-md">
                                <FaGraduationCap className="text-white text-xs" />
                            </div>

                            {/* Content Card */}
                            <div className="ml-10 md:ml-0 w-full md:w-5/12">
                                <div 
                                    className="p-8 rounded-3xl border bg-[var(--bg-secondary)] border-black/5 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 group"
                                >
                                    <span className="inline-block px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent/5 text-accent mb-4 border border-accent/10">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-1">
                                        {item.degree}
                                    </h3>
                                    <h4 className="text-sm font-semibold text-[var(--text-tertiary)] mb-4 font-sans">
                                        {item.institution}
                                        {item.specialization && (
                                            <span className="block text-xs text-accent mt-1 font-medium italic font-serif lowercase tracking-normal">
                                                Specialization: {item.specialization}
                                            </span>
                                        )}
                                    </h4>
                                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
