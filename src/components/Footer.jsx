import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const contactInfo = [
    { icon: MapPin, text: "123 Calle Principal, Ciudad" },
    { icon: Phone, text: "+1 234 567 890" },
    { icon: Mail, text: "contacto@tuempresa.com" }
  ];

  const quickLinks = [
    { name: "Inicio", href: "#" },
    { name: "Nuestro trabajo", href: "#" },
    { name: "Quiénes somos", href: "#" },
    { name: "PROYECTOS", href: "#" },
    { name: "Noticias", href: "#" },
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
            <h3 className="footer-title">Acerca de Nosotros</h3>
            <p className="footer-text">
              Somos una empresa comprometida con la excelencia y la innovación. 
              Trabajamos para crear soluciones que impacten positivamente en la sociedad.
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

          {/* Servicios */}
          <div className="footer-section">
            <h3 className="footer-title">Nuestros Servicios</h3>
            <div className="footer-links">
              {services.map((service, index) => (
                <span key={index} className="footer-link">
                  {service}
                </span>
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
        </div>

        {/* Barra inferior */}
        <div className="bottom-bar">
          <p>© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;