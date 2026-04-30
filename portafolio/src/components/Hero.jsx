import { ArrowRight, Terminal, User } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero fade-in">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="badge">
            <Terminal size={16} />
            <span>Open to work</span>
          </div>
          <h1 className="hero-title">
            Hola, soy <br />
            <span className="gradient-text">Jeferson Sepulveda</span>
          </h1>
          <h2 className="hero-subtitle">Programador de Software & Soporte IT</h2>
          <p className="hero-description">
            "Descubrir lo inesperado es mas importante que confirmar lo conocido" - George E.P Box.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Contáctame <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-outline">
              <User size={18} /> Sobre mí
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-window glass-card">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="window-body">
              <pre><code>
<span className="token keyword">const</span> <span className="token function">profile</span> <span className="token operator">=</span> <span className="token punctuation">{'{'}</span>
<br/>  name<span className="token operator">:</span> <span className="token string">'Jeferson Sepulveda'</span><span className="token punctuation">,</span>
<br/>  role<span className="token operator">:</span> <span className="token string">'Software Developer'</span><span className="token punctuation">,</span>
<br/>  skills<span className="token operator">:</span> <span className="token punctuation">['</span>SQL<span className="token punctuation">', '</span>Java<span className="token punctuation">', '</span>React<span className="token punctuation">']</span><span className="token punctuation">,</span>
<br/>  problemSolver<span className="token operator">:</span> <span className="token boolean">true</span>
<br/><span className="token punctuation">{'}'}</span><span className="token punctuation">;</span>
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
