import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import './Layout.css';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Historia', href: '#history' },
        { name: 'Misión', href: '#mission' },
        { name: 'Programas', href: '#programs' },
        { name: 'Apoyo', href: '#support' },
        { name: 'Contacto', href: '#admission' },
    ];

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <div className="logo-icon">C</div>
                    <div className="logo-text">
                        <h1>CEIA</h1>
                        <p>Juanita Zúñiga Fuentes</p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href}>{link.name}</a>
                    ))}
                    <a href="#admission" className="btn-nav">Matrículas 2025</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="mobile-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#admission"
                        className="btn-nav-mobile"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Matrículas 2025
                    </a>
                </div>
            )}
        </header>
    );
};

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>CEIA Juanita Zúñiga Fuentes</h3>
                        <p>
                            Educación gratuita y de calidad para adultos. Nunca es tarde para aprender y crecer.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h3>Enlaces Rápidos</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#programs">Oferta Académica</a></li>
                            <li><a href="#admission">Admisión</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Contacto</h3>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} />
                                <span>Calle Igualdad 1884, Parral, Chile</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>+56 9 1234 5678</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>contacto@ceia-parral.cl</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} CEIA Juanita Zúñiga Fuentes. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
