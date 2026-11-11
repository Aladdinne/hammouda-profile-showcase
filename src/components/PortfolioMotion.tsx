import { useEffect, useRef } from 'react';
import { Coffee, Container, Database, GitBranch, Code2, Shield, Terminal, Server, Braces, Layers } from 'lucide-react';
import { usePortfolioText } from './portfolio-settings';

const technologies = [
  { name: 'Java', icon: Coffee },
  { name: 'Angular', icon: Shield },
  { name: 'Spring Boot', icon: Layers },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Container },
  { name: 'JavaScript', icon: Braces },
  { name: 'Git', icon: GitBranch },
  { name: 'Linux', icon: Terminal },
  { name: 'Jenkins', icon: Server },
  { name: 'React', icon: Code2 },
];

export function TechnologyMarquee() {
  const t = usePortfolioText();
  return (
    <div className="technology-marquee" role="region" aria-label={t('Technologies principales', 'Core technologies')}>
      <div className="technology-marquee-track">
        {[0, 1].map(copy => (
          <ul className="technology-marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {technologies.map(({ name, icon: Icon }) => (
              <li key={name}><Icon size={29} aria-hidden="true" /><span>{name}</span></li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function MouseCoordinates() {
  const follower = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const hide = () => { follower.current?.classList.remove('is-active'); };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === 'touch') { hide(); return; }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const element = follower.current;
        const text = label.current;
        if (!element || !text) return;
        element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        element.classList.toggle('align-left', event.clientX > window.innerWidth - 140);
        element.classList.toggle('align-top', event.clientY > window.innerHeight - 70);
        text.textContent = `${Math.round(event.clientX)}, ${Math.round(event.clientY)}`;
        element.classList.add('is-active');
      });
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    media.addEventListener('change', hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      media.removeEventListener('change', hide);
    };
  }, []);
  return <div className="mouse-coordinates" ref={follower} aria-hidden="true"><span className="mouse-coordinate-dot"/><span className="mouse-coordinate-label" ref={label}/></div>;
}