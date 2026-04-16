import { data } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content animate-fade-in">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 300 }}>
          Hola, soy <span style={{ fontWeight: 600 }}>{data.personalInfo.name}</span>
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
          {data.personalInfo.role}
        </h2>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          {data.personalInfo.bio}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn-primary">Ver Contacto</a>
          <a href={data.personalInfo.cvLink} download className="btn">Descargar CV</a>
        </div>
      </div>
      <div className="hero-image animate-fade-in">
        <img src={data.personalInfo.profileImage} alt="Profile" />
      </div>
    </section>
  );
};