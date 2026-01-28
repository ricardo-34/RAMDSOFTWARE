import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowRight, Code2, Smartphone, Globe, Database, Zap, Shield,
  CheckCircle2, Users, TrendingUp, MessageSquare, Mail, MapPin,
  Phone, Clock, ChevronRight, Play, Award, Target, Lightbulb,
  Menu, X, Linkedin, Github, Twitter, Check, AlertCircle
} from 'lucide-react';
import styles from './home.module.css';
import { Link } from "react-router-dom";
import logoRAMD from "../assets/RAMD-LOGO-SINFONDO.png";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [stats, setStats] = useState({ clients: 0, projects: 0, satisfaction: 0, experience: 0 });
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const duration = 2000, steps = 60, interval = duration / steps;
    const targets = { clients: 1, projects: 3, satisfaction: 100, experience: 2026 };
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setStats({
        clients: Math.floor((targets.clients / steps) * step),
        projects: Math.floor((targets.projects / steps) * step),
        satisfaction: Math.floor((targets.satisfaction / steps) * step),
        experience: Math.floor((targets.experience / steps) * step)
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  // Toast notification effect
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Configuración de EmailJS
    const serviceId = 'service_5io1ien';
    const templateId = 'template_b1q1xh3';
    const publicKey = 'iQms677FytkKALEi4';

    // ✅ VARIABLES CORREGIDAS + FECHA AGREGADA
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      date: new Date().toLocaleString('es-CO', { 
        dateStyle: 'full', 
        timeStyle: 'short',
        timeZone: 'America/Bogota'
      }),
      to_name: 'RAMD Team',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      showToast('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.', 'success');
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      showToast('Error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos directamente por email.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <Globe className={styles.serviceIcon} />,
      title: 'Desarrollo Web Corporativo',
      description: 'Plataformas web escalables y robustas construidas con tecnologías de vanguardia. React, Node.js y arquitecturas modernas para empresas que buscan excelencia digital.',
      features: ['Progressive Web Apps', 'Dashboards Interactivos', 'Sistemas Enterprise', 'E-commerce Avanzado'],
      tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL']
    },
    {
      icon: <Smartphone className={styles.serviceIcon} />,
      title: 'Aplicaciones Móviles Nativas',
      description: 'Experiencias móviles excepcionales para iOS y Android. Desarrollo nativo con Flutter para máximo rendimiento y funcionalidad offline avanzada.',
      features: ['Apps iOS/Android', 'Sincronización Real-time', 'Modo Offline', 'Push Notifications'],
      tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
    },
    {
      icon: <Code2 className={styles.serviceIcon} />,
      title: 'Soluciones Enterprise a Medida',
      description: 'Software personalizado que se adapta perfectamente a sus procesos de negocio. Desde ERPs hasta sistemas de gestión complejos.',
      features: ['Sistemas ERP/CRM', 'Automatización', 'Integración Legacy', 'Business Intelligence'],
      tech: ['Python', 'Java', 'Microservices', 'Docker']
    },
    {
      icon: <Database className={styles.serviceIcon} />,
      title: 'Integración de Sistemas',
      description: 'Conectamos sus sistemas existentes en un ecosistema coherente. APIs, webhooks, ETL y sincronización de datos en tiempo real.',
      features: ['APIs RESTful', 'GraphQL', 'Webhooks', 'ETL Pipelines'],
      tech: ['Node.js', 'Python', 'Redis', 'RabbitMQ']
    },
    {
      icon: <Zap className={styles.serviceIcon} />,
      title: 'Monitoreo y Analytics en Tiempo Real',
      description: 'Dashboards empresariales que transforman datos en decisiones. Visualización avanzada, métricas en vivo y alertas inteligentes.',
      features: ['Real-time Monitoring', 'Custom Dashboards', 'Alertas Inteligentes', 'Data Visualization'],
      tech: ['WebSockets', 'D3.js', 'InfluxDB', 'Grafana']
    },
    {
      icon: <Shield className={styles.serviceIcon} />,
      title: 'Soporte Enterprise 24/7',
      description: 'Mantenimiento proactivo y soporte técnico continuo. Actualizaciones, optimizaciones y resolución de incidencias con SLA garantizado.',
      features: ['Soporte 24/7', 'SLA Garantizado', 'Updates Continuos', 'Monitoring Proactivo'],
      tech: ['DevOps', 'CI/CD', 'Kubernetes', 'AWS']
    }
  ];

  const caseStudy = {
    client: 'Cooespatrans',
    industry: 'Transporte y Logística',
    duration: '6 meses',
    challenge: 'Gestión ineficiente de flotas con falta de visibilidad en tiempo real de ubicaciones y estado de visitas. Procesos manuales propensos a errores y sin trazabilidad.',
    solution: 'Sistema integral compuesto por una plataforma web administrativa con dashboards en tiempo real y aplicación móvil para conductores. Integración con Google Maps API para rastreo GPS, sistema de notificaciones push y generación automática de reportes.',
    results: [
      { metric: '85%', label: 'Reducción en tiempo de gestión' },
      { metric: '100%', label: 'Visibilidad en tiempo real' },
      { metric: '40%', label: 'Mejora en productividad' },
      { metric: '95%', label: 'Satisfacción del cliente' }
    ],
    technologies: ['React', 'Node.js', 'Flutter', 'MongoDB', 'Google Maps API', 'Socket.io'],
    testimonial: 'La plataforma desarrollada nos permitió tener un mejor control sobre los recorridos de nuestros choferes y el estado de cada cliente. Ahora podemos monitorear la ubicación de la flota en tiempo real y hacer un seguimiento más organizado de las visitas asignadas, lo que mejoró significativamente nuestra gestión operativa.'
  };

  const whyChooseUs = [
    {
      icon: <Target className={styles.featureIcon} />,
      title: 'Enfoque en Resultados',
      description: 'No solo desarrollamos software, entregamos soluciones que impulsan el crecimiento de su negocio con métricas medibles.'
    },
    {
      icon: <Lightbulb className={styles.featureIcon} />,
      title: 'Innovación Constante',
      description: 'Utilizamos las últimas tecnologías y metodologías ágiles para mantener su empresa a la vanguardia digital.'
    },
    {
      icon: <Users className={styles.featureIcon} />,
      title: 'Equipo Especializado',
      description: 'Desarrolladores senior con experiencia comprobada en proyectos enterprise de diferentes industrias.'
    },
    {
      icon: <Shield className={styles.featureIcon} />,
      title: 'Seguridad Empresarial',
      description: 'Implementamos las mejores prácticas de seguridad y cumplimiento normativo en cada proyecto.'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Toast Notification */}
      <div className={`${styles.toastContainer} ${toast.show ? styles.toastShow : ''}`}>
        <div className={`${styles.toast} ${styles[`toast${toast.type === 'success' ? 'Success' : 'Error'}`]}`}>
          <div className={styles.toastIcon}>
            {toast.type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
          </div>
          <div className={styles.toastContent}>
            <p className={styles.toastMessage}>{toast.message}</p>
          </div>
          <button className={styles.toastClose} onClick={() => setToast({ ...toast, show: false })}>
            <X size={18} />
          </button>
        </div>
      </div>

      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.navContainer}>
          <img
            src={logoRAMD}
            alt="RAMD"
            className={styles.footerLogo}
          />
          <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
            <li><a onClick={() => scrollToSection('inicio')}>Inicio</a></li>
            <li><a onClick={() => scrollToSection('servicios')}>Servicios</a></li>
            <li><a onClick={() => scrollToSection('casos')}>Casos de Éxito</a></li>
            <li><a onClick={() => scrollToSection('nosotros')}>Nosotros</a></li>
            <li><a onClick={() => scrollToSection('contacto')} className={styles.navCta}>
              Agenda una Reunión<ArrowRight size={18} />
            </a></li>
          </ul>
        </div>
      </nav>

      <section id="inicio" className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Transformamos Ideas en<span className={styles.heroTitleGradient}> Soluciones Digitales Escalables</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Impulsamos negocios en crecimiento a través de soluciones digitales a medida. Diseñamos y desarrollamos software web y móvil que transforma ideas en productos listos para escalar.
            </p>
            <div className={styles.heroCtas}>
              <button className={styles.btnPrimary} onClick={() => scrollToSection('contacto')}>
                <span>Solicitar Consulta Gratuita</span><ArrowRight size={20} />
              </button>
              <button className={styles.btnSecondary} onClick={() => scrollToSection('casos')}>
                <Play size={20} /><span>Ver Casos de Éxito</span>
              </button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>{stats.clients}</div>
                <div className={styles.statLabel}>Cliente Satisfecho</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>{stats.projects}</div>
                <div className={styles.statLabel}>Proyectos Activos</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>{stats.satisfaction}%</div>
                <div className={styles.statLabel}>Tasa de Éxito</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.statNumber}>{stats.experience}</div>
                <div className={styles.statLabel}>Año de Fundación</div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <span></span><span></span><span></span>
                </div>
                <span className={styles.cardTitle}>Enterprise Dashboard</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardMetric}>
                  <TrendingUp className={styles.metricIcon} />
                  <div>
                    <div className={styles.metricValue}>+285%</div>
                    <div className={styles.metricLabel}>ROI Growth</div>
                  </div>
                </div>
                <div className={styles.cardChart}>
                  <div className={styles.chartBar} style={{ height: '40%' }}></div>
                  <div className={styles.chartBar} style={{ height: '65%' }}></div>
                  <div className={styles.chartBar} style={{ height: '55%' }}></div>
                  <div className={styles.chartBar} style={{ height: '80%' }}></div>
                  <div className={styles.chartBar} style={{ height: '95%' }}></div>
                  <div className={styles.chartBar} style={{ height: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.heroGrid}></div>
          <div className={styles.heroGradient}></div>
        </div>
      </section>

      <section className={styles.trustBar}>
        <div className={styles.trustContainer}>
          <p className={styles.trustText}>Tecnologías de Nivel Enterprise</p>
          <div className={styles.trustLogos}>
            <span>React</span><span>Node.js</span><span>Python</span><span>Flutter</span>
            <span>Java</span><span>MongoDB</span><span>PostgreSQL</span><span>AWS</span>
          </div>
        </div>
      </section>

      <section id="servicios" className={styles.services}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Nuestros Servicios</span>
            <h2 className={styles.sectionTitle}>
              Soluciones Tecnológicas<span className={styles.titleGradient}> de Clase Mundial</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Ofrecemos un portafolio completo de servicios de desarrollo para empresas que buscan
              excelencia tecnológica y resultados medibles.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={`${styles.serviceCard} ${activeService === index ? styles.serviceCardActive : ''}`}
                onMouseEnter={() => setActiveService(index)} onMouseLeave={() => setActiveService(null)}>
                <div className={styles.serviceIconWrapper}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, i) => (
                    <li key={i}><CheckCircle2 size={16} /><span>{feature}</span></li>
                  ))}
                </ul>
                <div className={styles.serviceTech}>
                  {service.tech.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
                <button className={styles.serviceBtn}>
                  <span>Más Información</span><ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className={styles.caseStudy}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Caso de Éxito Destacado</span>
            <h2 className={styles.sectionTitle}>
              Transformación Digital en<span className={styles.titleGradient}> Transporte y Logística</span>
            </h2>
          </div>
          <div className={styles.caseStudyContent}>
            <div className={styles.caseStudyHeader}>
              <div className={styles.caseStudyInfo}>
                <h3 className={styles.caseStudyClient}>{caseStudy.client}</h3>
                <p className={styles.caseStudyIndustry}>{caseStudy.industry}</p>
              </div>
              <div className={styles.caseStudyMeta}>
                <div className={styles.metaItem}><Clock size={18} /><span>{caseStudy.duration}</span></div>
              </div>
            </div>
            <div className={styles.caseStudyBody}>
              <div className={styles.caseStudySection}>
                <h4 className={styles.caseStudySectionTitle}><Target size={20} />El Desafío</h4>
                <p>{caseStudy.challenge}</p>
              </div>
              <div className={styles.caseStudySection}>
                <h4 className={styles.caseStudySectionTitle}><Lightbulb size={20} />Nuestra Solución</h4>
                <p>{caseStudy.solution}</p>
              </div>
              <div className={styles.caseStudyResults}>
                <h4 className={styles.caseStudySectionTitle}><Award size={20} />Resultados Medibles</h4>
                <div className={styles.resultsGrid}>
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className={styles.resultCard}>
                      <div className={styles.resultMetric}>{result.metric}</div>
                      <div className={styles.resultLabel}>{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.caseStudyTech}>
                <h4 className={styles.caseStudySectionTitle}>Stack Tecnológico</h4>
                <div className={styles.techStack}>
                  {caseStudy.technologies.map((tech, i) => (
                    <span key={i} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.testimonial}>
                <MessageSquare className={styles.testimonialIcon} />
                <p className={styles.testimonialText}>"{caseStudy.testimonial}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{caseStudy.client}</strong><span>Cliente Empresarial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whyChooseUs}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Por Qué Elegirnos</span>
            <h2 className={styles.sectionTitle}>
              Su Socio Estratégico en<span className={styles.titleGradient}> Transformación Digital</span>
            </h2>
          </div>
          <div className={styles.featuresGrid}>
            {whyChooseUs.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className={styles.about}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <span className={styles.sectionBadge}>Sobre RAMD</span>
              <h2 className={styles.sectionTitle}>
                Excelencia en Desarrollo<span className={styles.titleGradient}> de Software Enterprise</span>
              </h2>
              <p className={styles.aboutDescription}>
                RAMD es una empresa de desarrollo de software empresarial con sede en Pasto, Colombia,
                especializada en crear soluciones tecnológicas escalables y robustas para startups en
                crecimiento y empresas establecidas.
              </p>
              <p className={styles.aboutDescription}>
                Nuestro enfoque se centra en comprender profundamente los desafíos de negocio de nuestros
                clientes para entregar soluciones que no solo cumplen con los requisitos técnicos, sino
                que impulsan el crecimiento y la eficiencia operativa.
              </p>
              <div className={styles.aboutValues}>
                <div className={styles.valueItem}>
                  <Award size={24} />
                  <div>
                    <h4>Misión</h4>
                    <p>Desarrollar soluciones tecnológicas inteligentes que simplifican la operación
                      empresarial y generan ventajas competitivas sostenibles.</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <Target size={24} />
                  <div>
                    <h4>Visión</h4>
                    <p>Ser el socio tecnológico de referencia para empresas innovadoras en Colombia,
                      reconocidos por la calidad excepcional de nuestras soluciones.</p>
                  </div>
                </div>
              </div>
              <button className={styles.btnPrimary} onClick={() => scrollToSection('contacto')}>
                <span>Trabajemos Juntos</span><ArrowRight size={20} />
              </button>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.aboutStatsCard}>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatNumber}>2026</div>
                  <div className={styles.aboutStatLabel}>Fundación</div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatNumber}>Pasto</div>
                  <div className={styles.aboutStatLabel}>Colombia</div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatNumber}>Full-Stack</div>
                  <div className={styles.aboutStatLabel}>Expertise</div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatNumber}>6+</div>
                  <div className={styles.aboutStatLabel}>Tecnologías Core</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className={styles.contact}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <span className={styles.sectionBadge}>Contacto</span>
              <h2 className={styles.sectionTitle}>
                Comencemos su<span className={styles.titleGradient}> Proyecto Juntos</span>
              </h2>
              <p className={styles.contactDescription}>
                Agenda una consulta gratuita para discutir cómo podemos ayudar a tu empresa
                a alcanzar sus objetivos tecnológicos. Sin compromisos, solo soluciones.
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}><Mail size={24} /></div>
                  <div className={styles.contactItemContent}>
                    <h4>Email</h4>
                    <a href="mailto:ramd.software@gmail.com">ramd.software@gmail.com</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}><MapPin size={24} /></div>
                  <div className={styles.contactItemContent}>
                    <h4>Ubicación</h4>
                    <p>Pasto, Nariño, Colombia</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}><Clock size={24} /></div>
                  <div className={styles.contactItemContent}>
                    <h4>Horario de Atención</h4>
                    <p>Lun - Vie: 8:00 AM - 6:00 PM COT</p>
                  </div>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                <a href="#" className={styles.socialLink}><Github size={20} /></a>
                <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
              </div>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formHeader}>
                <h3>Cuéntanos sobre tu proyecto</h3>
                <p>Completa este formulario y nos pondremos en contacto contigo en menos de 24 horas</p>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.inputCard}>
                  <label htmlFor="name">
                    <Users size={18} />
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Ej: Juan Pérez" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className={styles.inputCard}>
                  <label htmlFor="email">
                    <Mail size={18} />
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="tu@empresa.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className={styles.inputCard}>
                  <label htmlFor="company">
                    <Target size={18} />
                    Empresa
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Nombre de tu empresa" 
                    value={formData.company}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className={styles.inputCard}>
                  <label htmlFor="phone">
                    <Phone size={18} />
                    Teléfono
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+57 300 000 0000" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.inputCard} style={{ marginBottom: 'var(--space-5)' }}>
                <label htmlFor="service">
                  <Zap size={18} />
                  ¿Qué servicio te interesa?
                </label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="web">💻 Desarrollo Web</option>
                  <option value="mobile">📱 Aplicaciones Móviles</option>
                  <option value="enterprise">🏢 Software Enterprise</option>
                  <option value="integration">🔗 Integración de Sistemas</option>
                  <option value="consulting">💡 Consultoría</option>
                </select>
              </div>

              <div className={styles.inputCard} style={{ marginBottom: 'var(--space-6)' }}>
                <label htmlFor="message">
                  <MessageSquare size={18} />
                  Cuéntanos más sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Describe tus necesidades, objetivos, presupuesto estimado y cronograma..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}</span>
                {!isSubmitting && <ArrowRight size={20} />}
              </button>

              <div className={styles.formFooter}>
                <Shield size={16} />
                <span>Tus datos están protegidos. Respuesta garantizada en 24h.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

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

export default Home;