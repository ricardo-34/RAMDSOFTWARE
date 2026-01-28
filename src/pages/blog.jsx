import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
    BookOpen, Calendar, Clock, User, Tag, Search, TrendingUp,
    ArrowRight, ChevronRight, X, Menu, Linkedin, Github, Twitter,
    Code2, Smartphone, Globe, Database, Shield, Zap, MessageSquare,
    Eye, Heart, Share2, Filter
} from 'lucide-react';
import styles from './blog.module.css';
import logoRAMD from "../assets/RAMD-LOGO-SINFONDO.png";
import logoRAMDBLANCO from "../assets/RAMD-LOGO-FONDOBLANCO.png";

const Blog = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const categories = [
        { id: 'all', name: 'Todos los Artículos', count: 12, icon: <BookOpen size={18} /> },
        { id: 'desarrollo-web', name: 'Desarrollo Web', count: 4, icon: <Code2 size={18} /> },
        { id: 'mobile', name: 'Desarrollo Móvil', count: 3, icon: <Smartphone size={18} /> },
        { id: 'arquitectura', name: 'Arquitectura', count: 2, icon: <Database size={18} /> },
        { id: 'mejores-practicas', name: 'Mejores Prácticas', count: 3, icon: <Shield size={18} /> }
    ];

    const blogPosts = [
        {
            id: 1,
            title: 'Guía Completa de React 18: Nuevas Características y Mejoras de Performance',
            excerpt: 'Descubre las nuevas características de React 18 incluyendo Concurrent Rendering, Automatic Batching, y Suspense SSR. Aprende cómo implementarlas en tus proyectos.',
            category: 'desarrollo-web',
            author: 'RAMD Team',
            date: '15 Enero, 2026',
            readTime: '8 min',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            featured: true,
            views: 2345,
            likes: 189
        },
        {
            id: 2,
            title: 'Flutter vs React Native 2026: ¿Cuál Framework Elegir para tu App?',
            excerpt: 'Comparación detallada entre Flutter y React Native. Analizamos rendimiento, ecosistema, curva de aprendizaje y casos de uso ideales para cada tecnología.',
            category: 'mobile',
            author: 'RAMD Team',
            date: '12 Enero, 2026',
            readTime: '10 min',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
            featured: true,
            views: 3120,
            likes: 245
        },
        {
            id: 3,
            title: 'Arquitectura de Microservicios: Patrones y Mejores Prácticas',
            excerpt: 'Explora los patrones esenciales de microservicios: API Gateway, Service Discovery, Circuit Breaker y Event Sourcing. Con ejemplos prácticos en Node.js.',
            category: 'arquitectura',
            author: 'RAMD Team',
            date: '10 Enero, 2026',
            readTime: '12 min',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
            featured: false,
            views: 1876,
            likes: 156
        },
        {
            id: 4,
            title: 'Seguridad en APIs REST: Guía Definitiva para Desarrolladores',
            excerpt: 'Aprende a proteger tus APIs con JWT, OAuth 2.0, rate limiting y validación de inputs. Prevén ataques comunes y cumple con OWASP API Security.',
            category: 'mejores-practicas',
            author: 'RAMD Team',
            date: '8 Enero, 2026',
            readTime: '15 min',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
            featured: false,
            views: 2654,
            likes: 298
        },
        {
            id: 5,
            title: 'Next.js 14: App Router y Server Components en Producción',
            excerpt: 'Guía práctica para migrar a Next.js 14. Implementa Server Components, optimiza el bundle size y mejora el SEO de tu aplicación.',
            category: 'desarrollo-web',
            author: 'RAMD Team',
            date: '5 Enero, 2026',
            readTime: '11 min',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
            featured: false,
            views: 1987,
            likes: 167
        },
        {
            id: 6,
            title: 'Testing en Flutter: Unit Tests, Widget Tests e Integration Tests',
            excerpt: 'Estrategia completa de testing para apps Flutter. Aprende a implementar tests automatizados y alcanza 80%+ de cobertura de código.',
            category: 'mobile',
            author: 'RAMD Team',
            date: '3 Enero, 2026',
            readTime: '9 min',
            image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
            featured: false,
            views: 1543,
            likes: 134
        },
        {
            id: 7,
            title: 'PostgreSQL vs MongoDB: Cómo Elegir la Base de Datos Correcta',
            excerpt: 'Análisis profundo de cuándo usar SQL vs NoSQL. Casos de uso, escalabilidad, consistencia y rendimiento comparados con ejemplos reales.',
            category: 'arquitectura',
            author: 'RAMD Team',
            date: '1 Enero, 2026',
            readTime: '13 min',
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
            featured: false,
            views: 2198,
            likes: 203
        },
        {
            id: 8,
            title: 'CI/CD con GitHub Actions: Automatiza tus Deployments',
            excerpt: 'Configura pipelines completos de CI/CD con GitHub Actions. Desde testing automatizado hasta deployment en AWS/GCP con cero downtime.',
            category: 'mejores-practicas',
            author: 'RAMD Team',
            date: '28 Diciembre, 2025',
            readTime: '10 min',
            image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
            featured: false,
            views: 1765,
            likes: 145
        },
        {
            id: 9,
            title: 'TypeScript: Tipos Avanzados y Patrones para Código Enterprise',
            excerpt: 'Domina TypeScript con tipos genéricos, utility types, conditional types y decorators. Escribe código más robusto y mantenible.',
            category: 'desarrollo-web',
            author: 'RAMD Team',
            date: '25 Diciembre, 2025',
            readTime: '14 min',
            image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
            featured: false,
            views: 2087,
            likes: 176
        },
        {
            id: 10,
            title: 'State Management en React: Redux vs Zustand vs Context API',
            excerpt: 'Comparación exhaustiva de soluciones de estado en React. Descubre cuál se adapta mejor a tu proyecto según complejidad y escala.',
            category: 'desarrollo-web',
            author: 'RAMD Team',
            date: '22 Diciembre, 2025',
            readTime: '12 min',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            featured: false,
            views: 2543,
            likes: 234
        },
        {
            id: 11,
            title: 'Clean Code en Python: Principios SOLID con Ejemplos Prácticos',
            excerpt: 'Aplica principios SOLID en Python para crear código limpio y mantenible. Incluye refactoring de código legacy y patrones de diseño.',
            category: 'mejores-practicas',
            author: 'RAMD Team',
            date: '20 Diciembre, 2025',
            readTime: '11 min',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
            featured: false,
            views: 1876,
            likes: 167
        },
        {
            id: 12,
            title: 'Performance en Apps Móviles: Optimización de Flutter y React Native',
            excerpt: 'Técnicas avanzadas para optimizar rendimiento en apps móviles. Lazy loading, code splitting, optimización de imágenes y más.',
            category: 'mobile',
            author: 'RAMD Team',
            date: '18 Diciembre, 2025',
            readTime: '10 min',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
            featured: false,
            views: 1654,
            likes: 143
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter(post => post.featured);
    const recentPosts = blogPosts.slice(0, 5);

    return (
        <div className={styles.container}>
            {/* Navigation */}
            <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
                <div className={styles.navContainer}>
                    <img src={logoRAMD} alt="RAMD" className={styles.navLogo} />
                    <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/#servicios">Servicios</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/documentation">Docs</a></li>
                        <li><a href="/#contacto">Contacto</a></li>
                        <li><a href="/#contacto" className={styles.navCta}>
                            Iniciar Proyecto<ArrowRight size={18} />
                        </a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <span className={styles.heroBadge}>
                            <TrendingUp size={16} />
                            Blog Técnico
                        </span>
                        <h1 className={styles.heroTitle}>
                            Insights sobre Desarrollo de Software
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Artículos, tutoriales y mejores prácticas sobre tecnologías modernas,
                            arquitectura de software y tendencias en desarrollo web y móvil.
                        </p>
                        <div className={styles.heroSearch}>
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Buscar artículos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {selectedCategory === 'all' && !searchQuery && (
                <section className={styles.featuredSection}>
                    <div className={styles.featuredContainer}>
                        <div className={styles.sectionHeader}>
                            <h2>Artículos Destacados</h2>
                            <p>Los posts más populares e importantes de nuestro blog</p>
                        </div>
                        <div className={styles.featuredGrid}>
                            {featuredPosts.map((post) => (
                                <article key={post.id} className={styles.featuredCard}>
                                    <div className={styles.featuredImage}>
                                        <img src={post.image} alt={post.title} />
                                        <span className={styles.featuredBadge}>Destacado</span>
                                    </div>
                                    <div className={styles.featuredContent}>
                                        <div className={styles.featuredMeta}>
                                            <span className={styles.category}>
                                                {categories.find(c => c.id === post.category)?.icon}
                                                {categories.find(c => c.id === post.category)?.name}
                                            </span>
                                            <span className={styles.readTime}>
                                                <Clock size={16} />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <div className={styles.featuredFooter}>
                                            <div className={styles.postStats}>
                                                <span><Eye size={16} /> {post.views.toLocaleString()}</span>
                                                <span><Heart size={16} /> {post.likes}</span>
                                            </div>
                                            <Link to={`/blog/${post.id}`} className={styles.readMoreBtn}>
                                                Leer Más
                                                <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content */}
            <section className={styles.content}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentGrid}>
                        {/* Main Posts */}
                        <main className={styles.mainContent}>
                            {/* Category Filter */}
                            <div className={styles.filterBar}>
                                <h2>
                                    {selectedCategory === 'all'
                                        ? 'Todos los Artículos'
                                        : categories.find(c => c.id === selectedCategory)?.name}
                                </h2>
                                <div className={styles.filterButtons}>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            className={`${styles.filterBtn} ${selectedCategory === category.id ? styles.active : ''}`}
                                            onClick={() => setSelectedCategory(category.id)}
                                        >
                                            {category.icon}
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Posts Grid */}
                            <div className={styles.postsGrid}>
                                {filteredPosts.map((post) => (
                                    <article key={post.id} className={styles.postCard}>
                                        <div className={styles.postImage}>
                                            <img src={post.image} alt={post.title} />
                                        </div>
                                        <div className={styles.postContent}>
                                            <div className={styles.postMeta}>
                                                <span className={styles.categoryTag}>
                                                    {categories.find(c => c.id === post.category)?.icon}
                                                    {categories.find(c => c.id === post.category)?.name}
                                                </span>
                                                <span className={styles.postDate}>
                                                    <Calendar size={14} />
                                                    {post.date}
                                                </span>
                                            </div>
                                            <h3>{post.title}</h3>
                                            <p>{post.excerpt}</p>
                                            <div className={styles.postFooter}>
                                                <div className={styles.postInfo}>
                                                    <span className={styles.readTime}>
                                                        <Clock size={14} />
                                                        {post.readTime}
                                                    </span>
                                                    <div className={styles.postStats}>
                                                        <span><Eye size={14} /> {post.views.toLocaleString()}</span>
                                                        <span><Heart size={14} /> {post.likes}</span>
                                                    </div>
                                                </div>
                                                <Link to={`/blog/${post.id}`} className={styles.readBtn}>
                                                    Leer Artículo
                                                    <ChevronRight size={18} />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Load More */}
                            {filteredPosts.length > 6 && (
                                <div className={styles.loadMore}>
                                    <button className={styles.loadMoreBtn}>
                                        Cargar Más Artículos
                                    </button>
                                </div>
                            )}
                        </main>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarSticky}>
                                {/* Newsletter */}
                                <div className={styles.newsletterCard}>
                                    <div className={styles.newsletterIcon}>
                                        <MessageSquare size={32} />
                                    </div>
                                    <h3>Suscríbete al Newsletter</h3>
                                    <p>Recibe los mejores artículos sobre desarrollo directamente en tu inbox.</p>
                                    <form className={styles.newsletterForm}>
                                        <input type="email" placeholder="tu@email.com" required />
                                        <button type="submit" className={styles.subscribeBtn}>
                                            Suscribirme
                                        </button>
                                    </form>
                                    <span className={styles.newsletterNote}>
                                        <Shield size={14} />
                                        Sin spam. Cancela cuando quieras.
                                    </span>
                                </div>

                                {/* Categories */}
                                <div className={styles.categoriesCard}>
                                    <h4>Categorías</h4>
                                    <div className={styles.categoriesList}>
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.active : ''}`}
                                                onClick={() => setSelectedCategory(category.id)}
                                            >
                                                <div className={styles.categoryInfo}>
                                                    {category.icon}
                                                    <span>{category.name}</span>
                                                </div>
                                                <span className={styles.categoryCount}>{category.count}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Posts */}
                                <div className={styles.recentCard}>
                                    <h4>Artículos Recientes</h4>
                                    <div className={styles.recentList}>
                                        {recentPosts.map((post) => (
                                            <Link key={post.id} to={`/blog/${post.id}`} className={styles.recentItem}>
                                                <div className={styles.recentImage}>
                                                    <img src={post.image} alt={post.title} />
                                                </div>
                                                <div className={styles.recentContent}>
                                                    <h5>{post.title}</h5>
                                                    <span className={styles.recentDate}>
                                                        <Calendar size={12} />
                                                        {post.date}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Card */}
                                <div className={styles.ctaCard}>
                                    <Zap size={32} className={styles.ctaIcon} />
                                    <h3>¿Necesitas Ayuda con tu Proyecto?</h3>
                                    <p>Nuestro equipo está listo para convertir tus ideas en realidad.</p>
                                    <a href="/#contacto" className={styles.ctaBtn}>
                                        Agendar Reunión
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerMain}>
                        <div className={styles.footerBrand}>
                            <img
                                src={logoRAMD}
                                alt="RAMD"
                                className={styles.footerLogoRAMD}
                            />
                            <p className={styles.footerTagline}>
                                Desarrollamos software empresarial de clase mundial para empresas que buscan excelencia digital.
                            </p>
                            <div className={styles.footerSocial}>
                                <a href="#"><Linkedin size={20} /></a>
                                <a href="#"><Github size={20} /></a>
                                <a href="#"><Twitter size={20} /></a>
                            </div>
                        </div>
                        <div className={styles.footerLinks}>
                            <div className={styles.footerColumn}>
                                <h4>Servicios</h4>
                                <ul>
                                    <li><a onClick={() => scrollToSection('servicios')}>Desarrollo Web</a></li>
                                    <li><a onClick={() => scrollToSection('servicios')}>Aplicaciones Móviles</a></li>
                                    <li><a onClick={() => scrollToSection('servicios')}>Software a Medida</a></li>
                                    <li><a onClick={() => scrollToSection('servicios')}>Integración</a></li>
                                </ul>
                            </div>
                            <div className={styles.footerColumn}>
                                <h4>Empresa</h4>
                                <ul>
                                    <li><a onClick={() => scrollToSection('nosotros')}>Sobre Nosotros</a></li>
                                    <li><a onClick={() => scrollToSection('casos')}>Casos de Éxito</a></li>
                                    <li><a onClick={() => scrollToSection('contacto')}>Contacto</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className={styles.footerColumn}>
                                <h4>Recursos</h4>
                                <ul>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>

                                    <li>
                                        <Link to="/documentacion">Documentación</Link>
                                    </li>

                                    <li>
                                        <Link to="/terminos-de-servicio">Términos de Servicio</Link>
                                    </li>

                                    <li>
                                        <Link to="/politica-privacidad">Política de Privacidad</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className={styles.footerColumn}>
                                <h4>Contacto</h4>
                                <ul>
                                    <li><a href="mailto:ramd.software@gmail.com">ramd.software@gmail.com</a></li>
                                    <li>Pasto, Nariño</li>
                                    <li>Colombia</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        <p>&copy; 2026 RAMD Software Solutions. Todos los derechos reservados.</p>
                        <div className={styles.footerBottomLinks}>
                            <Link to="/cookies">Cookies</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Blog;