import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

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
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-[var(--text-primary)] hover:text-accent transition-colors">
                    Portfolio<span className="text-accent">.</span>
                </a>
                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-[var(--text-secondary)] hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-accent transition-all hover:scale-110"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>

                    {/* Mobile Menu Button (Simplified) */}
                    <div className="md:hidden">
                        <a href="#contact" className="text-accent font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
