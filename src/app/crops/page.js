export default function Crops() {
  return (
    <div className="container py-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-heading">My Crops</h2>
        <button className="bg-primary-light text-primary p-2 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-primary hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Crop
        </button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <button className="whitespace-nowrap px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-md border-none">Active (3)</button>
        <button className="whitespace-nowrap px-4 py-2 bg-white text-muted rounded-full text-sm font-medium shadow-sm border border-border">Harvested (12)</button>
        <button className="whitespace-nowrap px-4 py-2 bg-white text-muted rounded-full text-sm font-medium shadow-sm border border-border">Planning (2)</button>
      </div>

      <div className="grid gap-4 mb-6">
        {/* Crop Card 1 */}
        <div className="card overflow-hidden p-0 border-l-4 border-l-primary">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span>🌽</span> Maize (DK 8031)
                </h3>
                <p className="text-sm text-muted">Plot 1 & 2 • 2.5 Acres</p>
              </div>
              <span className="bg-success bg-opacity-20 text-success text-xs font-bold px-2 py-1 rounded-md">Vegetative</span>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Planted</p>
                <p className="text-sm font-medium">Mar 15</p>
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Est. Harvest</p>
                <p className="text-sm font-medium">Aug 10</p>
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Invested</p>
                <p className="text-sm font-medium text-danger">KES 12k</p>
              </div>
            </div>
          </div>
          <div className="bg-bg-surface-hover px-4 py-2 border-t border-border flex justify-between items-center">
            <span className="text-xs font-medium text-warning flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Due: Weeding
            </span>
            <button className="text-primary text-sm font-bold">Log Activity</button>
          </div>
        </div>

        {/* Crop Card 2 */}
        <div className="card overflow-hidden p-0 border-l-4 border-l-info">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span>🍅</span> Tomatoes (Anna F1)
                </h3>
                <p className="text-sm text-muted">Greenhouse 1 • 0.25 Acres</p>
              </div>
              <span className="bg-info bg-opacity-20 text-info text-xs font-bold px-2 py-1 rounded-md">Flowering</span>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Planted</p>
                <p className="text-sm font-medium">Sep 01</p>
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Est. Harvest</p>
                <p className="text-sm font-medium">Nov 15</p>
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Invested</p>
                <p className="text-sm font-medium text-danger">KES 25k</p>
              </div>
            </div>
          </div>
          <div className="bg-bg-surface-hover px-4 py-2 border-t border-border flex justify-between items-center">
            <span className="text-xs font-medium text-muted">All tasks up to date</span>
            <button className="text-primary text-sm font-bold">Log Activity</button>
          </div>
        </div>
      </div>
    </div>
  );
}
