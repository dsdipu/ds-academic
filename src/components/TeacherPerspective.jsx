import React, { useState } from 'react';

/**
 * TeacherPerspective Component
 * Renders a teacher's checklist showing how marks are awarded.
 *
 * Props:
 *   topic (string) - Topic name
 *   commonDeductions (array) - Array of strings - what loses marks
 *   whatGetsFullMarks (array) - Array of strings - what earns full marks
 *   keywords (array) - Keywords teachers look for in answers
 */
export default function TeacherPerspective({
  topic,
  commonDeductions = [],
  whatGetsFullMarks = [],
  keywords = [],
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="teacher-perspective">
      <div
        className="teacher-perspective-header"
        style={{ cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span style={{ fontSize: '1.5rem' }}>👨‍🏫</span>
        <h4 style={{ margin: 0 }}>Teacher's Perspective{topic ? ` — ${topic}` : ''}</h4>
        <span style={{ marginLeft: 'auto', color: 'var(--ds-success)' }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>

      {isOpen && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {/* What Gets Full Marks */}
          {whatGetsFullMarks.length > 0 && (
            <div>
              <h5 style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--ds-success)',
                marginBottom: '0.5rem',
              }}>
                ✅ What Gets Full Marks
              </h5>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 1.7 }}>
                {whatGetsFullMarks.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Deductions */}
          {commonDeductions.length > 0 && (
            <div>
              <h5 style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--ds-danger)',
                marginBottom: '0.5rem',
              }}>
                ❌ What Loses Marks
              </h5>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 1.7 }}>
                {commonDeductions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Keywords */}
          {keywords.length > 0 && (
            <div>
              <h5 style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--ds-primary)',
                marginBottom: '0.5rem',
              }}>
                🔑 Keywords to Include
              </h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {keywords.map((kw, i) => (
                  <span key={i} className="exam-keyword-pill">{kw}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
