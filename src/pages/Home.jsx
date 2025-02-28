import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Home.css';

// Images de pruebas para el hero section
import img1 from '../assets/imagenesPrueba/img1.jpeg';
import img2 from '../assets/imagenesPrueba/img2.jpeg';
import img3 from '../assets/imagenesPrueba/img3.jpeg';
import img4 from '../assets/imagenesPrueba/img4.jpg';
import img5 from '../assets/imagenesPrueba/img5.jpg';
import img6 from '../assets/imagenesPrueba/img6.jpg';

// Logo de pruebas para el alliances section
import logo1 from '../assets/LogosPruebas/Cocacola.jpg';
import logo2 from '../assets/LogosPruebas/Redbull.jpg';
import logo3 from '../assets/LogosPruebas/Nesquik.jpg';
import logo4 from '../assets/LogosPruebas/Amazon.jpg';
import logo5 from '../assets/LogosPruebas/Universidad.jpg';

// Imagenes de pruebas para el team section
import teamMember1 from '../assets/teamMember/gary.jpg';
import teamMember2 from '../assets/teamMember/romelo.jpg';
import teamMember3 from '../assets/teamMember/vitaly.jpg';

const noticias = [
  {
    id: 1,
    fecha: "Jueves, 20 Febrero, 2025",
    titulo: "Justicia social para un mundo más equitativo",
    descripcion: "Día Mundial de la Justicia social, 20 de febrero de 2025.",
    imagen: img1,
    url: "/noticias/1"
  },
  {
    id: 2,
    fecha: "Martes, 18 Febrero, 2025",
    titulo: "La prosperidad compartida, clave para una sociedad más justa y solidaria",
    descripcion: "Según la encuesta elaborada por Manos Unidas.",
    imagen: img2,
    url: "/noticias/2"
  },
  {
    id: 3,
    fecha: "Miércoles, 12 Febrero, 2025",
    titulo: "Con la mirada puesta en quienes claman por una vida más digna",
    descripcion: "Homilía de Mons. Álvarez en la Jornada Nacional de Manos Unidas.",
    imagen: img3,
    url: "/noticias/3"
  },
  {
    id: 4,
    fecha: "Lunes, 10 Febrero, 2025",
    titulo: "La minería y el cuidado de la Casa Común",
    descripcion: "Manos Unidas acogió un coloquio sobre la minería en América Latina.",
    imagen: img4,
    url: "/noticias/4"
  }
];

const teamMembers = [
  {
    id: 1,
    name: "María Pérez",
    position: "Directora Ejecutiva",
    image: teamMember1,
    description: "María lidera nuestra organización con más de 20 años de experiencia en el sector social."
  },
  {
    id: 2,
    name: "Juan López",
    position: "Coordinador de Proyectos",
    image: teamMember2,
    description: "Juan es responsable de la planificación y ejecución de nuestros proyectos comunitarios."
  },
  {
    id: 3,
    name: "Karla García",
    position: "Comunicadora",
    image: teamMember3,
    description: "Karla maneja nuestras comunicaciones y relaciones públicas, asegurando que nuestra voz sea escuchada."
  }
];

function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <OurTeam />
      <StrategicAlliances />
      <EndSection />
    </>
  );
} 

