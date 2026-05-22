import React, { useState } from 'react';

/**
 * CommonMistakes Component
 * Renders a list of common programming mistakes with wrong/correct code examples.
 *
 * @param {Array} data - Array of mistake objects:
 *   { title, wrongCode, whyWrong, correctCode, teacherNote }
 */
export default function CommonMistakes({ data = [] }) {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  if (!data.length) {
    return (
      <div style={{
        padding: '1rem',
        background: 'rgba(229,62,62,0.05)',
        border: '1px dashed #E53E3E',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#E53E3E',
        fontSize: '0.9rem',
      }}>
        ⚠️ No mistakes data provided to CommonMistakes component.
      </div>
    );
  }

  return (
    <div className="mistakes-container" role="region" aria-label="Common Mistakes">
      {data.map((mistake, index) => (
        <div key={index} className="mistake-item">
          {/* Header */}
          <div
            className="mistake-header"
            onClick={() => toggleItem(index)}
            style={{ cursor: 'pointer', userSelect: 'none' }}
            role="button"
            aria-expanded={!!openItems[index]}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleItem(index)}
          >
            <span style={{ fontSize: '1.25rem' }}>🚫</span>
            <h4>{mistake.title}</h4>
            <span className="mistake-badge">Common Mistake #{index + 1}</span>
            <span style={{ marginLeft: 'auto', fontSize: '1rem', color: '#E53E3E' }}>
              {openItems[index] ? '▲' : '▼'}
            </span>
          </div>

          {/* Collapsible Body */}
          {openItems[index] !== false && (
            <div className="mistake-body">
              {/* Wrong Code */}
              <span className="mistake-wrong-label">❌ What students write (WRONG):</span>
              <div style={{
                background: 'rgba(229,62,62,0.06)',
                border: '1px solid rgba(229,62,62,0.25)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
                fontFamily: 'var(--ifm-font-family-monospace)',
                fontSize: '0.875rem',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
              }}>
                {mistake.wrongCode}
              </div>

              {/* Why It's Wrong */}
              <div style={{
                background: 'rgba(229,62,62,0.04)',
                borderLeft: '3px solid #E53E3E',
                padding: '0.75rem 1rem',
                borderRadius: '0 8px 8px 0',
                marginBottom: '1rem',
                fontSize: '0.9rem',
              }}>
                <strong style={{ color: '#E53E3E' }}>Why this is wrong: </strong>
                {mistake.whyWrong}
              </div>

              {/* Correct Code */}
              <span className="mistake-correct-label">✅ The correct way:</span>
              <div style={{
                background: 'rgba(46,125,50,0.06)',
                border: '1px solid rgba(46,125,50,0.25)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
                fontFamily: 'var(--ifm-font-family-monospace)',
                fontSize: '0.875rem',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
              }}>
                {mistake.correctCode}
              </div>

              {/* Teacher Note */}
              {mistake.teacherNote && (
                <div className="teacher-note">
                  <strong>👨‍🏫 Teacher's Perspective: </strong>
                  {mistake.teacherNote}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
