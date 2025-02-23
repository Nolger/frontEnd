import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Agregamos los enlaces del dropdown directamente al array para móvil
  const mobileNavItems = [
    { id: 1, name: 'Inicio', href: '#' },
    { id: 2, name: 'Nuestro trabajo', href: '#' },
    { id: 3, name: 'Quiénes somos', href: '#' },
    { id: 4, name: 'Proyectos', href: '#' },
    { id: 5, name: 'Noticias', href: '#' },
    { id: 6, name: 'Apóyanos', href: '#' },
  ];

  // Mantenemos los dropdowns solo para desktop
  const desktopNavItems = [
    { id: 1, name: 'Inicio', href: '#' },
    { 
      id: 2, 
      name: 'Nuestro trabajo', 
      href: '#',
      dropdown: [
        { id: 'work-1', name: 'Proyectos Actuales', href: '#' },
        { id: 'work-2', name: 'Casos de Éxito', href: '#' },
        { id: 'work-3', name: 'Metodología', href: '#' },
      ]
    },
    { id: 3, name: 'Quiénes somos', href: '#' },
    { 
      id: 4, 
      name: 'Proyectos', 
      href: '#',
      dropdown: [
        { id: 'proj-1', name: 'Proyecto 2024', href: '#' },
        { id: 'proj-2', name: 'Proyecto 2023', href: '#' },
        { id: 'proj-3', name: 'Archivo', href: '#' },
      ]
    },
    { id: 5, name: 'Noticias', href: '#' },
    { id: 6, name: 'Apóyanos', href: '#' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-item-container">
          <div className="nav-logo">
            Logo
          </div>

          {/* Enlaces de navegación desktop */}
          <div className="nav-links">
            {desktopNavItems.map((item) => (
              <div key={item.id} className={`dropdown ${item.dropdown ? 'has-dropdown' : ''}`}>
                <a href={item.href} className="nav-link">
                  {item.name}
                  {item.dropdown && <ChevronDown style= {{ display : 'none' }} />}
                </a>
                
                {item.dropdown && (
                  <div className="dropdown-menu">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.id}
                        href={dropItem.href}
                        className="dropdown-item"
                      >
                        {dropItem.name}
                      </a>
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
            <a 
              key={item.id} 
              href={item.href} 
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;