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

      {/* Quick Actions Grid */}
      <h3 className="font-bold mb-3">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-border hover:border-primary hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <span className="text-xs font-medium">Log Expense</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-border hover:border-primary hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
          </div>
          <span className="text-xs font-medium">Voice Note</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-border hover:border-primary hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
          <span className="text-xs font-medium">Scan Receipt</span>
        </button>
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

      {/* Today's Tasks */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold">Today's Tasks</h3>
        <a href="#" className="text-primary text-sm font-medium">See all</a>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        <div className="bg-white p-3 rounded-xl border border-border shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-warning bg-opacity-20 flex items-center justify-center text-warning">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 14 4-4"></path>
              <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-sm">Top-dress Maize</h4>
            <p className="text-xs text-muted">Plot 2 • 2 bags CAN needed</p>
          </div>
          <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:bg-success hover:text-white hover:border-success transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        </div>
        
        <div className="bg-white p-3 rounded-xl border border-border shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-info bg-opacity-20 flex items-center justify-center text-info">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-sm">Spray Tomatoes</h4>
            <p className="text-xs text-muted">Plot 4 • Preventative</p>
          </div>
          <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:bg-success hover:text-white hover:border-success transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        </div>
      </div>

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
