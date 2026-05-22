import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// YouTube Data API v3 integration
// Setup: Add your API key to .env as YOUTUBE_API_KEY
// Channel ID: Your DS Academic channel ID

const CHANNEL_ID = 'UCxxxxxxxxxxxxxxxxxx'; // Replace with real channel ID
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY || '';

const PLAYLISTS = [
  { id: 'all', label: 'All Videos' },
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'docker', label: 'Docker' },
  { id: 'exam', label: 'Exam Tips' },
];

// Fallback demo videos when API key isn't configured
const DEMO_VIDEOS = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'HTML Full Course for Beginners — DS Academic',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    views: '12,400',
    date: '2 weeks ago',
    playlist: 'html',
    duration: '1:24:30',
  },
  {
    id: 'OXGznpKZ_sA',
    title: 'CSS Flexbox Explained — Every Property Covered',
    thumbnail: 'https://i.ytimg.com/vi/OXGznpKZ_sA/hqdefault.jpg',
    views: '8,700',
    date: '3 weeks ago',
    playlist: 'css',
    duration: '45:12',
  },
  {
    id: 'hdI2bqOjy3c',
    title: 'JavaScript Variables: var vs let vs const — With Exam Q&A',
    thumbnail: 'https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg',
    views: '15,200',
    date: '1 month ago',
    playlist: 'javascript',
    duration: '38:45',
  },
  {
    id: 'fqMOX6JJhGo',
    title: 'Docker Tutorial for Beginners — Containers Explained',
    thumbnail: 'https://i.ytimg.com/vi/fqMOX6JJhGo/hqdefault.jpg',
    views: '6,300',
    date: '1 month ago',
    playlist: 'docker',
    duration: '1:02:18',
  },
  {
    id: 'PkZNo7MFNFg',
    title: 'How to Write PERFECT Exam Answers — Score Higher',
    thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg',
    views: '22,100',
    date: '2 months ago',
    playlist: 'exam',
    duration: '28:55',
  },
  {
    id: 'SBmSRK3feww',
    title: 'CSS Grid Masterclass — Build Real Layouts',
    thumbnail: 'https://i.ytimg.com/vi/SBmSRK3feww/hqdefault.jpg',
    views: '9,800',
    date: '2 months ago',
    playlist: 'css',
    duration: '55:40',
  },
];

function VideoCard({ video, featured = false }) {
  return (
    <a
      href={`https://youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{
        background: 'var(--ifm-background-surface-color)',
        borderRadius: featured ? '16px' : '12px',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.07)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative', background: '#000' }}>
          <img
            src={video.thumbnail}
            alt={video.title}
            style={{
              width: '100%',
              aspectRatio: '16/9',
              objectFit: 'cover',
              display: 'block',
              opacity: 0.92,
            }}
            loading="lazy"
          />
          <div style={{
            position: 'absolute',
            bottom: '0.5rem',
            right: '0.5rem',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '0.15rem 0.4rem',
            borderRadius: '4px',
          }}>
            {video.duration}
          </div>
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.2s',
            background: 'rgba(255,0,0,0.3)',
          }}
            className="play-overlay"
          >
            <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }}>▶</span>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: featured ? '1.25rem' : '0.875rem' }}>
          <h3 style={{
            margin: '0 0 0.5rem',
            fontSize: featured ? '1.05rem' : '0.9rem',
            fontWeight: 700,
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {video.title}
          </h3>
          <div style={{ fontSize: '0.78rem', color: 'var(--ifm-color-content-secondary)', display: 'flex', gap: '1rem' }}>
            <span>👁 {video.views} views</span>
            <span>🕐 {video.date}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function YouTubePage() {
  const [activePlaylist, setActivePlaylist] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState(DEMO_VIDEOS);
  const [loading, setLoading] = useState(false);

  // Filter logic
  const filtered = videos.filter(v => {
    const matchPlaylist = activePlaylist === 'all' || v.playlist === activePlaylist;
    const matchSearch = !searchQuery || v.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPlaylist && matchSearch;
  });

  return (
    <Layout title="YouTube Videos" description="Watch DS Academic videos on YouTube. HTML, CSS, JavaScript, Docker and exam tips.">
      <main style={{ background: 'var(--ifm-background-color)' }}>
        {/* Channel Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
          padding: '3rem 1.5rem',
          textAlign: 'center',
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #1A5F7A, #22A699)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 1rem',
            border: '3px solid rgba(255,255,255,0.15)',
          }}>
            DS
          </div>

          <h1 style={{ color: 'white', margin: '0 0 0.35rem', fontSize: '1.75rem', fontWeight: 800 }}>
            DS Academic
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', margin: '0 0 1.5rem', fontSize: '0.9rem' }}>
            Learn concepts. Not memorization.
          </p>

          <a
            href={`https://youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#ff0000',
              color: 'white',
              padding: '0.65rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}
          >
            ▶ Subscribe on YouTube
          </a>

          {!API_KEY && (
            <div style={{
              marginTop: '1.5rem',
              background: 'rgba(242,190,34,0.1)',
              border: '1px solid rgba(242,190,34,0.3)',
              borderRadius: '8px',
              padding: '0.75rem 1.25rem',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.82rem',
              maxWidth: '500px',
              margin: '1.5rem auto 0',
            }}>
              ℹ️ Demo mode — add <code>REACT_APP_YOUTUBE_API_KEY</code> to <code>.env</code> to load live channel data.{' '}
              <a href="https://developers.google.com/youtube/v3/getting-started" target="_blank" rel="noopener noreferrer" style={{ color: '#F2BE22' }}>
                Get API key →
              </a>
            </div>
          )}
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
          {/* Search + Filters */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="🔍 Search videos..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search videos"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                border: '2px solid rgba(0,0,0,0.1)',
                background: 'var(--ifm-background-surface-color)',
                color: 'var(--ifm-color-content)',
                fontFamily: 'var(--ifm-font-family-base)',
                fontSize: '0.9rem',
              }}
            />
          </div>

          {/* Playlist Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {PLAYLISTS.map(pl => (
              <button
                key={pl.id}
                onClick={() => setActivePlaylist(pl.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  fontFamily: 'var(--ifm-font-family-base)',
                  background: activePlaylist === pl.id
                    ? 'var(--ds-primary)'
                    : 'var(--ifm-background-surface-color)',
                  color: activePlaylist === pl.id ? 'white' : 'var(--ifm-color-content-secondary)',
                  transition: 'all 0.2s',
                  boxShadow: activePlaylist === pl.id ? '0 2px 8px rgba(26,95,122,0.3)' : 'none',
                }}
              >
                {pl.label}
              </button>
            ))}
          </div>

          {/* Featured (first video) */}
          {filtered.length > 0 && activePlaylist === 'all' && !searchQuery && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.1rem' }}>📌 Featured Video</h2>
              <div style={{ maxWidth: '700px' }}>
                <VideoCard video={filtered[0]} featured />
              </div>
            </div>
          )}

          {/* Videos Grid */}
          <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.1rem' }}>
            {searchQuery ? `Search results (${filtered.length})` : 'All Videos'}
          </h2>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--ifm-color-content-secondary)' }}>
              No videos found. Try a different search or filter.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}>
              {(activePlaylist === 'all' && !searchQuery ? filtered.slice(1) : filtered).map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
