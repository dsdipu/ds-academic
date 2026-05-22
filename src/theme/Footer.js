import React from 'react';
import Link from '@docusaurus/Link';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #060d1f 0%, #0a1628 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '3.5rem 1.5rem 2rem',
      color: 'rgba(255,255,255,0.65)',
      fontSize: '0.875rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #1A5F7A, #22A699)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '0.85rem',
                color: 'white',
                letterSpacing: '-0.02em',
              }}>DS</div>
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'white' }}>Academic</span>
            </div>
            <p style={{ lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.825rem' }}>
              Learn concepts. Not memorization.<br />
              Built for CSE students, by a student.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/dsdipu', icon: '⭐' },
                { label: 'YouTube', href: 'https://youtube.com/@dsdipu', icon: '▶' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/dsdipu', icon: '💼' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '34px',
                    height: '34px',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = 'rgba(34,166,153,0.2)';
                    e.currentTarget.style.borderColor = '#22A699';
                    e.currentTarget.style.color = '#22A699';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Content Links */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Content
            </h4>
            {[
              { label: '📚 Notes', to: '/docs' },
              { label: '▶ YouTube', to: '/youtube' },
              { label: '🗺️ Roadmap', to: '/roadmap' },
              { label: '📝 Blog', to: '/blog' },
              { label: '📊 Dashboard', to: '/dashboard' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  marginBottom: '0.4rem',
                  transition: 'color 0.15s',
                  fontSize: '0.85rem',
                }}
                onMouseOver={e => e.currentTarget.style.color = '#22A699'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Subjects */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Subjects
            </h4>
            {[
              { label: '📄 HTML', to: '/docs/web-technologies/html/01-html-introduction' },
              { label: '🎨 CSS', to: '/docs/web-technologies/css/01-css-selectors' },
              { label: '⚡ JavaScript', to: '/docs/web-technologies/javascript/01-js-variables' },
              { label: '🐳 Docker', to: '/docs/web-technologies/docker/01-docker-intro' },
              { label: '📝 Exam Prep', to: '/docs/exam-prep/how-to-write-answers' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '0.4rem', transition: 'color 0.15s', fontSize: '0.85rem' }}
                onMouseOver={e => e.currentTarget.style.color = '#22A699'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Connect
            </h4>
            {[
              { label: '🌐 Portfolio', href: 'https://dsdipu.vercel.app' },
              { label: '⭐ GitHub', href: 'https://github.com/dsdipu' },
              { label: '💼 LinkedIn', href: 'https://linkedin.com/in/dsdipu' },
              { label: '▶ YouTube', href: 'https://youtube.com/@dsdipu' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '0.4rem', transition: 'color 0.15s', fontSize: '0.85rem' }}
                onMouseOver={e => e.currentTarget.style.color = '#22A699'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ margin: 0, fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} DS Academic. Built for students, by a student. | MIT License | v1.0.0
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem' }}>
            <span style={{ color: '#22A699' }}>🟢 All systems normal</span>
            <a
              href="https://github.com/dsdipu/ds-academic/issues"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
            >
              Report an issue
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
