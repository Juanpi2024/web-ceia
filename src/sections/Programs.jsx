import React from 'react';
import { BookOpen, Zap, Baby, GraduationCap } from 'lucide-react';
import './Programs.css';

const Programs = () => {
    return (
        <section id="programs" className="section-padding programs-section">
            <div className="container">
                <h2 className="section-title">Oferta Académica</h2>
                <p className="section-subtitle">
                    Programas flexibles diseñados para adultos que desean completar sus estudios.
                </p>

                <div className="programs-container">
                    <div className="program-category">
                        <h3><BookOpen className="inline-icon" /> Educación Regular</h3>
                        <div className="program-list">
                            <div className="program-item">
                                <h4>Educación Básica</h4>
                                <p>Nivelación de estudios básicos para adultos (1° a 8° básico).</p>
                            </div>
                            <div className="program-item">
                                <h4>Educación Media</h4>
                                <p>Completación de enseñanza media (1° a 4° medio) en jornada vespertina.</p>
                            </div>
                        </div>
                    </div>

                    <div className="program-category highlight">
                        <h3><GraduationCap className="inline-icon" /> Formación Técnica</h3>
                        <p className="category-desc">Especialidades con alta demanda laboral.</p>

                        <div className="specialties-grid">
                            <div className="specialty-card">
                                <div className="specialty-icon">
                                    <Zap size={32} />
                                </div>
                                <h4>Electricidad</h4>
                                <p>
                                    Aprende instalaciones eléctricas domiciliarias e industriales.
                                    Taller equipado con tecnología de punta.
                                </p>
                            </div>

                            <div className="specialty-card">
                                <div className="specialty-icon">
                                    <Baby size={32} />
                                </div>
                                <h4>Atención de Párvulos</h4>
                                <p>
                                    Formación para el cuidado y educación de la primera infancia.
                                    Prácticas en jardines y colegios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
