import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Star, MapPin, Send, ArrowRight, Menu, X, Landmark, Droplets, Moon, Sun } from 'lucide-react';
import axios from 'axios';

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            quechuaName: "Kuntur",
            image: "/animalesautoctonos/animal1.jpg",
            symbolism: "Mensajero cósmico y guardián de las alturas",
            description: "El ave voladora más grande del mundo, con una envergadura de hasta 3 metros. Es un símbolo de libertad y espiritualidad para los pueblos andinos, actuando como nexo entre el mundo terrenal y el celestial.",
            details: [
                "Envergadura: hasta 3.2 metros",
                "Hábitat: Cumbres andinas y valles rocosos",
                "Función ecológica: Limpieza y equilibrio del ecosistema (carroñero)"
            ],
            sculptureNote: "Escultura 'Pacha Khuyay' (Amar a la Tierra), inaugurada en 2026 como homenaje y bienvenida al parque."
        },
        {
            id: 2,
            name: "Águila Mora",
            scientificName: "Geranoaetus melanoleucus",
            quechuaName: "Anka",
            image: "/animalesautoctonos/animal2.jpg",
            symbolism: "Agudeza visual, soberanía y poder",
            description: "Majestuosa ave rapaz de gran tamaño que habita en las laderas andinas y zonas de estepa. Destaca por su planeo imponente y su plumaje característico gris azulado con pecho blanco.",
            details: [
                "Alimentación: Pequeños mamíferos y reptiles",
                "Comportamiento: Vuelos térmicos en solitario o en parejas",
                "Presencia: Frecuente en los cielos de Vinchina"
            ],
            sculptureNote: "Representada en su pose clásica de acecho sobre un tronco nativo, vigilando los horizontes del parque."
        },
        {
            id: 3,
            name: "Puma y Taruca",
            scientificName: "Puma concolor & Hippocamelus antisensis",
            quechuaName: "Puma & Taruka",
            image: "/animalesautoctonos/animal3.jpg",
            symbolism: "Fuerza, sigilo y biodiversidad de altura",
            description: "Dos especies clave del ecosistema montañoso riojano. El puma representa al depredador tope y solitario, mientras que la taruca (ciervo andino) representa la agilidad y adaptación a los faldeos rocosos escarpados.",
            details: [
                "Puma: Felino adaptable, gran regulador de poblaciones silvestres",
                "Taruca: Ciervo autóctono declarado Monumento Natural Nacional",
                "Interacción: Relación ecológica clásica de depredador-presa en los Andes"
            ],
            sculptureNote: "Esculturas detalladas que muestran a ambas especies integradas en la geografía del yacimiento."
        },
        {
            id: 4,
            name: "Suri y Vicuña",
            scientificName: "Rhea pennata & Vicugna vicugna",
            quechuaName: "Suri & Wikuña",
            image: "/animalesautoctonos/animal4.jpg",
            symbolism: "Adaptabilidad extrema y elegancia andina",
            description: "Especies emblemáticas del altiplano y la puna de La Rioja. El suri (ñandú petiso) es una gran ave corredora no voladora, mientras que la vicuña destaca por poseer una de las fibras animales más finas y valiosas del planeta.",
            details: [
                "Suri: Capacidad de correr a alta velocidad en terrenos pedregosos",
                "Vicuña: Especie insignia de la Reserva Provincial Laguna Brava",
                "Adaptación: Pelaje denso que las protege de vientos y frío extremo"
            ],
            sculptureNote: "Figuras a tamaño real situadas en los flancos de la estrella ceremonial, enriqueciendo su entorno arqueológico."
        }
    ];

    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-logo">
                    <Star className="logo-icon" size={24} fill="currentColor" />
                    <span className="logo-text">PARQUE PACHA KHUYAY</span>
                </div>
                
                <div className="nav-links">
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

                    <div className="fauna-grid">
                        {faunaData.map((animal) => (
                            <motion.div 
                                key={animal.id}
                                className="fauna-card shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: animal.id * 0.1 }}
                            >
                                <div className="fauna-image-container">
                                    <img src={animal.image} alt={animal.name} className="fauna-image" />
                                    <div className="fauna-badge">
                                        <span className="fauna-quechua">{animal.quechuaName}</span>
                                    </div>
                                </div>
                                <div className="fauna-content">
                                    <span className="fauna-scientific">{animal.scientificName}</span>
                                    <h3 className="fauna-name">{animal.name}</h3>
                                    <div className="fauna-symbolism-tag">
                                        <Star size={12} fill="currentColor" className="text-primary-color" style={{ marginRight: '6px' }} />
                                        <span>{animal.symbolism}</span>
                                    </div>
                                    <p className="fauna-desc">{animal.description}</p>
                                    <div className="fauna-details">
                                        <h4 className="fauna-details-title">Características Clave:</h4>
                                        <ul>
                                            {animal.details.map((detail, idx) => (
                                                <li key={idx}>
                                                    <span className="bullet-point">•</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="fauna-sculpture-note">
                                        <Landmark size={14} className="text-primary-color" style={{ minWidth: '14px', marginTop: '3px' }} />
                                        <span>{animal.sculptureNote}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                            <Star className="logo-icon" size={30} fill="currentColor" />
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
