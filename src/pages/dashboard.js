import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const NOTES_LIST = [
  { id: '/docs/web-technologies/html/html-introduction', title: 'HTML Introduction', subject: 'HTML' },
  { id: '/docs/web-technologies/html/html-elements', title: 'HTML Elements', subject: 'HTML' },
  { id: '/docs/web-technologies/html/html-forms', title: 'HTML Forms', subject: 'HTML' },
  { id: '/docs/web-technologies/html/html-semantic', title: 'HTML Semantic', subject: 'HTML' },
  { id: '/docs/web-technologies/html/html-common-mistakes', title: 'HTML Mistakes', subject: 'HTML' },
  { id: '/docs/web-technologies/css/css-selectors', title: 'CSS Selectors', subject: 'CSS' },
  { id: '/docs/web-technologies/css/css-box-model', title: 'CSS Box Model', subject: 'CSS' },
  { id: '/docs/web-technologies/css/css-flexbox', title: 'CSS Flexbox', subject: 'CSS' },
  { id: '/docs/web-technologies/css/css-grid', title: 'CSS Grid', subject: 'CSS' },
  { id: '/docs/web-technologies/css/css-responsive', title: 'CSS Responsive', subject: 'CSS' },
  { id: '/docs/web-technologies/css/css-mistakes', title: 'CSS Mistakes', subject: 'CSS' },
  { id: '/docs/web-technologies/javascript/js-variables', title: 'JS Variables', subject: 'JavaScript' },
  { id: '/docs/web-technologies/javascript/js-functions', title: 'JS Functions', subject: 'JavaScript' },
  { id: '/docs/web-technologies/javascript/js-dom', title: 'JS DOM', subject: 'JavaScript' },
  { id: '/docs/web-technologies/javascript/js-events', title: 'JS Events', subject: 'JavaScript' },
  { id: '/docs/web-technologies/javascript/js-es6', title: 'JS ES6+', subject: 'JavaScript' },
  { id: '/docs/web-technologies/javascript/js-common-errors', title: 'JS Errors', subject: 'JavaScript' },
  { id: '/docs/web-technologies/docker/docker-intro', title: 'Docker Intro', subject: 'Docker' },
  { id: '/docs/web-technologies/docker/docker-commands', title: 'Docker Commands', subject: 'Docker' },
  { id: '/docs/web-technologies/docker/dockerfile', title: 'Dockerfile', subject: 'Docker' },
  { id: '/docs/web-technologies/docker/docker-compose', title: 'Docker Compose', subject: 'Docker' },
];

const ACHIEVEMENTS = [
  { id: 'first_note', icon: '🌱', label: 'First Step', desc: 'Completed your first note', req: 1 },
  { id: 'five_notes', icon: '📖', label: 'Getting Serious', desc: 'Completed 5 notes', req: 5 },
  { id: 'ten_notes', icon: '🚀', label: 'On a Roll', desc: 'Completed 10 notes', req: 10 },
  { id: 'all_html', icon: '📄', label: 'HTML Master', desc: 'Completed all HTML notes', req: 5, subject: 'HTML' },
  { id: 'all_css', icon: '🎨', label: 'CSS Artist', desc: 'Completed all CSS notes', req: 6, subject: 'CSS' },
  { id: 'all_js', icon: '⚡', label: 'JS Developer', desc: 'Completed all JS notes', req: 6, subject: 'JavaScript' },
  { id: 'all_docker', icon: '🐳', label: 'Docker Captain', desc: 'Completed all Docker notes', req: 4, subject: 'Docker' },
  { id: 'roadmap_complete', icon: '🏆', label: 'Roadmap Complete', desc: 'Finished the full roadmap', req: 21 },
];

const SUBJECT_COLORS = { HTML: '#e34c26', CSS: '#264de4', JavaScript: '#f0db4f', Docker: '#0db7ed' };

