import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectThumb from '../assets/project_thumb.png';

const projects = [
    {
        title: 'e-Karma',
        description: 'A comprehensive full-stack application built to facilitate seamless coordination and management. Features include real-time dashboards, user and volunteer management, integrated secure payment gateways, and SOS alerts.',
        tags: ['MERN Stack', 'TailwindCSS', 'MongoDB', 'Express'],
        image: projectThumb,
        demoLink: 'https://karma-frontend-jet.vercel.app/',
        frontendCode: 'https://github.com/Ajithravii18/karma-frontend',
        backendCode: 'https://github.com/Ajithravii18/karma-backend'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[var(--bg-secondary)]">
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
                        featured work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 uppercase tracking-tighter text-[var(--text-primary)]">
                        My Projects
                    </h2>
                    <div className="w-16 h-[2px] bg-accent mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-[var(--text-tertiary)] font-light">
                        Here is one of the projects I've worked on. It was a unique full-stack challenge that helped me integrate real-time tracking, volunteer coordination, and secure transactions.
                    </p>
                </motion.div>

                {/* Projects Display */}
                <div className="flex justify-center">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="rounded-[2.5rem] overflow-hidden bg-[var(--bg-primary)] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all duration-500 w-full max-w-2xl group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-64 md:h-80 w-full bg-[var(--bg-secondary)]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />
                                
                                {/* Overlay Actions */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                                    {project.frontendCode && (
                                        <a 
                                            href={project.frontendCode} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-4 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors duration-300 shadow-md" 
                                            title="Frontend Code"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    {project.backendCode && (
                                        <a 
                                            href={project.backendCode} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-4 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors duration-300 shadow-md" 
                                            title="Backend Code"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    <a 
                                        href={project.demoLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-4 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors duration-300 shadow-md" 
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Content Block */}
                            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-[var(--text-primary)] group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)] font-light mb-8">
                                        {project.description}
                                    </p>
                                </div>
                                
                                {/* Tech Tags styled as mock-up pills */}
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag, i) => (
                                        <span 
                                            key={i} 
                                            className="text-xs font-serif italic font-semibold px-4.5 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-[var(--bg-secondary)] text-accent shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
