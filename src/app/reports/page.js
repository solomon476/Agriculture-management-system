export default function Reports() {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading">Financial Reports</h1>
          <p className="text-muted mt-1">Detailed analysis of farm performance</p>
        </div>
        <div className="flex gap-3">
          <select className="btn btn-secondary font-medium bg-white outline-none">
            <option>Season: Long Rains 2026</option>
            <option>Season: Short Rains 2025</option>
            <option>Annual 2025</option>
          </select>
          <button className="btn btn-primary flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Crop Performance Comparison */}
        <div className="card">
          <h3 className="font-bold text-lg mb-6">Crop ROI Comparison</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>Maize (DK 8031)</span>
                <span className="text-success">+42% ROI</span>
              </div>
              <div className="w-full bg-bg-surface-hover rounded-full h-3">
                <div className="bg-success h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted mt-1">
                <span>Cost: KES 45,000</span>
                <span>Revenue: KES 64,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>Tomatoes (Anna F1)</span>
                <span className="text-success">+68% ROI</span>
              </div>
              <div className="w-full bg-bg-surface-hover rounded-full h-3">
                <div className="bg-info h-3 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted mt-1">
                <span>Cost: KES 85,000</span>
                <span>Revenue: KES 142,800</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>French Beans</span>
                <span className="text-danger">-12% ROI</span>
              </div>
              <div className="w-full bg-bg-surface-hover rounded-full h-3">
                <div className="bg-danger h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted mt-1">
                <span>Cost: KES 32,000</span>
                <span>Revenue: KES 28,160</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="card">
          <h3 className="font-bold text-lg mb-6">Expense Breakdown</h3>
          <div className="flex items-center gap-6">
            <div className="w-40 h-40 rounded-full border-[16px] border-primary border-r-info border-b-warning border-l-danger relative transform rotate-45 flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                <div className="text-center">
                  <p className="text-xs text-muted font-bold uppercase">Total</p>
                  <p className="text-xl font-bold">162k</p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Labor (45%)</span>
                </div>
                <span className="text-sm font-bold">KES 72,900</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-info"></div>
                  <span className="text-sm font-medium">Fertilizer (25%)</span>
                </div>
                <span className="text-sm font-bold">KES 40,500</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <span className="text-sm font-medium">Seeds (15%)</span>
                </div>
                <span className="text-sm font-bold">KES 24,300</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-danger"></div>
                  <span className="text-sm font-medium">Pesticides (15%)</span>
                </div>
                <span className="text-sm font-bold">KES 24,300</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-border bg-bg-surface-hover flex justify-between items-center">
          <h3 className="font-bold text-lg">Transaction History</h3>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search transactions..." className="pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:border-primary outline-none" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-surface-hover text-muted text-xs uppercase tracking-wider">
                <th className="p-4 font-bold border-b border-border">Date</th>
                <th className="p-4 font-bold border-b border-border">Description</th>
                <th className="p-4 font-bold border-b border-border">Category</th>
                <th className="p-4 font-bold border-b border-border">Reference</th>
                <th className="p-4 font-bold border-b border-border text-right">Amount (KES)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border hover:bg-bg-surface-hover transition-colors">
                <td className="p-4 text-muted">Oct 24, 2026</td>
                <td className="p-4 font-bold">Sold 10 Crates Tomatoes</td>
                <td className="p-4"><span className="bg-success bg-opacity-10 text-success px-2 py-1 rounded text-xs font-bold">Revenue</span></td>
                <td className="p-4 text-muted">MPESA-RHK492</td>
                <td className="p-4 font-bold text-success text-right">+28,000</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-surface-hover transition-colors">
                <td className="p-4 text-muted">Oct 22, 2026</td>
                <td className="p-4 font-bold">Casual Labor (Weeding)</td>
                <td className="p-4"><span className="bg-warning bg-opacity-10 text-warning px-2 py-1 rounded text-xs font-bold">Labor</span></td>
                <td className="p-4 text-muted">MPESA-RHK221</td>
                <td className="p-4 font-bold text-danger text-right">-5,000</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-surface-hover transition-colors">
                <td className="p-4 text-muted">Oct 18, 2026</td>
                <td className="p-4 font-bold">5 Bags DAP Fertilizer</td>
                <td className="p-4"><span className="bg-info bg-opacity-10 text-info px-2 py-1 rounded text-xs font-bold">Input</span></td>
                <td className="p-4 text-muted">MPESA-RHK110</td>
                <td className="p-4 font-bold text-danger text-right">-17,500</td>
              </tr>
              <tr className="hover:bg-bg-surface-hover transition-colors">
                <td className="p-4 text-muted">Oct 15, 2026</td>
                <td className="p-4 font-bold">Sold 50 Bags Maize</td>
                <td className="p-4"><span className="bg-success bg-opacity-10 text-success px-2 py-1 rounded text-xs font-bold">Revenue</span></td>
                <td className="p-4 text-muted">Bank Transfer</td>
                <td className="p-4 font-bold text-success text-right">+175,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
