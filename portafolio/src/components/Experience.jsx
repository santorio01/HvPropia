import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Analista de Soporte Técnico – ERP',
    company: 'Ecuafact',
    period: 'Dic 2022 – Actualidad',
    description: [
      'Soporte funcional y técnico a usuarios en módulos del ERP.',
      'Análisis y solución de errores mediante consultas SQL.',
      'Atención remota con AnyDesk.',
      'Gestión y documentación de incidentes en JIRA.',
      'Validación de XML y procesos de facturación electrónica.'
    ]
  },
  {
    id: 2,
    role: 'Tester Junior QA',
    company: 'Tiresia Soluciones',
    period: 'Sep 2021 – Feb 2022',
    description: [
      'Pruebas manuales, documentación y reporte de errores en MAIA ERP.'
    ]
  },
  {
    id: 3,
    role: 'Auxiliar de Infraestructura',
    company: 'Tiresia Soluciones',
    period: 'May 2021 – Sep 2021',
    description: [
      'Mantenimiento de hardware/software y soporte remoto.'
    ]
  },
  {
    id: 4,
    role: 'Teleoperador Atención al Cliente',
    company: 'Atento',
    period: 'Feb 2020 – Abr 2020',
    description: [
      'Soporte técnico telefónico para Movistar España.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section fade-in">
      <div className="container">
        <h2 className="section-title">Experiencia Laboral</h2>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content glass-card">
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-meta">
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-desc">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
