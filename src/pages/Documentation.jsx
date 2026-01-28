import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
    BookOpen, Rocket, GitBranch, Code2, FileText, Zap, Shield,
    CheckCircle2, Users, Clock, Mail, MapPin, ArrowRight, ChevronDown,
    Layers, Settings, Database, Cloud, Terminal, Package, Workflow,
    X, Menu, Linkedin, Github, Twitter, Search, ChevronRight, Download,
    Video, MessageCircle, Server, Key, Lock, Activity
} from 'lucide-react';
import styles from './documentation.module.css';
import logoRAMD from "../assets/RAMD-LOGO-SINFONDO.png";
import logoRAMDBLANCO from "../assets/RAMD-LOGO-FONDOBLANCO.png";

const Documentation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const docSections = [
        {
            id: 'inicio-rapido',
            icon: <Rocket className={styles.sectionIcon} />,
            title: '1. Guía de Inicio Rápido',
            content: [
                {
                    subtitle: '1.1 Primeros Pasos',
                    items: [
                        'Agenda una reunión inicial con nuestro equipo para discutir tu proyecto',
                        'Completa el brief del proyecto con tus requisitos, objetivos y presupuesto estimado',
                        'Recibe una propuesta detallada con alcance, cronograma y presupuesto',
                        'Firma el contrato y realiza el pago inicial (típicamente 50%)',
                        'Participa en el kickoff meeting donde conocerás al equipo asignado'
                    ]
                },
                {
                    subtitle: '1.2 Qué Necesitamos de Ti',
                    items: [
                        'Descripción clara de tu negocio y objetivos del proyecto',
                        'Ejemplos de diseños o sitios que te gusten (referencias)',
                        'Acceso a sistemas existentes si hay integración requerida',
                        'Punto de contacto designado para aprobaciones y decisiones',
                        'Contenido (textos, imágenes, logos) o indicaciones sobre su creación',
                        'Credenciales de servicios (dominio, hosting, APIs) cuando sea necesario'
                    ]
                },
                {
                    subtitle: '1.3 Cronograma Típico',
                    items: [
                        'Proyectos pequeños (landing pages, MVPs simples): 2-4 semanas',
                        'Proyectos medianos (aplicaciones web/móvil con funcionalidad moderada): 2-3 meses',
                        'Proyectos grandes (plataformas enterprise, sistemas complejos): 4-6 meses',
                        'El cronograma se ajusta según complejidad, alcance y disponibilidad del cliente'
                    ]
                }
            ]
        },
        {
            id: 'proceso-desarrollo',
            icon: <GitBranch className={styles.sectionIcon} />,
            title: '2. Proceso de Desarrollo',
            content: [
                {
                    subtitle: '2.1 Metodología Ágil',
                    items: [
                        'Trabajamos con Scrum/Kanban para máxima flexibilidad y transparencia',
                        'Desarrollo iterativo en sprints de 2 semanas',
                        'Entregas incrementales con demos al finalizar cada sprint',
                        'Daily standups internos y reuniones semanales con el cliente',
                        'Feedback continuo incorporado en cada iteración'
                    ]
                },
                {
                    subtitle: '2.2 Fases del Proyecto',
                    items: [
                        '**Discovery & Planning (1-2 semanas)**: Análisis de requisitos, arquitectura técnica, wireframes',
                        '**Design (2-3 semanas)**: Diseño UI/UX, prototipos interactivos, guía de estilos',
                        '**Development (60-70% del tiempo)**: Desarrollo backend, frontend, integraciones',
                        '**Testing & QA (2-3 semanas)**: Pruebas funcionales, de rendimiento, seguridad',
                        '**Deployment (1 semana)**: Configuración de infraestructura, despliegue, monitoreo',
                        '**Post-Launch (continuo)**: Soporte, mantenimiento, optimización'
                    ]
                },
                {
                    subtitle: '2.3 Herramientas de Gestión',
                    items: [
                        'Jira o Trello para seguimiento de tareas y sprints',
                        'Figma para diseño y prototipos colaborativos',
                        'GitHub/GitLab para control de versiones y code review',
                        'Slack o Microsoft Teams para comunicación en tiempo real',
                        'Google Meet o Zoom para reuniones y demos',
                        'Acceso de cliente a tableros de proyecto para transparencia total'
                    ]
                }
            ]
        },
        {
            id: 'stack-tecnologico',
            icon: <Layers className={styles.sectionIcon} />,
            title: '3. Stack Tecnológico',
            content: [
                {
                    subtitle: '3.1 Frontend',
                    items: [
                        '**React.js**: Framework principal para aplicaciones web modernas y dinámicas',
                        '**Next.js**: Para aplicaciones con SSR/SSG y SEO optimizado',
                        '**TypeScript**: Para código más robusto y mantenible',
                        '**Tailwind CSS**: Framework CSS para diseño responsivo y consistente',
                        '**Redux/Zustand**: Gestión de estado para aplicaciones complejas'
                    ]
                },
                {
                    subtitle: '3.2 Backend',
                    items: [
                        '**Node.js + Express**: Backend rápido y escalable con JavaScript',
                        '**Python + Django/FastAPI**: Para proyectos con ML o procesamiento de datos',
                        '**NestJS**: Framework enterprise con TypeScript para backend robusto',
                        '**GraphQL + Apollo**: APIs eficientes y flexibles',
                        '**RESTful APIs**: Arquitectura estándar para integraciones'
                    ]
                },
                {
                    subtitle: '3.3 Móvil',
                    items: [
                        '**Flutter**: Framework multiplataforma para apps iOS y Android nativas',
                        '**React Native**: Alternativa con ecosistema React',
                        '**Dart**: Lenguaje de programación para Flutter',
                        'Integración con Firebase para notificaciones push y analytics'
                    ]
                },
                {
                    subtitle: '3.4 Base de Datos',
                    items: [
                        '**PostgreSQL**: Base de datos relacional robusta y escalable',
                        '**MongoDB**: NoSQL para datos no estructurados y alta escalabilidad',
                        '**Redis**: Cache y sesiones para mejor rendimiento',
                        '**Firebase Firestore**: Base de datos en tiempo real para apps móviles'
                    ]
                },
                {
                    subtitle: '3.5 Cloud & DevOps',
                    items: [
                        '**AWS / Google Cloud**: Infraestructura cloud escalable',
                        '**Docker + Kubernetes**: Contenedores para despliegue consistente',
                        '**GitHub Actions / GitLab CI**: CI/CD automatizado',
                        '**Nginx**: Servidor web y proxy inverso',
                        '**Monitoring**: Sentry (errores), DataDog/New Relic (performance)'
                    ]
                }
            ]
        },
        {
            id: 'entregables',
            icon: <FileText className={styles.sectionIcon} />,
            title: '4. Entregables y Documentación',
            content: [
                {
                    subtitle: '4.1 Documentación Técnica',
                    items: [
                        '**Documentación de arquitectura**: Diagramas de sistema, flujos de datos, decisiones técnicas',
                        '**Documentación de API**: Endpoints, parámetros, ejemplos de uso (Swagger/Postman)',
                        '**Guía de instalación**: Pasos para setup local y despliegue',
                        '**Documentación de código**: Comentarios inline y README detallado',
                        '**Manual de base de datos**: Esquema, relaciones, migraciones'
                    ]
                },
                {
                    subtitle: '4.2 Documentación de Usuario',
                    items: [
                        '**Manual de usuario**: Guía paso a paso para usuarios finales',
                        '**Video tutoriales**: Screencasts de funcionalidades principales',
                        '**Panel de administración**: Guía para gestión de contenido y configuraciones',
                        '**FAQs**: Preguntas frecuentes y troubleshooting básico'
                    ]
                },
                {
                    subtitle: '4.3 Activos Entregados',
                    items: [
                        '**Código fuente**: Repositorio completo con historial de commits',
                        '**Archivos de diseño**: Figma/Sketch con todos los componentes',
                        '**Assets**: Imágenes, iconos, fuentes optimizadas',
                        '**Credenciales**: Documentación de todas las credenciales y accesos',
                        '**Licencias**: Documentación de librerías y dependencias de terceros'
                    ]
                }
            ]
        },
        {
            id: 'apis-integraciones',
            icon: <Zap className={styles.sectionIcon} />,
            title: '5. APIs e Integraciones',
            content: [
                {
                    subtitle: '5.1 Integraciones Comunes',
                    items: [
                        '**Pagos**: Stripe, PayPal, PayU, Mercado Pago',
                        '**Autenticación**: Auth0, Firebase Auth, OAuth 2.0, JWT',
                        '**Email**: SendGrid, Mailgun, AWS SES',
                        '**SMS**: Twilio, AWS SNS',
                        '**Mapas**: Google Maps API, Mapbox',
                        '**Analytics**: Google Analytics, Mixpanel, Segment',
                        '**CRM**: Salesforce, HubSpot, Zoho',
                        '**Cloud Storage**: AWS S3, Google Cloud Storage, Cloudinary'
                    ]
                },
                {
                    subtitle: '5.2 Desarrollo de API Personalizada',
                    items: [
                        'APIs RESTful con documentación completa en Swagger/OpenAPI',
                        'Autenticación con JWT o OAuth 2.0',
                        'Rate limiting y throttling para protección',
                        'Versionado de API para compatibilidad futura',
                        'Webhooks para eventos en tiempo real',
                        'Pruebas automatizadas para cada endpoint'
                    ]
                },
                {
                    subtitle: '5.3 Seguridad de APIs',
                    items: [
                        'HTTPS obligatorio para todas las comunicaciones',
                        'Validación y sanitización de inputs',
                        'Rate limiting por IP y usuario',
                        'Logging y monitoreo de actividad sospechosa',
                        'API keys con permisos granulares',
                        'Cumplimiento con OWASP API Security Top 10'
                    ]
                }
            ]
        },
        {
            id: 'mejores-practicas',
            icon: <Shield className={styles.sectionIcon} />,
            title: '6. Mejores Prácticas',
            content: [
                {
                    subtitle: '6.1 Código de Calidad',
                    items: [
                        'Code reviews obligatorios antes de merge',
                        'Linting automático (ESLint, Prettier)',
                        'Testing: unitario, integración, E2E (Jest, Cypress)',
                        'Cobertura de código mínima del 80%',
                        'Comentarios claros en código complejo',
                        'Nombres descriptivos y consistentes',
                        'Principios SOLID y DRY'
                    ]
                },
                {
                    subtitle: '6.2 Seguridad',
                    items: [
                        'Encriptación de datos sensibles en reposo y tránsito',
                        'Validación exhaustiva de inputs del usuario',
                        'Protección contra SQL injection, XSS, CSRF',
                        'Gestión segura de secretos (AWS Secrets Manager)',
                        'Actualizaciones regulares de dependencias',
                        'Backups automáticos diarios',
                        'Auditorías de seguridad periódicas'
                    ]
                },
                {
                    subtitle: '6.3 Performance',
                    items: [
                        'Optimización de imágenes y assets',
                        'Lazy loading para contenido pesado',
                        'Caching estratégico (Redis, CDN)',
                        'Minificación de CSS/JS',
                        'Code splitting para reducir bundle size',
                        'Database indexing apropiado',
                        'Monitoreo de métricas de rendimiento'
                    ]
                },
                {
                    subtitle: '6.4 SEO (para Web)',
                    items: [
                        'Meta tags optimizados (title, description)',
                        'URLs amigables y estructura lógica',
                        'Sitemap XML y robots.txt',
                        'Schema markup para rich snippets',
                        'Velocidad de carga optimizada',
                        'Responsive design mobile-first',
                        'Accesibilidad WCAG AA'
                    ]
                }
            ]
        },
        {
            id: 'hosting-deploy',
            icon: <Cloud className={styles.sectionIcon} />,
            title: '7. Hosting y Deployment',
            content: [
                {
                    subtitle: '7.1 Opciones de Hosting',
                    items: [
                        '**AWS**: Escalabilidad enterprise, amplio catálogo de servicios',
                        '**Google Cloud**: Excelente para ML/AI, precios competitivos',
                        '**DigitalOcean**: Simple y económico para proyectos pequeños/medianos',
                        '**Vercel/Netlify**: Ideal para aplicaciones frontend y JAMstack',
                        '**Heroku**: Rápido setup para MVPs y prototipos'
                    ]
                },
                {
                    subtitle: '7.2 Proceso de Deployment',
                    items: [
                        'Ambientes separados: desarrollo, staging, producción',
                        'CI/CD automatizado con GitHub Actions o GitLab CI',
                        'Blue-green deployments para cero downtime',
                        'Rollback automático en caso de errores',
                        'Health checks y monitoring post-deployment',
                        'Notificaciones de deployment al equipo'
                    ]
                },
                {
                    subtitle: '7.3 Infraestructura',
                    items: [
                        'Infrastructure as Code con Terraform o CloudFormation',
                        'Contenedores Docker para consistencia',
                        'Kubernetes para orquestación en producción',
                        'Load balancing para alta disponibilidad',
                        'Auto-scaling basado en demanda',
                        'CDN para contenido estático global'
                    ]
                }
            ]
        },
        {
            id: 'soporte-mantenimiento',
            icon: <Settings className={styles.sectionIcon} />,
            title: '8. Soporte y Mantenimiento',
            content: [
                {
                    subtitle: '8.1 Planes de Soporte',
                    items: [
                        '**Básico**: Bug fixes críticos, actualizaciones de seguridad (3 meses gratis post-launch)',
                        '**Estándar**: Soporte técnico, monitoreo 24/7, updates mensuales',
                        '**Premium**: Soporte prioritario, nuevas funcionalidades, consultoría continua',
                        '**Enterprise**: SLA personalizado, equipo dedicado, on-call 24/7'
                    ]
                },
                {
                    subtitle: '8.2 Tiempos de Respuesta',
                    items: [
                        '**Crítico** (app caída, seguridad): 2 horas',
                        '**Alto** (funcionalidad importante afectada): 4 horas',
                        '**Medio** (bug no crítico): 24 horas',
                        '**Bajo** (mejora, pregunta): 48 horas',
                        'Horario de soporte: Lun-Vie 8am-6pm COT (on-call para planes Premium/Enterprise)'
                    ]
                },
                {
                    subtitle: '8.3 Mantenimiento Incluido',
                    items: [
                        'Actualizaciones de seguridad de dependencias',
                        'Backups automáticos diarios con retención de 30 días',
                        'Monitoreo de uptime y alertas',
                        'Corrección de bugs reportados',
                        'Optimizaciones de performance básicas',
                        'Reportes mensuales de métricas y salud del sistema'
                    ]
                },
                {
                    subtitle: '8.4 Servicios Adicionales',
                    items: [
                        'Desarrollo de nuevas funcionalidades',
                        'Integraciones con sistemas adicionales',
                        'Rediseño de UI/UX',
                        'Migración de plataforma o infraestructura',
                        'Consultoría técnica y arquitectura',
                        'Training del equipo del cliente'
                    ]
                }
            ]
        }
    ];

    const quickLinks = [
        {
            icon: <Rocket size={20} />,
            title: 'Inicio Rápido',
            description: 'Comienza tu proyecto en 3 pasos',
            link: '#inicio-rapido'
        },
        {
            icon: <GitBranch size={20} />,
            title: 'Proceso Ágil',
            description: 'Cómo trabajamos contigo',
            link: '#proceso-desarrollo'
        },
        {
            icon: <Layers size={20} />,
            title: 'Stack Tech',
            description: 'Tecnologías que usamos',
            link: '#stack-tecnologico'
        },
        {
            icon: <Zap size={20} />,
            title: 'APIs',
            description: 'Integraciones disponibles',
            link: '#apis-integraciones'
        },
        {
            icon: <Cloud size={20} />,
            title: 'Deployment',
            description: 'Hosting y despliegue',
            link: '#hosting-deploy'
        },
        {
            icon: <Settings size={20} />,
            title: 'Soporte',
            description: 'Mantenimiento continuo',
            link: '#soporte-mantenimiento'
        }
    ];

    const resources = [
        {
            icon: <BookOpen size={24} />,
            title: 'Guías Técnicas',
            description: 'Documentación detallada de arquitectura y APIs',
            action: 'Ver Guías',
            color: 'primary'
        },
        {
            icon: <Video size={24} />,
            title: 'Video Tutoriales',
            description: 'Aprende visualmente con nuestros screencasts',
            action: 'Ver Videos',
            color: 'accent'
        },
        {
            icon: <Download size={24} />,
            title: 'Recursos Descargables',
            description: 'Templates, boilerplates y herramientas',
            action: 'Descargar',
            color: 'success'
        },
        {
            icon: <MessageCircle size={24} />,
            title: 'Comunidad & Soporte',
            description: 'Conéctate con nuestro equipo y otros clientes',
            action: 'Unirse',
            color: 'info'
        }
    ];

    const faqs = [
        {
            question: '¿Puedo solicitar cambios durante el desarrollo?',
            answer: 'Sí, trabajamos con metodología ágil precisamente para permitir flexibilidad. Cambios menores se pueden incorporar sin costo adicional. Cambios significativos que afecten el alcance acordado requerirán un "change request" con estimación de impacto en tiempo y presupuesto.'
        },
        {
            question: '¿Recibiré el código fuente completo?',
            answer: 'Sí, al completar el pago final recibirás acceso completo al repositorio de código con todo el historial de commits, además de la documentación técnica completa. El código es tuyo para usar, modificar o extender según necesites.'
        },
        {
            question: '¿Qué pasa si necesito ayuda después del lanzamiento?',
            answer: 'Incluimos 3 meses de soporte básico gratuito post-lanzamiento para bugs críticos y actualizaciones de seguridad. Después puedes contratar un plan de soporte mensual según tus necesidades, o solicitar ayuda puntual por horas.'
        },
        {
            question: '¿Puedo ver el progreso del proyecto en tiempo real?',
            answer: 'Absolutamente. Te daremos acceso a nuestro tablero de proyecto (Jira/Trello) donde podrás ver todas las tareas, su estado y progreso. También tendrás demos al final de cada sprint (cada 2 semanas) y acceso al ambiente de staging para revisar el trabajo.'
        },
        {
            question: '¿Trabajan con código legacy o solo proyectos nuevos?',
            answer: 'Trabajamos en ambos casos. Podemos desarrollar desde cero o trabajar con tu código existente para agregar funcionalidades, refactorizar, optimizar o migrar a tecnologías modernas. Hacemos un análisis inicial del código legacy antes de proponer una estrategia.'
        },
        {
            question: '¿Ofrecen capacitación para nuestro equipo interno?',
            answer: 'Sí, ofrecemos sesiones de knowledge transfer y training para tu equipo técnico. Esto incluye explicación de la arquitectura, guías de deployment, mejores prácticas de mantenimiento y cómo extender funcionalidades. El training se puede incluir en el proyecto o contratar por separado.'
        }
    ];

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
                        <li><a href="/documentation">Documentación</a></li>
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
                    <div className={styles.heroIcon}>
                        <BookOpen size={48} />
                    </div>
                    <h1 className={styles.heroTitle}>Documentación Técnica</h1>
                    <p className={styles.heroSubtitle}>
                        Todo lo que necesitas saber sobre cómo trabajamos, nuestros procesos de desarrollo,
                        stack tecnológico y mejores prácticas para garantizar el éxito de tu proyecto.
                    </p>
                    <div className={styles.heroSearch}>
                        <Search size={20} />
                        <input type="text" placeholder="Buscar en la documentación..." />
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className={styles.quickLinks}>
                <div className={styles.quickLinksContainer}>
                    <h3>Acceso Rápido</h3>
                    <div className={styles.linkGrid}>
                        {quickLinks.map((link, index) => (
                            <a key={index} href={link.link} className={styles.quickLinkCard}>
                                <div className={styles.quickLinkIcon}>{link.icon}</div>
                                <div className={styles.quickLinkContent}>
                                    <h4>{link.title}</h4>
                                    <p>{link.description}</p>
                                </div>
                                <ChevronRight size={20} className={styles.quickLinkArrow} />
                            </a>
                        ))}
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
                                    {docSections.map((section) => (
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
                                    <MessageCircle size={24} className={styles.sidebarContactIcon} />
                                    <h5>¿Necesitas Ayuda?</h5>
                                    <p>Nuestro equipo está listo para responder tus preguntas técnicas</p>
                                    <a href="mailto:ramd.software@gmail.com" className={styles.sidebarCta}>
                                        Contactar Soporte
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Main Documentation */}
                        <main className={styles.mainContent}>
                            {/* Introduction */}
                            <div className={styles.introduction}>
                                <h2>Bienvenido a la Documentación de RAMD</h2>
                                <p>
                                    Esta documentación te guiará a través de todo nuestro proceso de desarrollo de
                                    software, desde el inicio del proyecto hasta el soporte post-lanzamiento. Aquí
                                    encontrarás información sobre nuestras metodologías, tecnologías, mejores prácticas
                                    y cómo colaboramos contigo para crear soluciones digitales excepcionales.
                                </p>
                                <div className={styles.highlightBox}>
                                    <Terminal size={24} />
                                    <div>
                                        <strong>Para Desarrolladores:</strong>
                                        <p>Si eres parte del equipo técnico del cliente, esta documentación te ayudará
                                            a entender nuestra arquitectura, convenciones de código y cómo extender las
                                            aplicaciones que desarrollamos para ti.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Documentation Sections */}
                            {docSections.map((section) => (
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

                            {/* Resources Section */}
                            <section className={styles.resourcesSection}>
                                <h2>Recursos Adicionales</h2>
                                <div className={styles.resourcesGrid}>
                                    {resources.map((resource, index) => (
                                        <div key={index} className={`${styles.resourceCard} ${styles[resource.color]}`}>
                                            <div className={styles.resourceIcon}>{resource.icon}</div>
                                            <h3>{resource.title}</h3>
                                            <p>{resource.description}</p>
                                            <button className={styles.resourceBtn}>
                                                {resource.action}
                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* FAQs */}
                            <section className={styles.faqSection}>
                                <h2>Preguntas Frecuentes</h2>
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

                            {/* Contact CTA */}
                            <section className={styles.ctaSection}>
                                <div className={styles.ctaContent}>
                                    <Rocket size={40} />
                                    <h2>¿Listo para Iniciar tu Proyecto?</h2>
                                    <p>
                                        Agenda una reunión con nuestro equipo y descubre cómo podemos transformar
                                        tus ideas en soluciones digitales de clase mundial.
                                    </p>
                                    <div className={styles.ctaButtons}>
                                        <a href="/#contacto" className={styles.btnPrimary}>
                                            Agendar Reunión
                                            <ArrowRight size={20} />
                                        </a>
                                        <a href="mailto:ramd.software@gmail.com" className={styles.btnSecondary}>
                                            Enviar Email
                                        </a>
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

export default Documentation;