function HeroSection (){
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const slides = [
        {
          image: img1,
          title: "Fortaleciendo nuestras raíces, construyendo nuestro futuro",
          description:
            "Trabajamos junto a comunidades indígenas para preservar su cultura y mejorar su calidad de vida con proyectos sostenibles.",
          buttonText: "CONOCE NUESTRA MISIÓN",
        },
        {
          image: img2,
          title: "Educación para el cambio",
          description:
            "Impulsamos programas educativos que promueven el conocimiento ancestral y el desarrollo profesional de los jóvenes indígenas.",
          buttonText: "DESCUBRE NUESTROS PROYECTOS",
        },
        {
          image: img3,
          title: "Soberanía alimentaria y desarrollo sostenible",
          description:
            "Apoyamos a las comunidades en la producción de alimentos saludables, respetando la tierra y sus tradiciones.",
          buttonText: "APOYA NUESTRA CAUSA",
        },
        {
          image: img4,
          title: "Salud y bienestar para todos",
          description:
            "Facilitamos el acceso a servicios médicos y promovemos la medicina tradicional indígena para un bienestar integral.",
          buttonText: "ÚNETE A NUESTRA INICIATIVA",
        },
        {
          image: img5,
          title: "Voces que inspiran",
          description:
            "Damos espacio a líderes indígenas para compartir su historia y defender sus derechos en el ámbito nacional e internacional.",
          buttonText: "ESCUCHA SUS HISTORIAS",
        },
        {
          image: img6,
          title: "Conservación de nuestra Madre Tierra",
          description:
            "Protegemos los ecosistemas donde habitan las comunidades indígenas, promoviendo el respeto y el equilibrio con la naturaleza.",
          buttonText: "PARTICIPA EN NUESTRAS ACCIONES",
        },
    ];
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      
      return () => clearInterval(timer);
    }, [currentSlide]);
  
    return (
      <div className="hero-section">
        {/* Hero Background */}
        <div className="hero-background">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${currentSlide === index ? "active" : ""}`}
            >
              <img src={slide.image} alt="Hero background" className="hero-image" />
              <div className="hero-overlay" />
            </div>
          ))}
        </div>
  
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <p className="hero-description">{slides[currentSlide].description}</p>
          <button className="hero-button">{slides[currentSlide].buttonText}</button>
        </div>
  
        {/* Navigation Dots */}
        <div className="hero-navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`hero-dot ${currentSlide === index ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
};

function NewsSection (){
  return (
    <div className="news-section">
      <h1 className="news-tittle">
        Noticias Recientes
      </h1>
      
      <div className="noticias-container">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="noticia-card">
            <a href={noticia.url} className="noticia-link">
              <img 
                src={noticia.imagen} 
                alt={noticia.titulo}
                className="noticia-imagen"
              />
              
              <div className="noticia-contenido">
                <p className="noticia-fecha">
                  {noticia.fecha}
                </p>
                <h2 className="noticia-titulo">
                  {noticia.titulo}
                </h2>
                <p className="noticia-descripcion">
                  {noticia.descripcion}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      <div className="ver-mas-container">
        <a 
          href="/noticias"
          className="ver-mas-boton"
        >
          VER MÁS
        </a>
      </div>
    </div>
  );
}

function OurTeam() {

  return (
    <section className="our-team-section">
      <h2 className="our-team-title">Nuestro Equipo</h2>
      
      <div className="team-container">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member-card">
            <img 
              src={member.image} 
              alt={member.name}
              className="team-member-image"
            />
            <div className="team-member-info">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-position">{member.position}</p>
              <p className="team-member-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StrategicAlliances (){
    const alliances = [
      {
        id: 1,
        icon: logo1,
        title: "Coca Cola"
      },
      {
        id: 2,
        icon: logo2,
        title: "Red Bull"
      },
      {
        id: 3,
        icon: logo3,
        title: "Nesquik"
      },
      {
        id: 4,
        icon: logo4,
        title: "Amazon"
      },
      {
        id: 5,
        icon: logo5,
        title: "Universidad de Bogotá"
      }
    ];
  
    return (
      <section className="alliances-section">
        <h2 className="alliances-title">Alianzas estratégicas:</h2>
        
        <div className="alliances-container">
          {alliances.map(alliance => (
            <div key={alliance.id} className="alliance-item">
              <div className="alliance-icon-container">
                <img 
                  src={alliance.icon} 
                  alt={alliance.title}
                  className="alliance-icon"
                />
              </div>
              <p className="alliance-text">{alliance.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

function EndSection (){
  return (
    <div className="cta-container">
      <div class="cta-info-container">
          <h3>Tu apoyo hace la diferencia</h3>
          <p>Cada donación, por pequeña que sea, contribuye a crear espacios inclusivos donde el arte y la cultura transforman vidas.</p>
          <a href="#" class="cta-btn-now">Dona Ahora</a>
      </div>
    </div>
  );
}

export default Home;