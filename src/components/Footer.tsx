import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ textAlign: 'center', padding: '2rem 1rem', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}>
      <p>
        &copy; {currentYear} Luca Daniel Lazarte. Todos los derechos reservados.
      </p>
    </footer>
  );
};


