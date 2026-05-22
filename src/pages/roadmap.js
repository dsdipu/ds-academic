import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const ROADMAP = [
  {
    month: 'Month 1',
    title: 'Frontend Foundations',
    color: '#2E7D32',
    sections: [
      {
        week: 'Week 1–2',
        subject: 'HTML',
        icon: '📄',
        items: [
          { id: 'html-intro', label: 'HTML Introduction', path: '/docs/web-technologies/html/html-introduction', time: '2h' },
          { id: 'html-elements', label: 'HTML Elements', path: '/docs/web-technologies/html/html-elements', time: '2h' },
          { id: 'html-forms', label: 'HTML Forms', path: '/docs/web-technologies/html/html-forms', time: '3h' },
          { id: 'html-semantic', label: 'HTML Semantic Elements', path: '/docs/web-technologies/html/html-semantic', time: '2h' },
          { id: 'html-mistakes', label: 'HTML Common Mistakes', path: '/docs/web-technologies/html/html-common-mistakes', time: '1h' },
        ],
      },
      {
        week: 'Week 3–4',
        subject: 'CSS Basics',
        icon: '🎨',
        items: [
          { id: 'css-selectors', label: 'CSS Selectors', path: '/docs/web-technologies/css/css-selectors', time: '2h' },
          { id: 'css-box', label: 'CSS Box Model', path: '/docs/web-technologies/css/css-box-model', time: '2h' },
        ],
      },
    ],
  },
  {
    month: 'Month 2',
    title: 'Layouts & Interactivity',
    color: '#1A5F7A',
    sections: [
      {
        week: 'Week 1–2',
        subject: 'CSS Advanced',
        icon: '🎨',
        items: [
          { id: 'css-flexbox', label: 'CSS Flexbox', path: '/docs/web-technologies/css/css-flexbox', time: '3h' },
          { id: 'css-grid', label: 'CSS Grid', path: '/docs/web-technologies/css/css-grid', time: '3h' },
          { id: 'css-responsive', label: 'Responsive Design', path: '/docs/web-technologies/css/css-responsive', time: '3h' },
          { id: 'css-mistakes', label: 'CSS Common Mistakes', path: '/docs/web-technologies/css/css-mistakes', time: '1h' },
        ],
      },
      {
        week: 'Week 3–4',
        subject: 'JavaScript Basics',
        icon: '⚡',
        items: [
          { id: 'js-vars', label: 'JavaScript Variables', path: '/docs/web-technologies/javascript/js-variables', time: '2h' },
          { id: 'js-functions', label: 'JavaScript Functions', path: '/docs/web-technologies/javascript/js-functions', time: '3h' },
        ],
      },
    ],
  },
  {
    month: 'Month 3',
    title: 'JavaScript & Docker',
    color: '#9333ea',
    sections: [
      {
        week: 'Week 1–2',
        subject: 'JavaScript Advanced',
        icon: '⚡',
        items: [
          { id: 'js-dom', label: 'JavaScript DOM', path: '/docs/web-technologies/javascript/js-dom', time: '4h' },
          { id: 'js-events', label: 'JavaScript Events', path: '/docs/web-technologies/javascript/js-events', time: '3h' },
          { id: 'js-es6', label: 'ES6+ Features', path: '/docs/web-technologies/javascript/js-es6', time: '4h' },
          { id: 'js-errors', label: 'JS Common Errors', path: '/docs/web-technologies/javascript/js-common-errors', time: '1h' },
        ],
      },
      {
        week: 'Week 3–4',
        subject: 'Docker',
        icon: '🐳',
        items: [
          { id: 'docker-intro', label: 'Docker Introduction', path: '/docs/web-technologies/docker/docker-intro', time: '2h' },
          { id: 'docker-cmd', label: 'Docker Commands', path: '/docs/web-technologies/docker/docker-commands', time: '2h' },
          { id: 'dockerfile', label: 'Dockerfile', path: '/docs/web-technologies/docker/dockerfile', time: '3h' },
          { id: 'docker-compose', label: 'Docker Compose', path: '/docs/web-technologies/docker/docker-compose', time: '3h' },
        ],
      },
    ],
  },
  {
    month: 'Exam Prep',
    title: 'Exam Strategy',
    color: '#E53E3E',
    sections: [
      {
        week: 'Final Week',
        subject: 'Exam Strategies',
        icon: '📝',
        items: [
          { id: 'exam-writing', label: 'How to Write Exam Answers', path: '/docs/exam-prep/how-to-write-answers', time: '1h' },
          { id: 'exam-questions', label: 'Common Exam Questions', path: '/docs/exam-prep/common-exam-questions', time: '2h' },
          { id: 'exam-time', label: 'Time Management', path: '/docs/exam-prep/time-management', time: '1h' },
        ],
      },
    ],
  },
];

const STORAGE_KEY = 'ds_academic_roadmap';

