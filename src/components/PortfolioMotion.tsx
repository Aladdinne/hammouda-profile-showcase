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

export function IntroElectricity() {
  const scene = useRef<SVGSVGElement>(null);
  const spark = useRef<SVGPathElement>(null);
  useEffect(() => {
    const svg = scene.current;
    const tile = svg?.parentElement;
    if (!svg || !tile) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const hide = () => svg.classList.remove('is-pointer-active');
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === 'touch') { hide(); return; }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = tile.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width * 600;
        const y = (event.clientY - bounds.top) / bounds.height * 700;
        spark.current?.setAttribute('d', `M ${x-44} ${y+24} l 23 -12 -8 -14 29 2 13 -20 -3 19 23 -7 -12 23 24 6 M ${x+13} ${y-20} l -9 -16 14 -12`);
        svg.classList.add('is-pointer-active');
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      svg.classList.toggle('is-in-view', Boolean(entry?.isIntersecting));
      if (!entry?.isIntersecting) hide();
    });
    observer.observe(tile);
    tile.addEventListener('pointermove', move, { passive: true });
    tile.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    media.addEventListener('change', hide);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      tile.removeEventListener('pointermove', move);
      tile.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      media.removeEventListener('change', hide);
    };
  }, []);
  const circuits = [
    'M 0 110 H 16 L 26 100 V 38 H 112 L 128 22 H 310 L 326 38 H 480',
    'M 600 72 H 578 V 196 L 560 214 V 348 L 576 364 V 500 L 558 518 V 640',
    'M 0 426 H 18 V 512 L 34 528 V 632 H 148 L 168 652 H 300',
    'M 600 674 H 422 L 404 656 H 344',
  ];
  return <svg ref={scene} className="intro-electricity" viewBox="0 0 600 700" preserveAspectRatio="none" aria-hidden="true">
    <g className="electric-circuits">{circuits.map(d => <path key={d} d={d}/>)}</g>
    <g className="electric-pulses">{circuits.map(d => <path key={d} d={d} pathLength="100"/>)}</g>
    <path ref={spark} className="electric-pointer"/>
  </svg>;
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