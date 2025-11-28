import React from 'react';
import { Heart, Briefcase, Users, Lightbulb } from 'lucide-react';
import './Mission.css';

const Mission = () => {
    return (
        <section id="mission" className="section-padding mission-section">
            <div className="container">
                <h2 className="section-title">Misión y Visión</h2>
                <p className="section-subtitle">
                    Nuestros sellos educativos guían nuestro compromiso con tu desarrollo integral.
                </p>

                <div className="mission-grid">
                    <div className="mission-card">
                        <div className="icon-wrapper life">
                            <Heart size={40} />
                        </div>
                        <h3>Formación para la Vida</h3>
                        <p>
                            Fomentamos valores esenciales como la responsabilidad, la solidaridad y el respeto por la diversidad.
                            Preparamos a nuestros estudiantes para adaptarse a los cambios y ser ciudadanos activos y conscientes.
                        </p>
                        <ul className="values-list">
                            <li><Users size={16} /> Solidaridad y Respeto</li>
                            <li><Lightbulb size={16} /> Adaptabilidad</li>
                        </ul>
                    </div>

                    <div className="mission-card">
                        <div className="icon-wrapper work">
                            <Briefcase size={40} />
                        </div>
                        <h3>Formación para el Trabajo</h3>
                        <p>
                            Nos enfocamos en dotar a nuestros estudiantes de competencias técnicas prácticas y relevantes
                            para acceder al mercado laboral con eficiencia y profesionalismo.
                        </p>
                        <ul className="values-list">
                            <li><Briefcase size={16} /> Competencias Técnicas</li>
                            <li><Users size={16} /> Eficiencia Laboral</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
