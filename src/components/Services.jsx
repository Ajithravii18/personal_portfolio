import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPaintBrush, FaLayerGroup } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode />,
        title: 'Web Development',
        description: 'Building responsive, fast, and interactive frontends using React and modern CSS.'
    },
    {
        icon: <FaServer />,
        title: 'Backend & APIs',
        description: 'Creating robust, secure APIs and microservices using Node.js and Express.'
    },
    {
        icon: <FaPaintBrush />,
        title: 'UI/UX Coding',
        description: 'Translating designs into pixel-perfect interfaces with smooth animations.'
    },
    {
        icon: <FaLayerGroup />,
        title: 'Full-Stack Solutions',
        description: 'End-to-end applications integrating databases, server logic, and user interfaces.'
    }
];

const floatingTags = [
    { text: 'React Apps', rotate: '-2.5deg' },
    { text: 'Node.js Backend', rotate: '3deg' },
    { text: 'REST APIs', rotate: '-1.5deg' },
    { text: 'MongoDB Schema', rotate: '4deg' },
    { text: 'Tailwind Styling', rotate: '-3deg' },
    { text: 'Framer Motion', rotate: '2.5deg' },
    { text: 'Express Servers', rotate: '-2deg' },
    { text: 'Git & GitHub', rotate: '1.5deg' },
    { text: 'Next.js Sites', rotate: '-4deg' },
    { text: 'Performance Audit', rotate: '3deg' }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-accent text-white overflow-hidden relative">
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header Section (Split Left / Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-20">
                    
                    {/* Left: Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter uppercase leading-none">
                            ALL YOUR <br />
                            <span className="font-serif italic font-normal lowercase tracking-normal text-white">
                                development needs
                            </span>
                        </h2>
                    </motion.div>

                    {/* Right: Description & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-col items-start md:items-end md:text-right"
                    >
                        <p className="text-white/80 text-lg leading-relaxed max-w-md mb-8">
                            All types of full-stack services in one place with the assurance of highest excellence, robust scalability, and premium usability.
                        </p>
                        
                        <a 
                            href="#contact" 
                            className="px-8 py-3.5 bg-white text-accent hover:bg-black hover:text-white font-semibold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg"
                        >
                            Book a Call
                        </a>
                    </motion.div>
                </div>

                {/* Services Cards (Glassmorphism design) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group"
                        >
                            <div className="text-3xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-display tracking-tight">{service.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Scattered Pill Tags (Mockup Style) */}
                <div className="pt-8 border-t border-white/10">
                    <motion.h4 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center text-xs uppercase tracking-[0.25em] mb-10 text-white/60"
                    >
                        Technologies & Capabilities
                    </motion.h4>
                    
                    <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto px-4">
                        {floatingTags.map((tag, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ 
                                    scale: 1.08, 
                                    rotate: '0deg',
                                    boxShadow: '0px 10px 20px rgba(0,0,0,0.15)'
                                }}
                                style={{ rotate: tag.rotate }}
                                className="px-6 py-3 bg-white border border-black/10 rounded-full cursor-default transition-all duration-300 shadow-sm"
                            >
                                <span className="font-serif italic text-black font-semibold text-sm md:text-base">
                                    {tag.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
