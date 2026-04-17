import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectThumb from '../assets/project_thumb.png';

const projects = [
    {
        title: 'e-Karma',
        description: 'A comprehensive full-stack application built to facilitate seamless coordination and management. Features include real-time dashboards, user and volunteer management, integrated secure payment gateways, and SOS alerts.',
        tags: ['MERN Stack', 'TailwindCSS', 'MongoDB', 'express'],
        image: projectThumb,
        demoLink: 'https://karma-frontend-jet.vercel.app/',
        frontendCode: 'https://github.com/Ajithravii18/karma-frontend',
        backendCode: 'https://github.com/Ajithravii18/karma-backend'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Here are some of the projects I've worked on. Each one was a unique challenge that helped me grow as a developer.
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                            className="rounded-xl overflow-hidden group hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 border hover:border-accent/50 w-full max-w-lg"
                            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.frontendCode && (
                                        <a href={project.frontendCode} className="p-3 bg-white text-black rounded-full hover:bg-accent transition-colors" title="Frontend Code">
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    {project.backendCode && (
                                        <a href={project.backendCode} className="p-3 bg-white text-black rounded-full hover:bg-accent transition-colors" title="Backend Code">
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    {project.codeLink && (
                                        <a href={project.codeLink} className="p-3 bg-white text-black rounded-full hover:bg-accent transition-colors" title="View Code">
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    <a href={project.demoLink} className="p-3 bg-white text-black rounded-full hover:bg-accent transition-colors" title="Live Demo">
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
