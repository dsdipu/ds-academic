import React from 'react';

/**
 * LastUpdated Component
 * Displays a formatted last-updated date badge.
 *
 * Props:
 *   date (string) - ISO date string e.g. "2026-05-22"
 *   timeTo (string) - Time to master e.g. "2 hours"
 *   difficulty (string) - "Beginner" | "Intermediate" | "Advanced"
 */
export default function LastUpdated({
  date,
  timeTo,
  difficulty,
}) {
  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  const difficultyColor = {
    Beginner: { bg: 'rgba(46,125,50,0.1)', color: '#2E7D32' },
    Intermediate: { bg: 'rgba(242,190,34,0.1)', color: '#92680a' },
    Advanced: { bg: 'rgba(229,62,62,0.1)', color: '#E53E3E' },
  };

  const dc = difficultyColor[difficulty] || difficultyColor.Beginner;

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.75rem',
      alignItems: 'center',
    }}>
      {date && (
        <span className="last-updated-badge">
          🗓 Updated: {formatDate(date)}
        </span>
      )}

      {timeTo && (
        <span className="time-to-master">
          ⏱ {timeTo} to master
        </span>
      )}

      {difficulty && (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.78rem',
          fontWeight: 700,
          background: dc.bg,
          color: dc.color,
          padding: '0.25rem 0.75rem',
          borderRadius: '100px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {difficulty === 'Beginner' && '🟢'}
          {difficulty === 'Intermediate' && '🟡'}
          {difficulty === 'Advanced' && '🔴'}
          {difficulty}
        </span>
      )}
    </div>
  );
}
