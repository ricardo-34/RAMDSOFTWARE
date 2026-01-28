import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
    Cookie, Shield, Eye, Settings, BarChart3, Target, Globe,
    CheckCircle2, Users, Clock, Mail, MapPin, ArrowRight, ChevronDown,
    X, Menu, Linkedin, Github, Twitter, AlertCircle, Lock, Trash2,
    RefreshCw, Info, Zap, Database
} from 'lucide-react';
import styles from './cookies-policy.module.css';
import logoRAMD from "../assets/RAMD-LOGO-SINFONDO.png";
import logoRAMDBLANCO from "../assets/RAMD-LOGO-FONDOBLANCO.png";

const CookiesPolicy = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [cookiePreferences, setCookiePreferences] = useState({
        essential: true,
        functional: true,
        analytics: true,
        marketing: false
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const cookieTypes = [
        {
            id: 'essential',
            icon: <Shield className={styles.cookieIcon} />,
            title: 'Cookies Esenciales',
            description: 'Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.',
            required: true,
            color: 'primary',
            cookies: [
                {
                    name: 'session_id',
                    purpose: 'Mantener tu sesión activa mientras navegas',
                    duration: 'Sesión (se elimina al cerrar navegador)',
                    type: 'Primera parte'
                },
                {
                    name: 'csrf_token',
                    purpose: 'Protección contra ataques de falsificación de solicitudes',
                    duration: 'Sesión',
                    type: 'Primera parte'
                },
                {
                    name: 'cookie_consent',
                    purpose: 'Recordar tus preferencias de cookies',
                    duration: '1 año',
                    type: 'Primera parte'
                }
            ]
        },
        {
            id: 'functional',
            icon: <Settings className={styles.cookieIcon} />,
            title: 'Cookies Funcionales',
            description: 'Permiten funcionalidades mejoradas y personalización del sitio.',
            required: false,
            color: 'info',
            cookies: [
                {
                    name: 'language_preference',
                    purpose: 'Recordar tu idioma preferido',
                    duration: '1 año',
                    type: 'Primera parte'
                },
                {
                    name: 'theme_mode',
                    purpose: 'Recordar si prefieres modo claro u oscuro',
                    duration: '6 meses',
                    type: 'Primera parte'
                },
                {
                    name: 'form_data',
                    purpose: 'Guardar temporalmente datos de formularios',
                    duration: '7 días',
                    type: 'Primera parte'
                }
            ]
        },
        {
            id: 'analytics',
            icon: <BarChart3 className={styles.cookieIcon} />,
            title: 'Cookies Analíticas',
            description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.',
            required: false,
            color: 'success',
            cookies: [
                {
                    name: '_ga',
                    purpose: 'Identificador único para análisis de Google Analytics',
                    duration: '2 años',
                    type: 'Tercera parte (Google)'
                },
                {
                    name: '_gid',
                    purpose: 'Identificador de sesión para Google Analytics',
                    duration: '24 horas',
                    type: 'Tercera parte (Google)'
                },
                {
                    name: '_gat',
                    purpose: 'Limitar tasa de solicitudes a Google Analytics',
                    duration: '1 minuto',
                    type: 'Tercera parte (Google)'
                }
            ]
        },
        {
            id: 'marketing',
            icon: <Target className={styles.cookieIcon} />,
            title: 'Cookies de Marketing',
            description: 'Utilizadas para mostrar anuncios relevantes y medir la efectividad de campañas.',
            required: false,
            color: 'warning',
            cookies: [
                {
                    name: '_fbp',
                    purpose: 'Seguimiento de conversiones de Facebook',
                    duration: '3 meses',
                    type: 'Tercera parte (Facebook)'
                },
                {
                    name: 'IDE',
                    purpose: 'Seguimiento de anuncios de Google',
                    duration: '1 año',
                    type: 'Tercera parte (Google)'
                }
            ]
        }
    ];

    const cookieSections = [
        {
            id: 'que-son',
            icon: <Info className={styles.sectionIcon} />,
            title: '1. ¿Qué son las Cookies?',
            content: [
                {
                    subtitle: 'Definición',
                    items: [
                        'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web',
                        'Contienen información sobre tu navegación y permiten que el sitio web recuerde tus preferencias',
                        'Son ampliamente utilizadas para hacer que los sitios web funcionen de manera más eficiente',
                        'Las cookies no pueden ejecutar código, no contienen virus ni malware, y no pueden acceder a información de tu disco duro'
                    ]
                },
                {
                    subtitle: 'Tipos de Cookies según Duración',
                    items: [
                        '**Cookies de sesión**: Se eliminan automáticamente cuando cierras el navegador',
                        '**Cookies persistentes**: Permanecen en tu dispositivo durante un tiempo determinado o hasta que las elimines manualmente',
                        '**Cookies de primera parte**: Establecidas directamente por RAMD Software Solutions',
                        '**Cookies de tercera parte**: Establecidas por servicios externos que usamos (Google Analytics, etc.)'
                    ]
                }
            ]
        },
        {
            id: 'como-usamos',
            icon: <Eye className={styles.sectionIcon} />,
            title: '2. Cómo Usamos las Cookies',
            content: [
                {
                    subtitle: 'Finalidades de Uso',
                    items: [
                        '**Funcionalidad esencial**: Mantener tu sesión activa, recordar tus preferencias de idioma',
                        '**Seguridad**: Proteger contra ataques cibernéticos y fraude',
                        '**Análisis y mejora**: Entender cómo usas nuestro sitio para mejorarlo continuamente',
                        '**Personalización**: Adaptar el contenido a tus intereses y preferencias',
                        '**Marketing**: Mostrar contenido relevante y medir la efectividad de nuestras campañas'
                    ]
                },
                {
                    subtitle: 'Información que Recopilamos',
                    items: [
                        'Páginas que visitas en nuestro sitio web',
                        'Tiempo que pasas en cada página',
                        'Enlaces en los que haces clic',
                        'Tipo de navegador y sistema operativo',
                        'Dirección IP (anonimizada)',
                        'Referrer (sitio desde el que llegaste)',
                        'Fecha y hora de tus visitas'
                    ]
                }
            ]
        },
        {
            id: 'tipos-cookies',
            icon: <Database className={styles.sectionIcon} />,
            title: '3. Tipos de Cookies que Utilizamos',
            content: [
                {
                    subtitle: 'Desglose Detallado',
                    items: [
                        'A continuación encontrarás información detallada sobre cada tipo de cookie que utilizamos, su propósito y duración',
                        'Puedes gestionar tus preferencias de cookies en cualquier momento usando el panel de configuración',
                        'Las cookies esenciales no se pueden desactivar ya que son necesarias para el funcionamiento del sitio'
                    ]
                }
            ]
        },
        {
            id: 'terceros',
            icon: <Globe className={styles.sectionIcon} />,
            title: '4. Cookies de Terceros',
            content: [
                {
                    subtitle: 'Servicios de Terceros que Utilizamos',
                    items: [
                        '**Google Analytics**: Para análisis de tráfico y comportamiento de usuarios. Lee su política en https://policies.google.com/privacy',
                        '**Google Tag Manager**: Para gestión de etiquetas de marketing. No recopila datos personales por sí mismo',
                        '**Facebook Pixel**: Para seguimiento de conversiones si aceptas cookies de marketing',
                        'Estos servicios pueden establecer sus propias cookies y están sujetos a sus propias políticas de privacidad'
                    ]
                },
                {
                    subtitle: 'Control sobre Cookies de Terceros',
                    items: [
                        'Puedes desactivar cookies de terceros en la configuración de tu navegador',
                        'Puedes optar por no participar en Google Analytics visitando https://tools.google.com/dlpage/gaoptout',
                        'Las cookies de marketing se pueden desactivar en nuestro panel de preferencias',
                        'Desactivar estas cookies puede afectar algunas funcionalidades del sitio'
                    ]
                }
            ]
        },
        {
            id: 'gestionar',
            icon: <Settings className={styles.sectionIcon} />,
            title: '5. Cómo Gestionar las Cookies',
            content: [
                {
                    subtitle: 'Gestión desde Nuestro Sitio',
                    items: [
                        'Usa el panel de preferencias de cookies en esta página para activar/desactivar categorías',
                        'Tus preferencias se guardarán y respetarán en futuras visitas',
                        'Puedes cambiar tus preferencias en cualquier momento',
                        'El panel está accesible desde el footer en todas las páginas'
                    ]
                },
                {
                    subtitle: 'Gestión desde el Navegador',
                    items: [
                        '**Chrome**: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios',
                        '**Firefox**: Preferencias > Privacidad y seguridad > Cookies y datos del sitio',
                        '**Safari**: Preferencias > Privacidad > Gestionar datos del sitio web',
                        '**Edge**: Configuración > Cookies y permisos del sitio > Cookies y datos del sitio',
                        'Eliminar todas las cookies puede hacer que tengas que iniciar sesión nuevamente'
                    ]
                }
            ]
        },
        {
            id: 'duracion',
            icon: <Clock className={styles.sectionIcon} />,
            title: '6. Duración de las Cookies',
            content: [
                {
                    subtitle: 'Períodos de Retención',
                    items: [
                        '**Cookies de sesión**: Se eliminan al cerrar el navegador',
                        '**Cookies funcionales**: Entre 7 días y 1 año',
                        '**Cookies analíticas**: Entre 1 minuto y 2 años (Google Analytics)',
                        '**Cookies de marketing**: Entre 3 meses y 1 año',
                        'Puedes eliminar todas las cookies manualmente en cualquier momento'
                    ]
                }
            ]
        },
        {
            id: 'actualizaciones',
            icon: <RefreshCw className={styles.sectionIcon} />,
            title: '7. Actualizaciones de esta Política',
            content: [
                {
                    subtitle: 'Cambios y Notificaciones',
                    items: [
                        'Podemos actualizar esta política de cookies ocasionalmente',
                        'Te notificaremos de cambios significativos mediante un aviso en el sitio web',
                        'La fecha de "Última actualización" indica cuándo se modificó por última vez',
                        'Te recomendamos revisar esta página periódicamente',
                        'El uso continuado del sitio implica aceptación de la política actualizada'
                    ]
                }
            ]
        }
    ];

    const faqs = [
        {
            question: '¿Puedo navegar el sitio sin aceptar cookies?',
            answer: 'Puedes navegar nuestro sitio rechazando las cookies no esenciales. Sin embargo, las cookies esenciales son necesarias para funciones básicas como mantener tu sesión. Sin ellas, no podrás usar el sitio correctamente. Las cookies funcionales, analíticas y de marketing son opcionales.'
        },
        {
            question: '¿Las cookies contienen información personal?',
            answer: 'La mayoría de nuestras cookies no contienen información personal identificable. Las cookies esenciales y funcionales contienen solo identificadores técnicos. Las cookies analíticas y de marketing pueden vincular tu navegación con un identificador único, pero no almacenan tu nombre, email u otra información personal.'
        },
        {
            question: '¿Cómo elimino las cookies de RAMD?',
            answer: 'Puedes eliminar las cookies desde la configuración de tu navegador. En Chrome, ve a Configuración > Privacidad y seguridad > Eliminar datos de navegación > Cookies. También puedes configurar tu navegador para que elimine cookies automáticamente al cerrarlo.'
        },
        {
            question: '¿Qué pasa si desactivo Google Analytics?',
            answer: 'Si desactivas las cookies analíticas, dejamos de recopilar datos sobre tu uso del sitio. Esto no afecta ninguna funcionalidad del sitio, pero nos impide entender cómo los usuarios interactúan con nuestras páginas y mejorar la experiencia.'
        },
        {
            question: '¿Mis preferencias de cookies se sincronizan entre dispositivos?',
            answer: 'No, las preferencias de cookies se guardan localmente en cada navegador y dispositivo. Si usas nuestro sitio en múltiples dispositivos o navegadores, necesitarás configurar tus preferencias en cada uno.'
        }
    ];

    const handleToggleCookie = (type) => {
        if (type === 'essential') return; // No se puede desactivar
        setCookiePreferences(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const handleAcceptAll = () => {
        setCookiePreferences({
            essential: true,
            functional: true,
            analytics: true,
            marketing: true
        });
    };

    const handleRejectAll = () => {
        setCookiePreferences({
            essential: true,
            functional: false,
            analytics: false,
            marketing: false
        });
    };

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
                        <li><a href="/#contacto">Contacto</a></li>
                        <li><a href="/#contacto" className={styles.navCta}>
                            Hablar con Experto<ArrowRight size={18} />
                        </a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroIcon}>
                        <Cookie size={48} />
                    </div>
                    <h1 className={styles.heroTitle}>Política de Cookies</h1>
                    <p className={styles.heroSubtitle}>
                        En RAMD Software Solutions utilizamos cookies para mejorar tu experiencia de navegación,
                        analizar el tráfico del sitio y personalizar el contenido. Aquí te explicamos qué cookies
                        usamos y cómo puedes gestionarlas.
                    </p>
                    <div className={styles.heroMeta}>
                        <span className={styles.metaItem}>
                            <CheckCircle2 size={18} />
                            Última actualización: 27 de Enero, 2026
                        </span>
                        <span className={styles.metaItem}>
                            <AlertCircle size={18} />
                            Efectiva desde: 1 de Enero, 2026
                        </span>
                    </div>
                </div>
            </section>

            {/* Cookie Preferences Panel */}
            <section className={styles.preferencesSection}>
                <div className={styles.preferencesContainer}>
                    <div className={styles.preferencesHeader}>
                        <Settings size={32} />
                        <div>
                            <h2>Centro de Preferencias de Cookies</h2>
                            <p>Configura qué cookies quieres permitir en este sitio web</p>
                        </div>
                    </div>

                    <div className={styles.cookieTypesGrid}>
                        {cookieTypes.map((type) => (
                            <div key={type.id} className={`${styles.cookieTypeCard} ${styles[type.color]}`}>
                                <div className={styles.cookieTypeHeader}>
                                    <div className={styles.cookieTypeInfo}>
                                        {type.icon}
                                        <div>
                                            <h3>{type.title}</h3>
                                            <p>{type.description}</p>
                                        </div>
                                    </div>
                                    <label className={styles.toggleSwitch}>
                                        <input
                                            type="checkbox"
                                            checked={cookiePreferences[type.id]}
                                            onChange={() => handleToggleCookie(type.id)}
                                            disabled={type.required}
                                        />
                                        <span className={styles.toggleSlider}></span>
                                    </label>
                                </div>
                                {type.required && (
                                    <div className={styles.requiredBadge}>
                                        <Lock size={14} />
                                        Siempre Activas
                                    </div>
                                )}
                                <div className={styles.cookiesList}>
                                    {type.cookies.map((cookie, index) => (
                                        <div key={index} className={styles.cookieItem}>
                                            <div className={styles.cookieItemHeader}>
                                                <strong>{cookie.name}</strong>
                                                <span className={styles.cookieType}>{cookie.type}</span>
                                            </div>
                                            <p>{cookie.purpose}</p>
                                            <div className={styles.cookieMeta}>
                                                <Clock size={14} />
                                                {cookie.duration}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.preferencesActions}>
                        <button onClick={handleAcceptAll} className={styles.btnAcceptAll}>
                            <CheckCircle2 size={20} />
                            Aceptar Todas
                        </button>
                        <button onClick={handleRejectAll} className={styles.btnRejectAll}>
                            <Trash2 size={20} />
                            Rechazar No Esenciales
                        </button>
                        <button className={styles.btnSave}>
                            Guardar Preferencias
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.content}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentGrid}>
                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarSticky}>
                                <h4>Contenido</h4>
                                <nav className={styles.sidebarNav}>
                                    {cookieSections.map((section) => (
                                        <a
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={activeSection === section.id ? styles.active : ''}
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>

                                <div className={styles.sidebarContact}>
                                    <Cookie size={24} className={styles.sidebarContactIcon} />
                                    <h5>¿Dudas sobre Cookies?</h5>
                                    <p>Contáctanos para cualquier pregunta sobre nuestra política de cookies</p>
                                    <a href="mailto:ramd.software@gmail.com" className={styles.sidebarCta}>
                                        Contactar
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className={styles.mainContent}>
                            {/* Introduction */}
                            <div className={styles.introduction}>
                                <h2>Transparencia en el Uso de Cookies</h2>
                                <p>
                                    En RAMD Software Solutions valoramos tu privacidad y creemos en la transparencia
                                    total sobre cómo recopilamos y utilizamos información. Esta política de cookies
                                    explica qué son las cookies, cómo las usamos en nuestro sitio web y cómo puedes
                                    controlarlas.
                                </p>
                                <div className={styles.highlightBox}>
                                    <Shield size={24} />
                                    <div>
                                        <strong>Tu Control:</strong>
                                        <p>Tienes control total sobre las cookies no esenciales. Puedes aceptarlas,
                                            rechazarlas o personalizarlas según tus preferencias en cualquier momento.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Cookie Sections */}
                            {cookieSections.map((section) => (
                                <article key={section.id} id={section.id} className={styles.section}>
                                    <div className={styles.sectionHeader}>
                                        {section.icon}
                                        <h2>{section.title}</h2>
                                    </div>
                                    {section.content.map((block, blockIndex) => (
                                        <div key={blockIndex} className={styles.contentBlock}>
                                            {block.subtitle && <h3>{block.subtitle}</h3>}
                                            <ul className={styles.contentList}>
                                                {block.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <CheckCircle2 size={20} className={styles.listIcon} />
                                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </article>
                            ))}

                            {/* Browser Instructions */}
                            <section className={styles.browserSection}>
                                <h2>Configuración por Navegador</h2>
                                <p>Instrucciones detalladas para gestionar cookies en los navegadores más populares:</p>
                                <div className={styles.browserGrid}>
                                    <div className={styles.browserCard}>
                                        <Globe size={32} />
                                        <h3>Google Chrome</h3>
                                        <ol>
                                            <li>Menú (⋮) → Configuración</li>
                                            <li>Privacidad y seguridad</li>
                                            <li>Cookies y otros datos de sitios</li>
                                            <li>Ver cookies y datos de sitios</li>
                                        </ol>
                                    </div>
                                    <div className={styles.browserCard}>
                                        <Globe size={32} />
                                        <h3>Mozilla Firefox</h3>
                                        <ol>
                                            <li>Menú (≡) → Preferencias</li>
                                            <li>Privacidad y seguridad</li>
                                            <li>Cookies y datos del sitio</li>
                                            <li>Gestionar datos</li>
                                        </ol>
                                    </div>
                                    <div className={styles.browserCard}>
                                        <Globe size={32} />
                                        <h3>Safari</h3>
                                        <ol>
                                            <li>Safari → Preferencias</li>
                                            <li>Privacidad</li>
                                            <li>Gestionar datos del sitio web</li>
                                            <li>Eliminar o detalles</li>
                                        </ol>
                                    </div>
                                    <div className={styles.browserCard}>
                                        <Globe size={32} />
                                        <h3>Microsoft Edge</h3>
                                        <ol>
                                            <li>Menú (…) → Configuración</li>
                                            <li>Cookies y permisos del sitio</li>
                                            <li>Cookies y datos del sitio</li>
                                            <li>Ver cookies y datos de sitios</li>
                                        </ol>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section className={styles.faqSection}>
                                <h2>Preguntas Frecuentes sobre Cookies</h2>
                                <div className={styles.faqList}>
                                    {faqs.map((faq, index) => (
                                        <div key={index} className={styles.faqItem}>
                                            <button
                                                className={styles.faqQuestion}
                                                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                            >
                                                <span>{faq.question}</span>
                                                <ChevronDown
                                                    size={20}
                                                    className={expandedFaq === index ? styles.rotated : ''}
                                                />
                                            </button>
                                            {expandedFaq === index && (
                                                <div className={styles.faqAnswer}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Contact Section */}
                            <section className={styles.contactSection}>
                                <div className={styles.contactHeader}>
                                    <Mail size={32} />
                                    <h2>¿Necesitas Más Información?</h2>
                                    <p>
                                        Si tienes preguntas sobre cómo usamos cookies o sobre esta política,
                                        no dudes en contactarnos.
                                    </p>
                                </div>
                                <div className={styles.contactGrid}>
                                    <div className={styles.contactCard}>
                                        <div className={styles.contactIcon}><Mail size={20} /></div>
                                        <div className={styles.contactDetails}>
                                            <span className={styles.contactLabel}>Email</span>
                                            <a href="mailto:ramd.software@gmail.com" className={styles.contactValue}>
                                                ramd.software@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.contactCard}>
                                        <div className={styles.contactIcon}><MapPin size={20} /></div>
                                        <div className={styles.contactDetails}>
                                            <span className={styles.contactLabel}>Ubicación</span>
                                            <span className={styles.contactValue}>Pasto, Nariño, Colombia</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
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

export default CookiesPolicy;