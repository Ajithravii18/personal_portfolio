import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: '-100%' },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: 'spring', 
                stiffness: 70, 
                damping: 15,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { 
            opacity: 0, 
            y: '-100%', 
            transition: { ease: 'easeInOut', duration: 0.4 } 
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center relative">
                    
                    {/* Logo (Left) */}
                    <a href="#home" className="text-xl md:text-2xl font-bold tracking-tighter text-[var(--text-primary)] font-display hover:text-accent transition-colors">
                        AJITH KUMAR<span className="text-accent">.</span>
                    </a>

                    {/* Theme Toggle Button (Center) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <button 
                            onClick={toggleTheme} 
                            className="px-4 py-2 md:px-5 md:py-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white rounded-full flex items-center justify-center gap-2 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 font-sans shadow-sm"
                            aria-label="Change Mode"
                        >
                            {theme === 'dark' ? <FaSun className="text-xs text-amber-400" /> : <FaMoon className="text-xs text-slate-700" />}
                            <span className="hidden md:inline">Change the Mode</span>
                        </button>
                    </div>

                    {/* Hamburger Menu Icon (Right) */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="flex flex-col gap-1.5 items-end justify-center w-8 h-8 z-50 focus:outline-none group"
                        aria-label="Toggle Menu"
                    >
                        <span className={`h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                        <span className={`h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-0.5' : 'w-4 group-hover:w-6'}`} />
                    </button>
                </div>
            </nav>

            {/* Fullscreen Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-[var(--bg-primary)] flex flex-col justify-center items-center h-screen w-full"
                    >
                        <div className="flex flex-col items-center space-y-6 md:space-y-8">
                            {links.map((link) => (
                                <motion.div key={link.name} variants={linkVariants}>
                                    <a 
                                        href={link.href} 
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl md:text-6xl font-serif italic text-[var(--text-primary)] hover:text-accent hover:pl-4 transition-all duration-300 block text-center"
                                    >
                                        {link.name}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
