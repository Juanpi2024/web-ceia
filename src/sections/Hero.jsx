import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">Nunca es tarde para aprender y crecer</h1>
                    <p className="hero-subtitle">
                        Retoma tus estudios en un ambiente cálido, inclusivo y gratuito.
                        Tu segunda oportunidad comienza hoy.
                    </p>
                    <div className="hero-buttons">
                        <a href="#admission" className="btn btn-primary">Matrículas 2025 Abiertas</a>
                        <a href="#programs" className="btn btn-outline">Ver Programas</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