export default function DashboardPage() {
  const [progress, setProgress] = useState({});
  const [streak, setStreak] = useState({ count: 0 });
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    try {
      const p = JSON.parse(localStorage.getItem('ds_academic_progress') || '{}');
      const s = JSON.parse(localStorage.getItem('ds_academic_streak') || '{"count":0}');
      const b = JSON.parse(localStorage.getItem('ds_academic_bookmarks') || '[]');
      setProgress(p);
      setStreak(s);
      setBookmarks(b);
    } catch {}
  }, []);

  const completedIds = Object.keys(progress);
  const completedCount = completedIds.length;
  const totalNotes = NOTES_LIST.length;
  const overallPct = Math.round((completedCount / totalNotes) * 100);

  // Per subject stats
  const subjectStats = ['HTML', 'CSS', 'JavaScript', 'Docker'].map(subj => {
    const subjectNotes = NOTES_LIST.filter(n => n.subject === subj);
    const done = subjectNotes.filter(n => completedIds.includes(n.id)).length;
    return { subject: subj, done, total: subjectNotes.length, pct: Math.round((done / subjectNotes.length) * 100) };
  });

  // Achievements
  const checkAchievement = (ach) => {
    if (ach.subject) {
      const subjectNotes = NOTES_LIST.filter(n => n.subject === ach.subject);
      return subjectNotes.filter(n => completedIds.includes(n.id)).length >= ach.req;
    }
    return completedCount >= ach.req;
  };

  const clearProgress = () => {
    localStorage.removeItem('ds_academic_progress');
    setProgress({});
  };

  // Recommended next topic
  const remaining = NOTES_LIST.filter(n => !completedIds.includes(n.id));
  const recommended = remaining.slice(0, 3);

  return (
    <Layout title="My Dashboard" description="Track your DS Academic study progress.">
      <main style={{ background: 'var(--ifm-background-color)', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A, #1A5F7A)',
          padding: '3rem 1.5rem',
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h1 style={{ color: 'white', fontWeight: 800, marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
                  📊 My Dashboard
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                  Track your progress across all notes and subjects.
                </p>
              </div>
              {streak.count > 0 && (
                <span className="streak-badge" style={{ alignSelf: 'flex-start', marginTop: '0.25rem' }}>
                  🔥 {streak.count} day streak
                </span>
              )}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
          {/* Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}>
            {[
              { value: completedCount, label: 'Notes Completed', icon: '✅' },
              { value: `${overallPct}%`, label: 'Overall Progress', icon: '📊' },
              { value: streak.count || 0, label: 'Day Streak', icon: '🔥' },
              { value: totalNotes - completedCount, label: 'Remaining', icon: '📚' },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>{stat.icon}</div>
                <div className="stat-card-value">{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--ifm-color-content-secondary)', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Overall Progress Bar */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
              <span>Overall Progress</span>
              <span>{completedCount} / {totalNotes}</span>
            </div>
            <div className="progress-bar-container" style={{ height: '12px' }}>
              <div className="progress-bar-fill" style={{ width: `${overallPct}%` }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Subject Breakdown */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>📚 By Subject</h2>
              {subjectStats.map((ss, i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        width: '10px',
                        height: '10px',
                        background: SUBJECT_COLORS[ss.subject],
                        borderRadius: '50%',
                        display: 'inline-block',
                      }} />
                      {ss.subject}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--ifm-color-content-secondary)' }}>
                      {ss.done}/{ss.total}
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${ss.pct}%`,
                        background: SUBJECT_COLORS[ss.subject],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended Next */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>🎯 Recommended Next</h2>
              {recommended.length === 0 ? (
                <div style={{ color: 'var(--ds-success)', fontWeight: 600, padding: '1rem', background: 'rgba(46,125,50,0.06)', borderRadius: '10px' }}>
                  🎉 You've completed all notes!
                </div>
              ) : (
                recommended.map((note, i) => (
                  <Link key={i} to={note.id} style={{ textDecoration: 'none' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      background: 'var(--ifm-background-surface-color)',
                      borderRadius: '10px',
                      marginBottom: '0.5rem',
                      border: '1px solid rgba(0,0,0,0.06)',
                      transition: 'background 0.15s',
                    }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(26,95,122,0.05)'}
                      onMouseOut={e => e.currentTarget.style.background = 'var(--ifm-background-surface-color)'}
                    >
                      <span style={{
                        width: '8px',
                        height: '8px',
                        background: SUBJECT_COLORS[note.subject],
                        borderRadius: '50%',
                        flexShrink: 0,
                      }} />
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ifm-color-content)' }}>{note.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-content-secondary)' }}>{note.subject}</div>
                      </div>
                      <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--ds-primary)' }}>→</span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Achievements */}
          <div style={{ marginTop: '2.5rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>🏅 Achievements</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '0.75rem',
            }}>
              {ACHIEVEMENTS.map((ach) => {
                const unlocked = checkAchievement(ach);
                return (
                  <div
                    key={ach.id}
                    className={`achievement-badge ${unlocked ? 'unlocked' : 'locked'}`}
                    title={ach.desc}
                  >
                    <span style={{ fontSize: '1.75rem' }}>{ach.icon}</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, textAlign: 'center' }}>{ach.label}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--ifm-color-content-secondary)', textAlign: 'center' }}>{ach.desc}</span>
                    {!unlocked && (
                      <span style={{ fontSize: '0.7rem', color: 'var(--ifm-color-content-secondary)', marginTop: '0.2rem' }}>
                        🔒 Locked
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Danger Zone */}
          <div style={{
            marginTop: '3rem',
            padding: '1.25rem',
            border: '1px solid rgba(229,62,62,0.2)',
            borderRadius: '10px',
            background: 'rgba(229,62,62,0.02)',
          }}>
            <h4 style={{ color: '#E53E3E', margin: '0 0 0.5rem', fontSize: '0.9rem' }}>⚠️ Reset Progress</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--ifm-color-content-secondary)', margin: '0 0 0.75rem' }}>
              This will permanently delete all your completed note progress. Your roadmap checkboxes are stored separately.
            </p>
            <button
              onClick={clearProgress}
              style={{
                padding: '0.45rem 1rem',
                border: '1px solid rgba(229,62,62,0.4)',
                background: 'transparent',
                color: '#E53E3E',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontFamily: 'var(--ifm-font-family-base)',
              }}
            >
              Clear Progress
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
