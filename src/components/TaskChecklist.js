'use client';
import { useState } from 'react';

const initialTasks = [
  {
    id: 1,
    title: 'Top-dress Maize',
    detail: 'Plot 2 • 2 bags CAN needed',
    color: 'warning',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 14 4-4"></path>
        <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Spray Tomatoes',
    detail: 'Plot 4 • Preventative',
    color: 'info',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
];

export default function TaskChecklist() {
  const [tasks, setTasks] = useState(initialTasks);

  const completeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 gap-2 text-muted">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <p className="text-sm font-medium">All tasks done! Great work.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 mb-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-3 rounded-xl border border-border shadow-sm flex items-center gap-3"
        >
          <div className={`w-12 h-12 rounded-lg bg-${task.color} bg-opacity-20 flex items-center justify-center text-${task.color}`}>
            {task.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-sm">{task.title}</h4>
            <p className="text-xs text-muted">{task.detail}</p>
          </div>
          <button
            onClick={() => completeTask(task.id)}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:bg-success hover:text-white hover:border-success transition-colors"
            title="Mark complete"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
