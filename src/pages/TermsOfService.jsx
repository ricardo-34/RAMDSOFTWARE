import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    FileText, Scale, Shield, AlertTriangle, DollarSign, Code2,
    CheckCircle2, Users, Clock, Mail, MapPin, ArrowRight, ChevronDown,
    Briefcase, Award, Ban, RefreshCw, X, Menu, Linkedin, Github,
    Twitter, Server, Lock, Gavel, FileCheck
} from 'lucide-react';
import styles from './terms-of-service.module.css';
import logoRAMD from "../assets/RAMD-LOGO-SINFONDO.png";
import logoRAMDBLANCO from "../assets/RAMD-LOGO-FONDOBLANCO.png";

const TermsOfService = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const termsSections = [
        {
            id: 'aceptacion',
            icon: <FileCheck className={styles.sectionIcon} />,
            title: '1. Aceptación de Términos',
            content: [
                {
                    subtitle: '1.1 Acuerdo Vinculante',
                    items: [
                        'Al acceder y utilizar los servicios de RAMD Software Solutions ("RAMD", "nosotros", "nuestro"), usted ("Cliente", "usted") acepta estar legalmente vinculado por estos Términos de Servicio',
                        'Si está aceptando en nombre de una empresa u otra entidad legal, declara tener autoridad para vincular a dicha entidad',
                        'Si no acepta estos términos, no debe utilizar nuestros servicios',
                        'Estos términos constituyen un contrato legal entre usted y RAMD Software Solutions'
                    ]
                },
                {
                    subtitle: '1.2 Modificaciones',
                    items: [
                        'RAMD se reserva el derecho de modificar estos términos en cualquier momento',
                        'Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web',
                        'Le notificaremos sobre cambios significativos por correo electrónico o mediante aviso en el sitio',
                        'El uso continuado de nuestros servicios después de los cambios constituye aceptación de los nuevos términos'
                    ]
                }
            ]
        },
        {
            id: 'servicios',
            icon: <Code2 className={styles.sectionIcon} />,
            title: '2. Descripción de Servicios',
            content: [
                {
                    subtitle: '2.1 Servicios Ofrecidos',
                    items: [
                        'Desarrollo de aplicaciones web personalizadas y plataformas empresariales',
                        'Desarrollo de aplicaciones móviles nativas para iOS y Android',
                        'Desarrollo de software a medida y soluciones enterprise',
                        'Integración de sistemas y APIs',
                        'Consultoría técnica y arquitectura de software',
                        'Soporte y mantenimiento de aplicaciones',
                        'Servicios de DevOps y despliegue en la nube'
                    ]
                },
                {
                    subtitle: '2.2 Alcance del Proyecto',
                    items: [
                        'Cada proyecto se define mediante un Statement of Work (SOW) o propuesta específica',
                        'El alcance, cronograma, entregables y precios se detallan en el SOW respectivo',
                        'Cualquier trabajo fuera del alcance definido se considerará como trabajo adicional',
                        'Los cambios al alcance requieren aprobación por escrito y pueden afectar tiempo y costos'
                    ]
                },
                {
                    subtitle: '2.3 Metodología de Trabajo',
                    items: [
                        'Utilizamos metodologías ágiles (Scrum/Kanban) para la gestión de proyectos',
                        'Entregas iterativas con revisiones y feedback continuo del cliente',
                        'Comunicación regular a través de reuniones de seguimiento programadas',
                        'Acceso a herramientas de gestión de proyectos para transparencia total'
                    ]
                }
            ]
        },
        {
            id: 'responsabilidades',
            icon: <Users className={styles.sectionIcon} />,
            title: '3. Responsabilidades del Cliente',
            content: [
                {
                    subtitle: '3.1 Obligaciones Generales',
                    items: [
                        'Proporcionar información completa y precisa sobre requisitos del proyecto',
                        'Designar un punto de contacto autorizado para toma de decisiones',
                        'Revisar y aprobar entregables dentro de los plazos acordados',
                        'Proporcionar acceso a sistemas, credenciales y recursos necesarios de manera oportuna',
                        'Mantener la confidencialidad de credenciales y accesos proporcionados',
                        'Cumplir con los plazos de pago según lo acordado'
                    ]
                },
                {
                    subtitle: '3.2 Contenido y Materiales',
                    items: [
                        'El cliente es responsable de proporcionar todo el contenido necesario (textos, imágenes, logos, datos)',
                        'El cliente garantiza tener los derechos y licencias para todo el material proporcionado',
                        'RAMD no es responsable por violaciones de derechos de autor o propiedad intelectual del contenido del cliente',
                        'El cliente debe revisar y aprobar todo el contenido antes de su publicación'
                    ]
                },
                {
                    subtitle: '3.3 Feedback y Aprobaciones',
                    items: [
                        'Proporcionar feedback claro y específico dentro de 5 días hábiles de cada entrega',
                        'Las aprobaciones deben ser por escrito (email o sistema de gestión)',
                        'Retrasos en feedback pueden impactar el cronograma del proyecto',
                        'Cambios después de aprobaciones pueden generar costos adicionales'
                    ]
                }
            ]
        },
        {
            id: 'pago',
            icon: <DollarSign className={styles.sectionIcon} />,
            title: '4. Términos de Pago',
            content: [
                {
                    subtitle: '4.1 Estructura de Pagos',
                    items: [
                        'Los precios se especifican en el SOW y son en pesos colombianos (COP) o dólares estadounidenses (USD)',
                        'Proyectos de precio fijo: típicamente 50% adelanto, 50% a la entrega',
                        'Proyectos por tiempo y materiales: facturación quincenal o mensual',
                        'Retainer mensual: pago al inicio de cada mes',
                        'Todos los precios no incluyen IVA (19%) salvo que se indique lo contrario'
                    ]
                },
                {
                    subtitle: '4.2 Términos de Pago',
                    items: [
                        'Las facturas deben pagarse dentro de 15 días calendario desde su emisión',
                        'Métodos de pago: transferencia bancaria, tarjeta de crédito, PayPal',
                        'Pagos atrasados generan intereses del 1.5% mensual',
                        'RAMD se reserva el derecho de suspender servicios por pagos vencidos',
                        'Los costos de recuperación de deudas serán responsabilidad del cliente'
                    ]
                },
                {
                    subtitle: '4.3 Reembolsos',
                    items: [
                        'Los adelantos no son reembolsables una vez iniciado el proyecto',
                        'Reembolsos solo se consideran si RAMD no puede cumplir con los entregables acordados',
                        'Solicitudes de reembolso deben hacerse por escrito dentro de 30 días',
                        'RAMD evaluará cada caso individualmente'
                    ]
                },
                {
                    subtitle: '4.4 Costos Adicionales',
                    items: [
                        'Servicios de terceros (hosting, APIs, licencias) se cobran por separado',
                        'Trabajo fuera del alcance se cotiza y requiere aprobación previa',
                        'Viajes y reuniones presenciales se cobran según gastos reales',
                        'Soporte fuera de horario laboral puede generar cargos adicionales'
                    ]
                }
            ]
        },
        {
            id: 'propiedad-intelectual',
            icon: <Award className={styles.sectionIcon} />,
            title: '5. Propiedad Intelectual',
            content: [
                {
                    subtitle: '5.1 Código y Entregables',
                    items: [
                        'Una vez completado el pago total, el cliente recibe los derechos de uso del código desarrollado específicamente para su proyecto',
                        'RAMD retiene derechos sobre componentes genéricos, librerías y herramientas reutilizables',
                        'El cliente recibe una licencia no exclusiva para utilizar componentes genéricos en su proyecto',
                        'RAMD puede utilizar componentes y conocimientos generales en otros proyectos'
                    ]
                },
                {
                    subtitle: '5.2 Código Fuente',
                    items: [
                        'El código fuente se entrega al cliente al finalizar el proyecto y completar el pago',
                        'El cliente puede modificar el código para sus propios fines',
                        'El cliente no puede revender, sublicenciar o distribuir el código a terceros sin autorización',
                        'RAMD puede retener una copia del código para fines de soporte y referencia'
                    ]
                },
                {
                    subtitle: '5.3 Propiedad del Cliente',
                    items: [
                        'El cliente retiene todos los derechos sobre su marca, contenido y materiales proporcionados',
                        'RAMD puede usar el nombre y logo del cliente en su portafolio y materiales de marketing',
                        'El cliente puede solicitar exclusión de su proyecto del portafolio público de RAMD'
                    ]
                },
                {
                    subtitle: '5.4 Software de Terceros',
                    items: [
                        'Algunas soluciones pueden incluir software de código abierto o de terceros',
                        'El uso de software de terceros está sujeto a sus propias licencias',
                        'RAMD no garantiza derechos sobre software de terceros',
                        'El cliente es responsable de cumplir con licencias de software de terceros'
                    ]
                }
            ]
        },
        {
            id: 'confidencialidad',
            icon: <Lock className={styles.sectionIcon} />,
            title: '6. Confidencialidad',
            content: [
                {
                    subtitle: '6.1 Información Confidencial',
                    items: [
                        'Ambas partes acuerdan mantener confidencial toda información sensible compartida',
                        'Información confidencial incluye: código fuente, datos de negocio, estrategias, información técnica',
                        'La confidencialidad se mantiene durante el proyecto y por 3 años después de su finalización',
                        'Se puede requerir un NDA (Acuerdo de No Divulgación) separado para proyectos sensibles'
                    ]
                },
                {
                    subtitle: '6.2 Excepciones',
                    items: [
                        'Información que es o se vuelve pública sin culpa de la parte receptora',
                        'Información que la parte receptora ya poseía sin obligación de confidencialidad',
                        'Información desarrollada independientemente sin usar información confidencial',
                        'Información requerida por ley o orden judicial'
                    ]
                }
            ]
        },
        {
            id: 'garantias',
            icon: <Shield className={styles.sectionIcon} />,
            title: '7. Garantías y Limitaciones',
            content: [
                {
                    subtitle: '7.1 Garantía de Servicio',
                    items: [
                        'RAMD garantiza que los servicios se realizarán de manera profesional según estándares de la industria',
                        'Garantizamos que el código entregado estará libre de defectos materiales por 90 días después de la entrega',
                        'Corregiremos bugs y errores reportados dentro del período de garantía sin costo adicional',
                        'La garantía no cubre cambios de requisitos, funcionalidades nuevas o problemas causados por el cliente'
                    ]
                },
                {
                    subtitle: '7.2 Exclusión de Garantías',
                    items: [
                        'RAMD no garantiza resultados comerciales específicos (ventas, tráfico, conversiones)',
                        'No garantizamos compatibilidad futura con versiones nuevas de software de terceros',
                        'No garantizamos que el software estará libre de interrupciones o errores menores',
                        'Los servicios se proporcionan "tal cual" excepto por las garantías expresas mencionadas'
                    ]
                },
                {
                    subtitle: '7.3 Limitación de Responsabilidad',
                    items: [
                        'La responsabilidad total de RAMD no excederá el monto pagado por el cliente en los últimos 12 meses',
                        'RAMD no será responsable por daños indirectos, incidentales, especiales o consecuentes',
                        'No somos responsables por pérdida de ganancias, datos, oportunidades de negocio o reputación',
                        'El cliente debe notificar cualquier reclamo dentro de 30 días del evento que lo origina'
                    ]
                }
            ]
        },
        {
            id: 'hosting-mantenimiento',
            icon: <Server className={styles.sectionIcon} />,
            title: '8. Hosting y Mantenimiento',
            content: [
                {
                    subtitle: '8.1 Servicios de Hosting',
                    items: [
                        'RAMD puede proporcionar servicios de hosting mediante proveedores terceros (AWS, Google Cloud, etc.)',
                        'Los costos de hosting se facturan mensualmente por separado',
                        'El cliente es responsable de renovar los servicios de hosting',
                        'RAMD no es responsable por interrupciones causadas por el proveedor de hosting'
                    ]
                },
                {
                    subtitle: '8.2 Mantenimiento y Soporte',
                    items: [
                        'El mantenimiento incluye: actualizaciones de seguridad, bug fixes, backups',
                        'Soporte técnico disponible en horario laboral (Lun-Vie 8am-6pm COT)',
                        'Tiempo de respuesta: 24 horas para issues normales, 4 horas para críticos',
                        'Nuevas funcionalidades y mejoras mayores se cotizan por separado'
                    ]
                },
                {
                    subtitle: '8.3 Backups y Seguridad',
                    items: [
                        'Realizamos backups automáticos diarios para proyectos con plan de mantenimiento',
                        'Los backups se retienen por 30 días',
                        'El cliente es responsable de mantener backups adicionales de sus datos críticos',
                        'Implementamos medidas de seguridad estándar, pero no garantizamos seguridad absoluta'
                    ]
                }
            ]
        },
        {
            id: 'terminacion',
            icon: <Ban className={styles.sectionIcon} />,
            title: '9. Terminación',
            content: [
                {
                    subtitle: '9.1 Terminación por el Cliente',
                    items: [
                        'El cliente puede terminar el contrato con 30 días de aviso por escrito',
                        'El cliente debe pagar por todo el trabajo completado hasta la fecha de terminación',
                        'Los adelantos no son reembolsables',
                        'RAMD entregará todo el trabajo completado hasta la fecha'
                    ]
                },
                {
                    subtitle: '9.2 Terminación por RAMD',
                    items: [
                        'RAMD puede terminar inmediatamente si el cliente incumple los términos de pago',
                        'Podemos terminar con 30 días de aviso si el cliente incumple materialmente estos términos',
                        'Podemos terminar si el proyecto se vuelve técnica o legalmente inviable',
                        'En caso de terminación por incumplimiento del cliente, no hay reembolsos'
                    ]
                },
                {
                    subtitle: '9.3 Efectos de la Terminación',
                    items: [
                        'Todas las obligaciones de pago pendientes se vuelven inmediatamente exigibles',
                        'El cliente debe cesar el uso de cualquier trabajo en progreso no pagado',
                        'Las cláusulas de confidencialidad y propiedad intelectual sobreviven la terminación',
                        'Datos del cliente pueden ser eliminados 30 días después de la terminación'
                    ]
                }
            ]
        },
        {
            id: 'fuerza-mayor',
            icon: <AlertTriangle className={styles.sectionIcon} />,
            title: '10. Fuerza Mayor',
            content: [
                {
                    subtitle: '10.1 Eventos de Fuerza Mayor',
                    items: [
                        'Ninguna parte será responsable por incumplimientos causados por eventos fuera de su control razonable',
                        'Incluye: desastres naturales, guerras, disturbios, pandemias, fallas de infraestructura',
                        'También incluye: huelgas, regulaciones gubernamentales, fallas de terceros críticos',
                        'La parte afectada debe notificar a la otra dentro de 5 días del evento'
                    ]
                },
                {
                    subtitle: '10.2 Suspensión de Obligaciones',
                    items: [
                        'Las obligaciones afectadas se suspenden durante el evento de fuerza mayor',
                        'Los plazos se extienden por la duración del evento más un período razonable de recuperación',
                        'Si el evento dura más de 90 días, cualquier parte puede terminar el contrato',
                        'Los pagos por trabajo ya completado siguen siendo exigibles'
                    ]
                }
            ]
        },
        {
            id: 'miscelanea',
            icon: <Gavel className={styles.sectionIcon} />,
            title: '11. Disposiciones Generales',
            content: [
                {
                    subtitle: '11.1 Ley Aplicable',
                    items: [
                        'Estos términos se rigen por las leyes de la República de Colombia',
                        'Cualquier disputa se resolverá en los tribunales de Pasto, Nariño, Colombia',
                        'Las partes acuerdan someterse a la jurisdicción exclusiva de estos tribunales',
                        'Se prefiere la mediación antes de litigio para resolver disputas'
                    ]
                },
                {
                    subtitle: '11.2 Divisibilidad',
                    items: [
                        'Si alguna disposición es inválida, el resto de los términos permanecen en vigor',
                        'La disposición inválida se modificará mínimamente para hacerla válida',
                        'La invalidez de una disposición no afecta la validez del acuerdo completo'
                    ]
                },
                {
                    subtitle: '11.3 Acuerdo Completo',
                    items: [
                        'Estos términos, junto con el SOW, constituyen el acuerdo completo entre las partes',
                        'Reemplazan todos los acuerdos, entendimientos y negociaciones previas',
                        'Modificaciones deben hacerse por escrito y firmadas por ambas partes',
                        'No hay representaciones o garantías fuera de las expresadas en este documento'
                    ]
                },
                {
                    subtitle: '11.4 Cesión',
                    items: [
                        'El cliente no puede ceder este contrato sin consentimiento previo por escrito de RAMD',
                        'RAMD puede ceder este contrato a una entidad afiliada o en caso de venta del negocio',
                        'Cualquier cesión no autorizada es nula',
                        'Los derechos y obligaciones vinculan a los sucesores y cesionarios permitidos'
                    ]
                },
                {
                    subtitle: '11.5 Notificaciones',
                    items: [
                        'Todas las notificaciones deben ser por escrito',
                        'Pueden enviarse por email a las direcciones registradas',
                        'Se consideran recibidas 24 horas después del envío por email',
                        'Notificaciones importantes deben confirmarse por medio físico o certificado'
                    ]
                }
            ]
        }
    ];

    const faqs = [
        {
            question: '¿Qué pasa si necesito cambiar los requisitos durante el proyecto?',
            answer: 'Los cambios son naturales en desarrollo de software. Evaluaremos cada solicitud de cambio y proporcionaremos un estimado de impacto en tiempo y costo. Cambios menores pueden ser acomodados sin costo adicional, pero cambios significativos requerirán un addendum al contrato con ajustes de precio y cronograma.'
        },
        {
            question: '¿Puedo cancelar el proyecto después de iniciado?',
            answer: 'Sí, puede terminar el proyecto con 30 días de aviso. Deberá pagar todo el trabajo completado hasta la fecha de terminación. Los adelantos no son reembolsables. Entregaremos todo el código y documentación completados hasta ese momento.'
        },
        {
            question: '¿Qué incluye el período de garantía de 90 días?',
            answer: 'La garantía cubre corrección de bugs y errores en el código entregado. No cubre nuevas funcionalidades, cambios de requisitos, o problemas causados por modificaciones del cliente. El soporte es durante horario laboral con tiempo de respuesta de 24-48 horas.'
        },
        {
            question: '¿Puedo usar el código en múltiples proyectos?',
            answer: 'El código desarrollado específicamente para su proyecto puede usarse libremente dentro de su organización. Sin embargo, no puede revender, redistribuir o usar el código en productos comerciales para terceros sin una licencia adicional. Componentes genéricos tienen licencia de uso no exclusiva.'
        },
        {
            question: '¿Qué pasa si hay retrasos por mi parte?',
            answer: 'Entendemos que pueden surgir circunstancias que causen retrasos. Le pedimos notificarnos lo antes posible. Los retrasos prolongados pueden afectar el cronograma y disponibilidad del equipo, lo que podría requerir ajustes al plan del proyecto.'
        },
        {
            question: '¿Ofrecen acuerdos de nivel de servicio (SLA) para mantenimiento?',
            answer: 'Sí, nuestros planes de mantenimiento incluyen SLAs específicos: 4 horas de respuesta para issues críticos, 24 horas para normales. Uptime garantizado del 99.5% para aplicaciones bajo nuestro hosting. Los detalles específicos se definen en el acuerdo de mantenimiento.'
        }
    ];

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: 'Email Legal',
            value: 'ramd.software@gmail.com',
            link: 'mailto:ramd.software@gmail.com'
        },
        {
            icon: <MapPin size={20} />,
            label: 'Dirección Legal',
            value: 'Pasto, Nariño, Colombia'
        },
        {
            icon: <Clock size={20} />,
            label: 'Horario',
            value: 'Lun - Vie: 8:00 AM - 6:00 PM COT'
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
                        <Scale size={48} />
                    </div>
                    <h1 className={styles.heroTitle}>Términos de Servicio</h1>
                    <p className={styles.heroSubtitle}>
                        Estos términos establecen las condiciones bajo las cuales RAMD Software Solutions
                        proporciona servicios de desarrollo de software empresarial. Por favor, léalos
                        cuidadosamente antes de contratar nuestros servicios.
                    </p>
                    <div className={styles.heroMeta}>
                        <span className={styles.metaItem}>
                            <CheckCircle2 size={18} />
                            Última actualización: 27 de Enero, 2026
                        </span>
                        <span className={styles.metaItem}>
                            <AlertTriangle size={18} />
                            Efectiva desde: 1 de Enero, 2026
                        </span>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className={styles.quickLinks}>
                <div className={styles.quickLinksContainer}>
                    <h3>Navegación Rápida</h3>
                    <div className={styles.linkGrid}>
                        {termsSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={styles.quickLink}
                            >
                                {section.icon}
                                <span>{section.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms Sections */}
            <section className={styles.content}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentGrid}>
                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarSticky}>
                                <h4>Contenido</h4>
                                <nav className={styles.sidebarNav}>
                                    {termsSections.map((section) => (
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
                                    <Scale size={24} className={styles.sidebarContactIcon} />
                                    <h5>¿Preguntas Legales?</h5>
                                    <p>Contáctanos para aclaraciones sobre nuestros términos de servicio</p>
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
                                <h2>Acuerdo de Servicios Profesionales</h2>
                                <p>
                                    Bienvenido a RAMD Software Solutions. Estos Términos de Servicio ("Términos")
                                    constituyen un acuerdo legal vinculante entre usted (el "Cliente") y RAMD Software
                                    Solutions ("RAMD", "nosotros", "nuestro") con respecto al uso de nuestros servicios
                                    de desarrollo de software empresarial.
                                </p>
                                <p>
                                    Al contratar nuestros servicios, acceder a nuestra plataforma, o firmar un Statement
                                    of Work (SOW), usted acepta estar legalmente vinculado por estos términos. Si no está
                                    de acuerdo con estos términos, por favor no utilice nuestros servicios.
                                </p>
                                <div className={styles.highlightBox}>
                                    <Briefcase size={24} />
                                    <div>
                                        <strong>Importante:</strong>
                                        <p>Estos términos se complementan con documentos específicos de proyecto como el
                                            Statement of Work (SOW), propuestas, y acuerdos de confidencialidad. En caso de
                                            conflicto, prevalecen los documentos específicos del proyecto.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Terms Sections */}
                            {termsSections.map((section, index) => (
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
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </article>
                            ))}

                            {/* FAQs */}
                            <section className={styles.faqSection}>
                                <h2>Preguntas Frecuentes sobre Términos</h2>
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
                                    <h2>¿Necesitas Aclaraciones Legales?</h2>
                                    <p>
                                        Estamos aquí para responder cualquier pregunta sobre nuestros términos de servicio
                                        y cómo se aplican a tu proyecto específico.
                                    </p>
                                </div>
                                <div className={styles.contactGrid}>
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className={styles.contactCard}>
                                            <div className={styles.contactIcon}>{info.icon}</div>
                                            <div className={styles.contactDetails}>
                                                <span className={styles.contactLabel}>{info.label}</span>
                                                {info.link ? (
                                                    <a href={info.link} className={styles.contactValue}>{info.value}</a>
                                                ) : (
                                                    <span className={styles.contactValue}>{info.value}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
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

export default TermsOfService;