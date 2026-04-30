import { Database, Wrench, Terminal, ShieldAlert, Zap, Server } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Soporte y Sistemas',
    icon: <Wrench size={24} />,
    skills: ['Soporte Remoto (AnyDesk, TeamViewer)', 'Windows y Mantenimiento', 'Redes TCP/IP, WiFi, VPN', 'Gestión de incidentes']
  },
  {
    title: 'Bases de Datos & ERP',
    icon: <Database size={24} />,
    skills: ['SQL', 'MySQL Workbench', 'ERP (Facturación, Contabilidad)', 'Validación XML']
  },
  {
    title: 'Desarrollo & Herramientas',
    icon: <Terminal size={24} />,
    skills: ['Java', 'JIRA', 'OBS Studio', 'Manejo de IA (Gemini, ChatGPT)']
  },
  {
    title: 'QA & Pruebas',
    icon: <ShieldAlert size={24} />,
    skills: ['QA Manual', 'Reporte de errores', 'Recreación de escenarios', 'Documentación técnica']
  }
];

const softSkills = [
  'Comunicación asertiva',
  'Resolución de problemas',
  'Trabajo en equipo',
  'Aprendizaje rápido',
  'Organización y pensamiento analítico'
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section fade-in">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-icon">
                {cat.icon}
              </div>
              <h3 className="skill-title">{cat.title}</h3>
              <ul className="skill-list">
                {cat.skills.map((skill, idx) => (
                  <li key={idx}>
                    <Zap size={14} className="skill-bullet" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="soft-skills glass-card mt-12">
          <h3 className="text-center mb-6 text-xl font-bold">Competencias Blandas</h3>
          <div className="soft-skills-container">
            {softSkills.map((skill, index) => (
              <span key={index} className="soft-skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
