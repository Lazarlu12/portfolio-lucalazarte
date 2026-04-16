import { data } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {data.projects.map((project) => (
          <article 
            key={project.id} 
            style={{
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'var(--accent-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
          >
            <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'block', overflow: 'hidden' }}>
              <img 
                src={project.image} 
                alt={`Captura del proyecto ${project.name}`} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '60px' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.stack.map(tech => (
                  <span key={tech} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--border-color)', borderRadius: '50px', fontFamily: 'var(--font-heading)' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Demo ↗</a>
                <a href={project.repoUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Código ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};