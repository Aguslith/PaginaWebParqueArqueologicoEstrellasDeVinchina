import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Star, MapPin, ArrowRight, Landmark, Droplets, Moon, Sun, ChevronLeft, ChevronRight, Eye, Shield, Heart, Menu, X, Facebook, Twitter, Instagram, BookOpen } from 'lucide-react';

const FaunaCard = ({ animal }) => {
    const [viewMode, setViewMode] = useState('sculpture'); // 'sculpture' or 'real'

    return (
        <motion.div 
            className="fauna-detail-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="fauna-detail-image-wrapper">
                <div className="image-comparison-container">
                    <img 
                        src={animal.image} 
                        alt={`${animal.name} - Escultura`} 
                        className={`fauna-detail-image sculpture-img ${viewMode === 'sculpture' ? 'active' : 'hidden'}`} 
                        style={{ objectPosition: animal.objectPosition || 'center' }}
                        loading="lazy"
                    />
                    {animal.realImage && (
                        <img 
                            src={animal.realImage} 
                            alt={`${animal.name} - Animal Real`} 
                            className={`fauna-detail-image real-img ${viewMode === 'real' ? 'active' : 'hidden'}`} 
                            style={{ objectPosition: 'center' }}
                            loading="lazy"
                        />
                    )}
                </div>
                
                <div className="fauna-badge">
                    <span>{animal.type}</span>
                </div>

                {animal.realImage && (
                    <div className="image-view-toggle">
                        <button 
                            className={`toggle-btn ${viewMode === 'sculpture' ? 'active' : ''}`}
                            onClick={() => setViewMode('sculpture')}
                        >
                            <Landmark size={12} /> Escultura
                        </button>
                        <button 
                            className={`toggle-btn ${viewMode === 'real' ? 'active' : ''}`}
                            onClick={() => setViewMode('real')}
                        >
                            <Eye size={12} /> Animal Real
                        </button>
                    </div>
                )}
            </div>
            
            <div className="fauna-detail-content">
                <div className="panel-header">
                    <div className="panel-title-container">
                        <h3 className="panel-title">{animal.name}</h3>
                        <span className="panel-scientific">{animal.scientificName}</span>
                    </div>
                </div>
                
                <div className="info-blocks-grid">
                    <div className="info-block">
                        <div className="info-icon-wrapper">
                            <MapPin size={24} />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Hábitat Natural</span>
                            <span className="info-text">{animal.habitat}</span>
                        </div>
                    </div>
                    
                    <div className="info-block">
                        <div className="info-icon-wrapper">
                            <Droplets size={24} />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Alimentación</span>
                            <span className="info-text">{animal.feeding}</span>
                        </div>
                    </div>
                    
                    <div className="info-block">
                        <div className="info-icon-wrapper">
                            <Eye size={24} />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Características Destacadas</span>
                            <span className="info-text">{animal.features}</span>
                        </div>
                    </div>
                    
                    <div className="info-block">
                        <div className="info-icon-wrapper">
                            <Heart size={24} />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Relación con el Ser Humano</span>
                            <span className="info-text">{animal.humanRelation}</span>
                        </div>
                    </div>
                </div>
                
                <div className="heritage-box">
                    <div className="heritage-header">
                        <Shield size={18} />
                        <h4 className="heritage-title" style={{ margin: 0 }}>Valor Patrimonial</h4>
                    </div>
                    <p className="heritage-text">{animal.heritage}</p>
                </div>
                
                <div className="fauna-sculpture-note">
                    <Landmark size={20} className="text-primary" />
                    <span className="sculpture-text"><strong>Nota de la Escultura:</strong> {animal.sculptureNote}</span>
                </div>
            </div>
        </motion.div>
    );
};

