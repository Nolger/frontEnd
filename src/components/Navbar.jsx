import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo-sin-letras.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Agregamos los enlaces del dropdown directamente al array para móvil
  const mobileNavItems = [
    { id: 1, name: 'Inicio', href: '/' },
    { id: 2, name: 'Desde mi raíz', href: '/about' },
    { id: 3, name: 'Que hacemos', href: '/what-we-do' },
    { id: 4, name: 'Programate', href: '/programs' },
  ];

  // Mantenemos los dropdowns solo para desktop
  const desktopNavItems = [
    { id: 1, 
      name: 'Inicio', 
      href: '/',
    },
    { 
      id: 2, 
      name: 'Desde mi raíz', 
      href: '/about',
      dropdown: [
        { id: 'about-1', name: 'Misión y Visión', href: '/about#mission' },
        { id: 'about-2', name: 'Valores', href: '/about#values' },
        { id: 'about-3', name: 'Fundador', href: '/about#founder' },
      ]
    },
    { 
      id: 3, 
      name: 'Que hacemos', 
      href: '/what-we-do',
      dropdown: [
        { id: 'work-1', name: 'Raices que conectan', href: '#' },
        { id: 'work-2', name: 'Casos de Éxito', href: '#' },
        { id: 'work-3', name: 'Publicaciones', href: '#' },
      ]
    },
    { 
      id: 4, 
      name: 'Programate', 
      href: '/programs',
      dropdown: [
        { id: 'proj-1', name: 'Proyecto 2024', href: '#' },
        { id: 'proj-2', name: 'Proyecto 2023', href: '#' },
        { id: 'proj-3', name: 'Archivo', href: '#' },
      ]
    },
    { id: 5, name: 'Donar', href: '#' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-item-container">
          <div className="nav-logo-container">
            <img src={logo} alt="logo" className='logo-navbar'/>
            <p></p>
          </div>

          {/* Enlaces de navegación desktop */}
          <div className="nav-links">
            {desktopNavItems.map((item) => (
              <div key={item.id} className={`dropdown ${item.dropdown ? 'has-dropdown' : ''}`}>
                <Link to={item.href} className="nav-link">
                  {item.name}
                  {item.dropdown && <ChevronDown style= {{ display : 'none' }} />}
                </Link>
                
                {item.dropdown && (
                  <div className="dropdown-menu">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.id}
                        to={dropItem.href}
                        className="dropdown-item"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón móvil */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="" />
            ) : (
              <Menu className="" />
            )}
          </button>
        </div>

        {/* Menú móvil simplificado */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          {mobileNavItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.href} 
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;