import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPaintBrush, FaLayerGroup } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode />,
        title: 'Web Development',
        description: 'Building responsive and performant websites using modern technologies.'
    },
    {
        icon: <FaServer />,
        title: 'API Development',
        description: 'Designing and implementing robust RESTful and GraphQL APIs.'
    },
    {
        icon: <FaPaintBrush />,
        title: 'UI Design',
        description: 'Creating intuitive and visually appealing user interfaces.'
    },
    {
        icon: <FaLayerGroup />,
        title: 'Full-Stack Projects',
        description: 'End-to-end solution development from database to frontend.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Services = () => {
    return (
        <section id="services" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>My Services</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="p-8 rounded-2xl transition-colors duration-300 group border hover:border-accent/50"
                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                        >
                            <div className="text-4xl text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
