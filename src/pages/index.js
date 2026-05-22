import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';

const SUBJECTS = [
  {
    icon: '📄',
    name: 'HTML',
    description: 'Structure of the web. From basic tags to semantic HTML5.',
    topics: 5,
    difficulty: 'Beginner',
    path: '/docs/web-technologies/html/html-introduction',
    color: 'linear-gradient(135deg, #e34c26, #f06529)',
  },
  {
    icon: '🎨',
    name: 'CSS',
    description: 'Style, layout, and responsive design. Flexbox, Grid, and more.',
    topics: 6,
    difficulty: 'Beginner',
    path: '/docs/web-technologies/css/css-selectors',
    color: 'linear-gradient(135deg, #264de4, #2965f1)',
  },
  {
    icon: '⚡',
    name: 'JavaScript',
    description: 'Make pages interactive. Variables, functions, DOM, and ES6+.',
    topics: 6,
    difficulty: 'Intermediate',
    path: '/docs/web-technologies/javascript/js-variables',
    color: 'linear-gradient(135deg, #f0db4f, #e3b600)',
  },
  {
    icon: '🐳',
    name: 'Docker',
    description: 'Containerize applications. Images, containers, and Compose.',
    topics: 4,
    difficulty: 'Intermediate',
    path: '/docs/web-technologies/docker/docker-intro',
    color: 'linear-gradient(135deg, #0db7ed, #0091c2)',
  },
];

const FEATURES = [
  {
    icon: '🎓',
    title: 'From a Student\'s Perspective',
    desc: 'Written by someone who studied this material, struggled with it, and figured out what actually matters for exams.',
  },
  {
    icon: '👨‍🏫',
    title: 'What Teachers Look For',
    desc: 'Every note includes a "Teacher\'s Perspective" section — the exact keywords, structure, and marks breakdown examiners use.',
  },
  {
    icon: '📝',
    title: 'Exam-Ready Answers',
    desc: 'Model answers for every exam question type: short, long, scenario-based, and viva. See exactly what a full-mark answer looks like.',
  },
];

const ROADMAP_STEPS = [
  { phase: 'Beginner', color: '#2E7D32', items: ['HTML Basics', 'HTML Elements', 'CSS Selectors', 'CSS Box Model'] },
  { phase: 'Intermediate', color: '#1A5F7A', items: ['HTML Semantic', 'CSS Flexbox', 'CSS Grid', 'JS Variables'] },
  { phase: 'Advanced', color: '#9333ea', items: ['JS DOM & Events', 'ES6+ Features', 'Docker Basics', 'Docker Compose'] },
];

