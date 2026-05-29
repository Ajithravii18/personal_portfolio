import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)]"
        >
            <div className="flex flex-col items-center">
                {/* Loader Spinner matching the Hero's accent branding */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        borderRadius: ["20%", "50%", "20%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity
                    }}
                    className="w-16 h-16 border-4 border-accent border-t-transparent shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] mb-8"
                />
                
                {/* Text styling consistent with Hero's typography */}
                <motion.h2
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-sm font-display font-bold tracking-[0.3em] text-[var(--text-primary)] uppercase"
                >
                    Loading
                </motion.h2>
            </div>
            
            {/* Background subtle glow effect to match Hero's depth */}
            <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-accent/5 filter blur-[100px] pointer-events-none"></div>
        </motion.div>
    );
};

export default Preloader;
