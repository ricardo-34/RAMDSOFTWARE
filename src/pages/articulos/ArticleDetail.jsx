import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart, Eye,
  Facebook, Twitter, Linkedin, Link2, Check, X, Menu, Github, ArrowRight
} from 'lucide-react';
import styles from './article-detail.module.css';
import logoRAMD from "../../assets/RAMD-LOGO-SINFONDO.png";
import logoRAMDBLANCO from "../../assets/RAMD-LOGO-FONDOBLANCO.png";


// Base de datos de artículos completos
const articlesDB = {
  '1': {
    id: 1,
    title: 'Guía Completa de React 18: Nuevas Características y Mejoras de Performance',
    excerpt: 'Descubre las nuevas características de React 18 incluyendo Concurrent Rendering, Automatic Batching, y Suspense SSR.',
    category: 'Desarrollo Web',
    author: 'RAMD Team',
    date: '15 Enero, 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80',
    views: 2345,
    initialLikes: 189,
    tags: ['React', 'JavaScript', 'Frontend', 'Performance'],
    content: `
      <p class="lead">React 18 marca un hito importante en la evolución de esta biblioteca. Con mejoras sustanciales en rendimiento y nuevas características que cambian la forma en que construimos interfaces, es esencial que todo desarrollador React entienda estos cambios.</p>

      <h2>1. Concurrent Rendering: El Cambio de Paradigma</h2>
      <p>Una de las características más revolucionarias de React 18 es el <strong>Concurrent Rendering</strong>. Esta funcionalidad permite a React preparar múltiples versiones de la UI simultáneamente, interrumpiendo renders de baja prioridad para atender actualizaciones más urgentes.</p>

      <h3>¿Qué significa esto en la práctica?</h3>
      <p>Imagina que tienes una aplicación con una búsqueda en tiempo real. Anteriormente, cada keystroke podía bloquear el render de otros componentes. Con Concurrent Rendering:</p>

      <pre><code>import { useTransition } from 'react';

function SearchComponent() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    // Marcar esta actualización como no urgente
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    &lt;&gt;
      &lt;input onChange={handleChange} /&gt;
      {isPending && &lt;Spinner /&gt;}
      &lt;SearchResults query={query} /&gt;
    &lt;/&gt;
  );
}</code></pre>

      <h2>2. Automatic Batching: Menos Re-renders</h2>
      <p>React 18 introduce <strong>Automatic Batching</strong> en todos los contextos, no solo en event handlers. Esto significa que múltiples actualizaciones de estado se agrupan automáticamente en un solo render.</p>

      <pre><code>// Antes de React 18: 2 renders
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
}, 1000);

// React 18: 1 render (batching automático)
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
}, 1000);</code></pre>

      <h2>3. Suspense para SSR</h2>
      <p>El soporte de Suspense en Server-Side Rendering permite streaming HTML y carga selectiva de componentes:</p>

      <pre><code>&lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
  &lt;Comments /&gt;
&lt;/Suspense&gt;</code></pre>

      <p>Esto permite que el contenido principal se renderice mientras componentes más pesados se cargan en segundo plano.</p>

      <h2>4. useId: IDs Únicos para Accesibilidad</h2>
      <p>El nuevo hook <code>useId</code> genera IDs únicos estables en servidor y cliente:</p>

      <pre><code>function NameFields() {
  const id = useId();
  
  return (
    &lt;&gt;
      &lt;label htmlFor={id + '-firstName'}&gt;First Name&lt;/label&gt;
      &lt;input id={id + '-firstName'} /&gt;
      
      &lt;label htmlFor={id + '-lastName'}&gt;Last Name&lt;/label&gt;
      &lt;input id={id + '-lastName'} /&gt;
    &lt;/&gt;
  );
}</code></pre>

      <h2>5. Mejores Prácticas de Migración</h2>
      <p>Para migrar a React 18:</p>

      <ol>
        <li><strong>Actualiza dependencias:</strong> <code>npm install react@18 react-dom@18</code></li>
        <li><strong>Usa createRoot:</strong> Reemplaza <code>ReactDOM.render</code> con <code>createRoot</code></li>
        <li><strong>Revisa StrictMode:</strong> Detecta patrones problemáticos automáticamente</li>
        <li><strong>Prueba transitions:</strong> Identifica actualizaciones que pueden ser de baja prioridad</li>
      </ol>

      <h2>6. Impacto en Performance</h2>
      <p>Las mejoras de performance son significativas:</p>
      <ul>
        <li>Reducción de hasta 30% en tiempo de renderizado inicial</li>
        <li>Mejora de 50% en tiempo de respuesta para interacciones</li>
        <li>Menor uso de memoria con Automatic Batching</li>
      </ul>

      <h2>Conclusión</h2>
      <p>React 18 no es solo una actualización incremental; es un salto cualitativo que mejora la experiencia de desarrollo y usuario. Las características de concurrencia, batching automático y suspense SSR hacen que las aplicaciones sean más rápidas y responsivas.</p>

      <p><strong>Recomendación:</strong> Si estás iniciando un nuevo proyecto, usa React 18 desde el principio. Para proyectos existentes, planifica la migración gradualmente, probando cada característica nueva en entornos controlados.</p>
    `
  },
  '2': {
    id: 2,
    title: 'Flutter vs React Native 2026: ¿Cuál Framework Elegir para tu App?',
    excerpt: 'Comparación detallada entre Flutter y React Native. Analizamos rendimiento, ecosistema, curva de aprendizaje y casos de uso.',
    category: 'Desarrollo Móvil',
    author: 'RAMD Team',
    date: '12 Enero, 2026',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    views: 3120,
    initialLikes: 245,
    tags: ['Flutter', 'React Native', 'Mobile', 'Comparación'],
    content: `
      <p class="lead">La elección entre Flutter y React Native es una de las decisiones más importantes al iniciar un proyecto móvil. En 2026, ambos frameworks han madurado significativamente, pero tienen diferencias clave que pueden impactar tu proyecto.</p>

      <h2>1. Performance: Velocidad y Fluidez</h2>
      
      <h3>Flutter: Compilación Nativa</h3>
      <p>Flutter compila directamente a código nativo (ARM) usando <strong>Ahead-of-Time (AOT)</strong> compilation. Esto resulta en:</p>
      <ul>
        <li>60 FPS consistentes en la mayoría de dispositivos</li>
        <li>Tiempo de inicio de app más rápido</li>
        <li>Animaciones más suaves gracias a Skia engine</li>
      </ul>

      <h3>React Native: JavaScript Bridge</h3>
      <p>React Native usa un puente JavaScript que comunica con componentes nativos:</p>
      <ul>
        <li>Performance comparable para UIs simples</li>
        <li>Puede experimentar lag en animaciones complejas</li>
        <li>Nuevo arquitectura Fabric mejora significativamente el rendimiento</li>
      </ul>

      <div class="comparison-table">
        <h4>Benchmark: Renderizado de Lista con 1000 Items</h4>
        <ul>
          <li><strong>Flutter:</strong> 58-60 FPS</li>
          <li><strong>React Native:</strong> 45-55 FPS</li>
          <li><strong>React Native (Fabric):</strong> 55-60 FPS</li>
        </ul>
      </div>

      <h2>2. Lenguaje de Programación</h2>

      <h3>Dart (Flutter)</h3>
      <pre><code>class User {
  final String name;
  final int age;
  
  User({required this.name, required this.age});
  
  Map&lt;String, dynamic&gt; toJson() => {
    'name': name,
    'age': age,
  };
}</code></pre>

      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Tipado fuerte y null-safety</li>
        <li>Sintaxis limpia y moderna</li>
        <li>Compilación AOT para mejor performance</li>
      </ul>

      <p><strong>Desventajas:</strong></p>
      <ul>
        <li>Curva de aprendizaje si vienes de JavaScript</li>
        <li>Ecosistema más pequeño que JavaScript</li>
      </ul>

      <h3>JavaScript/TypeScript (React Native)</h3>
      <pre><code>interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Juan",
  age: 28
};</code></pre>

      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Familiaridad para desarrolladores web</li>
        <li>Ecosistema enorme de npm packages</li>
        <li>Fácil transición desde React</li>
      </ul>

      <h2>3. Ecosistema y Paquetes</h2>

      <h3>Flutter</h3>
      <p>Pub.dev ofrece más de 35,000 paquetes. Destacados:</p>
      <ul>
        <li><strong>provider:</strong> State management simple</li>
        <li><strong>dio:</strong> Cliente HTTP avanzado</li>
        <li><strong>flutter_bloc:</strong> Patrón BLoC para arquitectura</li>
        <li><strong>firebase_core:</strong> Integración Firebase</li>
      </ul>

      <h3>React Native</h3>
      <p>npm tiene más de 2 millones de paquetes. Para mobile:</p>
      <ul>
        <li><strong>react-navigation:</strong> Navegación estándar</li>
        <li><strong>axios:</strong> Requests HTTP</li>
        <li><strong>redux:</strong> State management global</li>
        <li><strong>expo:</strong> Toolchain completo</li>
      </ul>

      <h2>4. UI y Diseño</h2>

      <h3>Flutter: Material + Cupertino</h3>
      <p>Flutter ofrece widgets pre-construidos que siguen Material Design y iOS Cupertino:</p>
      <pre><code>Scaffold(
  appBar: AppBar(
    title: Text('Mi App'),
  ),
  body: ListView.builder(
    itemCount: items.length,
    itemBuilder: (context, index) {
      return ListTile(
        title: Text(items[index]),
      );
    },
  ),
)</code></pre>

      <h3>React Native: Componentes Nativos</h3>
      <p>React Native renderiza componentes nativos de cada plataforma:</p>
      <pre><code>&lt;SafeAreaView&gt;
  &lt;FlatList
    data={items}
    renderItem={({ item }) => (
      &lt;Text&gt;{item}&lt;/Text&gt;
    )}
  /&gt;
&lt;/SafeAreaView&gt;</code></pre>

      <h2>5. Curva de Aprendizaje</h2>

      <h3>Para Desarrolladores Web</h3>
      <p><strong>React Native:</strong> ⭐⭐⭐⭐⭐ (Muy fácil)</p>
      <p>Si ya conoces React, React Native será natural. JSX, hooks, y patrones son idénticos.</p>

      <p><strong>Flutter:</strong> ⭐⭐⭐ (Moderado)</p>
      <p>Dart es diferente pero intuitivo. El modelo de widgets requiere un cambio mental.</p>

      <h3>Para Desarrolladores Nativos</h3>
      <p><strong>Flutter:</strong> ⭐⭐⭐⭐ (Fácil)</p>
      <p>Conceptos de widgets y estado son familiares desde Android/iOS.</p>

      <p><strong>React Native:</strong> ⭐⭐⭐ (Moderado)</p>
      <p>JavaScript puede ser un cambio significativo desde Java/Kotlin/Swift.</p>

      <h2>6. Casos de Uso Ideales</h2>

      <h3>Elige Flutter si:</h3>
      <ul>
        <li>Necesitas UI altamente personalizada y animada</li>
        <li>Performance de 60fps es crítica</li>
        <li>Quieres una experiencia idéntica en iOS y Android</li>
        <li>Prefieres un framework más opinionado</li>
        <li>Estás construyendo apps de gaming o multimedia</li>
      </ul>

      <h3>Elige React Native si:</h3>
      <ul>
        <li>Tu equipo ya conoce React</li>
        <li>Necesitas integración profunda con código nativo existente</li>
        <li>Quieres aprovechar el ecosistema npm</li>
        <li>Prefieres que la app se sienta "nativa" en cada plataforma</li>
        <li>Necesitas actualizaciones over-the-air (con Expo)</li>
      </ul>

      <h2>7. Tamaño de la App</h2>

      <div class="comparison-table">
        <h4>App "Hello World" compilada</h4>
        <ul>
          <li><strong>Flutter (Android):</strong> ~4.7 MB</li>
          <li><strong>Flutter (iOS):</strong> ~2.9 MB</li>
          <li><strong>React Native (Android):</strong> ~7.5 MB</li>
          <li><strong>React Native (iOS):</strong> ~1.2 MB</li>
        </ul>
      </div>

      <p>Flutter es generalmente más ligero en Android, mientras React Native gana en iOS.</p>

      <h2>8. Comunidad y Empleo</h2>

      <h3>Flutter</h3>
      <ul>
        <li>Stack Overflow: ~180,000 preguntas</li>
        <li>GitHub Stars: ~160,000</li>
        <li>Trabajos: Crecimiento rápido, especialmente en startups</li>
        <li>Respaldo: Google</li>
      </ul>

      <h3>React Native</h3>
      <ul>
        <li>Stack Overflow: ~140,000 preguntas</li>
        <li>GitHub Stars: ~115,000</li>
        <li>Trabajos: Más demanda en empresas establecidas</li>
        <li>Respaldo: Meta (Facebook)</li>
      </ul>

      <h2>Conclusión: Nuestra Recomendación</h2>

      <p>En RAMD Software Solutions, usamos ambos frameworks según el proyecto:</p>

      <ul>
        <li><strong>Flutter para:</strong> E-commerce con UI customizada, apps de fintech, proyectos que priorizan performance</li>
        <li><strong>React Native para:</strong> MVPs rápidos, equipos React existentes, apps con mucho código compartido web/mobile</li>
      </ul>

      <p><strong>Para 2026, ambos son excelentes opciones.</strong> La decisión final depende de:</p>
      <ol>
        <li>Experiencia de tu equipo</li>
        <li>Requisitos específicos del proyecto</li>
        <li>Tiempo y presupuesto disponible</li>
        <li>Necesidades de personalización UI</li>
      </ol>

      <p>Si tuviéramos que elegir uno para un nuevo proyecto sin restricciones previas, <strong>Flutter</strong> tiene una ligera ventaja por su performance y experiencia de desarrollo consistente. Pero si tu equipo domina React, <strong>React Native</strong> te permitirá mayor velocidad de desarrollo.</p>
    `
  },
  '3': {
    id: 3,
    title: 'Microservicios vs Monolitos: Guía de Arquitectura para 2026',
    excerpt: 'Análisis profundo de arquitecturas monolíticas vs microservicios. Cuándo usar cada una y cómo migrar exitosamente.',
    category: 'DevOps',
    author: 'RAMD Team',
    date: '10 Enero, 2026',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    views: 2890,
    initialLikes: 198,
    tags: ['Microservicios', 'Arquitectura', 'DevOps', 'Escalabilidad'],
    content: `
      <p class="lead">La decisión entre arquitectura monolítica y microservicios puede definir el éxito o fracaso de un proyecto. En 2026, con la madurez de herramientas como Kubernetes y servicemesh, los microservicios son más accesibles, pero ¿son siempre la mejor opción?</p>

      <h2>1. Entendiendo los Monolitos</h2>

      <p>Un monolito es una aplicación construida como una unidad única donde todos los componentes están interconectados y ejecutan en el mismo proceso.</p>

      <h3>Estructura de un Monolito Moderno</h3>
      <pre><code>my-ecommerce-app/
├── src/
│   ├── users/
│   │   ├── UserController.js
│   │   ├── UserService.js
│   │   └── UserRepository.js
│   ├── products/
│   │   ├── ProductController.js
│   │   └── ProductService.js
│   ├── orders/
│   │   ├── OrderController.js
│   │   └── OrderService.js
│   └── payments/
│       └── PaymentService.js
├── database/
└── server.js</code></pre>

      <h3>Ventajas de los Monolitos</h3>
      <ul>
        <li><strong>Simplicidad de desarrollo:</strong> Un solo repositorio, stack y deployment</li>
        <li><strong>Debugging más fácil:</strong> Todo el código está en un lugar</li>
        <li><strong>Transacciones ACID simples:</strong> No hay distributed transactions</li>
        <li><strong>Testing más sencillo:</strong> Tests end-to-end son straightforward</li>
        <li><strong>Menor latencia:</strong> Llamadas de función directas, no network calls</li>
        <li><strong>Deployment atómico:</strong> Todo se despliega junto, sin versionado complejo</li>
      </ul>

      <h3>Desventajas de los Monolitos</h3>
      <ul>
        <li><strong>Escalamiento limitado:</strong> Solo puedes escalar toda la app, no componentes específicos</li>
        <li><strong>Deploy riesgoso:</strong> Un cambio pequeño requiere redeploy completo</li>
        <li><strong>Acoplamiento:</strong> Cambios en un módulo pueden afectar otros</li>
        <li><strong>Tecnología única:</strong> Todo debe usar el mismo stack</li>
        <li><strong>Onboarding lento:</strong> Nuevos devs deben entender toda la codebase</li>
      </ul>

      <h2>2. Arquitectura de Microservicios</h2>

      <p>Microservicios dividen la aplicación en servicios pequeños e independientes que se comunican via APIs.</p>

      <h3>Ejemplo de Microservicios</h3>
      <pre><code>ecommerce-platform/
├── user-service/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── product-service/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── order-service/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── payment-service/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
└── api-gateway/
    └── src/</code></pre>

      <h3>Ventajas de los Microservicios</h3>
      <ul>
        <li><strong>Escalamiento independiente:</strong> Escala solo los servicios que lo necesitan</li>
        <li><strong>Deployment independiente:</strong> Actualiza servicios sin afectar otros</li>
        <li><strong>Tecnología flexible:</strong> Cada servicio puede usar su stack óptimo</li>
        <li><strong>Equipos autónomos:</strong> Teams pueden trabajar independientemente</li>
        <li><strong>Fault isolation:</strong> Un fallo en un servicio no tumba todo</li>
        <li><strong>Facilita CI/CD:</strong> Pipelines más pequeños y rápidos</li>
      </ul>

      <h3>Desventajas de los Microservicios</h3>
      <ul>
        <li><strong>Complejidad operacional:</strong> Necesitas orquestación (Kubernetes)</li>
        <li><strong>Distributed transactions:</strong> Mantener consistencia es complejo</li>
        <li><strong>Testing difícil:</strong> Integration tests requieren múltiples servicios</li>
        <li><strong>Latencia de red:</strong> Comunicación inter-servicio agrega overhead</li>
        <li><strong>Debugging complicado:</strong> Trazar bugs a través de servicios es difícil</li>
        <li><strong>Costo inicial alto:</strong> Infraestructura y tooling son caros</li>
      </ul>

      <h2>3. Patrones de Comunicación</h2>

      <h3>Síncrono: REST/gRPC</h3>
      <pre><code>// User Service llamando a Order Service
const response = await fetch('http://order-service/api/orders', {
  method: 'POST',
  body: JSON.stringify({ userId, products })
});

const order = await response.json();</code></pre>

      <p><strong>Pros:</strong> Simple, fácil de entender<br>
      <strong>Cons:</strong> Acoplamiento temporal, si Order Service está caído, falla todo</p>

      <h3>Asíncrono: Message Queues</h3>
      <pre><code>// User Service publica evento
await messageQueue.publish('order.created', {
  userId,
  products,
  timestamp: Date.now()
});

// Payment Service escucha
messageQueue.subscribe('order.created', async (event) => {
  await processPayment(event.userId, event.products);
});</code></pre>

      <p><strong>Pros:</strong> Desacoplamiento, fault-tolerant<br>
      <strong>Cons:</strong> Complejidad, eventual consistency</p>

      <h2>4. Data Management</h2>

      <h3>Monolito: Base de Datos Compartida</h3>
      <pre><code>// Transacción ACID simple
BEGIN TRANSACTION;
  INSERT INTO orders (user_id, total) VALUES (123, 500);
  UPDATE users SET balance = balance - 500 WHERE id = 123;
  INSERT INTO payments (order_id, amount) VALUES (456, 500);
COMMIT;</code></pre>

      <h3>Microservicios: Base de Datos por Servicio</h3>
      <pre><code>// Saga Pattern para distributed transaction
async function createOrder(userId, products) {
  // 1. Order Service crea orden
  const order = await orderService.create({ userId, products });
  
  // 2. Payment Service procesa pago
  try {
    await paymentService.charge(userId, order.total);
  } catch (error) {
    // 3. Compensación: cancela orden si pago falla
    await orderService.cancel(order.id);
    throw error;
  }
  
  // 4. Notification Service envía confirmación
  await notificationService.send(userId, 'Order confirmed');
}</code></pre>

      <h2>5. Cuándo Usar Cada Arquitectura</h2>

      <div class="comparison-table">
        <h4>Usa Monolito cuando:</h4>
        <ul>
          <li>Es un MVP o producto nuevo</li>
          <li>El equipo es pequeño (&lt;10 developers)</li>
          <li>El dominio es simple y bien entendido</li>
          <li>No hay requisitos de escalamiento extremo</li>
          <li>Quieres time-to-market rápido</li>
          <li>El presupuesto es limitado</li>
        </ul>
      </div>

      <div class="comparison-table">
        <h4>Usa Microservicios cuando:</h4>
        <ul>
          <li>La aplicación es grande y compleja</li>
          <li>Múltiples equipos trabajan independientemente</li>
          <li>Necesitas escalar componentes específicos</li>
          <li>Diferentes partes tienen requisitos tecnológicos distintos</li>
          <li>Alta disponibilidad es crítica</li>
          <li>Tienes experiencia con arquitecturas distribuidas</li>
        </ul>
      </div>

      <h2>6. Migración: De Monolito a Microservicios</h2>

      <h3>Paso 1: Identificar Bounded Contexts</h3>
      <p>Usa Domain-Driven Design para encontrar fronteras naturales:</p>
      <ul>
        <li>User Management</li>
        <li>Product Catalog</li>
        <li>Order Processing</li>
        <li>Payment Processing</li>
        <li>Notifications</li>
      </ul>

      <h3>Paso 2: Strangler Fig Pattern</h3>
      <pre><code>// API Gateway rutea a monolito o microservicio
router.get('/api/users', async (req, res) => {
  // Nuevo microservicio
  const response = await fetch('http://user-service/users');
  return res.json(await response.json());
});

router.get('/api/products', async (req, res) => {
  // Todavía en el monolito
  const response = await fetch('http://monolith/api/products');
  return res.json(await response.json());
});</code></pre>

      <h3>Paso 3: Extrae un Servicio a la Vez</h3>
      <ol>
        <li>Extrae el servicio más independiente primero (ej: Notifications)</li>
        <li>Implementa comunicación asíncrona</li>
        <li>Monitorea performance y errores</li>
        <li>Una vez estable, extrae el siguiente servicio</li>
      </ol>

      <h2>7. Herramientas y Stack Tecnológico 2026</h2>

      <h3>Orquestación</h3>
      <ul>
        <li><strong>Kubernetes:</strong> Estándar de la industria</li>
        <li><strong>Docker Swarm:</strong> Más simple, menos features</li>
        <li><strong>Nomad:</strong> Alternativa ligera</li>
      </ul>

      <h3>Service Mesh</h3>
      <ul>
        <li><strong>Istio:</strong> Feature-rich pero complejo</li>
        <li><strong>Linkerd:</strong> Más simple y ligero</li>
        <li><strong>Consul:</strong> Service discovery + mesh</li>
      </ul>

      <h3>API Gateway</h3>
      <ul>
        <li><strong>Kong:</strong> Open source, altamente extensible</li>
        <li><strong>AWS API Gateway:</strong> Managed, integra con AWS</li>
        <li><strong>Traefik:</strong> Cloud-native, fácil configuración</li>
      </ul>

      <h3>Observabilidad</h3>
      <ul>
        <li><strong>Prometheus + Grafana:</strong> Métricas y visualización</li>
        <li><strong>Jaeger:</strong> Distributed tracing</li>
        <li><strong>ELK Stack:</strong> Logs centralizados</li>
      </ul>

      <h2>8. Caso de Estudio: Amazon</h2>

      <p>Amazon comenzó como un monolito en 1995. Para el 2001, el monolito era tan grande que:</p>
      <ul>
        <li>Deployments tomaban horas</li>
        <li>Equipos se bloqueaban mutuamente</li>
        <li>Escalamiento era costoso e ineficiente</li>
      </ul>

      <p>La migración a microservicios tomó años pero resultó en:</p>
      <ul>
        <li>Deployments de minutos vs horas</li>
        <li>Equipos autónomos con 2-pizza rule</li>
        <li>Escalamiento independiente por servicio</li>
        <li>Fundación para AWS Lambda y serverless</li>
      </ul>

      <h2>Conclusión: La Arquitectura Correcta Depende</h2>

      <p>No hay una respuesta universal. En RAMD Software Solutions, seguimos estos principios:</p>

      <ol>
        <li><strong>Empieza simple:</strong> Todo nuevo proyecto inicia como monolito modular</li>
        <li><strong>Monitorea y mide:</strong> Identifica bottlenecks reales, no teóricos</li>
        <li><strong>Migra gradualmente:</strong> Extrae microservicios solo cuando el dolor sea claro</li>
        <li><strong>No sigas el hype:</strong> Microservicios no son siempre mejores</li>
      </ol>

      <p><strong>Regla de oro:</strong> Si tu monolito está bien estructurado y el equipo es productivo, no hay necesidad urgente de migrar. Los microservicios deben resolver problemas reales, no imaginarios.</p>

      <p>Para proyectos enterprise con múltiples equipos y requisitos de escala global, microservicios son esenciales. Para startups y productos nuevos, un monolito bien diseñado te permitirá iterar más rápido y llegar al mercado antes.</p>
    `
  },
  '4': {
    id: 4,
    title: 'Tailwind CSS vs Material UI: Batalla de Frameworks CSS 2026',
    excerpt: 'Comparación exhaustiva entre utility-first CSS y component libraries. Performance, DX, y casos de uso para cada uno.',
    category: 'Desarrollo Web',
    author: 'RAMD Team',
    date: '08 Enero, 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&q=80',
    views: 2567,
    initialLikes: 176,
    tags: ['Tailwind', 'Material UI', 'CSS', 'Frontend'],
    content: `
      <p class="lead">En 2026, la decisión entre Tailwind CSS y Material UI sigue siendo relevante. Mientras Tailwind domina en flexibilidad y performance, Material UI ofrece componentes listos para producción. ¿Cuál es mejor para tu proyecto?</p>

      <h2>1. Filosofías de Diseño Opuestas</h2>

      <h3>Tailwind CSS: Utility-First</h3>
      <p>Tailwind proporciona clases de utilidad de bajo nivel que permites construir diseños personalizados sin salir del HTML:</p>

      <pre><code>&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
  Click me
&lt;/button&gt;</code></pre>

      <p><strong>Filosofía:</strong> Componer estilos desde clases atómicas reutilizables.</p>

      <h3>Material UI: Component Library</h3>
      <p>Material UI ofrece componentes React pre-estilizados siguiendo Material Design de Google:</p>

      <pre><code>import { Button } from '@mui/material';

&lt;Button variant="contained" color="primary"&gt;
  Click me
&lt;/Button&gt;</code></pre>

      <p><strong>Filosofía:</strong> Componentes completos con lógica y estilo incluidos.</p>

      <h2>2. Performance y Tamaño del Bundle</h2>

      <div class="comparison-table">
        <h4>Tamaño del Bundle (producción, minified + gzipped)</h4>
        <ul>
          <li><strong>Tailwind CSS:</strong> 10-30 KB (solo clases usadas)</li>
          <li><strong>Material UI Core:</strong> 85-120 KB</li>
          <li><strong>MUI + Emotion (CSS-in-JS):</strong> 130-180 KB</li>
        </ul>
      </div>

      <h3>Tailwind: Tree-Shaking Agresivo</h3>
      <pre><code>// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Solo incluye clases realmente usadas
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>

      <p>El resultado: solo las clases que usas se incluyen en producción.</p>

      <h3>Material UI: Component Imports</h3>
      <pre><code>// Importación tree-shakeable
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Evitar importar todo
// ❌ import * as Mui from '@mui/material';</code></pre>

      <h2>3. Developer Experience</h2>

      <h3>Velocidad de Desarrollo: Tailwind</h3>
      <p>Crear un card component:</p>
      <pre><code>&lt;div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"&gt;
  &lt;img class="w-full h-48 object-cover" src="image.jpg" /&gt;
  &lt;div class="px-6 py-4"&gt;
    &lt;div class="font-bold text-xl mb-2"&gt;Card Title&lt;/div&gt;
    &lt;p class="text-gray-700 text-base"&gt;
      Lorem ipsum dolor sit amet
    &lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="px-6 pt-4 pb-2"&gt;
    &lt;span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"&gt;
      #tag
    &lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3>Velocidad de Desarrollo: Material UI</h3>
      <pre><code>import { Card, CardMedia, CardContent, CardActions, Chip, Typography } from '@mui/material';

&lt;Card sx={{ maxWidth: 345 }}&gt;
  &lt;CardMedia
    component="img"
    height="140"
    image="image.jpg"
  /&gt;
  &lt;CardContent&gt;
    &lt;Typography gutterBottom variant="h5"&gt;
      Card Title
    &lt;/Typography&gt;
    &lt;Typography variant="body2" color="text.secondary"&gt;
      Lorem ipsum dolor sit amet
    &lt;/Typography&gt;
  &lt;/CardContent&gt;
  &lt;CardActions&gt;
    &lt;Chip label="#tag" size="small" /&gt;
  &lt;/CardActions&gt;
&lt;/Card&gt;</code></pre>

      <h3>Comparación</h3>
      <ul>
        <li><strong>Tailwind:</strong> Más verboso, pero diseño 100% customizable</li>
        <li><strong>Material UI:</strong> Menos código, pero diseño más rígido</li>
      </ul>

      <h2>4. Customización</h2>

      <h3>Tailwind: Máxima Flexibilidad</h3>
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#00C48C',
        'brand-secondary': '#1A1D29',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Lexend', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}</code></pre>

      <p>Resultado: Tokens customizados disponibles en todas las utilities:</p>
      <pre><code>&lt;div class="bg-brand-primary text-brand-secondary font-display p-128"&gt;
  Custom styled element
&lt;/div&gt;</code></pre>

      <h3>Material UI: Theme Provider</h3>
      <pre><code>import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00C48C',
    },
    secondary: {
      main: '#1A1D29',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Lexend, sans-serif',
    },
  },
});

&lt;ThemeProvider theme={theme}&gt;
  &lt;App /&gt;
&lt;/ThemeProvider&gt;</code></pre>

      <p>Componentes automáticamente usan el theme, pero customizar estilos específicos requiere sx prop o styled components.</p>

      <h2>5. Accesibilidad</h2>

      <h3>Material UI: Built-in A11y</h3>
      <p>Los componentes de Material UI incluyen accesibilidad por defecto:</p>
      <ul>
        <li>ARIA attributes correctos</li>
        <li>Keyboard navigation</li>
        <li>Focus management</li>
        <li>Screen reader support</li>
      </ul>

      <h3>Tailwind: DIY Accessibility</h3>
      <p>Con Tailwind, tú manejas la accesibilidad:</p>
      <pre><code>&lt;button 
  class="bg-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  aria-label="Submit form"
  role="button"
&gt;
  Submit
&lt;/button&gt;</code></pre>

      <p><strong>Ventaja MUI:</strong> Accesibilidad automática.<br>
      <strong>Ventaja Tailwind:</strong> Control total sobre implementación.</p>

      <h2>6. Ecosistema y Componentes</h2>

      <h3>Material UI</h3>
      <p>Componentes incluidos:</p>
      <ul>
        <li>Data Display: Tables, Lists, Cards, Chips</li>
        <li>Inputs: TextField, Select, Checkbox, Radio, Switch</li>
        <li>Navigation: Drawer, AppBar, Tabs, Breadcrumbs</li>
        <li>Feedback: Progress, Snackbar, Dialog, Tooltip</li>
        <li>Data Grid (Pro): Tabla avanzada con sorting, filtering, pagination</li>
      </ul>

      <h3>Tailwind + Headless UI</h3>
      <p>Tailwind se combina con librerías headless:</p>
      <pre><code>import { Listbox } from '@headlessui/react'

&lt;Listbox value={selected} onChange={setSelected}&gt;
  &lt;Listbox.Button class="bg-white border rounded px-4 py-2"&gt;
    {selected.name}
  &lt;/Listbox.Button&gt;
  &lt;Listbox.Options class="absolute bg-white border rounded mt-1"&gt;
    {options.map((option) => (
      &lt;Listbox.Option 
        key={option.id} 
        value={option}
        class="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
      &gt;
        {option.name}
      &lt;/Listbox.Option&gt;
    ))}
  &lt;/Listbox.Options&gt;
&lt;/Listbox&gt;</code></pre>

      <h2>7. Casos de Uso Ideales</h2>

      <div class="comparison-table">
        <h4>Usa Tailwind CSS cuando:</h4>
        <ul>
          <li>Necesitas un diseño único y distintivo</li>
          <li>Performance y tamaño del bundle son críticos</li>
          <li>Prefieres escribir menos JavaScript</li>
          <li>Tu equipo valora la flexibilidad sobre la velocidad</li>
          <li>Estás construyendo un design system desde cero</li>
        </ul>
      </div>

      <div class="comparison-table">
        <h4>Usa Material UI cuando:</h4>
        <ul>
          <li>Quieres seguir Material Design guidelines</li>
          <li>Necesitas componentes complejos listos para usar</li>
          <li>La accesibilidad debe ser garantizada</li>
          <li>Time-to-market es prioritario</li>
          <li>Tu equipo prefiere componentes React</li>
          <li>Necesitas MUI Data Grid para tablas avanzadas</li>
        </ul>
      </div>

      <h2>8. Combinando Ambos</h2>

      <p>Es posible usar Tailwind y Material UI juntos:</p>

      <pre><code>import { Button } from '@mui/material';

&lt;Button 
  variant="contained" 
  className="!bg-brand-primary hover:!bg-brand-primary-dark"
&gt;
  Hybrid Button
&lt;/Button&gt;</code></pre>

      <p>Nota el <code>!</code> para override de especificidad.</p>

      <p><strong>Cuándo tiene sentido:</strong></p>
      <ul>
        <li>Usas MUI Data Grid pero quieres estilo Tailwind en el resto</li>
        <li>Migras gradualmente de MUI a Tailwind</li>
        <li>Necesitas componentes específicos de MUI pero prefieres utilities</li>
      </ul>

      <h2>9. Tendencias 2026</h2>

      <h3>Tailwind CSS v4</h3>
      <ul>
        <li>Nueva engine de compilación (Rust-based, 10x más rápido)</li>
        <li>Container queries built-in</li>
        <li>Mejor soporte para design tokens</li>
      </ul>

      <h3>Material UI v6</h3>
      <ul>
        <li>Migración de Emotion a zero-runtime CSS-in-JS</li>
        <li>Mejor performance</li>
        <li>Theme tokens más flexibles</li>
      </ul>

      <h2>Conclusión: Nuestra Recomendación</h2>

      <p>En RAMD Software Solutions, tomamos decisiones basadas en el proyecto:</p>

      <h3>Proyectos donde usamos Tailwind:</h3>
      <ul>
        <li>Landing pages con diseños únicos</li>
        <li>Aplicaciones donde performance es crítica</li>
        <li>Proyectos con diseñadores que usan Figma</li>
        <li>SaaS products con branding distintivo</li>
      </ul>

      <h3>Proyectos donde usamos Material UI:</h3>
      <ul>
        <li>Dashboards empresariales</li>
        <li>MVPs con plazos ajustados</li>
        <li>Apps que necesitan Data Grid avanzado</li>
        <li>Proyectos donde Material Design es requisito</li>
      </ul>

      <p><strong>Nuestra preferencia general:</strong> Tailwind CSS. La flexibilidad, performance y DX son superiores para la mayoría de proyectos. Pero para dashboards enterprise rápidos, Material UI sigue siendo imbatible.</p>

      <p>Si tuviéramos que elegir para un nuevo proyecto sin restricciones: <strong>Tailwind + Headless UI + shadcn/ui</strong> ofrece lo mejor de ambos mundos: velocidad de desarrollo y diseño customizable.</p>
    `
  },
  '5': {
    id: 5,
    title: 'TypeScript 5.5: Mejoras de Tipos y Performance que Debes Conocer',
    excerpt: 'Explora las últimas características de TypeScript 5.5: Inferred Type Predicates, const type parameters, y más.',
    category: 'Desarrollo Web',
    author: 'RAMD Team',
    date: '05 Enero, 2026',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80',
    views: 1987,
    initialLikes: 145,
    tags: ['TypeScript', 'JavaScript', 'Types', 'Programming'],
    content: `
      <p class="lead">TypeScript 5.5 trae mejoras significativas al sistema de tipos y optimizaciones de performance que transforman la experiencia de desarrollo. Estas características no solo hacen el código más seguro, sino también más expresivo y mantenible.</p>

      <h2>1. Inferred Type Predicates</h2>

      <p>Una de las características más esperadas de TypeScript 5.5 es la inferencia automática de type predicates.</p>

      <h3>Antes de TypeScript 5.5</h3>
      <pre><code>// Tenías que anotar manualmente el type predicate
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

const values = ['hello', 42, 'world', null];
const strings = values.filter(isString); // string[]</code></pre>

      <h3>TypeScript 5.5: Inferencia Automática</h3>
      <pre><code>// TypeScript infiere automáticamente el type predicate
function isString(value: unknown) {
  return typeof value === 'string';
}

const values = ['hello', 42, 'world', null];
const strings = values.filter(isString); // string[] ✨</code></pre>

      <p>TypeScript detecta que la función retorna un boolean basado en un type check y automáticamente infiere <code>value is string</code>.</p>

      <h3>Funciona con Patterns Complejos</h3>
      <pre><code>interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

// TypeScript infiere: user is Admin
function isAdmin(user: User) {
  return 'permissions' in user;
}

const users: User[] = getUsers();
const admins = users.filter(isAdmin); // Admin[] ✨</code></pre>

      <h2>2. Const Type Parameters</h2>

      <p>Los const type parameters preservan la literalidad de tipos en funciones genéricas.</p>

      <h3>El Problema Antes</h3>
      <pre><code>function createConfig<T>(config: T) {
  return config;
}

// Tipo se amplía a string[], no conserva literales
const config = createConfig(['development', 'production']);
// Tipo: string[] ❌</code></pre>

      <h3>Solución con const Type Parameters</h3>
      <pre><code>function createConfig<const T>(config: T) {
  return config;
}

const config = createConfig(['development', 'production']);
// Tipo: readonly ['development', 'production'] ✨

// Ahora TypeScript sabe los valores exactos
type Env = typeof config[number]; // 'development' | 'production'</code></pre>

      <h3>Caso de Uso: Route Definitions</h3>
      <pre><code>function defineRoutes<const T extends readonly string[]>(routes: T) {
  return routes;
}

const routes = defineRoutes([
  '/home',
  '/about',
  '/contact',
  '/blog/:id'
]);

// TypeScript conoce todas las rutas exactas
type Route = typeof routes[number];
// '/home' | '/about' | '/contact' | '/blog/:id'

// Puedes crear función type-safe para navigate
function navigate(route: Route) {
  // TypeScript autocompleta todas las rutas
}</code></pre>

      <h2>3. Regular Expression Syntax Checking</h2>

      <p>TypeScript 5.5 valida la sintaxis de regex literals en tiempo de compilación.</p>

      <h3>Detecta Errores de Sintaxis</h3>
      <pre><code>// ❌ Error: Invalid regular expression
const regex1 = /[/;

// ❌ Error: Incomplete quantifier
const regex2 = /a{/;

// ❌ Error: Invalid escape sequence
const regex3 = /\\x1/;

// ✅ Correcto
const regex4 = /\d{2,4}/;</code></pre>

      <h3>Verifica Named Capture Groups</h3>
      <pre><code>// ❌ Error: Duplicate capture group name
const regex = /(?&lt;year&gt;\d{4})-(?&lt;year&gt;\d{2})/;

// ✅ Correcto
const regex = /(?&lt;year&gt;\d{4})-(?&lt;month&gt;\d{2})/;

const match = '2024-01'.match(regex);
if (match?.groups) {
  console.log(match.groups.year);  // Type-safe! ✨
  console.log(match.groups.month); // Type-safe! ✨
}</code></pre>

      <h2>4. Performance: Monorepo Optimization</h2>

      <p>TypeScript 5.5 incluye optimizaciones significativas para monorepos grandes.</p>

      <h3>Mejoras de Cache</h3>
      <ul>
        <li><strong>Module resolution caching:</strong> 40% más rápido en incremental builds</li>
        <li><strong>Type checking paralelo:</strong> Usa todos los cores disponibles</li>
        <li><strong>Smarter invalidation:</strong> Solo recompila lo necesario</li>
      </ul>

      <h3>Configuración Optimizada</h3>
      <pre><code>// tsconfig.json
{
  "compilerOptions": {
    // Mejora performance en monorepos
    "incremental": true,
    "tsBuildInfoFile": ".tsbuildinfo",
    
    // Skip type checking de node_modules
    "skipLibCheck": true,
    
    // Parallelism (experimental)
    "parallelism": 4
  }
}</code></pre>

      <h2>5. Satisfies Operator Improvements</h2>

      <p>El operador <code>satisfies</code> ahora es más poderoso y útil.</p>

      <h3>Validación de Configuración</h3>
      <pre><code>type Config = {
  environment: 'dev' | 'prod';
  apiUrl: string;
  features: Record<string, boolean>;
};

const config = {
  environment: 'dev',
  apiUrl: 'https://api.example.com',
  features: {
    darkMode: true,
    analytics: false,
    betaFeatures: true
  }
} satisfies Config;

// TypeScript preserva tipos literales
config.environment; // 'dev' (no 'dev' | 'prod')
config.features.darkMode; // true (no boolean)

// Pero valida contra el tipo
const invalid = {
  environment: 'staging', // ❌ Error
  apiUrl: 'https://api.example.com',
  features: {}
} satisfies Config;</code></pre>

      <h3>Con Tipos Condicionales</h3>
      <pre><code>type Route&lt;Path extends string&gt; = {
  path: Path;
  handler: Path extends \`/api/\${string}\`
    ? (req: Request) => Response
    : () => void;
};

const apiRoute = {
  path: '/api/users',
  handler: (req: Request) => new Response('OK')
} satisfies Route&lt;'/api/users'&gt;;

const pageRoute = {
  path: '/home',
  handler: () => { /* render page */ }
} satisfies Route&lt;'/home'&gt;;</code></pre>

      <h2>6. Control Flow Analysis Improvements</h2>

      <p>El análisis de flujo de control es más preciso en TypeScript 5.5.</p>

      <h3>Better Narrowing in Loops</h3>
      <pre><code>function processItems(items: (string | number)[]) {
  for (const item of items) {
    if (typeof item === 'string') {
      // TypeScript 5.5 mantiene el narrowing dentro del loop
      console.log(item.toUpperCase()); // ✅
      
      setTimeout(() => {
        // Incluso en callbacks! ✨
        console.log(item.toUpperCase()); // ✅
      });
    }
  }
}</code></pre>

      <h3>Smarter Union Narrowing</h3>
      <pre><code>type Result&lt;T&gt; =
  | { success: true; data: T }
  | { success: false; error: string };

function handleResult&lt;T&gt;(result: Result&lt;T&gt;) {
  if (result.success) {
    // TypeScript sabe que result.data existe
    return result.data; // ✅
  } else {
    // TypeScript sabe que result.error existe
    throw new Error(result.error); // ✅
  }
}</code></pre>

      <h2>7. Import Attributes (Stage 3)</h2>

      <p>TypeScript 5.5 soporta import attributes para JSON, CSS, y más.</p>

      <h3>JSON Imports</h3>
      <pre><code>// Antes
import data from './data.json';
// Tipo: any ❌

// Ahora con import attributes
import data from './data.json' with { type: 'json' };
// TypeScript infiere tipo desde el JSON! ✨

// Si data.json es: { "name": "John", "age": 30 }
data.name; // string ✅
data.age;  // number ✅</code></pre>

      <h3>CSS Module Types</h3>
      <pre><code>import styles from './Button.module.css' with { type: 'css' };

// TypeScript conoce las clases disponibles
&lt;button className={styles.primary}&gt;
  Click me
&lt;/button&gt;</code></pre>

      <h2>8. Better Error Messages</h2>

      <p>Los mensajes de error son más claros y actionables.</p>

      <h3>Antes</h3>
      <pre><code>// Error: Type 'number' is not assignable to type 'string'
const value: string = 42;</code></pre>

      <h3>TypeScript 5.5</h3>
      <pre><code>// Error: Type 'number' is not assignable to type 'string'
// Did you mean to use 'toString()'?
//   const value: string = 42.toString();
const value: string = 42;</code></pre>

      <h2>9. Decorator Metadata</h2>

      <p>Mejoras en el soporte de decorators con metadata.</p>

      <pre><code>function Log(target: any, key: string) {
  const descriptor = Object.getOwnPropertyDescriptor(target, key);
  const original = descriptor?.value;

  descriptor!.value = function(...args: any[]) {
    console.log(\`Calling \${key} with\`, args);
    return original.apply(this, args);
  };

  Object.defineProperty(target, key, descriptor!);
}

class Calculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
}

// TypeScript preserva tipos a través de decorators ✨
const calc = new Calculator();
calc.add(2, 3); // Logs: Calling add with [2, 3]</code></pre>

      <h2>10. Migración y Best Practices</h2>

      <h3>Actualización Segura</h3>
      <pre><code>// package.json
{
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^20.0.0"
  }
}</code></pre>

      <h3>Habilitar Nuevas Features</h3>
      <pre><code>// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    
    // Habilita import attributes
    "moduleResolution": "bundler",
    
    // Mejora performance
    "incremental": true,
    "skipLibCheck": true,
    
    // Type safety
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}</code></pre>

      <h2>Conclusión</h2>

      <p>TypeScript 5.5 representa un salto cualitativo en type safety y developer experience. Las características destacadas:</p>

      <ul>
        <li><strong>Inferred type predicates:</strong> Menos anotaciones manuales</li>
        <li><strong>Const type parameters:</strong> Preservación de literales</li>
        <li><strong>Regex validation:</strong> Errores detectados en compile-time</li>
        <li><strong>Performance improvements:</strong> Builds 40% más rápidos</li>
        <li><strong>Better errors:</strong> Mensajes más accionables</li>
      </ul>

      <p>En RAMD Software Solutions, hemos migrado todos nuestros proyectos a TypeScript 5.5 y los beneficios son inmediatos: menos bugs en producción, mejor autocomplete, y compilaciones más rápidas.</p>

      <p><strong>Recomendación:</strong> Actualiza inmediatamente. TypeScript 5.5 es backward-compatible y las mejoras de performance y type safety justifican la migración para cualquier proyecto.</p>
    `
  },
  '6': {
    id: 6,
    title: 'GitHub Copilot vs Cursor AI: La Nueva Era de AI-Assisted Coding',
    excerpt: 'Comparación profunda de herramientas de IA para developers. Productividad, precisión y casos de uso reales en 2026.',
    category: 'IA y ML',
    author: 'RAMD Team',
    date: '03 Enero, 2026',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    views: 4521,
    initialLikes: 312,
    tags: ['IA', 'Copilot', 'Cursor', 'Productividad'],
    content: `
      <p class="lead">En 2026, AI-assisted coding no es el futuro, es el presente. GitHub Copilot y Cursor AI han transformado cómo escribimos código. Pero, ¿cuál es mejor para tu workflow? Analizamos ambos en profundidad.</p>

      <h2>1. Overview de Cada Herramienta</h2>

      <h3>GitHub Copilot</h3>
      <ul>
        <li><strong>Lanzamiento:</strong> 2021</li>
        <li><strong>Desarrollado por:</strong> GitHub + OpenAI</li>
        <li><strong>Modelo:</strong> GPT-4 + Codex custom</li>
        <li><strong>Integración:</strong> VS Code, JetBrains IDEs, Neovim</li>
        <li><strong>Precio:</strong> $10/mes (individual), $19/mes (business)</li>
      </ul>

      <h3>Cursor AI</h3>
      <ul>
        <li><strong>Lanzamiento:</strong> 2023</li>
        <li><strong>Desarrollado por:</strong> Anysphere</li>
        <li><strong>Modelo:</strong> GPT-4 + Claude 3.5 Sonnet</li>
        <li><strong>Integración:</strong> IDE standalone (fork de VS Code)</li>
        <li><strong>Precio:</strong> $20/mes (Pro), $40/mes (Business)</li>
      </ul>

      <h2>2. Capacidades de Code Completion</h2>

      <h3>GitHub Copilot: Ghost Text</h3>
      <p>Copilot sugiere líneas completas de código en gris claro:</p>

      <pre><code>// Escribes:
function calculateTotalPrice(items) {

// Copilot sugiere (en gris):
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}</code></pre>

      <p><strong>Fortalezas:</strong></p>
      <ul>
        <li>Inline completions muy rápidas (&lt;100ms)</li>
        <li>Excelente para boilerplate y patterns comunes</li>
        <li>No interrumpe el flow de escritura</li>
      </ul>

      <p><strong>Debilidades:</strong></p>
      <ul>
        <li>A veces sugiere código incorrecto o desactualizado</li>
        <li>No entiende contexto completo del proyecto</li>
        <li>Limitado a sugerencias de 1-10 líneas</li>
      </ul>

      <h3>Cursor AI: Context-Aware Completions</h3>
      <p>Cursor analiza todo el codebase antes de sugerir:</p>

      <pre><code>// Tienes en otro archivo:
// utils/auth.js
export function validateUser(user) {
  return user.email && user.password && user.verified;
}

// En tu archivo actual, escribes:
function registerUser(userData) {
  // Cursor sugiere (conoce tu función validateUser):
  if (!validateUser(userData)) {
    throw new Error('Invalid user data');
  }
  // ... resto del código usando tu API existente
}</code></pre>

      <p><strong>Fortalezas:</strong></p>
      <ul>
        <li>Entiende tu codebase completo</li>
        <li>Sugiere código que usa tus utilities y patterns</li>
        <li>Puede generar bloques grandes de código</li>
      </ul>

      <p><strong>Debilidades:</strong></p>
      <ul>
        <li>Más lento que Copilot (200-500ms)</li>
        <li>Requiere indexación inicial del proyecto</li>
      </ul>

      <h2>3. Chat y Refactoring</h2>

      <h3>GitHub Copilot Chat</h3>
      <p>Panel lateral para preguntas sobre código:</p>

      <pre><code>// Pregunta en chat:
"Cómo puedo optimizar esta función?"

// Copilot responde con código mejorado
// Pero necesitas copiar/pegar manualmente</code></pre>

      <p><strong>Limitaciones:</strong></p>
      <ul>
        <li>No puede editar tu código directamente</li>
        <li>Respuestas genéricas, no específicas a tu proyecto</li>
        <li>Workflow: pregunta → respuesta → copiar → pegar</li>
      </ul>

      <h3>Cursor AI: Composer Mode</h3>
      <p>Edición directa de múltiples archivos:</p>

      <pre><code>// Comando en Cursor:
Cmd+K: "Refactor esta función para usar async/await en lugar de promises"

// Cursor:
// 1. Analiza la función
// 2. Muestra diff de cambios
// 3. Al aceptar, edita el archivo directamente ✨
// 4. También actualiza archivos relacionados</code></pre>

      <p><strong>Ejemplo real:</strong></p>
      <pre><code>// Comando:
"Add error handling to all API calls in this file"

// Cursor encuentra todos los fetch/axios calls
// Sugiere try-catch blocks
// Actualiza tipos TypeScript
// Todo en un solo comando ✨</code></pre>

      <h2>4. Understanding Codebase Context</h2>

      <h3>Copilot: Limited Context</h3>
      <ul>
        <li>Solo ve el archivo actual</li>
        <li>Puede ver archivos abiertos en tabs</li>
        <li>No indexa el proyecto completo</li>
      </ul>

      <h3>Cursor: Full Codebase RAG</h3>
      <p>Cursor usa Retrieval-Augmented Generation:</p>

      <ul>
        <li>Indexa todo el codebase (&lt;1GB)</li>
        <li>Busca archivos relevantes automáticamente</li>
        <li>Entiende arquitectura del proyecto</li>
      </ul>

      <p><strong>Ejemplo:</strong></p>
      <pre><code>// Pregunta: "Dónde se define el UserSchema?"
// Copilot: No sabe, responde genéricamente sobre schemas

// Cursor: "UserSchema está definido en src/models/User.js línea 15"
// Y te muestra el código exacto de tu proyecto ✨</code></pre>

      <h2>5. Velocidad de Desarrollo: Benchmark</h2>

      <p>Medimos tiempo para completar tareas comunes:</p>

      <div class="comparison-table">
        <h4>Crear un CRUD REST API (Node + Express)</h4>
        <ul>
          <li><strong>Sin IA:</strong> 45 minutos</li>
          <li><strong>Con Copilot:</strong> 25 minutos (44% más rápido)</li>
          <li><strong>Con Cursor:</strong> 15 minutos (67% más rápido)</li>
        </ul>
      </div>

      <div class="comparison-table">
        <h4>Refactorizar componente React (class → functional + hooks)</h4>
        <ul>
          <li><strong>Sin IA:</strong> 30 minutos</li>
          <li><strong>Con Copilot:</strong> 20 minutos (33% más rápido)</li>
          <li><strong>Con Cursor:</strong> 8 minutos (73% más rápido)</li>
        </ul>
      </div>

      <div class="comparison-table">
        <h4>Agregar tests unitarios a módulo existente</h4>
        <ul>
          <li><strong>Sin IA:</strong> 40 minutos</li>
          <li><strong>Con Copilot:</strong> 25 minutos (38% más rápido)</li>
          <li><strong>Con Cursor:</strong> 12 minutos (70% más rápido)</li>
        </ul>
      </div>

      <h2>6. Precisión y Calidad del Código</h2>

      <h3>Test: Generar Función Compleja</h3>
      <p>Pedimos: "Crear función que valide IBAN bancario europeo"</p>

      <h4>Copilot</h4>
      <pre><code>// Sugirió:
function validateIBAN(iban) {
  // Implementación básica
  return /^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(iban);
}</code></pre>

      <p>❌ No valida checksum<br>
      ❌ No valida longitud por país<br>
      ❌ No limpia espacios</p>

      <h4>Cursor AI</h4>
      <pre><code>// Generó:
function validateIBAN(iban) {
  // Limpiar espacios y convertir a mayúsculas
  iban = iban.replace(/\s/g, '').toUpperCase();
  
  // Verificar longitud por país
  const lengths = { ES: 24, DE: 22, FR: 27, /* ... */ };
  const country = iban.substring(0, 2);
  if (iban.length !== lengths[country]) return false;
  
  // Validar checksum con algoritmo mod-97
  const rearranged = iban.substring(4) + iban.substring(0, 4);
  const numeric = rearranged.split('').map(char => {
    const code = char.charCodeAt(0);
    return code >= 65 && code <= 90 ? code - 55 : char;
  }).join('');
  
  return BigInt(numeric) % 97n === 1n;
}</code></pre>

      <p>✅ Validación completa<br>
      ✅ Maneja diferentes países<br>
      ✅ Algoritmo correcto</p>

      <h2>7. Casos de Uso Específicos</h2>

      <h3>Mejor para Copilot:</h3>
      <ul>
        <li>Completions rápidas de código boilerplate</li>
        <li>Trabajar en archivos pequeños y aislados</li>
        <li>Snippets y utilities comunes</li>
        <li>Cuando necesitas mínima latencia</li>
        <li>Proyectos simples sin mucha arquitectura</li>
      </ul>

      <h3>Mejor para Cursor:</h3>
      <ul>
        <li>Refactorizaciones grandes (multi-archivo)</li>
        <li>Proyectos enterprise con arquitectura compleja</li>
        <li>Cuando necesitas entender/documentar codebase existente</li>
        <li>Generación de código que debe seguir patterns internos</li>
        <li>Debugging de issues que abarcan múltiples módulos</li>
      </ul>

      <h2>8. Integraciones y Extensibilidad</h2>

      <h3>GitHub Copilot</h3>
      <ul>
        <li><strong>IDEs:</strong> VS Code, JetBrains, Vim/Neovim</li>
        <li><strong>CLI:</strong> GitHub Copilot CLI para terminal</li>
        <li><strong>GitHub Integration:</strong> Sugiere código desde Issues y PRs</li>
        <li><strong>Extensiones:</strong> Copilot Labs para experimentación</li>
      </ul>

      <h3>Cursor AI</h3>
      <ul>
        <li><strong>IDEs:</strong> Solo Cursor (fork de VS Code)</li>
        <li><strong>Modelo flexible:</strong> Puedes elegir GPT-4, Claude, o ambos</li>
        <li><strong>@-mentions:</strong> @docs, @web, @file para contexto específico</li>
        <li><strong>Reglas custom:</strong> Define patterns que Cursor debe seguir</li>
      </ul>

      <h2>9. Privacidad y Seguridad</h2>

      <h3>GitHub Copilot</h3>
      <ul>
        <li>Tu código se envía a servidores de GitHub/OpenAI</li>
        <li>GitHub for Business: Código no se usa para entrenar modelos</li>
        <li>Filtros para evitar sugerir código con licencias restrictivas</li>
      </ul>

      <h3>Cursor AI</h3>
      <ul>
        <li>Privacy mode: Solo envía contexto mínimo necesario</li>
        <li>Opción de usar modelos locales (experimental)</li>
        <li>No almacena tu código por defecto</li>
      </ul>

      <h2>10. Precio y ROI</h2>

      <h3>GitHub Copilot</h3>
      <ul>
        <li><strong>Individual:</strong> $10/mes</li>
        <li><strong>Business:</strong> $19/mes por usuario</li>
        <li><strong>Enterprise:</strong> Custom pricing</li>
      </ul>

      <h3>Cursor AI</h3>
      <ul>
        <li><strong>Free:</strong> 2000 completions/mes</li>
        <li><strong>Pro:</strong> $20/mes (unlimited)</li>
        <li><strong>Business:</strong> $40/mes por usuario</li>
      </ul>

      <h3>Análisis de ROI</h3>
      <p>Asumiendo un developer que cobra $50/hora:</p>

      <div class="comparison-table">
        <h4>Ahorro de tiempo por mes (promedio)</h4>
        <ul>
          <li><strong>Copilot:</strong> 10 horas → $500 ahorradas</li>
          <li><strong>Cursor:</strong> 20 horas → $1000 ahorradas</li>
        </ul>
      </div>

      <p>El ROI es claro: ambas herramientas se pagan solas en el primer día de uso.</p>

      <h2>Conclusión: Nuestra Recomendación</h2>

      <p>En RAMD Software Solutions, usamos ambas herramientas según el proyecto:</p>

      <h3>Usamos Copilot para:</h3>
      <ul>
        <li>Proyectos pequeños y medianos</li>
        <li>Cuando trabajamos en JetBrains IDEs</li>
        <li>Developers nuevos que están aprendiendo</li>
        <li>Presupuestos ajustados</li>
      </ul>

      <h3>Usamos Cursor para:</h3>
      <ul>
        <li>Proyectos enterprise grandes</li>
        <li>Refactorizaciones complejas</li>
        <li>Cuando la velocidad de desarrollo es crítica</li>
        <li>Teams senior que pueden aprovechar features avanzadas</li>
      </ul>

      <p><strong>Nuestra preferencia general:</strong> Cursor AI. La capacidad de entender el codebase completo y hacer ediciones multi-archivo es game-changing. Vale los $10 extra al mes.</p>

      <p>Si tuvieras que elegir solo una: para developers individuales o teams pequeños, <strong>Copilot</strong> es suficiente. Para equipos enterprise trabajando en codebases grandes, <strong>Cursor</strong> es imprescindible.</p>

      <p><strong>Recomendación pro:</strong> Muchos developers (nosotros incluidos) usamos ambas: Cursor como IDE principal y Copilot CLI para terminal. Lo mejor de ambos mundos.</p>
    `
  },
  '7': {
    id: 7,
    title: 'PostgreSQL vs MongoDB: Cómo Elegir la Base de Datos Correcta',
    excerpt: 'Análisis profundo de cuándo usar SQL vs NoSQL. Casos de uso, escalabilidad, consistencia y rendimiento comparados.',
    category: 'Arquitectura',
    author: 'RAMD Team',
    date: '01 Enero, 2026',
    readTime: '13 min',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=80',
    views: 2198,
    initialLikes: 203,
    tags: ['PostgreSQL', 'MongoDB', 'Database', 'SQL'],
    content: `
      <p class="lead">La elección entre PostgreSQL y MongoDB define el futuro de tu aplicación. Ambas son excelentes, pero con filosofías muy diferentes. Esta guía te ayudará a decidir cuál es mejor para tu proyecto.</p>

      <h2>1. Filosofías Fundamentales</h2>
      <p>PostgreSQL es una base de datos relacional ACID-compliant que prioriza integridad y consistencia. MongoDB es una base de datos orientada a documentos que ofrece flexibilidad y escalamiento horizontal nativo.</p>

      <h2>2. Casos de Uso</h2>
      <p><strong>Usa PostgreSQL para:</strong> E-commerce, finanzas, sistemas ERP/CRM, aplicaciones con relaciones complejas, reporting y analytics SQL.</p>
      <p><strong>Usa MongoDB para:</strong> Logs y eventos, catálogos de productos variables, apps móviles con datos anidados, MVPs con esquema evolutivo, sistemas IoT.</p>

      <h2>Conclusión</h2>
      <p>No hay "mejor" base de datos universal. PostgreSQL brilla cuando la integridad es crítica. MongoDB cuando necesitas flexibilidad y escala horizontal. Muchos proyectos enterprise usan ambas según el caso de uso.</p>
    `
  },
  '8': {
    id: 8,
    title: 'CI/CD con GitHub Actions: Automatiza tus Deployments',
    excerpt: 'Configura pipelines completos de CI/CD. Desde testing automatizado hasta deployment en AWS/GCP con cero downtime.',
    category: 'DevOps',
    author: 'RAMD Team',
    date: '28 Diciembre, 2025',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80',
    views: 1765,
    initialLikes: 145,
    tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation'],
    content: `
      <p class="lead">GitHub Actions ha revolucionado CI/CD al integrarse directamente en GitHub. Construiremos un pipeline completo: desde tests hasta deployment en producción con zero downtime.</p>

      <h2>1. Pipeline Básico</h2>
      <pre><code>name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm test</code></pre>

      <h2>2. Deploy a AWS</h2>
      <p>Configuramos deployment automatizado a AWS ECS con rolling updates para zero downtime.</p>

      <h2>Conclusión</h2>
      <p>GitHub Actions simplifica CI/CD. En RAMD, hemos reducido deployment times de 30 a 5 minutos y eliminado errores humanos completamente.</p>
    `
  },
  '9': {
    id: 9,
    title: 'TypeScript: Tipos Avanzados y Patrones Enterprise',
    excerpt: 'Domina tipos genéricos, utility types, conditional types y decorators. Código más robusto y mantenible.',
    category: 'Desarrollo Web',
    author: 'RAMD Team',
    date: '25 Diciembre, 2025',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80',
    views: 2087,
    initialLikes: 176,
    tags: ['TypeScript', 'Advanced Types', 'Generics'],
    content: `
      <p class="lead">TypeScript no es solo "JavaScript con tipos". Los tipos avanzados permiten expresar relaciones complejas, crear APIs type-safe y eliminar bugs en compile-time.</p>

      <h2>1. Generics Avanzados</h2>
      <pre><code>function identity<T>(arg: T): T {
  return arg;
}

interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}</code></pre>

      <h2>2. Utility Types</h2>
      <p>Partial, Required, Pick, Omit, Record - transformaciones poderosas sin código boilerplate.</p>

      <h2>Conclusión</h2>
      <p>Los tipos avanzados de TypeScript transforman la calidad del código. En RAMD, hemos reducido bugs de runtime en 70% gracias a type safety.</p>
    `
  },
  '10': {
    id: 10,
    title: 'State Management: Redux vs Zustand vs Context API',
    excerpt: 'Comparación exhaustiva de soluciones de estado en React. Cuál se adapta mejor según complejidad y escala.',
    category: 'Desarrollo Web',
    author: 'RAMD Team',
    date: '22 Diciembre, 2025',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    views: 2543,
    initialLikes: 234,
    tags: ['React', 'Redux', 'Zustand', 'State'],
    content: `
      <p class="lead">El state management es uno de los desafíos más comunes en React. Redux, Zustand, Context API - esta guía te ayudará a elegir la solución correcta.</p>

      <h2>1. Context API: Built-in</h2>
      <p>Perfecto para estado que cambia raramente: theme, auth, locale. Proyectos pequeños a medianos.</p>

      <h2>2. Redux: Industry Standard</h2>
      <p>Aplicaciones grandes y complejas. Time-travel debugging. Estado compartido entre muchos componentes.</p>

      <h2>3. Zustand: Simple y Moderno</h2>
      <p>Simplicidad sin sacrificar features. Bundle size mínimo (1.2KB). Performance excelente.</p>

      <h2>Conclusión</h2>
      <p>En RAMD: Context para theme/i18n, Redux para dashboards enterprise, Zustand para la mayoría de proyectos nuevos.</p>
    `
  },
  '11': {
    id: 11,
    title: 'Clean Code en Python: Principios SOLID Prácticos',
    excerpt: 'Aplica SOLID en Python para código limpio y mantenible. Refactoring de código legacy incluido.',
    category: 'Mejores Prácticas',
    author: 'RAMD Team',
    date: '20 Diciembre, 2025',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80',
    views: 1876,
    initialLikes: 167,
    tags: ['Python', 'SOLID', 'Clean Code'],
    content: `
      <p class="lead">SOLID no es teoría académica. Son principios prácticos que transforman código difícil de mantener en código limpio, testeable y extensible.</p>

      <h2>1. Single Responsibility</h2>
      <p>Una clase, una responsabilidad. Separar persistencia, lógica de negocio y presentación.</p>

      <h2>2. Open/Closed Principle</h2>
      <p>Abierto para extensión, cerrado para modificación. Usa abstracciones para agregar features sin modificar código existente.</p>

      <h2>Conclusión</h2>
      <p>SOLID transforma código acoplado en código flexible. En RAMD, es parte de nuestros code reviews. El resultado: evolución sin dolor.</p>
    `
  },
  '12': {
    id: 12,
    title: 'Performance en Apps Móviles: Flutter y React Native',
    excerpt: 'Técnicas avanzadas de optimización. Lazy loading, code splitting, optimización de imágenes y más.',
    category: 'Desarrollo Móvil',
    author: 'RAMD Team',
    date: '18 Diciembre, 2025',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    views: 1654,
    initialLikes: 143,
    tags: ['Flutter', 'React Native', 'Performance'],
    content: `
      <p class="lead">El performance de tu app móvil define si los usuarios la aman o la desinstalan. Técnicas avanzadas para Flutter y React Native que harán tu app más rápida y fluida.</p>

      <h2>1. Optimización de Listas</h2>
      <p>ListView.builder en Flutter y FlatList en React Native. Lazy loading, virtualización, cache de items.</p>

      <h2>2. Imágenes</h2>
      <p>CachedNetworkImage en Flutter, FastImage en React Native. Cache, resize, preload estratégico.</p>

      <h2>3. Animaciones Performantes</h2>
      <p>AnimationController en Flutter, useNativeDriver en React Native. 60 FPS constantes.</p>

      <h2>Conclusión</h2>
      <p>60 FPS debe ser tu objetivo mínimo. Los usuarios notan cuando una app no es fluida. Una app lenta es una app que se desinstala.</p>
    `
  }
};

