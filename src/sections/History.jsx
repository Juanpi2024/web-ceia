import React from 'react';
import './History.css';

const History = () => {
    return (
        <section id="history" className="section-padding history-section">
            <div className="container">
                <div className="history-grid">
                    <div className="history-image">
                        <img src="/school_building.png" alt="CEIA Juanita Zúñiga Fuentes Building" />
                        <div className="history-badge">
                            <span>Desde</span>
                            <strong>1928</strong>
                        </div>
                    </div>
                    <div className="history-content">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Nuestra Historia</h2>
                        <p className="lead-text">
                            Una tradición de servicio y educación que perdura en el tiempo.
                        </p>
                        <p>
                            El Centro Educativo Integral para Adultos (CEIA) Juanita Zúñiga Fuentes tiene sus raíces en 1928,
                            cuando nació como un centro vocacional con el noble propósito de apoyar a la comunidad.
                        </p>
                        <p>
                            Fundado gracias a la generosidad y visión de <strong>Don Antonio Rutia de Arce</strong>,
                            la institución comenzó su camino apoyando a niñas de escasos recursos, brindándoles herramientas
                            para un futuro mejor. Hoy, mantenemos vivo ese espíritu solidario, adaptándonos a los nuevos tiempos
                            para ofrecer una segunda oportunidad educativa a jóvenes y adultos de Parral y sus alrededores.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
