import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

const STORAGE_KEY = 'ds_academic_progress';
const STREAK_KEY = 'ds_academic_streak';

function getProgress() {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch { return {}; }
}

function getStreakData() {
  if (typeof window === 'undefined') return { count: 0, lastVisit: null };
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastVisit":null}');
  } catch { return { count: 0, lastVisit: null }; }
}

/**
 * ProgressTracker Component
 * Tracks viewed notes via localStorage, shows study streak.
 *
 * Props:
 *   noteId (string) - Unique ID for this note (use the slug/path)
 *   totalNotes (number) - Total notes in this section
 *   sectionNotes (array) - Array of { id, title } for section progress
 */
export default function ProgressTracker({ noteId, totalNotes = 20, sectionNotes = [] }) {
  const location = useLocation();
  const [progress, setProgress] = useState({});
  const [streak, setStreak] = useState({ count: 0, lastVisit: null });
  const [justMarked, setJustMarked] = useState(false);

  const currentId = noteId || location.pathname;

  useEffect(() => {
    const p = getProgress();
    const s = getStreakData();
    setProgress(p);

    // Update streak
    const today = new Date().toDateString();
    if (s.lastVisit !== today) {
      const lastDate = s.lastVisit ? new Date(s.lastVisit) : null;
      const diffDays = lastDate
        ? Math.floor((new Date() - lastDate) / (1000 * 60 * 60 * 24))
        : 999;

      const newStreak = diffDays <= 1 ? (s.count || 0) + 1 : 1;
      const newStreakData = { count: newStreak, lastVisit: today };
      localStorage.setItem(STREAK_KEY, JSON.stringify(newStreakData));
      setStreak(newStreakData);
    } else {
      setStreak(s);
    }
  }, []);

  const markComplete = () => {
    const updated = { ...progress, [currentId]: { completedAt: new Date().toISOString() } };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setProgress(updated);
    setJustMarked(true);
    setTimeout(() => setJustMarked(false), 2000);
  };

  const isCompleted = !!progress[currentId];
  const totalCompleted = Object.keys(progress).length;
  const overallPercent = Math.round((totalCompleted / totalNotes) * 100);

  return (
    <div style={{
      background: 'var(--ifm-background-surface-color)',
      border: '1px solid rgba(0,0,0,0.07)',
      borderRadius: '12px',
      padding: '1.25rem',
      margin: '2rem 0',
      fontSize: '0.875rem',
    }}>
      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h5 style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem' }}>📊 Your Progress</h5>

        {/* Streak Badge */}
        {streak.count > 0 && (
          <span className="streak-badge" aria-label={`${streak.count} day study streak`}>
            🔥 {streak.count} day{streak.count !== 1 ? 's' : ''} streak
          </span>
        )}
      </div>

      {/* Overall Progress Bar */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
          <span>Overall Progress</span>
          <span style={{ fontWeight: 600 }}>{totalCompleted} / {totalNotes} notes ({overallPercent}%)</span>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${Math.min(overallPercent, 100)}%` }}
            role="progressbar"
            aria-valuenow={overallPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Current Note Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {isCompleted ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--ds-success)',
            fontWeight: 600,
          }}>
            <span style={{ fontSize: '1.25rem' }}>✅</span>
            <span>
              {justMarked ? 'Marked complete! Great work!' : 'This note is complete'}
            </span>
          </div>
        ) : (
          <button
            onClick={markComplete}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--ds-success)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.875rem',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={e => e.target.style.opacity = '0.85'}
            onMouseOut={e => e.target.style.opacity = '1'}
          >
            ☐ Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
}
