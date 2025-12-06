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
        <section id="experience" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Experience</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

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
                            {/* Timeline Line (Mobile only) */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700"></div>

                            {/* Timeline Dot (Mobile only) */}
                            <div className="md:hidden absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-accent"></div>

                            <div className="p-8 rounded-2xl shadow-lg border hover:border-accent transition-all duration-300 group"
                                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                                        <div className="p-3 rounded-lg bg-accent/10 text-accent">
                                            <FaBriefcase size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{item.role}</h3>
                                            <h4 className="text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>{item.company}</h4>
                                        </div>
                                    </div>
                                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[var(--bg-primary)] border border-[var(--border-color)]" style={{ color: 'var(--text-secondary)' }}>
                                        {item.duration}
                                    </span>
                                </div>

                                <div className="pl-4 border-l-2 border-accent/30">
                                    <ul className="space-y-3">
                                        {item.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-lg" style={{ color: 'var(--text-secondary)' }}>
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
