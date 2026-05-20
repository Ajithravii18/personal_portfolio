import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const contactLinks = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'ajithravii28@gmail.com',
            url: 'mailto:ajithravii28@gmail.com',
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: 'github.com/Ajithravii18',
            url: 'https://github.com/Ajithravii18',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/ajithravii28',
            url: 'https://www.linkedin.com/in/ajithravii28/',
        }
    ];

    return (
        <section id="contact" className="py-24 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 max-w-5xl">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="font-serif italic text-accent text-2xl font-normal lowercase tracking-normal block mb-2">
                        get in touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 uppercase tracking-tighter text-[var(--text-primary)]">
                        Let's Connect
                    </h2>
                    <div className="w-16 h-[2px] bg-accent mx-auto mb-6"></div>
                    <p className="text-base md:text-lg text-[var(--text-secondary)] font-light">
                        Reach out and let's discuss your next amazing project.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8 justify-center">
                    {contactLinks.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <motion.a
                                key={index}
                                href={contact.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="group"
                            >
                                <div 
                                    className="p-8 rounded-[2rem] border bg-[var(--bg-secondary)] border-black/5 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center space-y-5"
                                >
                                    {/* Icon Container */}
                                    <motion.div
                                        className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center bg-accent text-white group-hover:scale-105 shadow-md shadow-accent/10 transition-transform duration-300"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <Icon className="text-2xl" />
                                    </motion.div>
                                    
                                    <div>
                                        <h3 className="text-lg md:text-xl font-display font-bold text-[var(--text-primary)] mb-2">
                                            {contact.label}
                                        </h3>
                                        <p className="text-sm break-all text-[var(--text-secondary)] font-light leading-relaxed">
                                            {contact.value}
                                        </p>
                                    </div>

                                    {/* Hover bar */}
                                    <div className="w-10 h-0.5 bg-accent/20 group-hover:w-20 group-hover:bg-accent transition-all duration-300"></div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-20"
                >
                    <p className="text-xs md:text-sm text-[var(--text-tertiary)] uppercase tracking-wider font-light">
                        Always open for collaborations, freelance work, and learning opportunities.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
