import { data } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Habilidades Técnicas</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {data.skills.map((skill) => (
          <div 
            key={skill}
            style={{
              padding: '0.8rem 1.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '2px',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-secondary)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-main)';
              e.currentTarget.style.borderColor = 'var(--accent-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};