const SobreNosotrosView = ({ navigateTo }) => {
    const team = [
        {
            name: "Dr. Emilio Dito Rodríguez",
            role: "Creador y Fundador",
            image: "sobre_nosotros/Dr. Emilio Dito Rodríguez.jpeg",
            objectPosition: "top",
            description: "Fundador de Pacha Khuyay. Impulsó y financió todo el proyecto con sus propios recursos económicos como regalo y legado para Vinchina, su amado pueblo."
        },
        {
            name: "Dr. Emilio Dito Rodríguez y Ariel Varas",
            role: "Co-Creadores / Impulsores",
            image: "sobre_nosotros/Dito Rodriguez y Ariel Varas.jpeg",
            description: "Ariel Varas (creador de Tierra Andina) fue coprotagonista esencial. Juntos conversaron y planificaron colocar las esculturas al ingreso del pueblo para cambiar la fisonomía del lugar."
        },
        {
            name: "Dr. Emilio Dito Rodríguez y Luis Alaniz",
            role: "Trabajo Solidario",
            image: "sobre_nosotros/Dito Rodriguez y Luis Alaniz.jpeg",
            description: "Luis Alaniz, junto a Horacio Salgado (maestro de obra) y otros amigos del pueblo, trabajaron de forma solidaria poniendo cada piedra en su lugar."
        }
    ];

    return (
        <main className="sobre-nosotros-page">
            <div className="container">
                {/* Back Link */}
                <div className="back-link-container">
                    <button onClick={() => navigateTo('home')} className="back-to-home-btn">
                        ← Volver al Inicio
                    </button>
                </div>

                <motion.div 
                    className="page-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-tag">Directorio de la Comunidad</span>
                    <h1 className="page-title">Los Rostros de Pacha Khuyay</h1>
                    <p className="page-subtitle">
                        El proyecto nació como un sueño colectivo, hecho realidad con esfuerzo propio y el trabajo solidario de amigos indispensables.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="team-grid">
                    {team.map((member, i) => (
                        <motion.div 
                            key={i} 
                            className="team-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="team-card-image-wrapper">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="team-card-image" 
                                    style={{ objectPosition: member.objectPosition || 'center' }}
                                    loading="lazy"
                                />
                                <div className="team-card-role-badge">{member.role}</div>
                            </div>
                            <div className="team-card-content">
                                <h3 className="team-card-name">{member.name}</h3>
                                <p className="team-card-description">{member.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Origins narrative section */}
                <motion.div 
                    className="apertura-story-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginBottom: '30px' }}
                >
                    <h3>Cómo Nació el Proyecto</h3>
                    <p style={{ fontStyle: 'normal', fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                        En este proyecto también el amigo <strong>ARIEL VARAS</strong> fué y es esencial protagonista de la hermosa historia de Pacha KHUYAY. Así, el día <strong>29 de mayo de 2024</strong> nos encontramos en los actos celebratorios de un aniversario de nuestro Vinchina. En cuanto comenzamos a conversar coincidimos en que había que hacer algo en el ingreso de nuestro pueblo, donde él ha construido su emprendimiento turístico <strong>Tierra Andina</strong>.
                    </p>
                    <p style={{ fontStyle: 'normal', fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: '1.8', marginTop: '15px' }}>
                        Ahí mismo le hablé de la posibilidad de las esculturas y obviamente compartió el entusiasmo y decidimos ponernos en marcha, por lo que al día siguiente me conecté con el otro gran protagonista y gran artista joven escultor del interior de la provincia de La Rioja, <strong>JAVIER PACHECO</strong>, quien ya había realizado dos obras: la <em>virgen Protectora de los jóvenes</em> (que se encuentra en la Plaza del mismo nombre en el centro del pueblo) y la <em>escultura de mi padre</em> en el Colegio Provincial.
                    </p>
                    <p style={{ fontStyle: 'normal', fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: '1.8', marginTop: '15px' }}>
                        Acordamos el precio de toda la obra y a los pocos días ya le estaba dando forma al <strong>Cóndor</strong>, el gran rey de los Andes, que sería el centro de la escena. Está ubicado en el círculo central de la estrella Capayan. Alrededor, todas las demás especies, verdaderas guardianas de la biodiversidad y del ecosistema.
                    </p>
                </motion.div>

                {/* Story card inside dedicated page */}
                <motion.div 
                    className="apertura-story-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3>Un Sueño de Amigos</h3>
                    <p>
                        "Pacha Khuyay es la realidad de un sueño colectivo, de amigos indispensables que ayudaron poniendo cada piedra en su lugar. Nada se hace sin amor, y esto está hecho con ese sentimiento de amor a nuestra gente y a la tierra que nos cobijó. El trabajo solidario en beneficio de todos. No hay nada más hermoso que eso."
                    </p>
                    <div className="collaborators-pills-box">
                        <span className="collab-box-title">Amigos Indispensables:</span>
                        <div className="collab-pills-flex">
                            {[
                                "Horacio Salgado (Maestro de obra)",
                                "Luis Alaniz",
                                "Fabián Rojas",
                                "Luis Porras",
                                "Fredy Porras",
                                "Tellito de la Banda",
                                "Cucula Gonzalez",
                                "Edgar Perea",
                                "Ezequiel Florez",
                                "Raúl Casas",
                                "Omar Bordon"
                            ].map((name, idx) => (
                                <span key={idx} className="collab-pill-badge">{name}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentView, setCurrentView] = useState('home'); // 'home' or 'sobre-nosotros'
    const [hash, setHash] = useState(window.location.hash);
    
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const video3Ref = useRef(null);
    const video4Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            const currentHash = window.location.hash;
            setHash(currentHash);
            if (currentHash === '#/sobre-nosotros' || currentHash === '#sobre-nosotros') {
                setCurrentView('sobre-nosotros');
                window.scrollTo(0, 0);
            } else {
                setCurrentView('home');
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        if (currentView === 'home' && hash) {
            let elementId = hash;
            if (elementId.startsWith('#')) {
                elementId = elementId.substring(1);
            }
            if (elementId.startsWith('/')) {
                elementId = elementId.substring(1);
            }
            
            if (!elementId) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // Wait for the DOM to render before attempting to scroll
            const timer = setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    const headerOffset = 90;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [currentView, hash]);

    const navigateTo = (view, targetHash = '') => {
        if (view === 'sobre-nosotros') {
            window.location.hash = '#/sobre-nosotros';
        } else {
            window.location.hash = targetHash;
        }
        setIsMenuOpen(false);
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
            image: "EsculturasKhuyay/CondorAndino.jpeg",
            realImage: "AnimalesRealesKhuyay/Condor.jpeg",
            habitat: "Cordillera de los Andes, quebradas y zonas de alta montaña.",
            feeding: "Carroña y restos de animales.",
            features: "Una de las aves voladoras más grandes del mundo. Planea largas distancias aprovechando las corrientes térmicas.",
            humanRelation: "Representa la libertad y la conexión espiritual con la montaña en las culturas andinas.",
            heritage: "El Cóndor Andino forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura 'Pacha Khuyay' (Amar a la Tierra), inaugurada como homenaje y bienvenida al portal de ingreso."
        },
        {
            id: 2,
            name: "Guanaco",
            scientificName: "Lama guanicoe",
            type: "Mamífero herbívoro",
            image: "EsculturasKhuyay/Guanaco.jpeg",
            realImage: null,
            objectPosition: "top",
            habitat: "Estepas, montañas y zonas áridas.",
            feeding: "Pastos y arbustos.",
            features: "Gran resistencia al clima extremo. Vive en grupos familiares.",
            humanRelation: "Desde tiempos ancestrales brindó abrigo y sustento a comunidades andinas.",
            heritage: "El Guanaco forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Su silueta destaca en una escultura que resalta el dinamismo y la gracia de este camélido en su hábitat."
        },
        {
            id: 3,
            name: "Vicuña",
            scientificName: "Vicugna vicugna",
            type: "Mamífero herbívoro",
            image: "EsculturasKhuyay/vicuña.jpeg",
            realImage: "AnimalesRealesKhuyay/vicuña.jpeg",
            objectPosition: "center",
            habitat: "Puna y alta montaña andina.",
            feeding: "Hierbas y pastos de altura.",
            features: "Posee una de las fibras más finas del mundo.",
            humanRelation: "Su lana fue considerada sagrada por culturas originarias.",
            heritage: "La Vicuña forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Su silueta destaca en una escultura que resalta el dinamismo y la gracia de este camélido en su carrera."
        },
        {
            id: 4,
            name: "Puma",
            scientificName: "Puma concolor",
            type: "Mamífero carnívoro",
            image: "EsculturasKhuyay/Puma concolor.jpeg",
            realImage: "AnimalesRealesKhuyay/puma.jfif",
            habitat: "Montañas y quebradas.",
            feeding: "Mamíferos pequeños y medianos.",
            features: "Gran cazador, silencioso y adaptable.",
            humanRelation: "Símbolo de fuerza y respeto en la cultura americana.",
            heritage: "El Puma forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura detallada a tamaño real que muestra su andar sigiloso integrado en la geografía del yacimiento."
        },
        {
            id: 5,
            name: "Zorro",
            scientificName: "Lycalopex culpaeus",
            type: "Mamífero omnívoro",
            image: "EsculturasKhuyay/Zorro.jpeg",
            realImage: "AnimalesRealesKhuyay/zorro.jpg",
            habitat: "Zonas áridas y montañosas.",
            feeding: "Roedores, frutos e insectos.",
            features: "Astuto, veloz y adaptable.",
            humanRelation: "Presente en relatos populares como símbolo de inteligencia.",
            heritage: "El Zorro forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura realista que captura la mirada atenta y la postura cautelosa del astuto cánido de montaña."
        },
        {
            id: 6,
            name: "Suri",
            scientificName: "Rhea pennata",
            type: "Ave corredora",
            image: "EsculturasKhuyay/Suri.jpeg",
            realImage: "AnimalesRealesKhuyay/Suri.jpeg",
            objectPosition: "center",
            habitat: "Puna y estepas abiertas.",
            feeding: "Semillas, hierbas e insectos.",
            features: "No vuela y puede correr a gran velocidad.",
            humanRelation: "Forma parte de la identidad cultural de los Andes.",
            heritage: "El Suri forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Figura situada en los flancos de la estrella ceremonial, enriqueciendo su entorno arqueológico."
        },
        {
            id: 7,
            name: "Chinchilla",
            scientificName: "Chinchilla chinchilla",
            type: "Roedor",
            image: "EsculturasKhuyay/Chinchilla.jpeg",
            realImage: "AnimalesRealesKhuyay/Chinchilla.jfif",
            habitat: "Zonas rocosas y secas.",
            feeding: "Hierbas y semillas.",
            features: "Pelaje extremadamente suave y hábitos nocturnos.",
            humanRelation: "Fue muy perseguida por su piel.",
            heritage: "La Chinchilla forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Pequeña y detallada escultura que destaca en el paisaje rocoso."
        },
        {
            id: 8,
            name: "Liebre",
            scientificName: "Lepus europaeus",
            type: "Mamífero herbívoro",
            image: "EsculturasKhuyay/Liebre.jpeg",
            realImage: "AnimalesRealesKhuyay/Conejo andino.jpeg",
            objectPosition: "bottom center",
            habitat: "Campos abiertos y estepas.",
            feeding: "Hierbas y brotes.",
            features: "Gran velocidad y largas orejas.",
            humanRelation: "Convive frecuentemente en ambientes rurales.",
            heritage: "La Liebre forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura detallada que captura la liebre en posición de reposo pero atenta a su entorno."
        },
        {
            id: 9,
            name: "Perdiz",
            scientificName: "Nothoprocta cinerascens",
            type: "Ave terrestre",
            image: "EsculturasKhuyay/Perdiz Copetona.jpeg",
            realImage: null,
            objectPosition: "center",
            habitat: "Pastizales y montes bajos.",
            feeding: "Semillas e insectos.",
            features: "Vuelo corto y rápido, excelente camuflaje.",
            humanRelation: "Muy presente en tradiciones rurales.",
            heritage: "La Perdiz forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Pequeña escultura integrada al paisaje, en actitud alerta."
        },
        {
            id: 10,
            name: "Tero",
            scientificName: "Vanellus chilensis",
            type: "Ave",
            image: "EsculturasKhuyay/Tero.jpeg",
            realImage: "AnimalesRealesKhuyay/tero.jpeg",
            objectPosition: "center",
            habitat: "Campos y humedales.",
            feeding: "Insectos y pequeños invertebrados.",
            features: "Fuerte canto de alerta y gran protector de su nido.",
            humanRelation: "Conocido como el vigilante del campo.",
            heritage: "El Tero forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representado en su típica postura erguida de vigía, listo para emitir su característico chillido de alarma."
        },
        {
            id: 11,
            name: "Flamenco Andino",
            scientificName: "Phoenicoparrus andinus",
            type: "Ave acuática",
            image: "EsculturasKhuyay/Flamenco.jpeg",
            realImage: "AnimalesRealesKhuyay/Flamenco.jpg",
            habitat: "Lagunas altoandinas.",
            feeding: "Algas y microorganismos.",
            features: "Plumaje rosado y patas largas.",
            humanRelation: "Símbolo de la belleza natural de las lagunas andinas.",
            heritage: "El Flamenco Andino forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representado en su pose clásica sobre una pata, evocando los espejos de agua de la cordillera."
        },
        {
            id: 12,
            name: "Garza",
            scientificName: "Ardea alba",
            type: "Ave acuática",
            image: "EsculturasKhuyay/Garza.jpeg",
            realImage: "AnimalesRealesKhuyay/garza.jpg",
            habitat: "Ríos, lagunas y humedales.",
            feeding: "Peces e insectos.",
            features: "Gran paciencia para cazar y vuelo elegante.",
            humanRelation: "Relacionada con la tranquilidad y el equilibrio natural.",
            heritage: "La Garza forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura que captura su cuello esbelto y silueta elegante en los márgenes de agua."
        },
        {
            id: 13,
            name: "Lechuza",
            scientificName: "Tyto alba",
            type: "Ave rapaz nocturna",
            image: "EsculturasKhuyay/Lechuza.jpeg",
            realImage: "AnimalesRealesKhuyay/buho.jpg",
            habitat: "Campos y construcciones rurales.",
            feeding: "Roedores e insectos.",
            features: "Vuelo silencioso y excelente visión nocturna.",
            humanRelation: "Ayuda al control natural de plagas.",
            heritage: "La Lechuza forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura con su característico disco facial en forma de corazón y mirada fija."
        },
        {
            id: 15,
            name: "Águila Mora",
            scientificName: "Geranoaetus melanoleucus",
            type: "Ave rapaz",
            image: "EsculturasKhuyay/AguilaMora.jpeg",
            realImage: "AnimalesRealesKhuyay/aguila mora.jpg",
            habitat: "Montañas y zonas abiertas.",
            feeding: "Roedores y reptiles.",
            features: "Gran visión y vuelo imponente.",
            humanRelation: "Representa la fuerza y el equilibrio natural.",
            heritage: "El Águila Mora forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Representada en su pose clásica de acecho sobre un tronco nativo, vigilando los horizontes del parque."
        },
        {
            id: 16,
            name: "Taruca",
            scientificName: "Hippocamelus antisensis",
            type: "Mamífero herbívoro",
            image: "EsculturasKhuyay/Taruca.jpeg",
            realImage: "AnimalesRealesKhuyay/Taruca.jpeg",
            objectPosition: "center",
            habitat: "Pastizales de altura andinos (Noroeste argentino).",
            feeding: "Vegetación nativa de alta montaña.",
            features: "En peligro de extinción (menos de 2.500 individuos). Declarada Monumento Natural Nacional.",
            humanRelation: "Sufre amenazas por pérdida de hábitat, caza furtiva y competencia con ganado doméstico.",
            heritage: "La Taruca forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura que rinde homenaje a este valioso cérvido andino, recordando la urgencia de su conservación."
        },
        {
            id: 17,
            name: "Quirquincho Andino",
            scientificName: "Chaetophractus nationi",
            type: "Mamífero acorazado",
            image: "EsculturasKhuyay/Quirquincho.jpeg",
            realImage: "AnimalesRealesKhuyay/Quierquincho.jpeg",
            habitat: "Puna y estepas altoandinas de suelo arenoso.",
            feeding: "Insectos, larvas, raíces, pequeños vertebrados y carroña.",
            features: "Caparazón óseo protector con bandas móviles. Excelente cavador de madrigueras.",
            humanRelation: "Especie protegida cuya supervivencia se ve amenazada por la pérdida de hábitat.",
            heritage: "El Quirquincho Andino forma parte del patrimonio natural y cultural de los Andes riojanos, representando el vínculo entre la naturaleza, la historia y la vida de montaña.",
            sculptureNote: "Escultura que destaca sus placas acorazadas y garras excavadoras, integrada en los bordes arenosos de la estrella."
        }
    ];

    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-logo" onClick={() => navigateTo('home', '')} style={{ cursor: 'pointer' }}>
                    <img src="logokhuyay.JPG" alt="Logo Parque Pacha Khuyay" className="logo-image" />
                    <span className="logo-text">PARQUE PACHA KHUYAY</span>
                </div>
                
                <div className="nav-links">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', ''); }} className={currentView === 'home' && !hash ? 'active-nav-link' : ''}>Inicio</a>
                    <a href="#/sobre-nosotros" onClick={(e) => { e.preventDefault(); navigateTo('sobre-nosotros'); }} className={currentView === 'sobre-nosotros' ? 'active-nav-link' : ''}>Sobre nosotros</a>
                    <a href="#que-es" onClick={(e) => { e.preventDefault(); navigateTo('home', '#que-es'); }} className={currentView === 'home' && hash === '#que-es' ? 'active-nav-link' : ''}>¿Qué significa?</a>
                    <a href="#fauna" onClick={(e) => { e.preventDefault(); navigateTo('home', '#fauna'); }} className={currentView === 'home' && hash === '#fauna' ? 'active-nav-link' : ''}>Fauna</a>
                    <a href="#simbolismo" onClick={(e) => { e.preventDefault(); navigateTo('home', '#simbolismo'); }} className={currentView === 'home' && hash === '#simbolismo' ? 'active-nav-link' : ''}>Simbolismo</a>
                    <a href="#geoglifos" onClick={(e) => { e.preventDefault(); navigateTo('home', '#geoglifos'); }} className={currentView === 'home' && hash === '#geoglifos' ? 'active-nav-link' : ''}>Geoglifos</a>
                    <a href="#ubicacion" onClick={(e) => { e.preventDefault(); navigateTo('home', '#ubicacion'); }} className={currentView === 'home' && hash === '#ubicacion' ? 'active-nav-link' : ''}>Ubicación</a>
                    <a href="#inauguracion" className="nav-inauguracion" onClick={(e) => { e.preventDefault(); navigateTo('home', '#inauguracion'); }}>¡Inauguración!</a>
                </div>

                <button 
                    className="mobile-menu-btn" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
            </nav>

            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', ''); }}>Inicio</a>
                <a href="#/sobre-nosotros" onClick={(e) => { e.preventDefault(); navigateTo('sobre-nosotros'); }}>Sobre nosotros</a>
                <a href="#que-es" onClick={(e) => { e.preventDefault(); navigateTo('home', '#que-es'); }}>¿Qué significa?</a>
                <a href="#fauna" onClick={(e) => { e.preventDefault(); navigateTo('home', '#fauna'); }}>Fauna</a>
                <a href="#simbolismo" onClick={(e) => { e.preventDefault(); navigateTo('home', '#simbolismo'); }}>Simbolismo</a>
                <a href="#geoglifos" onClick={(e) => { e.preventDefault(); navigateTo('home', '#geoglifos'); }}>Geoglifos</a>
                <a href="#ubicacion" onClick={(e) => { e.preventDefault(); navigateTo('home', '#ubicacion'); }}>Ubicación</a>
                <a href="#inauguracion" className="nav-inauguracion-mobile" onClick={(e) => { e.preventDefault(); navigateTo('home', '#inauguracion'); }}>¡Inauguración!</a>
            </div>

            {currentView === 'home' ? (
                <>
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
                            <h1 className="hero-title">
                                Parque Pacha <span className="text-primary">Khuyay</span>
                            </h1>
                            <p className="hero-description">
                                Bienvenidos, esta es la página de un lugar encantador:<br/><br/>
                                <strong>Pacha Khuyay</strong> significa <em>amor a la tierra, a la naturaleza y a su gente</em>.
                            </p>
                            <a href="#fauna" onClick={(e) => { e.preventDefault(); navigateTo('home', '#fauna'); }} className="btn-red">
                                VER LAS ESCULTURAS <ArrowRight size={18} aria-hidden="true" />
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
            <section id="pilares" className="bg-light">
                <div className="container">
                    <motion.div 
                        className="features-grid"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div 
                            className="feature-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            <div className="feature-card-icon-wrapper">
                                <Compass size={32} aria-hidden="true" />
                            </div>
                            <h3>Turístico</h3>
                            <p>Recorré un paseo a cielo abierto único en Argentina, con vistas a la cordillera y 22 esculturas de fauna andina que convierten a Vinchina en un destino imperdible.</p>
                        </motion.div>
                        <motion.div 
                            className="feature-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            <div className="feature-card-icon-wrapper">
                                <Heart size={32} aria-hidden="true" />
                            </div>
                            <h3>Cultural</h3>
                            <p>Conocé el proyecto colectivo que dejó su huella en el pueblo. Cada obra es un homenaje a la identidad riojana y al vínculo entre la gente y su tierra.</p>
                        </motion.div>
                        <motion.div 
                            className="feature-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            <div className="feature-card-icon-wrapper">
                                <BookOpen size={32} aria-hidden="true" />
                            </div>
                            <h3>Educativo</h3>
                            <p>Aprendé sobre la fauna nativa de los Andes en un espacio pensado para conectar a chicos y grandes con la naturaleza, la historia y el respeto por el entorno.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section: Sobre Nosotros / Mensaje de Apertura */}
            <section id="sobre-nosotros" className="sobre-nosotros-section">
                <div className="container">
                    <motion.div 
                        className="apertura-intro-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{ marginTop: '40px' }}
                    >
                        <p className="apertura-location">
                            Ubicado al ingreso de Villa San José de Vinchina, este parque se erige como un portal hacia la inmensidad de la Cordillera de los Andes y el límite con Chile. Desde aquí comienza el encuentro con nuestra tierra y con la madre naturaleza.
                        </p>
                        <div className="apertura-monumento">
                            <p>
                                Pacha Khuyay es un verdadero monumento a la fauna andina, único en el país. Son <strong>22 obras de arte</strong>, las esculturas de cada una de las especies que habitan y resisten en la puna riojana, implantadas en la réplica perfecta de la estrella Capallan, lo que le da al lugar una belleza artística incomparable.
                            </p>
                            <p>
                                Donde se complementan perfectamente la cultura ancestral, el arte, la fauna y el paisaje precordillerano.
                            </p>
                        </div>
                    </motion.div>

                    <div className="sueno-personal-grid">
                        <motion.div 
                            className="sueno-personal-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="sueno-title">Un Legado de Amor</h3>
                            <p className="sueno-text">
                                Esto nació como un sueño, que se convirtió en proyecto, y luego lo hicimos realidad, sin subsidios del estado sin espónsor alguno, se solventó con mis propios recursos económicos.
                            </p>
                            <div className="sueno-highlight">
                                Pacha KHUYAY es mi regalo y parte del legado que quedará para siempre en mi amado pueblo.
                            </div>
                        </motion.div>
                        <motion.div 
                            className="sueno-love-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="love-text">
                                "Nada se hace sin amor, y esto está hecho con ese sentimiento de amor a nuestra gente y a la tierra que nos cobijó."
                            </p>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
                            <button 
                                onClick={() => navigateTo('sobre-nosotros')}
                                className="btn-red"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                            >
                                <BookOpen size={18} /> CONOCER AL EQUIPO Y COLABORADORES
                            </button>
                        </div>

                        <div className="apertura-welcome-footer">
                            <h4>Bienvenidos a Pacha Khuyay.</h4>
                            <h5>Bienvenidos a Vinchina.</h5>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Inauguración Section */}
            <section id="inauguracion" className="bg-white">
                <div className="container">
                    <div className="section-header-center">
                        <motion.h2 
                            className="section-title inauguration-title"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: 'spring' }}
                        >
                            ACTO DE INAUGURACIÓN DEL PARQUE PACHA KHUYAY - 8 DE ENERO DE 2026
                        </motion.h2>
                    </div>
                    <div className="inauguracion-gallery">
                        <motion.div 
                            className="inauguracion-video-wrapper"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            onViewportEnter={() => video1Ref.current?.play()}
                            onViewportLeave={() => video1Ref.current?.pause()}
                            transition={{ duration: 0.8 }}
                        >
                            <video ref={video1Ref} src="InaguracionKhuyay/EL MEJOR REGALO PARA MI PUEBLO Mi mejor cumpleaños__ Infinitas Gracias a Dios y a todos . _PACHAKHUYAY(720P_HD) (1).mp4" controls className="inauguracion-video" muted playsInline />
                        </motion.div>
                        <motion.div 
                            className="inauguracion-video-wrapper"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            onViewportEnter={() => video2Ref.current?.play()}
                            onViewportLeave={() => video2Ref.current?.pause()}
                            transition={{ duration: 0.8 }}
                        >
                            <video ref={video2Ref} src="InaguracionKhuyay/Facebook 1209197840660884(480P_SD).mp4" controls className="inauguracion-video" muted playsInline />
                        </motion.div>
                        <motion.div 
                            className="inauguracion-video-wrapper"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            onViewportEnter={() => video3Ref.current?.play()}
                            onViewportLeave={() => video3Ref.current?.pause()}
                            transition={{ duration: 0.8 }}
                        >
                            <video ref={video3Ref} src="InaguracionKhuyay/video01.mp4" controls className="inauguracion-video" muted playsInline />
                        </motion.div>
                        <motion.div 
                            className="inauguracion-video-wrapper"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            onViewportEnter={() => video4Ref.current?.play()}
                            onViewportLeave={() => video4Ref.current?.pause()}
                            transition={{ duration: 0.8 }}
                        >
                            <video ref={video4Ref} src="InaguracionKhuyay/video02.mp4" controls className="inauguracion-video" muted playsInline />
                        </motion.div>
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


            {/* Fauna Section */}
            <section id="fauna" className="bg-light">
                <div className="container">
                    <motion.div 
                        className="section-header-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">Fauna Autóctona</h2>
                        <div className="section-intro-container">
                            <p className="section-intro-text">
                                Colección de fichas técnicas educativas e interpretativas del parque Pacha Khuyay, espacio dedicado a la conservación y valoración de la fauna autóctona.
                            </p>
                        </div>
                    </motion.div>

                    {/* Fauna Grid Display */}
                    <div className="fauna-grid">
                        {faunaData.map((animal) => (
                            <FaunaCard key={animal.id} animal={animal} />
                        ))}
                    </div>
                </div>
            </section>

            {/* New Symbolism Section: Mirror of Heaven */}
            <section id="simbolismo" className="bg-white">
                <div className="container">
                    <motion.div 
                        className="section-header-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-tag">El Espejo del Cielo</span>
                        <h2 className="section-title">¿Qué simbolizan las Estrellas?</h2>
                    </motion.div>
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
            <section id="experiencia" className="bg-light">
                <div className="container">
                    <motion.div 
                        className="section-header-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-tag">Herencia de los Capayanes</span>
                        <h2 className="section-title">Geometría de 9 Puntas</h2>
                        <div className="section-intro-container">
                            <p className="section-intro-text large">
                                Ubicadas a solo 200 metros del Río Bermejo, las estrellas fueron construidas con 
                                piedras de tres colores: <strong>blancas, rojas y azuladas/negras</strong>. 
                                De las siete estructuras originales, hoy tres han sido fielmente reconstruidas.
                            </p>
                        </div>
                    </motion.div>                    <motion.div 
                        className="features-grid"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div 
                            className="feature-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            <div className="feature-card-icon-wrapper">
                                <Landmark size={32} aria-hidden="true" />
                            </div>
                            <h3>Parque Arqueológico</h3>
                            <p>Un área de 2 km de largo protegida para preservar el rastro de la civilización que habitó el valle hasta el siglo XV.</p>
                        </motion.div>
                        <motion.div 
                            className="feature-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            <div className="feature-card-icon-wrapper">
                                <Sun size={32} aria-hidden="true" />
                            </div>
                            <h3>Ciclos Solares</h3>
                            <p>Utilizadas como calendario solar y lunar para determinar los momentos exactos de siembra y cosecha.</p>
                        </motion.div>
                        <motion.div 
                            className="feature-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            <div className="feature-card-icon-wrapper">
                                <Droplets size={32} aria-hidden="true" />
                            </div>
                            <h3>Magia Simpática</h3>
                            <p>El uso ritual del agua en el interior de las estrellas como ofrenda para atraer la abundancia hídrica.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section id="geoglifos" className="bg-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-tag">Galería de Imágenes</span>
                        <h2 className="section-title">Parque arqueológico, las estrellas Capayan</h2>
                    </motion.div>
                    <motion.div 
                        className="gallery-grid"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {images.map((img, i) => (
                            <motion.div 
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ y: -10 }}
                                className="gallery-item"
                            >
                                <img src={img.url} alt={img.title} loading="lazy" />
                                <div className="gallery-label">{img.title}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>



            {/* Location & Map Section */}
            <section id="ubicacion">
                <div className="container">
                    <motion.div 
                        className="section-header-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-tag">Ubicación y Acceso</span>
                        <h2 className="section-title">Valle del Bermejo</h2>
                    </motion.div>
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
                </>
            ) : (
                <SobreNosotrosView navigateTo={navigateTo} />
            )}

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="navbar-logo" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
                            <img src="logokhuyay.JPG" alt="Logo Parque Pacha Khuyay" className="logo-image" />
                            <span className="logo-text">PACHA KHUYAY</span>
                        </div>
                        <div className="footer-links">
                            <a href="#que-es" onClick={(e) => { e.preventDefault(); navigateTo('home', '#que-es'); }}>YACIMIENTO</a>
                            <a href="#geoglifos" onClick={(e) => { e.preventDefault(); navigateTo('home', '#geoglifos'); }}>GALERÍA</a>
                            <a href="#fauna" onClick={(e) => { e.preventDefault(); navigateTo('home', '#fauna'); }}>FAUNA</a>
                            <a href="#/sobre-nosotros" onClick={(e) => { e.preventDefault(); navigateTo('sobre-nosotros'); }}>SOBRE NOSOTROS</a>
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
