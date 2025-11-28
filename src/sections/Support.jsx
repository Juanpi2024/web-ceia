import React from 'react';
import { LifeBuoy, HeartHandshake, Users } from 'lucide-react';
import './Support.css';

const Support = () => {
    return (
        <section id="support" className="section-padding support-section">
            <div className="container">
                <div className="support-content">
                    <div className="support-text">
                        <h2 className="section-title" style={{ textAlign: 'left', color: 'white' }}>Apoyo al Estudiante</h2>
                        <p className="support-lead">
                            Entendemos tus desafíos. No estás solo en este camino.
                        </p>
                        <p className="support-desc">
                            Nuestro <strong>Programa SAT (Sistema de Alerta y Acompañamiento Temprano)</strong> está diseñado
                            para identificar y apoyar a estudiantes que enfrentan dificultades laborales, familiares o personales
                            que podrían afectar sus estudios.
                        </p>

                        <div className="support-features">
                            <div className="feature">
                                <LifeBuoy className="feature-icon" />
                                <div>
                                    <h4>Detección Temprana</h4>
                                    <p>Identificamos riesgos a tiempo para actuar rápido.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <HeartHandshake className="feature-icon" />
                                <div>
                                    <h4>Acompañamiento</h4>
                                    <p>Orientación personalizada para superar obstáculos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="support-visual">
                        <div className="quote-card">
                            <p>"El apoyo del CEIA fue fundamental para no rendirme cuando tuve problemas en mi trabajo. Hoy tengo mi título gracias a ellos."</p>
                            <span>- Ex Estudiante</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
