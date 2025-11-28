import React from 'react';
import './Facilities.css';

const Facilities = () => {
    return (
        <section id="facilities" className="section-padding facilities-section">
            <div className="container">
                <h2 className="section-title">Nuestras Instalaciones</h2>
                <p className="section-subtitle">
                    Espacios modernos y equipados para potenciar tu aprendizaje.
                </p>

                <div className="facilities-grid">
                    <div className="facility-item">
                        <div className="facility-img">
                            <img src="/electricity_workshop.png" alt="Taller de Electricidad" />
                        </div>
                        <div className="facility-info">
                            <h3>Nuevo Taller de Electricidad</h3>
                            <p>
                                Equipado con tecnología de punta para que practiques con las mismas herramientas
                                que encontrarás en el mundo laboral. Paneles de simulación, herramientas de precisión
                                y medidas de seguridad industrial.
                            </p>
                        </div>
                    </div>

                    <div className="facility-item reverse">
                        <div className="facility-img">
                            {/* Placeholder for Library if image generation failed or using generic */}
                            <div className="placeholder-img library-bg">
                                <span>Biblioteca CRA</span>
                            </div>
                        </div>
                        <div className="facility-info">
                            <h3>Biblioteca Ampliada</h3>
                            <p>
                                Un espacio tranquilo para el estudio y la investigación. Contamos con más de
                                <strong> 3,000 libros</strong>, acceso a internet y zonas de lectura cómodas
                                para apoyar tu proceso educativo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
