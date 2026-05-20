import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import profilePic from '../assets/profile_pic.png';
import resume from '../assets/resume.pdf';

const Hero = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000, active: false });

    // 3D Portrait Card Tilt values
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);

    // Smooth spring physics for natural-feeling 3D rotation
    const rotateX = useSpring(useTransform(cardY, [-0.5, 0.5], [15, -15]), { stiffness: 220, damping: 25 });
    const rotateY = useSpring(useTransform(cardX, [-0.5, 0.5], [-15, 15]), { stiffness: 220, damping: 25 });

    // Parallax scrolling setup for background elements
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
    const y3 = useTransform(scrollY, [0, 1000], [0, -200]);
    const y4 = useTransform(scrollY, [0, 1000], [0, 120]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const mouseRadius = 180;

        // Wave Configurations (Three overlapping fluid wave layers)
        const waveConfig = [
            {
                centerYOffset: 0.65, // Positioned at 65% height
                amplitude: 45,
                frequency: 0.003,
                speed: 0.012,
                colorStart: 'rgba(27, 67, 242, 0.12)', // Electric Blue
                colorEnd: 'rgba(27, 67, 242, 0.01)',
                phase: 0,
                points: []
            },
            {
                centerYOffset: 0.70, // Slightly lower
                amplitude: 35,
                frequency: 0.005,
                speed: -0.008,
                colorStart: 'rgba(66, 184, 131, 0.10)', // Vue Green
                colorEnd: 'rgba(66, 184, 131, 0.01)',
                phase: Math.PI / 3,
                points: []
            },
            {
                centerYOffset: 0.75, // Bottom layer
                amplitude: 25,
                frequency: 0.007,
                speed: 0.015,
                colorStart: 'rgba(147, 51, 234, 0.08)', // Purple
                colorEnd: 'rgba(147, 51, 234, 0.01)',
                phase: Math.PI / 1.5,
                points: []
            }
        ];

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initWavePoints();
        };

        const initWavePoints = () => {
            const segmentWidth = 12; // Distance between wave joints
            const pointsCount = Math.ceil(canvas.width / segmentWidth) + 1;

            waveConfig.forEach(wave => {
                wave.points = [];
                const centerY = canvas.height * wave.centerYOffset;
                for (let i = 0; i < pointsCount; i++) {
                    wave.points.push({
                        x: i * segmentWidth,
                        currentY: centerY,
                        targetY: centerY
                    });
                }
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            waveConfig.forEach(wave => {
                wave.phase += wave.speed;
                const centerY = canvas.height * wave.centerYOffset;

                // 1. Calculate new coordinates and apply mouse physics
                wave.points.forEach(pt => {
                    const baseWaveY = centerY + Math.sin(pt.x * wave.frequency + wave.phase) * wave.amplitude;
                    let displacement = 0;

                    if (mouseRef.current.active) {
                        const dx = mouseRef.current.x - pt.x;
                        const dy = mouseRef.current.y - baseWaveY;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < mouseRadius) {
                            const force = (mouseRadius - dist) / mouseRadius;
                            displacement = (dy > 0 ? 1 : -1) * Math.sin(force * Math.PI / 2) * 85;
                        }
                    }

                    pt.targetY = baseWaveY + displacement;
                    pt.currentY += (pt.targetY - pt.currentY) * 0.09;
                });

                // 2. Draw Wave curves
                ctx.beginPath();
                ctx.moveTo(0, canvas.height);
                ctx.lineTo(0, wave.points[0].currentY);

                for (let i = 1; i < wave.points.length; i++) {
                    const prevPt = wave.points[i - 1];
                    const currPt = wave.points[i];
                    const xc = (prevPt.x + currPt.x) / 2;
                    const yc = (prevPt.currentY + prevPt.currentY) / 2;
                    ctx.quadraticCurveTo(prevPt.x, prevPt.currentY, xc, yc);
                }

                ctx.lineTo(canvas.width, wave.points[wave.points.length - 1].currentY);
                ctx.lineTo(canvas.width, canvas.height);
                ctx.closePath();

                // 3. Fill wave area with gradient
                const grad = ctx.createLinearGradient(0, centerY - wave.amplitude - 80, 0, canvas.height);
                grad.addColorStop(0, wave.colorStart);
                grad.addColorStop(1, wave.colorEnd);
                ctx.fillStyle = grad;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    // Track mouse events for wave displacements
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        mouseRef.current = { x, y, active: true };
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseLeave = () => {
        mouseRef.current = { x: -1000, y: -1000, active: false };
    };

    // Track mouse movements relative to portrait card for 3D tilt
    const handleCardMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = (e.clientX - rect.left) / width - 0.5;
        const mouseY = (e.clientY - rect.top) / height - 0.5;
        
        cardX.set(mouseX);
        cardY.set(mouseY);
    };

    const handleCardMouseLeave = () => {
        cardX.set(0);
        cardY.set(0);
    };

    const floatingItems = [
        {
            // React Icon
            icon: (
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12 text-[#61dafb]/20 dark:text-[#61dafb]/10 stroke-current fill-none stroke-[0.8] drop-shadow-[0_0_8px_rgba(97,218,251,0.2)]">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" className="opacity-50" />
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </svg>
            ),
            left: "8%",
            top: "18%",
            yTransform: y1,
            animate: { y: [0, -15, 0], rotate: [0, 360] },
            duration: 20
        },
        {
            // Vue.js Icon
            icon: (
                <svg viewBox="0 0 256 221" className="w-14 h-14 text-[#42b883]/20 dark:text-[#42b883]/10 fill-current drop-shadow-[0_0_8px_rgba(66,184,131,0.2)]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M204.8 0H256L128 220.8L0 0h51.2L128 132.4L204.8 0z" />
                    <path d="M0 0h51.2L128 132.4L204.8 0h51.2L128 220.8L0 0z" fill="currentColor" className="opacity-40" />
                    <path d="M51.2 0H87l41 71 41-71h35.8L128 132.4L51.2 0z" fill="currentColor" />
                </svg>
            ),
            left: "82%",
            top: "22%",
            yTransform: y2,
            animate: { y: [0, 20, 0], rotate: [0, -360] },
            duration: 22
        },
        {
            // JavaScript Icon
            icon: (
                <svg viewBox="0 0 630 630" className="w-10 h-10 text-[#f7df1e]/20 dark:text-[#f7df1e]/10 fill-current drop-shadow-[0_0_8px_rgba(247,223,30,0.15)]" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 0h630v630h-630z" fill="currentColor" />
                    <path d="m362.07 371.75c0 45.51 23.63 76 68.61 76 34.69 0 54.34-16.14 54.34-47.28 0-77.58-109.91-81.53-109.91-170.83 0-51.23 37.1-92.42 98.71-92.42 52.81 0 88 25.61 93.92 63.53l-45.38 27.24c-5.93-27.24-24.87-43.25-48.54-43.25-27.24 0-46.73 15.3-46.73 43.63 0 71.26 109.92 73.24 109.92 168.07 0 62.29-45 99.12-106 99.12-66.27 0-104.34-35.1-111.75-81.53zm-192.17-10.74c0 35.1 19.3 54.83 45.45 54.83 26.63 0 45.45-19.73 45.45-54.83v-176.43h48.33v177.29c0 63.78-38.31 99.78-93.78 99.78-53.94 0-93.79-34.69-93.79-99.78v-177.29h48.34z" fill="var(--bg-primary)" />
                </svg>
            ),
            left: "12%",
            top: "70%",
            yTransform: y3,
            animate: { y: [0, -25, 0], scale: [1, 1.05, 1] },
            duration: 18
        },
        {
            // Node.js Icon
            icon: (
                <svg viewBox="0 0 256 288" className="w-12 h-12 text-[#339933]/20 dark:text-[#339933]/10 fill-current drop-shadow-[0_0_8px_rgba(51,153,51,0.15)]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128 0L24.8 59.6v119.2L128 238l103.2-59.2V59.6L128 0zm-15.6 195.4l-53.2-30.6v-61.2l53.2 30.6v61.2zm15.6-70.2L74.8 94.6l53.2-30.6 53.2 30.6-53.2 30.6zm68.8 39.6l-53.2 30.6v-61.2l53.2-30.6v61.2z" />
                </svg>
            ),
            left: "78%",
            top: "72%",
            yTransform: y4,
            animate: { y: [0, 15, 0], rotate: [0, 180, 0] },
            duration: 25
        }
    ];

    return (
        <section 
            id="home" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 bg-[var(--bg-primary)]"
        >
            
            {/* Interactive Color Wave Radial Gradient */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(750px_circle_at_var(--mouse-x,-1000px)_var(--mouse-y,-1000px),rgba(27,67,242,0.06),transparent_80%)] dark:bg-[radial-gradient(750px_circle_at_var(--mouse-x,-1000px)_var(--mouse-y,-1000px),rgba(27,67,242,0.12),transparent_80%)] transition-opacity duration-500" />
            
            {/* Interactive Sine Wave Liquid Ocean System */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80" />

            {/* Blurred background glowing shapes */}
            <div className="absolute top-[15%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-accent/4 filter blur-[120px] pointer-events-none z-0 dark:bg-accent/8"></div>
            <div className="absolute bottom-[15%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-[#42b883]/4 filter blur-[100px] pointer-events-none z-0 dark:bg-[#42b883]/8"></div>

            {/* Parallax Floating Tech Items */}
            {floatingItems.map((item, index) => (
                <motion.div
                    key={index}
                    style={{ 
                        position: 'absolute', 
                        left: item.left, 
                        top: item.top, 
                        y: item.yTransform,
                        zIndex: 1 
                    }}
                    animate={item.animate}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="hidden lg:block select-none pointer-events-none"
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* Top Text Grid */}
            <div className="w-full max-w-6xl mx-auto px-8 md:px-12 relative z-10 text-center select-none pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <h1 className="flex flex-col items-center mb-6 leading-none">
                        <span className="font-serif italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-[var(--text-primary)] tracking-normal mb-1">
                            I'm full-stack
                        </span>
                        <span className="font-display font-extrabold text-[10.5vw] xs:text-5xl sm:text-7xl md:text-[8vw] lg:text-[7.5rem] xl:text-[8.5rem] tracking-tighter text-accent uppercase select-none mt-2">
                            DEVELOPER
                        </span>
                    </h1>
                </motion.div>
            </div>

            {/* Main Center Content */}
            <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center mt-6 relative z-10">
                
                {/* Left Description */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:col-span-4 order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <span className="block w-10 h-[1.5px] bg-[var(--text-primary)] mb-4"></span>
                    <p className="font-display font-bold text-xs tracking-wider uppercase leading-relaxed text-[var(--text-primary)] max-w-xs">
                        Specialized in building full-stack applications, react interfaces, robust api architectures, and optimized databases.
                    </p>
                </motion.div>

                {/* Portrait (3D Interactive Tilt Card) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="md:col-span-4 order-1 md:order-2 flex justify-center relative select-none"
                >
                    <div 
                        className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[25rem] z-20 flex flex-col items-center cursor-pointer"
                        onMouseMove={handleCardMouseMove}
                        onMouseLeave={handleCardMouseLeave}
                        style={{ perspective: 1000 }}
                    >
                        {/* 3D Parallax Tilt container */}
                        <motion.div
                            style={{ 
                                rotateX, 
                                rotateY, 
                                transformStyle: 'preserve-3d',
                                width: '100%',
                                height: '100%'
                            }}
                            className="relative w-full h-full"
                        >
                            {/* Depth Layer 1: Floating background 3D glass orb */}
                            <div 
                                className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-accent to-[#42b883] opacity-35 filter blur-sm pointer-events-none"
                                style={{ transform: 'translateZ(-40px)' }}
                            />

                            {/* Depth Layer 2: Outline 3D Frame */}
                            <div 
                                className="absolute inset-0 rounded-[2.5rem] border border-black/10 dark:border-white/10 shadow-2xl bg-[var(--bg-secondary)]/30 dark:bg-[var(--bg-secondary)]/10 backdrop-blur-[2px] pointer-events-none"
                                style={{ transform: 'translateZ(0px)' }}
                            />

                            {/* Depth Layer 3: Main transparent portrait popping out */}
                            <div 
                                className="absolute inset-0 w-full h-full overflow-visible flex items-center justify-center pointer-events-none"
                                style={{ transform: 'translateZ(30px)' }}
                            >
                                <img 
                                    src={profilePic} 
                                    alt="Ajith Kumar" 
                                    className="w-[105%] h-[105%] object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_15px_20px_rgba(27,67,242,0.15)] transition-all duration-500" 
                                />
                            </div>

                            {/* Depth Layer 4: Floating foreground glass sphere */}
                            <div 
                                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-tr from-white/30 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-lg pointer-events-none flex items-center justify-center"
                                style={{ transform: 'translateZ(60px)' }}
                            >
                                <div className="w-10 h-10 rounded-full bg-accent/20 filter blur-xs animate-pulse"></div>
                            </div>
                        </motion.div>

                        {/* Let's Chat Button (remains pinned outside the tilt plane for clean UX) */}
                        <a 
                            href="#contact" 
                            className="absolute -bottom-6 px-10 py-3.5 bg-accent hover:bg-black dark:hover:bg-white text-white dark:hover:text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full transition-colors duration-300 shadow-xl z-30 animate-pulse hover:animate-none"
                        >
                            Let's Chat
                        </a>
                    </div>
                </motion.div>

                {/* Right Description */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:col-span-4 order-3 text-center md:text-right flex flex-col items-center md:items-end justify-center"
                >
                    <p className="text-sm leading-relaxed text-[var(--text-tertiary)] font-light max-w-xs">
                        Crafting high-quality, conversion-focused applications with optimized backend infrastructure and clean, modular interfaces.
                    </p>
                    <a 
                        href={resume} 
                        download="Ajith_Kumar_Resume.pdf" 
                        className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-accent border-b border-accent hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300 pb-1"
                    >
                        Download Resume &rarr;
                    </a>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