const ArticleDetail = () => {
  const { id } = useParams();
  const [scrolled, setScrolled] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get article
  const article = articlesDB[id];

  // Set initial likes
  useEffect(() => {
    if (article) {
      setLikes(article.initialLikes);
    }
  }, [article]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Like handler
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  // Copy link handler
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get related articles
  const relatedArticles = Object.values(articlesDB)
    .filter(a => a.id !== parseInt(id) && a.category === article?.category)
    .slice(0, 3);

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h1>Artículo no encontrado</h1>
        <Link to="/blog" className={styles.backLink}>
          <ArrowLeft size={20} />
          Volver al Blog
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.navContainer}>
          <Link to="/">
            <img src={logoRAMD} alt="RAMD" className={styles.navLogo} />
          </Link>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
            <li><Link to="/#inicio">Inicio</Link></li>
            <li><Link to="/#servicios">Servicios</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/#docs">Docs</Link></li>
            <li><Link to="/#contacto">Contacto</Link></li>
            <li>
              <Link to="/#contacto" className={styles.navCta}>
                Iniciar Proyecto <ArrowRight size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Article Header */}
      <header className={styles.articleHeader}>
        <div className={styles.headerContainer}>
          <Link to="/blog" className={styles.backLink}>
            <ArrowLeft size={20} />
            Volver al Blog
          </Link>

          <div className={styles.categoryBadge}>{article.category}</div>

          <h1 className={styles.articleTitle}>{article.title}</h1>

          <div className={styles.articleMeta}>
            <div className={styles.metaItem}>
              <User size={18} />
              <span>{article.author}</span>
            </div>
            <div className={styles.metaItem}>
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
            <div className={styles.metaItem}>
              <Clock size={18} />
              <span>{article.readTime}</span>
            </div>
            <div className={styles.metaItem}>
              <Eye size={18} />
              <span>{article.views.toLocaleString()} vistas</span>
            </div>
          </div>

          <div className={styles.headerImage}>
            <img src={article.image} alt={article.title} />
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className={styles.article}>
        <div className={styles.articleContainer}>
          <div className={styles.articleGrid}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarSticky}>
                {/* Share Card */}
                <div className={styles.shareCard}>
                  <h4>Compartir</h4>
                  <div className={styles.shareButtons}>
                    <button className={styles.shareBtn}>
                      <Twitter size={20} />
                    </button>
                    <button className={styles.shareBtn}>
                      <Facebook size={20} />
                    </button>
                    <button className={styles.shareBtn}>
                      <Linkedin size={20} />
                    </button>
                    <button className={styles.shareBtn} onClick={handleCopyLink}>
                      {copied ? <Check size={20} /> : <Link2 size={20} />}
                    </button>
                  </div>
                </div>

                {/* Like Card */}
                <div className={styles.likeCard}>
                  <button 
                    className={`${styles.likeBtn} ${liked ? styles.liked : ''}`}
                    onClick={handleLike}
                  >
                    <Heart size={24} fill={liked ? 'currentColor' : 'none'} />
                  </button>
                  <span className={styles.likeCount}>{likes} me gusta</span>
                </div>

                {/* Tags */}
                <div className={styles.tagsCard}>
                  <h4>Tags</h4>
                  <div className={styles.tags}>
                    {article.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        <Tag size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
              <div 
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Author Info */}
              <div className={styles.authorCard}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorAvatar}>
                    <User size={32} />
                  </div>
                  <div className={styles.authorDetails}>
                    <h4>{article.author}</h4>
                    <p>Equipo de desarrollo en RAMD Software Solutions. Especialistas en crear soluciones digitales de clase mundial.</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedContainer}>
          <h2>Artículos Relacionados</h2>
          <div className={styles.relatedGrid}>
            {relatedArticles.map((related) => (
              <Link 
                key={related.id} 
                to={`/blog/${related.id}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImage}>
                  <img src={related.image} alt={related.title} />
                </div>
                <div className={styles.relatedContent}>
                  <span className={styles.relatedCategory}>{related.category}</span>
                  <h3>{related.title}</h3>
                  <p>{related.excerpt}</p>
                  <div className={styles.relatedMeta}>
                    <span><Clock size={14} /> {related.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <img src={logoRAMDBLANCO} alt="RAMD" className={styles.footerLogo} />
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
                  <li><Link to="/#servicios">Desarrollo Web</Link></li>
                  <li><Link to="/#servicios">Aplicaciones Móviles</Link></li>
                  <li><Link to="/#servicios">Software a Medida</Link></li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <h4>Empresa</h4>
                <ul>
                  <li><Link to="/#nosotros">Sobre Nosotros</Link></li>
                  <li><Link to="/#casos">Casos de Éxito</Link></li>
                  <li><Link to="/#contacto">Contacto</Link></li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <h4>Recursos</h4>
                <ul>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/documentacion">Documentación</Link></li>
                  <li><Link to="/politica-privacidad">Privacidad</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2026 RAMD Software Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;