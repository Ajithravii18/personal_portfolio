import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile_pic.jpg';
import heroBg from '../assets/hero_bg.png';
import resume from '../assets/resume.pdf';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-primary))' }}></div>
            </div>

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-accent font-medium tracking-wide mb-4">HELLO, I'M</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
                        Ajith Kumar <br />
                        <span className="text-3xl md:text-5xl" style={{ color: 'var(--text-secondary)' }}>Full-Stack Developer</span>
                    </h1>

                    <div className="mb-8">
                        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                            Developer • Designer • Freelancer • Learner
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a href="#contact" className="px-8 py-3 bg-accent text-black font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,145,0,0.3)]">
                            Contact Me
                        </a>
                        <a href={resume} download="Ajith_Kumar_Resume.pdf" className="px-8 py-3 border font-bold rounded-full hover:border-accent hover:text-accent transition-colors duration-300" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                            My Resume
                        </a>
                    </div>
                </motion.div>

                {/* Profile Picture with Ripple Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                        {/* Ripple Circles */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute border border-accent rounded-full opacity-0"
                                initial={{ width: "100%", height: "100%", opacity: 0.8 }}
                                animate={{
                                    width: ["100%", "150%"],
                                    height: ["100%", "150%"],
                                    opacity: [0.5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.6,
                                    ease: "easeOut",
                                }}
                            />
                        ))}

                        {/* Profile Image Container */}
                        <div className="relative w-full h-full rounded-full border-4 border-accent/20 p-2 z-10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                            <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
