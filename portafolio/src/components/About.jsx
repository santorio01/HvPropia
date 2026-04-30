import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section fade-in">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="about-content">
          <div className="about-text glass-card">
            <h3 className="about-subtitle">Técnico en Programación de Software</h3>
            <p>
              Soy un profesional apasionado por la tecnología con más de 3 años de experiencia en soporte técnico, 
              soporte de aplicaciones ERP, resolución de incidentes, atención al usuario y QA manual.
            </p>
            <p>
              Me destaco por mi capacidad para diagnosticar fallas complejas y comunicarme de forma clara con 
              usuarios y equipos técnicos. Mi enfoque principal es el análisis de problemas, revisión de datos 
              en bases de datos (SQL/MySQL), y recreación de escenarios de error para asegurar la máxima calidad 
              y estabilidad en los sistemas.
            </p>
            <p>
              Siempre busco aportar soluciones eficientes y documentadas (JIRA), apoyándome en herramientas 
              modernas e Inteligencia Artificial para automatizar y optimizar procesos.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card glass-card">
              <span className="stat-number gradient-text">3+</span>
              <span className="stat-label">Años de<br/>Experiencia</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number gradient-text">ERP</span>
              <span className="stat-label">Soporte &<br/>Análisis</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number gradient-text">QA</span>
              <span className="stat-label">Pruebas<br/>Manuales</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number gradient-text">SQL</span>
              <span className="stat-label">Bases de<br/>Datos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
