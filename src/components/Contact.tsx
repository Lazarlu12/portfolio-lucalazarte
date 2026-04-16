import { data } from '../data/portfolioData';

export const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
      <h2 className="section-title" style={{ display: 'inline-block' }}>Contacto</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
        ¿Te interesa mi perfil o tenés un proyecto en mente? Estemos en contacto.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <a href={`mailto:${data.personalInfo.email}`} className="btn">Email</a>
        <a href={data.personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
        <a href={data.personalInfo.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
      </div>
    </section>
  );
};