import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
