import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Star, MapPin, Send, ArrowRight, Menu, X, Landmark, Droplets, Moon, Sun, ChevronLeft, ChevronRight, Eye, Shield, Heart } from 'lucide-react';
import axios from 'axios';

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        const step = isMobile ? 1 : 2;
        const newIndex = (currentIndex + step) % faunaData.length;
        setCurrentIndex(newIndex);
        setActiveDetailIndex(newIndex);
    };

    const handlePrev = () => {
        const step = isMobile ? 1 : 2;
        const newIndex = (currentIndex - step + faunaData.length) % faunaData.length;
        setCurrentIndex(newIndex);
        setActiveDetailIndex(newIndex);
    };

    const images = [
        { url: '/external/v1.jpg', title: 'Panorámica de las Estrellas' },
        { url: '/external/v2.jpg', title: 'Detalle Lítico (Capayanes)' },
        { url: '/external/v3.jpg', title: 'Estrella de 9 Puntas' },
        { url: '/external/v4.jpg', title: 'Geometría Sagrada' }
    ];

    const faunaData = [
        {
            id: 1,
            name: "Cóndor Andino",
            scientificName: "Vultur gryphus",
            type: "Ave carroñera",
            image: "/animalesautoctonos/animal1.jpg",
            habitat: "Cordillera de los Andes, quebradas y zonas de alta montaña.",
            feeding: "Carroña y restos de animales.",
            features: "Una de las aves voladoras más grandes del mundo. Planea largas distancias aprovechando las corrientes térmicas.",
            humanRelation: "Representa la libertad y la conexión espiritual con la montaña en las culturas andinas.",
            heritage: "Cóndor Andino forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura 'Pacha Khuyay' (Amar a la Tierra), inaugurada como homenaje y bienvenida al portal de ingreso."
        },
        {
            id: 2,
            name: "Águila Mora",
            scientificName: "Geranoaetus melanoleucus",
            type: "Ave rapaz",
            image: "/animalesautoctonos/animal2.jpg",
            habitat: "Montañas y zonas abiertas.",
            feeding: "Roedores y reptiles.",
            features: "Gran visión y vuelo imponente.",
            humanRelation: "Representa la fuerza y el equilibrio natural.",
            heritage: "Águila Mora forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representada en su pose clásica de acecho sobre un tronco nativo, vigilando los horizontes del parque."
        },
        {
            id: 3,
            name: "Puma",
            scientificName: "Puma concolor",
            type: "Mamífero carnívoro",
            image: "/animalesautoctonos/animal3.jpg",
            habitat: "Montañas y quebradas.",
            feeding: "Mamíferos pequeños y medianos.",
            features: "Gran cazador, silencioso y adaptable.",
            humanRelation: "Símbolo de fuerza y respeto en la cultura americana.",
            heritage: "Puma forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura detallada a tamaño real que muestra su andar sigiloso integrado en la geografía del yacimiento."
        },
        {
            id: 4,
            name: "Suri",
            scientificName: "Rhea pennata",
            type: "Ave corredora",
            image: "/animalesautoctonos/animal4.jpg",
            habitat: "Puna y estepas abiertas.",
            feeding: "Semillas, hierbas e insectos.",
            features: "No vuela y puede correr a gran velocidad.",
            humanRelation: "Forma parte de la identidad cultural de los Andes.",
            heritage: "Suri forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Figura situada en los flancos de la estrella ceremonial, enriqueciendo su entorno arqueológico."
        },
        {
            id: 5,
            name: "Vicuña",
            scientificName: "Vicugna vicugna",
            type: "Mamífero herbívoro",
            image: "/animalesautoctonos/animal5.jpeg",
            habitat: "Puna y alta montaña andina.",
            feeding: "Hierbas y pastos de altura.",
            features: "Posee una de las fibras más finas del mundo.",
            humanRelation: "Su lana fue considerada sagrada por culturas originarias.",
            heritage: "Vicuña forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Su silueta destaca en una escultura que resalta el dinamismo y la gracia de este camélido en su carrera."
        },
        {
            id: 6,
            name: "Flamenco Andino",
            scientificName: "Phoenicoparrus andinus",
            type: "Ave acuática",
            image: "/animalesautoctonos/animal6.jpeg",
            habitat: "Lagunas altoandinas.",
            feeding: "Algas y microorganismos.",
            features: "Plumaje rosado y patas largas.",
            humanRelation: "Símbolo de la belleza natural de las lagunas andinas.",
            heritage: "Flamenco Andino forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representado en su pose clásica sobre una pata, evocando los espejos de agua de la cordillera."
        },
        {
            id: 7,
            name: "Zorro",
            scientificName: "Lycalopex culpaeus",
            type: "Mamífero omnívoro",
            image: "/animalesautoctonos/animal7.jpeg",
            habitat: "Zonas áridas y montañosas.",
            feeding: "Roedores, frutos e insectos.",
            features: "Astuto, veloz y adaptable.",
            humanRelation: "Presente en relatos populares como símbolo de inteligencia.",
            heritage: "Zorro forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura realista que captura la mirada atenta y la postura cautelosa del astuto cánido de montaña."
        }
    ];

    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-logo">
                    <img src="/logokhuyay.JPG" alt="Logo Parque Pacha Khuyay" className="logo-image" />
                    <span className="logo-text">PARQUE PACHA KHUYAY</span>
                </div>
                
                <div className="nav-links">
                    <a href="#que-es">¿Qué es?</a>
                    <a href="#experiencia">Historia</a>
                    <a href="#simbolismo">Simbolismo</a>
                    <a href="#geoglifos">Geoglifos</a>
                    <a href="#fauna">Fauna</a>
                    <a href="#ubicacion">Ubicación</a>
                </div>

                <div className="md-hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <div className="container">
                    <div className="hero-grid">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="hero-content"
                        >
                            <span className="hero-tag">LA RIOJA • EL LEGADO CAPAYÁN</span>
                            <h1 className="hero-title">
                                Los Conjuros <br/> <span style={{ color: 'var(--primary-color)' }}>de Piedra</span>
                            </h1>
                            <p className="hero-description">
                                Descubre las "Estrellas de Vinchina", antiguos espejos de agua diseñados por los Capayanes para invocar la lluvia y descifrar el firmamento.
                            </p>
                            <a href="#simbolismo" className="btn-red">
                                DESCUBRE EL SIMBOLISMO <ArrowRight size={18} />
                            </a>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="hero-image-visual"
                        >
                            <img src="/external/v1.jpg" alt="Vinchina Panoramic" />
                            <div className="absolute top-8 right-8 bg-white/90 p-4 border-l-4 border-primary-color shadow-lg flex items-center gap-3">
                                <Landmark className="text-secondary-color" />
                                <div className="flex flex-col">
                                    <span className="text-[0.6rem] font-bold text-secondary-color tracking-widest uppercase">Siglo X - XV</span>
                                    <span className="text-xs font-bold text-primary-color">PUEBLO CAPAYÁN</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Section: ¿Qué es Pacha Khuyay? */}
            <section id="que-es" className="bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-12 gap-16 items-center">
                        <motion.div 
                            className="md:col-span-5"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-tag" style={{ textAlign: 'left' }}>Propósito e Identidad</span>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                                ¿Qué es <br />
                                <span style={{ color: 'var(--primary-color)' }}>Pacha Khuyay</span>?
                            </h2>
                            <div className="p-6 border-l-4 border-primary-color bg-light rounded-r-xl shadow-sm" style={{ background: 'var(--bg-dark)' }}>
                                <h3 className="text-xl font-bold tracking-widest text-secondary-color mb-1" style={{ fontFamily: 'var(--font-serif)' }}>PACHA KHUYAY</h3>
                                <p className="text-sm font-bold text-primary-color uppercase tracking-wider">Amor a la Tierra</p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="md:col-span-7"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="que-es-text">
                                <strong>PACHA KHUYAY</strong>, en lengua quechua significa <strong>AMOR A LA TIERRA</strong>. Es el nombre que elegimos para el nuevo portal de ingreso a Vinchina, un proyecto que ya está concretándose y estamos convencidos de que, una vez concluido, será hermoso y le cambiará la fisonomía a la entrada de nuestra localidad. Será el orgullo de nuestro pueblo, único en la provincia y el país.
                            </p>
                            <p className="que-es-paragraph">
                                En este espacio se representará a la biodiversidad andina, es decir su fauna y su flora, por cuanto tiene un fin turístico y también educativo, que va a generar conciencia en la gente sobre la preservación del medio ambiente y el cuidado de las especies autóctonas.
                            </p>
                            <p className="que-es-paragraph">
                                Cada uno de nuestros animalitos está bellamente realizado en esculturas de hierro y cemento en tamaño real; son verdaderas obras de arte que quedarán para siempre, integrando el patrimonio cultural de nuestro pueblo.
                            </p>
                            <p className="que-es-paragraph">
                                Esta obra es un legado de amor a nuestra tierra, la que nos vio nacer y crecer. Es una obra que vamos a realizarla entre toda la comunidad, poniendo cada uno de nosotros una piedra. Ese es el ideario que perseguimos: que sea una obra de todos para todos, en la cual todos participemos como hijos de esta tierra. Es una obra distinta: no viene enlatada ni realizada por empresa alguna, ni tan siquiera por el estado; es una realización de la comunidad, al menos así la concebimos.
                            </p>
                            <p className="que-es-paragraph">
                                Es un tributo y un homenaje que le debemos a nuestra naturaleza y a la biodiversidad autóctona, y será nuestra carta de presentación ante quienes nos visitan, que sin duda van a detenerse allí a conocer la fauna y flora de Vinchina.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* New Symbolism Section: Mirror of Heaven */}
            <section id="simbolismo" className="bg-light">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">El Espejo del Cielo</span>
                        <h2 className="section-title">¿Qué simbolizan las Estrellas?</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-10 bg-white shadow-xl rounded-2xl border-t-8 border-primary-color">
                                <div className="flex gap-4 mb-6">
                                    <Droplets className="text-primary-color" size={40} />
                                    <h3 className="text-2xl font-serif">Conjuros Pluviales</h3>
                                </div>
                                <p className="text-secondary-color leading-relaxed mb-6">
                                    Para los Capayanes, estas estrellas eran <strong>"conjuros pluviales"</strong>. Basados en la magia simpática de que "el agua atrae al agua", 
                                    rellenaban el centro de las estrellas (originalmente de 1.20 metros de profundidad) para invocar la lluvia necesaria para sus cultivos.
                                </p>
                                <div className="flex gap-4 mb-6">
                                    <Moon className="text-secondary-color" size={40} />
                                    <h3 className="text-2xl font-serif">Reflejos Astrales</h3>
                                </div>
                                <p className="text-secondary-color leading-relaxed">
                                    Al llenarse de agua, las estrellas se convertían en <strong>espejos líquidos</strong> que reflejaban el sol, la luna y las constelaciones, 
                                    permitiendo a los chamanes observar los ciclos celestiales sin levantar la vista.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img src="/external/v4.jpg" className="w-full h-[600px] object-cover rounded-2xl shadow-2xl" alt="Simbolismo" />
                            <div className="absolute -bottom-10 -left-10 bg-secondary-color text-white p-8 rounded-xl max-w-xs shadow-2xl">
                                <span className="text-primary-color font-bold text-4xl block mb-2">9</span>
                                <p className="text-xs uppercase tracking-widest font-bold">Puntas geométricas</p>
                                <p className="text-sm mt-3 opacity-70">Símbolo de la perfección y el orden cósmico en la cosmogonía Capayán.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tourist Intro Section - Updated with Capayán info */}
            <section id="experiencia">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">Herencia de los Capayanes</span>
                        <h2 className="section-title">Geometría de 9 Puntas</h2>
                        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            <p className="p-regular" style={{ fontSize: '1.2rem', color: 'var(--secondary-color)' }}>
                                Ubicadas a solo 200 metros del Río Bermejo, las estrellas fueron construidas con 
                                piedras de tres colores: <strong>blancas, rojas y azuladas/negras</strong>. 
                                De las siete estructuras originales, hoy tres han sido fielmente reconstruidas.
                            </p>
                        </div>
                    </div>

                    <div className="features-grid" style={{ marginTop: '50px' }}>
                        <div className="feature-card glass" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-dark)' }}>
                            <div className="flex justify-center mb-6">
                                <Landmark className="text-primary-color" size={32} />
                            </div>
                            <h3 className="text-center">Parque Arqueológico</h3>
                            <p className="text-center text-sm">Un área de 2 km de largo protegida para preservar el rastro de la civilización que habitó el valle hasta el siglo XV.</p>
                        </div>
                        <div className="feature-card glass" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-dark)' }}>
                            <div className="flex justify-center mb-6">
                                <Sun className="text-primary-color" size={32} />
                            </div>
                            <h3 className="text-center">Ciclos Solares</h3>
                            <p className="text-center text-sm">Utilizadas como calendario solar y lunar para determinar los momentos exactos de siembra y cosecha.</p>
                        </div>
                        <div className="feature-card glass" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-dark)' }}>
                            <div className="flex justify-center mb-6">
                                <Droplets className="text-primary-color" size={32} />
                            </div>
                            <h3 className="text-center">Magia Simpática</h3>
                            <p className="text-center text-sm">El uso ritual del agua en el interior de las estrellas como ofrenda para atraer la abundancia hídrica.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section id="geoglifos" className="bg-light">
                <div className="container">
                    <span className="section-tag">Galería de Imágenes</span>
                    <h2 className="section-title">El Arte Capayán</h2>
                    <div className="gallery-grid">
                        {images.map((img, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="gallery-item shadow-xl"
                            >
                                <img src={img.url} alt={img.title} />
                                <div className="gallery-label">{img.title}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fauna Section */}
            <section id="fauna" className="bg-white">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">Esculturas del Parque</span>
                        <h2 className="section-title">Fauna Autóctona</h2>
                        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '50px' }}>
                            <p className="p-regular" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Recientemente se han incorporado al parque arqueológico esculturas a tamaño real de los animales más representativos de la región andina. Estas obras rinden homenaje a la biodiversidad local y complementan el simbolismo sagrado de las estrellas.
                            </p>
                        </div>
                    </div>

                    {/* Carousel Wrapper */}
                    <div className="fauna-carousel-wrapper">
                        <div className="fauna-carousel-container">
                            <button 
                                onClick={handlePrev} 
                                className="fauna-carousel-btn"
                                aria-label="Animal anterior"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="fauna-carousel-track">
                                {/* Desktop: shows currentIndex and (currentIndex + 1) % 7. Mobile: shows currentIndex */}
                                {(() => {
                                    const visibleIndices = isMobile 
                                        ? [currentIndex] 
                                        : [currentIndex, (currentIndex + 1) % faunaData.length];
                                    
                                    return visibleIndices.map((idx) => {
                                        const animal = faunaData[idx];
                                        const isActive = activeDetailIndex === idx;
                                        return (
                                            <motion.div
                                                key={animal.id}
                                                className={`fauna-card ${isActive ? 'active' : ''}`}
                                                onClick={() => setActiveDetailIndex(idx)}
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className="fauna-image-container">
                                                    <img src={animal.image} alt={animal.name} className="fauna-image" />
                                                    <div className="fauna-badge">
                                                        <span>{animal.type}</span>
                                                    </div>
                                                </div>
                                                <div className="fauna-content">
                                                    <span className="fauna-scientific">{animal.scientificName}</span>
                                                    <h3 className="fauna-name">{animal.name}</h3>
                                                    <p className="fauna-desc">{animal.features}</p>
                                                    <div className="fauna-card-footer">
                                                        <span>
                                                            <Star size={14} fill="currentColor" />
                                                            Ver Ficha Técnica
                                                        </span>
                                                        <ArrowRight size={14} />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    });
                                })()}
                            </div>

                            <button 
                                onClick={handleNext} 
                                className="fauna-carousel-btn"
                                aria-label="Siguiente animal"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Dots indicator */}
                        <div className="fauna-carousel-dots">
                            {faunaData.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`fauna-dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentIndex(idx);
                                        setActiveDetailIndex(idx);
                                    }}
                                    aria-label={`Ir a animal ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Interactive Technical Datasheet (Ficha Técnica) */}
                    {(() => {
                        const activeAnimal = faunaData[activeDetailIndex];
                        return (
                            <motion.div 
                                key={activeAnimal.id}
                                className="fauna-details-panel"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="panel-header">
                                    <div className="panel-title-container">
                                        <h3 className="panel-title">{activeAnimal.name}</h3>
                                        <span className="panel-scientific">{activeAnimal.scientificName}</span>
                                    </div>
                                </div>
                                <div className="panel-grid">
                                    <div className="panel-column">
                                        <div className="info-block">
                                            <div className="info-icon-wrapper">
                                                <Compass size={20} />
                                            </div>
                                            <div className="info-content">
                                                <span className="info-label">Tipo de Especie</span>
                                                <span className="info-text">{activeAnimal.type}</span>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <div className="info-icon-wrapper">
                                                <MapPin size={20} />
                                            </div>
                                            <div className="info-content">
                                                <span className="info-label">Hábitat Natural</span>
                                                <span className="info-text">{activeAnimal.habitat}</span>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <div className="info-icon-wrapper">
                                                <Droplets size={20} />
                                            </div>
                                            <div className="info-content">
                                                <span className="info-label">Alimentación</span>
                                                <span className="info-text">{activeAnimal.feeding}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel-column">
                                        <div className="info-block">
                                            <div className="info-icon-wrapper">
                                                <Eye size={20} />
                                            </div>
                                            <div className="info-content">
                                                <span className="info-label">Características Destacadas</span>
                                                <span className="info-text">{activeAnimal.features}</span>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <div className="info-icon-wrapper">
                                                <Heart size={20} />
                                            </div>
                                            <div className="info-content">
                                                <span className="info-label">Relación con el Ser Humano</span>
                                                <span className="info-text">{activeAnimal.humanRelation}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="heritage-box">
                                            <div className="flex gap-2 items-center mb-2 text-primary-color">
                                                <Shield size={16} />
                                                <h4 className="heritage-title" style={{ margin: 0 }}>Valor Patrimonial</h4>
                                            </div>
                                            <p className="heritage-text">{activeAnimal.heritage}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="fauna-sculpture-note" style={{ marginTop: '30px', background: 'white', padding: '15px 20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                    <Landmark size={16} className="text-primary-color" style={{ minWidth: '16px' }} />
                                    <span><strong>Nota de la Escultura:</strong> {activeAnimal.sculptureNote}</span>
                                </div>
                            </motion.div>
                        );
                    })()}
                </div>
            </section>

            {/* Inquiry Form Section */}
            <section id="contacto" className="bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-tag" style={{ textAlign: 'left' }}>Consulta Arqueológica</span>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>¿Deseas saber más?</h2>
                            <p className="text-secondary-color leading-relaxed mb-8">
                                Si estás planeando una visita académica o turística al Parque Arqueológico Pacha Khuyay, 
                                nuestro equipo puede brindarte información detallada sobre los accesos, clima y guías autorizados.
                            </p>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-light rounded-full text-primary-color">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold uppercase tracking-widest opacity-50">Ubicación</span>
                                        <span className="text-sm font-bold">Vinchina, La Rioja, Argentina</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-light rounded-full text-primary-color">
                                        <Star size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold uppercase tracking-widest opacity-50">Patrimonio</span>
                                        <span className="text-sm font-bold">Registro Nacional de Sitios Arqueológicos</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white border border-border-color shadow-2xl rounded-2xl"
                        >
                            <InquiryForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location & Map Section */}
            <section id="ubicacion">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">Ubicación y Acceso</span>
                        <h2 className="section-title">Valle del Bermejo</h2>
                    </div>
                    <div className="map-container shadow-2xl">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.000000000002!2d-68.2106!3d-28.7517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ1JDA2LjEiUyA2OMKwMTInMzguMiJX!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                        ></iframe>
                        <div className="map-info-card">
                            <h4>Parque Pacha Khuyay</h4>
                            <p className="text-sm font-bold text-secondary-color mb-4">La Rioja, Vinchina</p>
                            <p className="text-xs text-secondary-color/70 mb-6">Localización: 3 km al NW de San José de Vinchina. Se recomienda visita guiada para interpretar los geoglifos.</p>
                            <a href="https://www.google.com/maps?q=-28.7517,-68.2106" target="_blank" className="btn-red" style={{ padding: '12px 20px', fontSize: '0.7rem' }}>
                                CÓMO LLEGAR
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="navbar-logo">
                            <img src="/logokhuyay.JPG" alt="Logo Parque Pacha Khuyay" className="logo-image" />
                            <span className="logo-text" style={{ color: 'white' }}>PACHA KHUYAY</span>
                        </div>
                        <div className="flex gap-10 text-xs font-bold tracking-widest">
                            <a href="#experiencia" className="hover:text-primary-color transition-colors">YACIMIENTO</a>
                            <a href="#geoglifos" className="hover:text-primary-color transition-colors">GALERÍA</a>
                            <a href="#fauna" className="hover:text-primary-color transition-colors">FAUNA</a>
                            <a href="#contacto" className="hover:text-primary-color transition-colors">CONTACTO</a>
                        </div>
                    </div>
                    <p className="footer-copy">
                        © 2026 Parque Arqueológico Pacha Khuyay. Información basada en Prensa Mercosur.
                    </p>
                </div>
            </footer>
        </div>
    );
};

const InquiryForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post('http://localhost:5000/api/inquire', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={30} />
                </div>
                <h3 className="text-2xl font-serif mb-4">¡Mensaje Recibido!</h3>
                <p className="text-secondary-color">Gracias por tu interés. Nos pondremos en contacto pronto.</p>
                <button onClick={() => setStatus('')} className="mt-8 text-primary-color font-bold uppercase tracking-widest text-xs">Enviar otro mensaje</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="inquiry-form">
            <div className="form-group mb-6">
                <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-secondary-color/50 mb-2">NOMBRE COMPLETO</label>
                <input 
                    type="text" 
                    required 
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
            </div>
            <div className="form-group mb-6">
                <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-secondary-color/50 mb-2">CORREO ELECTRÓNICO</label>
                <input 
                    type="email" 
                    required 
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </div>
            <div className="form-group mb-8">
                <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-secondary-color/50 mb-2">CONSULTA</label>
                <textarea 
                    required 
                    rows="4" 
                    className="form-input"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
            </div>
            <button 
                type="submit" 
                disabled={status === 'sending'}
                className="btn-red w-full justify-center"
            >
                {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR CONSULTA'}
            </button>
            {status === 'error' && (
                <p className="mt-4 text-xs text-red-600 font-bold text-center">Error al enviar. Por favor verifica que el servidor esté activo.</p>
            )}
        </form>
    );
}


export default App;
