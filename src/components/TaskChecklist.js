'use client';

export default function TaskChecklist() {
  // Tasks will be powered by real crop data in a future update.
  // For now, show an encouraging empty state.
  return (
    <div className="flex flex-col items-center justify-center py-6 gap-2 text-muted mb-6 bg-white rounded-xl border border-border">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <p className="text-sm font-medium">All clear — no pending tasks!</p>
      <a href="/add?type=crop" className="text-xs text-primary font-bold hover:underline">Add a crop to track activities →</a>
    </div>
  );
}
