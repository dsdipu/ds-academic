import React from 'react';

/**
 * ExamSidebar Component
 * Shows exam-oriented metadata for a note.
 *
 * Props:
 *   examWeight (string)     - e.g. "10-15% of exam"
 *   questionTypes (array)   - e.g. ["MCQ", "5-mark broad", "Scenario"]
 *   keywords (array)        - Key terms to memorize
 *   timeAllocation (string) - e.g. "15-20 minutes"
 *   lastYear (string)       - e.g. "Asked in 2024 Final"
 */
export default function ExamSidebar({
  examWeight,
  questionTypes = [],
  keywords = [],
  timeAllocation,
  lastYear,
}) {
  return (
    <div className="exam-sidebar" role="complementary" aria-label="Exam Guide">
      <h5>🎯 Exam Guide</h5>

      {examWeight && (
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-content-secondary)', marginBottom: '0.25rem' }}>
            EXAM WEIGHT
          </div>
          <div style={{ fontWeight: 700, color: 'var(--ds-accent)' }}>{examWeight}</div>
        </div>
      )}

      {lastYear && (
        <div style={{
          background: 'rgba(242,190,34,0.1)',
          border: '1px solid rgba(242,190,34,0.3)',
          borderRadius: '6px',
          padding: '0.4rem 0.75rem',
          fontSize: '0.8rem',
          marginBottom: '0.75rem',
          color: '#92680a',
          fontWeight: 600,
        }}>
          📅 {lastYear}
        </div>
      )}

      {questionTypes.length > 0 && (
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-content-secondary)', marginBottom: '0.35rem' }}>
            EXPECTED QUESTION TYPES
          </div>
          {questionTypes.map((qt, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              marginBottom: '0.2rem',
            }}>
              <span>•</span> {qt}
            </div>
          ))}
        </div>
      )}

      {timeAllocation && (
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-content-secondary)', marginBottom: '0.25rem' }}>
            TIME TO SPEND IN EXAM
          </div>
          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>⏱ {timeAllocation}</div>
        </div>
      )}

      {keywords.length > 0 && (
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-content-secondary)', marginBottom: '0.35rem' }}>
            KEYWORDS TO MEMORIZE
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
            {keywords.map((kw, i) => (
              <span key={i} className="exam-keyword-pill">{kw}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
