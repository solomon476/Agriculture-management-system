import Link from "next/link";
import TaskChecklist from "@/components/TaskChecklist";

export default function Home() {
  return (
    <div className="container py-4 animate-fade-in">
      {/* Weather & Date Summary */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Good morning, John!</h2>
          <p className="text-muted text-sm mt-1">Thursday, Oct 24 • Nakuru, Kenya</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-info flex items-center gap-1 justify-end">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
            </svg>
            24°
          </div>
          <p className="text-muted text-sm">Light rain expected</p>
        </div>
      </div>

      {/* Quick Actions Grid - all buttons now navigate */}
      <h3 className="font-bold mb-3">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Link href="/add?type=expense" className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-border hover:border-primary hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <span className="text-xs font-medium">Log Expense</span>
        </Link>

        <Link href="/add?type=crop" className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-border hover:border-primary hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20"></path>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <span className="text-xs font-medium">Add Crop</span>
        </Link>

        <Link href="/reports" className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-border hover:border-primary hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18"></path>
              <path d="m19 9-5 5-4-4-3 3"></path>
            </svg>
          </div>
          <span className="text-xs font-medium">View Reports</span>
        </Link>
      </div>

      {/* Profit/Loss Overview */}
      <h3 className="font-bold mb-3">Season Overview</h3>
      <div className="card mb-6 bg-gradient-to-br from-primary to-primary-hover text-white border-none relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>

        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-sm opacity-90 mb-1">Current Profit</p>
            <h2 className="text-3xl font-bold">KES 45,200</h2>
          </div>
          <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            12%
          </span>
        </div>

        <div className="flex justify-between border-t border-white border-opacity-20 pt-3">
          <div>
            <p className="text-xs opacity-80">Income</p>
            <p className="font-medium">KES 82,500</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-80">Expenses</p>
            <p className="font-medium">KES 37,300</p>
          </div>
        </div>
      </div>

      {/* Today's Tasks — interactive client component */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold">Today&apos;s Tasks</h3>
        <Link href="/crops" className="text-primary text-sm font-medium">See all</Link>
      </div>
      <TaskChecklist />

      {/* Market Prices Snippet */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold">Market Prices</h3>
        <span className="text-xs text-muted">KAMIS (Nakuru)</span>
      </div>
      <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden mb-6">
        <div className="p-3 border-b border-border flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌽</span>
            <span className="font-medium text-sm">Dry Maize (90kg)</span>
          </div>
          <div className="text-right">
            <span className="font-bold text-sm">KES 3,500</span>
            <span className="text-success text-xs flex items-center justify-end gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              +50
            </span>
          </div>
        </div>
        <div className="p-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍅</span>
            <span className="font-medium text-sm">Tomatoes (Crate)</span>
          </div>
          <div className="text-right">
            <span className="font-bold text-sm">KES 6,200</span>
            <span className="text-danger text-xs flex items-center justify-end gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              -120
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
