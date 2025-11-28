import React from 'react';
import { CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Admission.css';

const Admission = () => {
    return (
        <section id="admission" className="section-padding admission-section">
            <div className="container">
                <div className="admission-wrapper">
                    <div className="admission-info">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Admisión 2025</h2>
                        <p className="admission-lead">
                            ¡Matrículas Abiertas! Educación Gratuita y de Calidad.
                        </p>

                        <div className="requirements-box">
                            <h3>Requisitos de Matrícula</h3>
                            <ul className="req-list">
                                <li><CheckCircle size={20} className="check-icon" /> Fotocopia Cédula de Identidad</li>
                                <li><CheckCircle size={20} className="check-icon" /> Certificado de Nacimiento</li>
                                <li><CheckCircle size={20} className="check-icon" /> Certificado de Estudios (último curso aprobado)</li>
                            </ul>
                            <div className="note-box">
                                <strong>Nota:</strong> Para Educación Media Técnico-Profesional se requiere Licencia de Enseñanza Media.
                            </div>
                        </div>
                    </div>

                    <div className="contact-card">
                        <h3>Contáctanos</h3>
                        <p>Visítanos para realizar tu matrícula o resolver dudas.</p>

                        <ul className="contact-details">
                            <li>
                                <MapPin className="contact-icon" />
                                <div>
                                    <strong>Dirección</strong>
                                    <p>Calle Igualdad 1884, Parral</p>
                                </div>
                            </li>
                            <li>
                                <Phone className="contact-icon" />
                                <div>
                                    <strong>Teléfono</strong>
                                    <p>+56 9 1234 5678</p>
                                </div>
                            </li>
                            <li>
                                <Mail className="contact-icon" />
                                <div>
                                    <strong>Email</strong>
                                    <p>contacto@ceia-parral.cl</p>
                                </div>
                            </li>
                            <li>
                                <Clock className="contact-icon" />
                                <div>
                                    <strong>Horario de Atención</strong>
                                    <p>Lunes a Viernes: 09:00 - 18:00 hrs</p>
                                </div>
                            </li>
                        </ul>

                        <button className="btn btn-primary btn-block">Solicitar Información</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;
