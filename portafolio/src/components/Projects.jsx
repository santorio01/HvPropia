import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'SalonCode (Proyecto Spa)',
    description: 'SaaS B2B multi-tenant para la gestión de spas y salones de belleza. Arquitectura en Node.js, Express, React y MySQL/Supabase.',
    link: 'https://salon-code.com',
    tags: ['React', 'Node.js', 'MySQL', 'SaaS', 'Multi-tenant'],
    icon: '🚀'
  },
  {
    title: 'Vioplast',
    description: 'Sistema integral de E-commerce y gestión de pedidos con panel administrativo. Desarrollo Full-stack enfocado en el rendimiento.',
    link: 'https://vioplast.vercel.app',
    tags: ['React', 'API', 'E-commerce', 'Dashboard'],
    icon: '📦'
  },
  {
    title: 'Ksual',
    description: 'Aplicación web de catálogo y tienda online. Diseño responsivo y moderno, optimizado para la experiencia del usuario final.',
    link: 'https://ksualapp.netlify.app',
    tags: ['React', 'Frontend', 'UI/UX'],
    icon: '🛍️'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section fade-in">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    <Code size={12} className="tag-icon" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
