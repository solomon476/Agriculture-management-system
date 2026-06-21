export default function Dashboard() {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading">Farm Overview</h1>
          <p className="text-muted mt-1">Real-time metrics for AgriBloom Farms</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-secondary flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            This Season
          </button>
          <button className="btn btn-primary flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export Report
          </button>
        </div>
      </div>

      {/* High-level Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card border-l-4 border-l-primary">
          <p className="text-muted text-sm font-bold uppercase tracking-wider mb-2">Total Revenue</p>
          <h2 className="text-3xl font-bold mb-2">KES 1.2M</h2>
          <p className="text-sm text-success flex items-center gap-1 font-bold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            15% vs last season
          </p>
        </div>
        
        <div className="card border-l-4 border-l-danger">
          <p className="text-muted text-sm font-bold uppercase tracking-wider mb-2">Total Expenses</p>
          <h2 className="text-3xl font-bold mb-2">KES 450k</h2>
          <p className="text-sm text-danger flex items-center gap-1 font-bold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
              <polyline points="17 18 23 18 23 12"></polyline>
            </svg>
            8% vs last season
          </p>
        </div>

        <div className="card border-l-4 border-l-info">
          <p className="text-muted text-sm font-bold uppercase tracking-wider mb-2">Active Crops</p>
          <h2 className="text-3xl font-bold mb-2">45 Acres</h2>
          <p className="text-sm text-muted font-medium">Across 8 plots</p>
        </div>

        <div className="card border-l-4 border-l-warning">
          <p className="text-muted text-sm font-bold uppercase tracking-wider mb-2">Workforce</p>
          <h2 className="text-3xl font-bold mb-2">24 Active</h2>
          <p className="text-sm text-muted font-medium">12 Permanent, 12 Casual</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area (Mock) */}
        <div className="card lg:col-span-2">
          <h3 className="font-bold text-lg mb-6">Cash Flow Projection</h3>
          <div className="h-64 flex items-end gap-2 border-b border-l border-border p-4 pt-0">
            {/* Mock Bars */}
            {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                <div 
                  className="w-full bg-primary bg-opacity-20 group-hover:bg-opacity-40 transition-all rounded-t-sm" 
                  style={{ height: `${h}%` }}
                ></div>
                <div 
                  className="w-full bg-primary transition-all rounded-t-sm" 
                  style={{ height: `${h * 0.7}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted font-bold px-4">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="w-3 h-3 rounded-full bg-primary"></div> Revenue
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="w-3 h-3 rounded-full bg-primary bg-opacity-20"></div> Projected
            </div>
          </div>
        </div>

        {/* Alerts & Tasks */}
        <div className="flex flex-col gap-6">
          <div className="card flex-1">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-warning">⚠️</span> Critical Alerts
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-warning bg-opacity-10 border border-warning border-opacity-20 rounded-lg">
                <p className="text-sm font-bold text-warning-dark mb-1">Low Inventory</p>
                <p className="text-xs text-muted">DAP Fertilizer is below 5 bags. Reorder immediately for Plot 3.</p>
              </div>
              <div className="p-3 bg-danger bg-opacity-10 border border-danger border-opacity-20 rounded-lg">
                <p className="text-sm font-bold text-danger-dark mb-1">Disease Risk</p>
                <p className="text-xs text-muted">High humidity in Nakuru. Increased risk of Tomato Blight in Greenhouse 1.</p>
              </div>
            </div>
          </div>

          <div className="card flex-1">
            <h3 className="font-bold text-lg mb-4">Upcoming Harvests</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <div>
                  <p className="font-bold text-sm">Tomatoes (Anna F1)</p>
                  <p className="text-xs text-muted">Greenhouse 1</p>
                </div>
                <span className="text-sm font-bold text-primary">In 5 Days</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">French Beans</p>
                  <p className="text-xs text-muted">Plot 4</p>
                </div>
                <span className="text-sm font-bold text-muted">In 12 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
