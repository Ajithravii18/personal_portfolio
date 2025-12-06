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
        <section id="education" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Education</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex items-center justify-between mb-12 md:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                                }`}
                        >
                            {/* Spacer for desktop layout */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent border-4 border-[var(--bg-primary)] flex items-center justify-center z-10">
                                <FaGraduationCap className="text-white text-xs" />
                            </div>

                            {/* Content Card */}
                            <div className="ml-10 md:ml-0 w-full md:w-5/12">
                                <div className="p-6 rounded-xl shadow-lg border hover:border-accent transition-all duration-300 group"
                                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent mb-3">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{item.degree}</h3>
                                    <h4 className="text-md font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                                        {item.institution}
                                        {item.specialization && <span className="block text-sm opacity-80 mt-1">{item.specialization}</span>}
                                    </h4>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
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
