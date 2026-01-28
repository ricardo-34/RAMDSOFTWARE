import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
  Shield, Lock, Eye, FileText, Users, Database, AlertCircle,
  CheckCircle2, Mail, Phone, MapPin, ArrowRight, ChevronDown,
  Cookie, Globe, Server, UserCheck, Clock, X, Menu, Linkedin,
  Github, Twitter
} from 'lucide-react';
import styles from './privacy-policy.module.css';
import logoRAMD from "../assets/RAMD-LOGO-SINFONDO.png";
import logoRAMDBLANCO from "../assets/RAMD-LOGO-FONDOBLANCO.png";

const PrivacyPolicy = () => {
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

  const privacySections = [
    {
      id: 'informacion-recopilada',
      icon: <Database className={styles.sectionIcon} />,
      title: '1. Información que Recopilamos',
      content: [
        {
          subtitle: '1.1 Información que nos proporcionas directamente',
          items: [
            'Datos de contacto: nombre, dirección de correo electrónico, número de teléfono, empresa',
            'Información del proyecto: detalles sobre tus necesidades, objetivos y presupuesto',
            'Datos de facturación: información necesaria para procesar pagos y emitir facturas',
            'Comunicaciones: el contenido de tus mensajes cuando te comunicas con nosotros'
          ]
        },
        {
          subtitle: '1.2 Información recopilada automáticamente',
          items: [
            'Datos de navegación: dirección IP, tipo de navegador, sistema operativo',
            'Análisis de uso: páginas visitadas, tiempo de permanencia, origen del tráfico',
            'Cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio',
            'Datos de rendimiento del sitio web para optimización técnica'
          ]
        }
      ]
    },
    {
      id: 'uso-informacion',
      icon: <Eye className={styles.sectionIcon} />,
      title: '2. Cómo Usamos tu Información',
      content: [
        {
          subtitle: 'Utilizamos la información recopilada para:',
          items: [
            'Proporcionar, mantener y mejorar nuestros servicios de desarrollo de software',
            'Responder a tus consultas y solicitudes de información sobre proyectos',
            'Enviar comunicaciones importantes sobre tus proyectos y servicios contratados',
            'Procesar transacciones y gestionar la facturación de servicios',
            'Analizar el uso de nuestro sitio web para mejorar la experiencia del usuario',
            'Cumplir con obligaciones legales y proteger nuestros derechos',
            'Prevenir fraude y garantizar la seguridad de nuestros sistemas',
            'Personalizar tu experiencia según tus preferencias e intereses'
          ]
        }
      ]
    },
    {
      id: 'compartir-datos',
      icon: <Users className={styles.sectionIcon} />,
      title: '3. Compartir tu Información',
      content: [
        {
          subtitle: 'RAMD Software Solutions no vende tu información personal. Compartimos información solo en estos casos:',
          items: [
            'Proveedores de servicios: empresas que nos ayudan a operar nuestro negocio (hosting, análisis, email)',
            'Requisitos legales: cuando la ley lo requiera o para proteger nuestros derechos legales',
            'Transacciones comerciales: en caso de fusión, adquisición o venta de activos',
            'Con tu consentimiento: cuando nos autorices expresamente a compartir tu información'
          ]
        },
        {
          subtitle: 'Terceros con los que podemos compartir datos:',
          items: [
            'Proveedores de infraestructura cloud (AWS, Google Cloud)',
            'Herramientas de análisis web (Google Analytics)',
            'Servicios de email marketing y comunicación',
            'Procesadores de pago para transacciones financieras'
          ]
        }
      ]
    },
    {
      id: 'seguridad',
      icon: <Lock className={styles.sectionIcon} />,
      title: '4. Seguridad de Datos',
      content: [
        {
          subtitle: 'Implementamos medidas de seguridad técnicas y organizativas:',
          items: [
            'Encriptación SSL/TLS para todas las transmisiones de datos',
            'Almacenamiento seguro con cifrado de bases de datos',
            'Controles de acceso estrictos y autenticación multifactor',
            'Auditorías de seguridad regulares y pruebas de penetración',
            'Políticas de retención de datos y eliminación segura',
            'Capacitación continua del equipo en mejores prácticas de seguridad',
            'Monitoreo 24/7 de sistemas y detección de amenazas',
            'Planes de respuesta a incidentes y recuperación ante desastres'
          ]
        }
      ]
    },
    {
      id: 'derechos',
      icon: <UserCheck className={styles.sectionIcon} />,
      title: '5. Tus Derechos',
      content: [
        {
          subtitle: 'De acuerdo con las leyes de protección de datos aplicables, tienes derecho a:',
          items: [
            'Acceder a tus datos personales que tenemos almacenados',
            'Rectificar información inexacta o incompleta',
            'Solicitar la eliminación de tus datos personales',
            'Oponerte al procesamiento de tu información personal',
            'Solicitar la portabilidad de tus datos a otro proveedor',
            'Retirar tu consentimiento en cualquier momento',
            'Presentar una queja ante la autoridad de protección de datos',
            'Recibir información clara sobre cómo procesamos tus datos'
          ]
        },
        {
          subtitle: 'Para ejercer estos derechos, contáctanos en:',
          items: [
            'Email: ramd.software@gmail.com',
            'Responderemos a tu solicitud dentro de 30 días hábiles'
          ]
        }
      ]
    },
    {
      id: 'cookies',
      icon: <Cookie className={styles.sectionIcon} />,
      title: '6. Cookies y Tecnologías de Seguimiento',
      content: [
        {
          subtitle: 'Tipos de cookies que utilizamos:',
          items: [
            'Cookies esenciales: necesarias para el funcionamiento del sitio',
            'Cookies de rendimiento: para analizar cómo se usa nuestro sitio',
            'Cookies funcionales: para recordar tus preferencias',
            'Cookies de terceros: Google Analytics para estadísticas de uso'
          ]
        },
        {
          subtitle: 'Control de cookies:',
          items: [
            'Puedes configurar tu navegador para rechazar cookies',
            'Algunas funcionalidades pueden verse limitadas sin cookies',
            'Puedes eliminar cookies almacenadas en cualquier momento'
          ]
        }
      ]
    },
    {
      id: 'retencion',
      icon: <Clock className={styles.sectionIcon} />,
      title: '7. Retención de Datos',
      content: [
        {
          subtitle: 'Conservamos tu información personal durante:',
          items: [
            'Datos de clientes activos: mientras dure la relación comercial',
            'Datos de proyectos: 5 años después de la finalización del proyecto',
            'Información de facturación: según requisitos legales fiscales (10 años)',
            'Datos de marketing: hasta que solicites su eliminación',
            'Logs del sistema: 90 días para fines de seguridad y auditoría'
          ]
        }
      ]
    },
    {
      id: 'transferencias',
      icon: <Globe className={styles.sectionIcon} />,
      title: '8. Transferencias Internacionales',
      content: [
        {
          subtitle: 'Información sobre transferencias de datos:',
          items: [
            'Nuestros servidores principales están ubicados en Colombia',
            'Utilizamos proveedores cloud con centros de datos certificados internacionalmente',
            'Implementamos cláusulas contractuales estándar para protección de datos',
            'Garantizamos el mismo nivel de protección independientemente de la ubicación',
            'Cumplimos con estándares internacionales como ISO 27001'
          ]
        }
      ]
    },
    {
      id: 'menores',
      icon: <Shield className={styles.sectionIcon} />,
      title: '9. Protección de Menores',
      content: [
        {
          subtitle: 'Política sobre datos de menores:',
          items: [
            'Nuestros servicios están dirigidos a empresas y profesionales',
            'No recopilamos intencionalmente datos de menores de 18 años',
            'Si descubrimos datos de menores, los eliminaremos inmediatamente',
            'Los padres/tutores pueden contactarnos para verificar o eliminar datos'
          ]
        }
      ]
    },
    {
      id: 'actualizaciones',
      icon: <FileText className={styles.sectionIcon} />,
      title: '10. Cambios a esta Política',
      content: [
        {
          subtitle: 'Actualizaciones de la política:',
          items: [
            'Podemos actualizar esta política para reflejar cambios en nuestras prácticas',
            'La fecha de "Última actualización" indica cuándo se modificó por última vez',
            'Notificaremos cambios significativos por email o en nuestro sitio web',
            'Te recomendamos revisar esta política periódicamente',
            'El uso continuado del sitio constituye aceptación de los cambios'
          ]
        }
      ]
    }
  ];

  const faqs = [
    {
      question: '¿Cómo puedo acceder a mis datos personales?',
      answer: 'Puedes solicitar acceso a tus datos enviando un email a ramd.software@gmail.com. Te proporcionaremos una copia de tu información en un formato estructurado dentro de 30 días.'
    },
    {
      question: '¿Eliminan completamente mis datos si lo solicito?',
      answer: 'Sí, eliminaremos tus datos personales excepto aquellos que debamos conservar por obligaciones legales (como registros fiscales). El proceso de eliminación se completa en 30 días.'
    },
    {
      question: '¿Comparten mi información con empresas de marketing?',
      answer: 'No. No vendemos ni compartimos tu información con terceros para fines de marketing. Solo compartimos datos con proveedores de servicios esenciales bajo estrictos acuerdos de confidencialidad.'
    },
    {
      question: '¿Cómo protegen mis datos de proyecto confidenciales?',
      answer: 'Implementamos cifrado de extremo a extremo, controles de acceso estrictos, NDAs con todo nuestro personal, y almacenamiento en servidores seguros con certificaciones ISO 27001.'
    },
    {
      question: '¿Qué pasa con mis datos si cierran la empresa?',
      answer: 'En caso de cierre, notificaremos con 90 días de antelación y ofreceremos opciones para transferir o eliminar tus datos según tu preferencia.'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'ramd.software@gmail.com',
      link: 'mailto:ramd.software@gmail.com'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Ubicación',
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
            <Shield size={48} />
          </div>
          <h1 className={styles.heroTitle}>Política de Privacidad</h1>
          <p className={styles.heroSubtitle}>
            En RAMD Software Solutions, tu privacidad y la protección de tus datos son nuestra prioridad.
            Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
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

      {/* Quick Links */}
      <section className={styles.quickLinks}>
        <div className={styles.quickLinksContainer}>
          <h3>Navegación Rápida</h3>
          <div className={styles.linkGrid}>
            {privacySections.map((section) => (
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

      {/* Privacy Sections */}
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.contentGrid}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarSticky}>
                <h4>Contenido</h4>
                <nav className={styles.sidebarNav}>
                  {privacySections.map((section) => (
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
                  <Shield size={24} className={styles.sidebarContactIcon} />
                  <h5>¿Preguntas sobre Privacidad?</h5>
                  <p>Contáctanos para cualquier duda sobre el manejo de tus datos</p>
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
                <h2>Compromiso con tu Privacidad</h2>
                <p>
                  En RAMD Software Solutions, entendemos que cuando nos confías tus datos y proyectos,
                  estás depositando tu confianza en nosotros. Por eso, nos comprometemos a proteger tu
                  información con los más altos estándares de seguridad y transparencia.
                </p>
                <p>
                  Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos
                  tu información personal cuando utilizas nuestros servicios de desarrollo de software
                  empresarial, visitas nuestro sitio web o te comunicas con nosotros.
                </p>
                <div className={styles.highlightBox}>
                  <Lock size={24} />
                  <div>
                    <strong>Principio fundamental:</strong>
                    <p>Solo recopilamos los datos necesarios para brindarte el mejor servicio posible,
                      y nunca compartiremos tu información personal con terceros sin tu consentimiento
                      explícito.</p>
                  </div>
                </div>
              </div>

              {/* Privacy Sections */}
              {privacySections.map((section, index) => (
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
                <h2>Preguntas Frecuentes sobre Privacidad</h2>
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
                  <h2>¿Tienes Dudas sobre Privacidad?</h2>
                  <p>
                    Nuestro equipo está disponible para responder cualquier pregunta sobre
                    cómo manejamos y protegemos tus datos personales.
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

export default PrivacyPolicy;