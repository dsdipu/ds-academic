import React, { useState } from 'react';

/**
 * ModelAnswer Component
 * Renders an exam-style model answer with mark scheme breakdown.
 *
 * Props:
 *   question (string)    - The exam question text
 *   marks (number)       - Total marks
 *   markscheme (array)   - Array of { point, marks, example? }
 *   exampleAnswer (string) - Full example answer (shown on toggle)
 *   questionType (string) - 'narrow' | 'broad' | 'scenario' (default: 'narrow')
 */
export default function ModelAnswer({
  question,
  marks = 5,
  markscheme = [],
  exampleAnswer,
  questionType = 'narrow',
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  const typeColors = {
    narrow: { bg: 'rgba(46,125,50,0.08)', border: '#2E7D32', label: 'Short Answer' },
    broad: { bg: 'rgba(26,95,122,0.08)', border: '#1A5F7A', label: 'Long Answer' },
    scenario: { bg: 'rgba(242,190,34,0.08)', border: '#F2BE22', label: 'Scenario/Case Study' },
  };

  const style = typeColors[questionType] || typeColors.narrow;

  return (
    <div style={{
      border: `2px solid ${style.border}`,
      borderRadius: '12px',
      overflow: 'hidden',
      margin: '1.5rem 0',
    }}>
      {/* Header */}
      <div style={{
        background: style.bg,
        padding: '0.85rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        borderBottom: `1px solid ${style.border}33`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.25rem' }}>📝</span>
          <h4 style={{ margin: 0, color: style.border, fontSize: '1rem' }}>
            Model Answer
          </h4>
          <span style={{
            fontSize: '0.7rem',
            background: style.border,
            color: 'white',
            padding: '0.15rem 0.5rem',
            borderRadius: '4px',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}>
            {style.label}
          </span>
        </div>
        <span style={{
          background: style.border,
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 700,
        }}>
          {marks} Marks
        </span>
      </div>

      {/* Question */}
      <div style={{
        padding: '1rem 1.25rem',
        background: 'rgba(0,0,0,0.02)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        fontSize: '0.95rem',
        lineHeight: 1.6,
      }}>
        <strong>Question: </strong>{question}
      </div>

      {/* Mark Scheme */}
      <div style={{ padding: '0.5rem 0' }}>
        {markscheme.map((item, i) => (
          <div key={i} className="mark-item">
            <div className="mark-bullet">{item.marks || 1}</div>
            <div>
              <div style={{ fontSize: '0.9rem' }}>{item.point}</div>
              {item.example && (
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--ifm-color-content-secondary)',
                  marginTop: '0.25rem',
                  fontStyle: 'italic',
                }}>
                  Example: {item.example}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Marks Summary */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0.5rem 1.25rem',
          borderTop: '1px dashed rgba(0,0,0,0.1)',
          marginTop: '0.5rem',
        }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ifm-color-content-secondary)' }}>
            Total: {markscheme.reduce((sum, i) => sum + (i.marks || 1), 0)} / {marks} marks
          </span>
        </div>
      </div>

      {/* Example Answer Toggle */}
      {exampleAnswer && (
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            style={{
              width: '100%',
              padding: '0.75rem 1.25rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: style.border,
              textAlign: 'left',
            }}
          >
            {showAnswer ? '▼' : '▶'} {showAnswer ? 'Hide' : 'Show'} Full Example Answer
          </button>

          {showAnswer && (
            <div style={{
              padding: '1rem 1.25rem',
              borderTop: '1px solid rgba(0,0,0,0.05)',
              fontSize: '0.9rem',
              lineHeight: 1.75,
              background: 'rgba(0,0,0,0.01)',
              whiteSpace: 'pre-wrap',
            }}>
              {exampleAnswer}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
