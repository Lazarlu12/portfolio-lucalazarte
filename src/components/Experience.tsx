import { useEffect, useRef, useState } from 'react';
import { data } from '../data/portfolioData';

export const Experience = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  const updateTimelineState = () => {
    const timeline = timelineRef.current;
    if (!timeline || itemRefs.current.length === 0) {
      return;
    }

    const viewportHeight = window.innerHeight;
    const triggerLine = viewportHeight * 0.45;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    itemRefs.current.forEach((item, index) => {
      if (!item) {
        return;
      }

      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(itemCenter - triggerLine);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);

    const timelineRect = timeline.getBoundingClientRect();
    const totalScroll = timelineRect.height + viewportHeight;
    const rawProgress = (viewportHeight - timelineRect.top) / totalScroll;
    setProgress(Math.min(100, Math.max(0, rawProgress * 100)));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          updateTimelineState();
          ticking.current = false;
        });
      }
    };

    updateTimelineState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="experience">
      <h2 className="section-title">Experiencia</h2>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line" />
        <div className="timeline-progress" style={{ height: `${progress}%` }} />
        {data.experience.map((exp, index) => (
          <div
            key={exp.id}
            ref={(element) => { itemRefs.current[index] = element; }}
            className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="timeline-marker" />
            <h3>{exp.role}</h3>
            <span className="timeline-subtitle">
              {exp.company} • {exp.period}
            </span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};