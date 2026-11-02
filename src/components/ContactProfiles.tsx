import { CommunityBadge } from 'performative-ui';

const profiles = [
  { title: 'LinkedIn', subtitle: 'Professional updates', href: 'https://www.linkedin.com/in/michaelm720/', icon: 'linkedin' },
  { title: 'Cosign', subtitle: 'Peer endorsements', href: 'https://cosign.co/michaelm720', icon: 'cosign' },
  { title: 'GitHub', subtitle: 'Code & repositories', href: 'https://github.com/michaelm720', icon: 'github' },
];

export default function ContactProfiles() {
  return (
    <nav className="contact-links" aria-label="Social profiles">
      {profiles.map(({ title, subtitle, href, icon }) => (
        <CommunityBadge
          key={title}
          className="contact-badge"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          iconNode={<span className="contact-badge-mark" aria-hidden="true"><span className="contact-brand-icon" style={{ maskImage: `url(/icons/${icon}.svg)`, WebkitMaskImage: `url(/icons/${icon}.svg)` }} /></span>}
          title={<>{title}<svg className="contact-badge-arrow" aria-hidden="true" viewBox="0 0 32 32" fill="none"><path d="M7 25 25 7M9 7h16v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" /></svg></>}
          subtitle={subtitle}
        />
      ))}
    </nav>
  );
}
