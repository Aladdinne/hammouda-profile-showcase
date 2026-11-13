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
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const bolts = Array.from(svg.querySelectorAll<SVGPathElement>('.electric-bolts path'));
    let frame = 0;
    let visible = false;
    let last = 0;
    let target: { x: number; y: number } | null = null;
    const jagged = (x: number, y: number, dx: number, dy: number, spread: number) => {
      const length = Math.hypot(dx, dy) || 1;
      const points = Array.from({ length: 10 }, (_, i) => {
        const ratio = i / 9;
        const jitter = i === 0 || i === 9 ? 0 : (Math.random() - .5) * spread;
        return `${x + dx * ratio - dy / length * jitter} ${y + dy * ratio + dx / length * jitter}`;
      });
      const branchX = x + dx * .55;
      const branchY = y + dy * .55;
      return `M ${points.join(' L ')} M ${branchX} ${branchY} l ${-dy / length * 24} ${dx / length * 24} l ${dx * .14} ${dy * .14}`;
    };
    const hide = () => { target = null; svg.classList.remove('is-pointer-active'); };
    const animate = (time: number) => {
      if (!visible || !motion.matches || document.hidden) { frame = 0; return; }
      if (time - last > 75) {
        last = time;
        bolts.forEach((bolt, i) => {
          const travel = (time * .065 + i * 173) % 820 - 120;
          const x = i % 2 === 0 ? 20 + Math.sin(time / 730 + i) * 9 : 580 + Math.sin(time / 810 + i) * 9;
          bolt.setAttribute('d', jagged(x, travel, Math.sin(time / 530 + i) * 16, 135, 32));
          bolt.style.opacity = String(.22 + Math.random() * .38);
        });
        if (target && spark.current) {
          spark.current.setAttribute('d', jagged(target.x - 44, target.y + 35, 88, -70, 35));
        }
      }
      frame = requestAnimationFrame(animate);
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && motion.matches && !document.hidden) frame = requestAnimationFrame(animate);
      if (!motion.matches || !pointer.matches || document.hidden) hide();
    };
    const move = (event: PointerEvent) => {
      if (!motion.matches || !pointer.matches || event.pointerType === 'touch') { hide(); return; }
      const bounds = tile.getBoundingClientRect();
      target = { x: (event.clientX - bounds.left) / bounds.width * 600, y: (event.clientY - bounds.top) / bounds.height * 700 };
      svg.classList.add('is-pointer-active');
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
      svg.classList.toggle('is-in-view', visible);
      if (!visible) hide();
      resume();
    });
    observer.observe(tile);
    tile.addEventListener('pointermove', move, { passive: true });
    tile.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    motion.addEventListener('change', resume);
    pointer.addEventListener('change', hide);
    document.addEventListener('visibilitychange', resume);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      tile.removeEventListener('pointermove', move);
      tile.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      motion.removeEventListener('change', resume);
      pointer.removeEventListener('change', hide);
      document.removeEventListener('visibilitychange', resume);
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
    <g className="electric-bolts">{[0, 1, 2, 3].map(i => <path key={i}/>)}</g>
    <path ref={spark} className="electric-pointer"/>
  </svg>;
}

export function MouseCoordinates() {
  const follower = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let running = false;
    const hide = () => { follower.current?.classList.remove('is-active'); };
    const step = () => {
      const element = follower.current;
      const text = label.current;
      if (!element || !text) { running = false; return; }
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      element.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      element.classList.toggle('align-left', target.x > window.innerWidth - 140);
      element.classList.toggle('align-top', target.y > window.innerHeight - 70);
      text.textContent = `${Math.round(target.x)}, ${Math.round(target.y)}`;
      if (Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1) {
        frame = requestAnimationFrame(step);
      } else {
        running = false;
      }
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === 'touch') { hide(); return; }
      target.x = event.clientX;
      target.y = event.clientY;
      follower.current?.classList.add('is-active');
      if (!running) {
        if (current.x === 0 && current.y === 0) { current.x = target.x; current.y = target.y; }
        running = true;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(step);
      }
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