function SubjectCard({ subject }) {
  return (
    <Link to={subject.path} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'var(--ifm-background-surface-color)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.07)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        {/* Gradient Banner */}
        <div style={{ background: subject.color, height: '6px' }} />

        <div style={{ padding: '1.5rem' }}>
          <div style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>{subject.icon}</div>
          <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.2rem', fontWeight: 700 }}>{subject.name}</h3>
          <p style={{ margin: '0 0 1rem', fontSize: '0.875rem', color: 'var(--ifm-color-content-secondary)', lineHeight: 1.6 }}>
            {subject.description}
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--ifm-color-content-secondary)' }}>
              {subject.topics} notes
            </span>
            <span className={`difficulty-badge difficulty-${subject.difficulty.toLowerCase()}`}>
              {subject.difficulty}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function StatsCounter({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="stat-card-value" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
        {value}
      </div>
      <div style={{ fontSize: '0.9rem', color: 'var(--ifm-color-content-secondary)', marginTop: '0.25rem' }}>
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [progress, setProgress] = useState({});

  useEffect(() => {
    try {
      const p = JSON.parse(localStorage.getItem('ds_academic_progress') || '{}');
      setProgress(p);
    } catch {}
  }, []);

  const completedCount = Object.keys(progress).length;

  return (
    <Layout title="Home" description="DS Academic — Learn concepts. Not memorization. Exam-ready notes for CSE students.">
      {/* Skip to main content */}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      <main id="main-content">
        {/* ====== HERO ====== */}
        <header style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1A5F7A 55%, #22A699 100%)',
          padding: '5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34,166,153,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,95,122,0.2) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', maxWidth: '780px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
              padding: '0.4rem 1rem',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(8px)',
            }}>
              🎓 Built for CSE Students
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 6vw, 3.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #ffffff 30%, #22A699)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}>
              DS Academic
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '0.5rem',
            }}>
              Learn concepts. Not memorization.
            </p>

            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '2.5rem',
              maxWidth: '500px',
              margin: '0 auto 2.5rem',
            }}>
              Exam-ready understanding for CSE students. Notes with real examples, model answers, and teacher perspectives.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/docs/web-technologies/html/html-introduction"
                style={{
                  background: 'white',
                  color: '#1A5F7A',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={e => e.currentTarget.style.transform = ''}
              >
                📚 Browse Notes
              </Link>
              <Link
                to="/youtube"
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'}
                onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'}
              >
                ▶ Watch Videos
              </Link>
            </div>

            {completedCount > 0 && (
              <div style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                <Link to="/dashboard" style={{ color: '#22A699' }}>
                  ✅ You've completed {completedCount} notes — view dashboard →
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* ====== SUBJECTS GRID ====== */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--ifm-background-color)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                📚 Browse by Subject
              </h2>
              <p style={{ color: 'var(--ifm-color-content-secondary)', maxWidth: '500px', margin: '0 auto' }}>
                Start anywhere. Every note is self-contained with examples and exam prep.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}>
              {SUBJECTS.map((s) => (
                <SubjectCard key={s.name} subject={s} />
              ))}
            </div>
          </div>
        </section>

        {/* ====== FEATURES ====== */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--ifm-background-surface-color)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                Why DS Academic?
              </h2>
              <p style={{ color: 'var(--ifm-color-content-secondary)' }}>
                Not just notes — a system designed to get you better marks.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  background: 'var(--ifm-background-color)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{f.icon}</div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{f.title}</h3>
                  <p style={{ color: 'var(--ifm-color-content-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== ROADMAP PREVIEW ====== */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--ifm-background-color)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                🗺️ Learning Roadmap
              </h2>
              <p style={{ color: 'var(--ifm-color-content-secondary)' }}>
                Follow a structured path from beginner to exam-ready.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ROADMAP_STEPS.map((step, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  background: 'var(--ifm-background-surface-color)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div style={{
                    minWidth: '110px',
                    background: step.color,
                    color: 'white',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginTop: '1px',
                  }}>
                    {step.phase}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {step.items.map((item, j) => (
                      <span key={j} style={{
                        background: 'rgba(0,0,0,0.04)',
                        padding: '0.25rem 0.7rem',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/roadmap" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--ds-primary)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
                View Full Roadmap →
              </Link>
            </div>
          </div>
        </section>

        {/* ====== STATS ====== */}
        <section style={{
          padding: '4rem 1.5rem',
          background: 'linear-gradient(135deg, #0F172A, #1A5F7A)',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '2rem',
            }}>
              <StatsCounter value="21+" label="Topic Notes" />
              <StatsCounter value="1000+" label="Students Helped" />
              <StatsCounter value="50+" label="Exam Questions" />
              <StatsCounter value="Free" label="Always" />
            </div>
          </div>
        </section>

        {/* ====== EXAM PREP CTA ====== */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--ifm-background-surface-color)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
              Ready to ace your exams?
            </h2>
            <p style={{ color: 'var(--ifm-color-content-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Start with our exam preparation guides. Learn how teachers grade, what keywords to use, and how to structure answers for maximum marks.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/docs/exam-prep/how-to-write-answers" style={{
                background: 'var(--ds-primary)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
                📖 Exam Prep Guide
              </Link>
              <Link to="/roadmap" style={{
                background: 'transparent',
                color: 'var(--ds-primary)',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
                border: '2px solid var(--ds-primary)',
              }}>
                🗺️ Start Roadmap
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
