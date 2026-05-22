import React, { useState, useEffect, useRef } from 'react';

const ALL_NOTES = [
  { title: 'HTML Introduction', path: '/docs/web-technologies/html/html-introduction', subject: 'HTML', tags: ['beginner'] },
  { title: 'HTML Elements', path: '/docs/web-technologies/html/html-elements', subject: 'HTML', tags: ['beginner'] },
  { title: 'HTML Forms', path: '/docs/web-technologies/html/html-forms', subject: 'HTML', tags: ['beginner'] },
  { title: 'HTML Semantic Elements', path: '/docs/web-technologies/html/html-semantic', subject: 'HTML', tags: ['intermediate'] },
  { title: 'HTML Common Mistakes', path: '/docs/web-technologies/html/html-common-mistakes', subject: 'HTML', tags: ['beginner'] },
  { title: 'CSS Selectors', path: '/docs/web-technologies/css/css-selectors', subject: 'CSS', tags: ['beginner'] },
  { title: 'CSS Box Model', path: '/docs/web-technologies/css/css-box-model', subject: 'CSS', tags: ['beginner'] },
  { title: 'CSS Flexbox', path: '/docs/web-technologies/css/css-flexbox', subject: 'CSS', tags: ['intermediate'] },
  { title: 'CSS Grid', path: '/docs/web-technologies/css/css-grid', subject: 'CSS', tags: ['intermediate'] },
  { title: 'CSS Responsive Design', path: '/docs/web-technologies/css/css-responsive', subject: 'CSS', tags: ['intermediate'] },
  { title: 'CSS Common Mistakes', path: '/docs/web-technologies/css/css-mistakes', subject: 'CSS', tags: ['beginner'] },
  { title: 'JavaScript Variables', path: '/docs/web-technologies/javascript/js-variables', subject: 'JavaScript', tags: ['beginner'] },
  { title: 'JavaScript Functions', path: '/docs/web-technologies/javascript/js-functions', subject: 'JavaScript', tags: ['beginner'] },
  { title: 'JavaScript DOM', path: '/docs/web-technologies/javascript/js-dom', subject: 'JavaScript', tags: ['intermediate'] },
  { title: 'JavaScript Events', path: '/docs/web-technologies/javascript/js-events', subject: 'JavaScript', tags: ['intermediate'] },
  { title: 'JavaScript ES6+', path: '/docs/web-technologies/javascript/js-es6', subject: 'JavaScript', tags: ['intermediate'] },
  { title: 'JavaScript Common Errors', path: '/docs/web-technologies/javascript/js-common-errors', subject: 'JavaScript', tags: ['beginner'] },
  { title: 'Docker Introduction', path: '/docs/web-technologies/docker/docker-intro', subject: 'Docker', tags: ['beginner'] },
  { title: 'Docker Commands', path: '/docs/web-technologies/docker/docker-commands', subject: 'Docker', tags: ['beginner'] },
  { title: 'Dockerfile', path: '/docs/web-technologies/docker/dockerfile', subject: 'Docker', tags: ['intermediate'] },
  { title: 'Docker Compose', path: '/docs/web-technologies/docker/docker-compose', subject: 'Docker', tags: ['intermediate'] },
  { title: 'How to Write Exam Answers', path: '/docs/exam-prep/how-to-write-answers', subject: 'Exam Prep', tags: ['exam'] },
  { title: 'Common Exam Questions', path: '/docs/exam-prep/common-exam-questions', subject: 'Exam Prep', tags: ['exam'] },
  { title: 'Time Management', path: '/docs/exam-prep/time-management', subject: 'Exam Prep', tags: ['exam'] },
];

const RECENT_KEY = 'ds_recent_searches';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('All');
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const subjects = ['All', 'HTML', 'CSS', 'JavaScript', 'Docker', 'Exam Prep'];

  useEffect(() => {
    // Load recent searches
    try {
      const r = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
      setRecentSearches(r);
    } catch {}

    // '/' keyboard shortcut to focus search
    const handler = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = ALL_NOTES.filter((note) => {
      const matchSubject = subject === 'All' || note.subject === subject;
      const matchTitle = note.title.toLowerCase().includes(q) || note.subject.toLowerCase().includes(q);
      return matchSubject && matchTitle;
    });

    setResults(filtered);
  }, [query, subject]);

  const handleSelect = (note) => {
    // Save to recent
    const updated = [note.title, ...recentSearches.filter(r => r !== note.title)].slice(0, 5);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    setRecentSearches(updated);
    setQuery('');
    setResults([]);
    window.location.href = note.path;
  };

  return (
    <div style={{ position: 'relative', maxWidth: '500px', margin: '1.5rem auto' }}>
      {/* Input Row */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
            placeholder="Search notes... (Press '/' to focus)"
            aria-label="Search notes"
            style={{
              width: '100%',
              padding: '0.65rem 1rem 0.65rem 2.5rem',
              borderRadius: '8px',
              border: '2px solid rgba(26,95,122,0.3)',
              fontSize: '0.9rem',
              fontFamily: 'var(--ifm-font-family-base)',
              background: 'var(--ifm-background-surface-color)',
              color: 'var(--ifm-color-content)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <span style={{
            position: 'absolute',
            left: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--ifm-color-content-secondary)',
            fontSize: '1rem',
            pointerEvents: 'none',
          }}>🔍</span>
        </div>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-label="Filter by subject"
          style={{
            padding: '0.65rem 0.75rem',
            borderRadius: '8px',
            border: '2px solid rgba(26,95,122,0.3)',
            background: 'var(--ifm-background-surface-color)',
            color: 'var(--ifm-color-content)',
            fontFamily: 'var(--ifm-font-family-base)',
            fontSize: '0.85rem',
            cursor: 'pointer',
          }}
        >
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Dropdown */}
      {isFocused && (query ? results.length > 0 : recentSearches.length > 0) && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 0.35rem)',
          left: 0,
          right: 0,
          background: 'var(--ifm-background-surface-color)',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '10px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          zIndex: 1000,
          overflow: 'hidden',
        }}>
          {!query && recentSearches.length > 0 && (
            <>
              <div style={{ padding: '0.4rem 0.75rem', fontSize: '0.7rem', color: 'var(--ifm-color-content-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Recent
              </div>
              {recentSearches.map((r, i) => (
                <div
                  key={i}
                  onClick={() => setQuery(r)}
                  style={{ padding: '0.55rem 0.75rem', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.04)'}
                  onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                >
                  <span style={{ opacity: 0.5 }}>🕐</span> {r}
                </div>
              ))}
            </>
          )}

          {query && results.map((note, i) => (
            <div
              key={i}
              onClick={() => handleSelect(note)}
              style={{ padding: '0.65rem 0.75rem', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: i > 0 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(26,95,122,0.06)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ opacity: 0.6, fontSize: '0.8rem', minWidth: '50px', color: 'var(--ds-primary)' }}>{note.subject}</span>
              <span>{note.title}</span>
            </div>
          ))}

          {query && results.length === 0 && (
            <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--ifm-color-content-secondary)', fontSize: '0.875rem' }}>
              No notes found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
