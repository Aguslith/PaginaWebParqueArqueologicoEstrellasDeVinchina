import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Star, MapPin, ArrowRight, Landmark, Droplets, Moon, Sun, ChevronLeft, ChevronRight, Eye, Shield, Heart, Menu, X, Facebook, Twitter, Instagram, BookOpen } from 'lucide-react';

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        { url: 'external/v1.jpg', title: 'Panorámica de las Estrellas' },
        { url: 'external/v2.jpg', title: 'Detalle Lítico (Capayanes)' },
        { url: 'external/v3.jpg', title: 'Estrella de 9 Puntas' },
        { url: 'external/v4.jpg', title: 'Geometría Sagrada' }
    ];

    const faunaData = [
        {
            id: 1,
            name: "Cóndor Andino",
            scientificName: "Vultur gryphus",
            type: "Ave carroñera",
            image: "animalesautoctonos/condor.jpeg",
            habitat: "Cordillera de los Andes, quebradas y zonas de alta montaña.",
            feeding: "Carroña y restos de animales.",
            features: "Una de las aves voladoras más grandes del mundo. Planea largas distancias aprovechando las corrientes térmicas.",
            humanRelation: "Representa la libertad y la conexión espiritual con la montaña en las culturas andinas.",
            heritage: "El Cóndor Andino forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura 'Pacha Khuyay' (Amar a la Tierra), inaugurada como homenaje y bienvenida al portal de ingreso."
        },
        {
            id: 2,
            name: "Vicuña",
            scientificName: "Vicugna vicugna",
            type: "Mamífero herbívoro",
            image: "animalesautoctonos/vicuna.jpeg",
            habitat: "Puna y alta montaña andina.",
            feeding: "Hierbas y pastos de altura.",
            features: "Posee una de las fibras más finas del mundo.",
            humanRelation: "Su lana fue considerada sagrada por culturas originarias.",
            heritage: "La Vicuña forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Su silueta destaca en una escultura que resalta el dinamismo y la gracia de este camélido en su carrera."
        },
        {
            id: 3,
            name: "Puma",
            scientificName: "Puma concolor",
            type: "Mamífero carnívoro",
            image: "animalesautoctonos/puma.jpeg",
            habitat: "Montañas y quebradas.",
            feeding: "Mamíferos pequeños y medianos.",
            features: "Gran cazador, silencioso y adaptable.",
            humanRelation: "Símbolo de fuerza y respeto en la cultura americana.",
            heritage: "El Puma forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura detallada a tamaño real que muestra su andar sigiloso integrado en la geografía del yacimiento."
        },
        {
            id: 4,
            name: "Zorro",
            scientificName: "Lycalopex culpaeus",
            type: "Mamífero omnívoro",
            image: "animalesautoctonos/zorro.jpeg",
            habitat: "Zonas áridas y montañosas.",
            feeding: "Roedores, frutos e insectos.",
            features: "Astuto, veloz y adaptable.",
            humanRelation: "Presente en relatos populares como símbolo de inteligencia.",
            heritage: "El Zorro forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura realista que captura la mirada atenta y la postura cautelosa del astuto cánido de montaña."
        },
        {
            id: 5,
            name: "Suri",
            scientificName: "Rhea pennata",
            type: "Ave corredora",
            image: "animalesautoctonos/suri.jpeg",
            habitat: "Puna y estepas abiertas.",
            feeding: "Semillas, hierbas e insectos.",
            features: "No vuela y puede correr a gran velocidad.",
            humanRelation: "Forma parte de la identidad cultural de los Andes.",
            heritage: "El Suri forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Figura situada en los flancos de la estrella ceremonial, enriqueciendo su entorno arqueológico."
        },
        {
            id: 6,
            name: "Liebre",
            scientificName: "Lepus europaeus",
            type: "Mamífero herbívoro",
            image: "animalesautoctonos/liebre.jpeg",
            habitat: "Campos abiertos y estepas.",
            feeding: "Hierbas y brotes.",
            features: "Gran velocidad y largas orejas.",
            humanRelation: "Convive frecuentemente en ambientes rurales.",
            heritage: "La Liebre forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura detallada que captura la liebre en posición de reposo pero atenta a su entorno."
        },
        {
            id: 7,
            name: "Tero",
            scientificName: "Vanellus chilensis",
            type: "Ave",
            image: "animalesautoctonos/tero.jpeg",
            habitat: "Campos y humedales.",
            feeding: "Insectos y pequeños invertebrados.",
            features: "Fuerte canto de alerta y gran protector de su nido.",
            humanRelation: "Conocido como el vigilante del campo.",
            heritage: "El Tero forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representado en su típica postura erguida de vigía, listo para emitir su característico chillido de alarma."
        },
        {
            id: 8,
            name: "Flamenco Andino",
            scientificName: "Phoenicoparrus andinus",
            type: "Ave acuática",
            image: "animalesautoctonos/flamenco.jpeg",
            habitat: "Lagunas altoandinas.",
            feeding: "Algas y microorganismos.",
            features: "Plumaje rosado y patas largas.",
            humanRelation: "Símbolo de la belleza natural de las lagunas andinas.",
            heritage: "El Flamenco Andino forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representado en su pose clásica sobre una pata, evocando los espejos de agua de la cordillera."
        },
        {
            id: 9,
            name: "Garza",
            scientificName: "Ardea alba",
            type: "Ave acuática",
            image: "animalesautoctonos/garza.jpeg",
            habitat: "Ríos, lagunas y humedales.",
            feeding: "Peces e insectos.",
            features: "Gran paciencia para cazar y vuelo elegante.",
            humanRelation: "Relacionada con la tranquilidad y el equilibrio natural.",
            heritage: "La Garza forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura que captura su cuello esbelto y silueta elegante en los márgenes de agua."
        },
        {
            id: 10,
            name: "Lechuza",
            scientificName: "Tyto alba",
            type: "Ave rapaz nocturna",
            image: "animalesautoctonos/lechuza.jpeg",
            habitat: "Campos y construcciones rurales.",
            feeding: "Roedores e insectos.",
            features: "Vuelo silencioso y excelente visión nocturna.",
            humanRelation: "Ayuda al control natural de plagas.",
            heritage: "La Lechuza forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura con su característico disco facial en forma de corazón y mirada fija."
        },
        {
            id: 11,
            name: "Águila Mora",
            scientificName: "Geranoaetus melanoleucus",
            type: "Ave rapaz",
            image: "animalesautoctonos/aguilamora.jpeg",
            habitat: "Montañas y zonas abiertas.",
            feeding: "Roedores y reptiles.",
            features: "Gran visión y vuelo imponente.",
            humanRelation: "Representa la fuerza y el equilibrio natural.",
            heritage: "El Águila Mora forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representada en su pose clásica de acecho sobre un tronco nativo, vigilando los horizontes del parque."
        },
        {
            id: 12,
            name: "Taruca",
            scientificName: "Hippocamelus antisensis",
            type: "Cérvido andino",
            image: "animalesautoctonos/taruca.jpeg",
            habitat: "Pastizales de alta montaña y laderas rocosas.",
            feeding: "Pastos, hierbas y arbustos.",
            features: "Venado andino mediano con astas bifurcadas en los machos y pelaje denso.",
            humanRelation: "Considerada monumento nacional natural en Argentina y símbolo de las sierras riojanas.",
            heritage: "La Taruca forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura majestuosa que plasma la corpulencia y las astas de este cérvido en peligro de conservación."
        },
        {
            id: 13,
            name: "Quirquincho",
            scientificName: "Chaetophractus vellerosus",
            type: "Mamífero acorazado",
            image: "animalesautoctonos/quirquincho.jpeg",
            habitat: "Zonas áridas, estepas y desiertos de monte.",
            feeding: "Insectos, pequeños vertebrados, raíces y frutos.",
            features: "Posee un caparazón articulado cubierto de pelos y gran habilidad excavadora.",
            humanRelation: "Protagonista de leyendas andinas y folklore musical de la región.",
            heritage: "El Quirquincho forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Pequeña y detallada escultura que destaca las placas de su caparazón sobre el suelo árido."
        },
        {
            id: 14,
            name: "Pato",
            scientificName: "Anatidae sp.",
            type: "Ave acuática",
            image: "animalesautoctonos/pato.jpeg",
            habitat: "Lagunas de altura, ríos y arroyos de montaña.",
            feeding: "Plantas acuáticas, larvas de insectos y pequeños moluscos.",
            features: "Cuerpo hidrodinámico, patas palmeadas y excelente adaptabilidad al agua.",
            humanRelation: "Habitante común de los cuerpos hídricos locales que provee equilibrio biológico.",
            heritage: "El Pato forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representado en una pose tranquila cerca de las áreas hídricas del parque."
        }
    ];

    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-logo">
                    <img src="logokhuyay.JPG" alt="Logo Parque Pacha Khuyay" className="logo-image" />
                    <span className="logo-text">PARQUE PACHA KHUYAY</span>
                </div>
                
                <div className="nav-links">
                    <a href="#que-es">¿Qué es?</a>
                    <a href="#simbolismo">Simbolismo</a>
                    <a href="#geoglifos">Geoglifos</a>
                    <a href="#fauna">Fauna</a>
                    <a href="#ubicacion">Ubicación</a>
                </div>

                <button 
                    className="mobile-menu-btn" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menú"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <a href="#que-es" onClick={() => setIsMenuOpen(false)}>¿Qué es?</a>
                <a href="#simbolismo" onClick={() => setIsMenuOpen(false)}>Simbolismo</a>
                <a href="#geoglifos" onClick={() => setIsMenuOpen(false)}>Geoglifos</a>
                <a href="#fauna" onClick={() => setIsMenuOpen(false)}>Fauna</a>
                <a href="#ubicacion" onClick={() => setIsMenuOpen(false)}>Ubicación</a>
            </div>

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
                            <span className="hero-tag">AMOR A LA TIERRA Y A SU GENTE</span>
                            <h1 className="hero-title">
                                Parque Pacha <span className="text-primary">Khuyay</span>
                            </h1>
                            <p className="hero-description">
                                El único monumento a la fauna andina en el país.<br/><br/>
                                22 esculturas que representan para siempre las especies de la cordillera riojana.<br/><br/>
                                Descubrí Vinchina. Descubrí Pacha Khuyay.
                            </p>
                            <a href="#fauna" className="btn-red">
                                VER LAS ESCULTURAS <ArrowRight size={18} />
                            </a>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="hero-image-visual"
                        >
                            <video 
                                src="VideoDeKhuyay.mp4" 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                controls 
                                className="hero-video"
                            />
                            <div className="hero-badge">
                                <Landmark size={24} className="hero-badge-icon" />
                                <div className="hero-badge-text">
                                    <span className="hero-badge-subtitle">Villa San José</span>
                                    <span className="hero-badge-title">DE VINCHINA</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Pilares Section */}
            <section id="pilares" className="bg-light" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-card-icon-wrapper">
                                <Compass size={32} />
                            </div>
                            <h3>Turístico</h3>
                            <p>Recorré un paseo a cielo abierto único en Argentina, con vistas a la cordillera y 22 esculturas de fauna andina que convierten a Vinchina en un destino imperdible.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon-wrapper">
                                <Heart size={32} />
                            </div>
                            <h3>Cultural</h3>
                            <p>Conocé el proyecto colectivo que dejó su huella en el pueblo. Cada obra es un homenaje a la identidad riojana y al vínculo entre la gente y su tierra.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon-wrapper">
                                <BookOpen size={32} />
                            </div>
                            <h3>Educativo</h3>
                            <p>Aprendé sobre la fauna nativa de los Andes en un espacio pensado para conectar a chicos y grandes con la naturaleza, la historia y el respeto por el entorno.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: ¿Qué es Pacha Khuyay? */}
            <section id="que-es" className="bg-white">
                <div className="container">
                    <div className="purpose-grid">
                        <motion.div 
                            className="purpose-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-tag">Propósito e Identidad</span>
                            <h2 className="section-title">
                                ¿Qué es <br />
                                <span className="text-primary">Pacha Khuyay</span>?
                            </h2>
                            <div className="purpose-badge-container">
                                <h3 className="purpose-badge-title">PACHA KHUYAY</h3>
                                <p className="purpose-badge-subtitle">Amor a la Tierra</p>
                            </div>
                        </motion.div>
                        <motion.div 
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
                    <div className="simbolismo-grid">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="simbolismo-card">
                                <div className="simbolismo-card-header">
                                    <Droplets className="simbolismo-card-icon" size={40} />
                                    <h3 className="simbolismo-card-title">Conjuros Pluviales</h3>
                                </div>
                                <p className="simbolismo-card-text">
                                    Para los Capayanes, estas estrellas eran <strong>"conjuros pluviales"</strong>. Basados en la magia simpática de que "el agua atrae al agua", 
                                    rellenaban el centro de las estrellas (originalmente de 1.20 metros de profundidad) para invocar la lluvia necesaria para sus cultivos.
                                </p>
                                <div className="simbolismo-card-header">
                                    <Moon className="simbolismo-card-icon secondary" size={40} />
                                    <h3 className="simbolismo-card-title">Reflejos Astrales</h3>
                                </div>
                                <p className="simbolismo-card-text">
                                    Al llenarse de agua, las estrellas se convertían en <strong>espejos líquidos</strong> que reflejaban el sol, la luna y las constelaciones, 
                                    permitiendo a los chamanes observar los ciclos celestiales sin levantar la vista.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="simbolismo-img-container"
                        >
                            <img src="external/v4.jpg" className="simbolismo-img" alt="Simbolismo" />
                            <div className="simbolismo-badge">
                                <span className="simbolismo-badge-number">9</span>
                                <p className="simbolismo-badge-label">Puntas geométricas</p>
                                <p className="simbolismo-badge-desc">Símbolo de la perfección y el orden cósmico en la cosmogonía Capayán.</p>
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
                        <div className="section-intro-container">
                            <p className="section-intro-text large">
                                Ubicadas a solo 200 metros del Río Bermejo, las estrellas fueron construidas con 
                                piedras de tres colores: <strong>blancas, rojas y azuladas/negras</strong>. 
                                De las siete estructuras originales, hoy tres han sido fielmente reconstruidas.
                            </p>
                        </div>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-card-icon-wrapper">
                                <Landmark size={32} />
                            </div>
                            <h3>Parque Arqueológico</h3>
                            <p>Un área de 2 km de largo protegida para preservar el rastro de la civilización que habitó el valle hasta el siglo XV.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon-wrapper">
                                <Sun size={32} />
                            </div>
                            <h3>Ciclos Solares</h3>
                            <p>Utilizadas como calendario solar y lunar para determinar los momentos exactos de siembra y cosecha.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon-wrapper">
                                <Droplets size={32} />
                            </div>
                            <h3>Magia Simpática</h3>
                            <p>El uso ritual del agua en el interior de las estrellas como ofrenda para atraer la abundancia hídrica.</p>
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
                                className="gallery-item"
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
                        <div className="section-intro-container">
                            <p className="section-intro-text">
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
                                                    <img src={animal.image} alt={animal.name} className="fauna-image" style={{ objectPosition: animal.objectPosition || 'center' }} />
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
                                            <div className="heritage-header">
                                                <Shield size={16} />
                                                <h4 className="heritage-title" style={{ margin: 0 }}>Valor Patrimonial</h4>
                                            </div>
                                            <p className="heritage-text">{activeAnimal.heritage}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="fauna-sculpture-note">
                                    <Landmark size={16} className="text-primary" />
                                    <span><strong>Nota de la Escultura:</strong> {activeAnimal.sculptureNote}</span>
                                </div>
                            </motion.div>
                        );
                    })()}
                </div>
            </section>



            {/* Location & Map Section */}
            <section id="ubicacion">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">Ubicación y Acceso</span>
                        <h2 className="section-title">Valle del Bermejo</h2>
                    </div>
                    <div className="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.000000000002!2d-68.2106!3d-28.7517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ1JDA2LjEiUyA2OMKwMTInMzguMiJX!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar" 
                            className="map-iframe"
                            allowFullScreen="" 
                            loading="lazy" 
                        ></iframe>
                        <div className="map-info-card">
                            <h4>Parque Pacha Khuyay</h4>
                            <p className="map-info-subtitle">La Rioja, Vinchina</p>
                            <p className="map-info-text">Localización: 3 km al NW de San José de Vinchina. Se recomienda visita guiada para interpretar los geoglifos.</p>
                            <a href="https://www.google.com/maps?q=-28.7517,-68.2106" target="_blank" className="btn-red">
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
                            <img src="logokhuyay.JPG" alt="Logo Parque Pacha Khuyay" className="logo-image" />
                            <span className="logo-text">PACHA KHUYAY</span>
                        </div>
                        <div className="footer-links">
                            <a href="#que-es">YACIMIENTO</a>
                            <a href="#geoglifos">GALERÍA</a>
                            <a href="#fauna">FAUNA</a>
                        </div>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/share/p/18Vajpoi9o/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X">
                                <Twitter size={24} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
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




export default App;