export default function RoadmapPage() {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      setChecked(saved);
    } catch {}
  }, []);

  const toggle = (id) => {
    const updated = { ...checked, [id]: !checked[id] };
    setChecked(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const allItems = ROADMAP.flatMap(m => m.sections.flatMap(s => s.items));
  const completedCount = allItems.filter(item => checked[item.id]).length;
  const totalCount = allItems.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  const resetProgress = () => {
    setChecked({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <Layout title="Learning Roadmap" description="Structured learning path for web development from beginner to exam-ready.">
      <main style={{ background: 'var(--ifm-background-color)', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A, #1A5F7A)',
          padding: '3rem 1.5rem',
          textAlign: 'center',
        }}>
          <h1 style={{ color: 'white', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            🗺️ Learning Roadmap
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem' }}>
            Your 3-month path from beginner to exam-ready.
          </p>

          {/* Overall Progress */}
          <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '1.25rem',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'white', fontSize: '0.875rem', fontWeight: 600 }}>
              <span>Overall Progress</span>
              <span>{completedCount} / {totalCount} ({progress}%)</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '100px', height: '10px', overflow: 'hidden' }}>
              <div style={{
                background: 'linear-gradient(90deg, #22A699, #2E7D32)',
                height: '100%',
                width: `${progress}%`,
                borderRadius: '100px',
                transition: 'width 0.5s ease',
              }} />
            </div>
          </div>
        </div>

        <div className="roadmap-container" style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
          {/* Quick Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            {completedCount > 0 && (
              <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-content-secondary)' }}>
                ✅ {completedCount} completed · {totalCount - completedCount} remaining
              </div>
            )}
            <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
              <button
                onClick={resetProgress}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '7px',
                  border: '1px solid rgba(229,62,62,0.3)',
                  background: 'transparent',
                  color: '#E53E3E',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--ifm-font-family-base)',
                }}
              >
                Reset Progress
              </button>
            </div>
          </div>

          {/* Months */}
          {ROADMAP.map((month, mi) => {
            const monthItems = month.sections.flatMap(s => s.items);
            const monthDone = monthItems.filter(i => checked[i.id]).length;
            const monthPct = Math.round((monthDone / monthItems.length) * 100);

            return (
              <div key={mi} className="roadmap-month" style={{ marginBottom: '2.5rem' }}>
                <div className="roadmap-month-header" style={{ background: `linear-gradient(135deg, ${month.color}dd, ${month.color}99)` }}>
                  <span>{month.month}: {month.title}</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>{monthPct}% done</span>
                </div>

                {/* Month Progress Bar */}
                <div style={{ height: '4px', background: 'rgba(0,0,0,0.08)', marginBottom: '0.25rem' }}>
                  <div style={{ height: '100%', width: `${monthPct}%`, background: month.color, transition: 'width 0.4s ease' }} />
                </div>

                {month.sections.map((section, si) => (
                  <div key={si} className="roadmap-section" style={{ marginLeft: '1.25rem', borderLeftColor: month.color }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span>{section.icon}</span>
                      <strong style={{ fontSize: '0.95rem' }}>{section.subject}</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--ifm-color-content-secondary)' }}>— {section.week}</span>
                    </div>

                    {section.items.map((item) => (
                      <div key={item.id} className="roadmap-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 0' }}>
                        <input
                          type="checkbox"
                          id={item.id}
                          checked={!!checked[item.id]}
                          onChange={() => toggle(item.id)}
                          style={{ width: '18px', height: '18px', accentColor: month.color, cursor: 'pointer', flexShrink: 0 }}
                          aria-label={`Mark ${item.label} as complete`}
                        />
                        <label
                          htmlFor={item.id}
                          style={{
                            cursor: 'pointer',
                            flex: 1,
                            fontSize: '0.9rem',
                            textDecoration: checked[item.id] ? 'line-through' : 'none',
                            opacity: checked[item.id] ? 0.55 : 1,
                            transition: 'all 0.2s',
                          }}
                        >
                          <Link to={item.path} style={{ color: 'inherit' }}>
                            {item.label}
                          </Link>
                        </label>
                        <span style={{ fontSize: '0.75rem', color: 'var(--ifm-color-content-secondary)', whiteSpace: 'nowrap' }}>
                          ⏱ {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}

          {/* Completion CTA */}
          {progress === 100 && (
            <div style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(46,125,50,0.1), rgba(34,166,153,0.08))',
              border: '2px solid rgba(46,125,50,0.3)',
              borderRadius: '16px',
              padding: '2.5rem',
              marginTop: '2rem',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎉</div>
              <h3 style={{ color: 'var(--ds-success)', marginBottom: '0.5rem' }}>Roadmap Complete!</h3>
              <p style={{ color: 'var(--ifm-color-content-secondary)' }}>You've covered all topics. Good luck with your exams!</p>
              <Link to="/docs/exam-prep/how-to-write-answers" style={{
                display: 'inline-block',
                marginTop: '1rem',
                background: 'var(--ds-success)',
                color: 'white',
                padding: '0.65rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
                📝 Final Exam Prep
              </Link>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
