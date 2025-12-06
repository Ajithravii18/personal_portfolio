import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectThumb from '../assets/project_thumb.png';

const projects = [
    {
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order tracking.',
        tags: ['React', 'TailwindCSS', 'Chart.js', 'Node.js'],
        image: projectThumb,
        demoLink: '#',
        codeLink: '#'
    },
    {
        title: 'Social Media App',
        description: 'A fully functional social media platform with real-time messaging, post sharing, and user authentication.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
        image: projectThumb,
        demoLink: '#',
        codeLink: '#'
    },
    {
        title: 'Task Management Tool',
        description: 'A collaborative task management application with drag-and-drop kanban boards and team collaboration features.',
        tags: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind'],
        image: projectThumb,
        demoLink: '#',
        codeLink: '#'
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                            className="rounded-xl overflow-hidden group hover:shadow-[0_0_20px_rgba(255,145,0,0.15)] transition-all duration-300 border hover:border-accent/50"
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
                                    <a href={project.codeLink} className="p-3 bg-white text-black rounded-full hover:bg-accent transition-colors" title="View Code">
                                        <FaGithub size={20} />
                                    </a>
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
