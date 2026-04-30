import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section fade-in">
      <div className="container">
        <h2 className="section-title">Educación</h2>
        
        <div className="education-grid">
          <div className="education-card glass-card">
            <div className="edu-icon">
              <GraduationCap size={40} />
            </div>
            <div className="edu-details">
              <h3 className="edu-degree">Técnico Programador de Software (TPS)</h3>
              <p className="edu-institution">Servicio Nacional de Aprendizaje (SENA CSTE)</p>
              <span className="edu-date">Finalizado en 2021</span>
            </div>
          </div>

          <div className="education-card glass-card">
            <div className="edu-icon">
              <GraduationCap size={40} />
            </div>
            <div className="edu-details">
              <h3 className="edu-degree">Estudiante de Ingeniería de Software</h3>
              <p className="edu-institution">Corporación Universitaria Minuto de Dios (UNIMINUTO)</p>
              <span className="edu-date">En curso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
