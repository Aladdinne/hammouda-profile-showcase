import { useEffect, useState } from 'react';
import { Check, Clock3, Coffee, Container, Copy, Shield, Braces } from 'lucide-react';
import { Button } from './ui/button';
import { contactPanelText, profileLinks } from './portfolio-data';
import { usePortfolioText } from './portfolio-settings';

const clockFormat = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Tunis', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

export default function ContactOrbit() {
  const t = usePortfolioText();
  const [now, setNow] = useState(() => new Date());
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    if (copyState === 'idle') return;
    const timer = window.setTimeout(() => setCopyState('idle'), 3500);
    return () => window.clearTimeout(timer);
  }, [copyState]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileLinks.email);
      setCopyState('copied');
    } catch { setCopyState('failed'); }
  };
  return (
    <div className="contact-orbit-panel">
      <div className="contact-orbit-scene" aria-hidden="true">
        <div className="contact-orbit-ring orbit-outer">
          <span className="orbit-node node-angular"><span><Shield size={23}/></span></span>
          <span className="orbit-node node-java"><span><Coffee size={23}/></span></span>
        </div>
        <div className="contact-orbit-ring orbit-inner">
          <span className="orbit-node node-python"><span><Braces size={23}/></span></span>
          <span className="orbit-node node-docker"><span><Container size={23}/></span></span>
        </div>
        <div className="contact-orbit-monogram">AH</div>
      </div>
      <p className="contact-orbit-invitation">{t(...contactPanelText.invitation)}</p>
      <div className="contact-local-time"><Clock3 size={16} aria-hidden="true"/><span>{t(...contactPanelText.localTime)}</span><time dateTime={now.toISOString()}>{clockFormat.format(now)}</time></div>
      <Button className="contact-copy-button" onClick={copyEmail}>{copyState === 'copied' ? <Check size={17}/> : <Copy size={17}/>}<span>{t(...(copyState === 'copied' ? contactPanelText.copied : contactPanelText.copy))}</span></Button>
      <p className="contact-copy-status" role="status">{copyState === 'failed' ? t(...contactPanelText.failed) : copyState === 'copied' ? t(...contactPanelText.copied) : ''}</p>
    </div>
  );
}