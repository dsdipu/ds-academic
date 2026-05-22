import React, { useState } from 'react';

/**
 * YouTubeEmbed Component
 * Privacy-enhanced, responsive YouTube embed.
 *
 * Props:
 *   videoId (string)   - YouTube video ID
 *   title (string)     - Accessible title for iframe
 *   startTime (number) - Start time in seconds (optional)
 */
export default function YouTubeEmbed({ videoId, title = 'YouTube Video', startTime }) {
  const [loaded, setLoaded] = useState(false);

  if (!videoId) {
    return (
      <div style={{
        background: 'rgba(0,0,0,0.05)',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center',
        color: 'var(--ifm-color-content-secondary)',
      }}>
        ▶ Video not available
      </div>
    );
  }

  const startParam = startTime ? `&start=${startTime}` : '';
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1${startParam}`;

  return (
    <div
      className="youtube-embed-wrapper"
      style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem', background: '#000' }}
    >
      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.8)',
          borderRadius: '12px',
          color: 'white',
        }}>
          <span style={{ fontSize: '2.5rem' }}>▶</span>
        </div>
      )}
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '12px' }}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoaded(true)}
        aria-label={title}
      />
    </div>
  );
}
