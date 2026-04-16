import { data } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">Sobre mí</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.8' }}>
        {data.personalInfo.about}
      </p>
    </section>
  );
};