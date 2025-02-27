import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';
import logo from '../assets/logo-sin-letras.png';

const Footer = () => {
  const contactInfo = [
    { icon: MapPin, text: "Calle Principal #123, Manizales, Colombia" },
    { icon: Phone, text: "+57 (123) 456-7890" },
    { icon: Mail, text: "info@fundaciondesdemiraiz.org" }
  ];

  const quickLinks = [
    { name: "Desde mi raíz", href: "#" },
    { name: "Que hacemos", href: "#" },
    { name: "Programate", href: "#" },
    { name: "Donar", href: "#" },
  ];

  const services = [
    "Consultoría",
    "Desarrollo",
    "Diseño",
    "Marketing",
    "Soporte"
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Sección Acerca de */}
          <div className="footer-section">
            <h3 className="footer-title">Fundación Desde Mi Raíz</h3>
            <p className="footer-text">
            Transformando vidas a través del arte y la cultura desde nuestras raíces.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="footer-section">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <div className="footer-links">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <item.icon size={18} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div className="footer-section logo-section">
            <img src={logo} alt="Logo Fundación Desde Mi Raíz" className="logo-footer" />
          </div>
        </div>

        {/* Barra inferior */}
        <div className="bottom-bar">
          <p>© {new Date().getFullYear()} Desde mi Raíz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;