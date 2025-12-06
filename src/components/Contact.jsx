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
            color: '#3b82f6'
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: 'github.com/Ajithravii18',
            url: 'https://github.com/Ajithravii18',
            color: '#10b981'
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/ajithravii28',
            url: 'https://www.linkedin.com/in/ajithravii28/',
            color: '#06b6d4'
        }
    ];

    return (
        <section id="contact" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Let's Connect</h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>Reach out and let's discuss your next amazing project</p>
                </motion.div>

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
                                whileHover={{ y: -10, scale: 1.05 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group"
                            >
                                <div 
                                    className="p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl"
                                    style={{ 
                                        backgroundColor: `${contact.color}15`,
                                        borderColor: contact.color,
                                        borderWidth: '2px'
                                    }}
                                >
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <motion.div
                                            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
                                            style={{ 
                                                backgroundColor: contact.color,
                                                color: 'white'
                                            }}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Icon className="text-2xl" />
                                        </motion.div>
                                        
                                        <div>
                                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                                {contact.label}
                                            </h3>
                                            <p className="text-sm break-all" style={{ color: 'var(--text-secondary)' }}>
                                                {contact.value}
                                            </p>
                                        </div>

                                        <motion.div
                                            className="w-0 h-1 transition-all duration-300"
                                            style={{ backgroundColor: contact.color }}
                                            whileHover={{ width: '100%' }}
                                        />
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Feel free to reach out through any of the channels above. I'm always excited to collaborate!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
