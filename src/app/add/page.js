import Link from "next/link";

export default function QuickAdd() {
  return (
    <div className="container py-4 animate-fade-in pb-24">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-primary transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        <h2 className="text-2xl font-bold font-heading">New Record</h2>
      </div>

      <div className="bg-surface rounded-xl border border-border shadow-sm p-2 flex mb-6">
        <button className="flex-1 py-2 text-center rounded-lg bg-danger text-white font-bold text-sm shadow-sm transition-colors">
          Expense
        </button>
        <button className="flex-1 py-2 text-center rounded-lg text-muted font-bold text-sm hover:bg-bg-surface-hover transition-colors">
          Income
        </button>
      </div>

      <div className="card space-y-4">
        <div>
          <label className="block text-sm font-bold text-muted mb-1">Amount (KES)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-bold">KES</span>
            <input type="number" placeholder="0" className="w-full pl-14 pr-4 py-3 rounded-lg border border-border text-2xl font-bold focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-muted mb-1">Category</label>
          <div className="grid grid-cols-3 gap-2">
            <button className="py-2 border border-primary bg-primary-light text-primary rounded-lg text-xs font-bold flex flex-col items-center gap-1">
              <span className="text-lg">🌱</span> Inputs
            </button>
            <button className="py-2 border border-border text-muted rounded-lg text-xs font-medium flex flex-col items-center gap-1 hover:border-primary hover:text-primary">
              <span className="text-lg">👥</span> Labor
            </button>
            <button className="py-2 border border-border text-muted rounded-lg text-xs font-medium flex flex-col items-center gap-1 hover:border-primary hover:text-primary">
              <span className="text-lg">🚜</span> Equipment
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-muted mb-1">Related Crop</label>
          <select className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm font-medium bg-white">
            <option>Maize (DK 8031) - Plot 1 & 2</option>
            <option>Tomatoes (Anna F1) - Greenhouse 1</option>
            <option>General Farm Expense</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-muted mb-1">Description</label>
          <input type="text" placeholder="e.g., 2 bags of DAP fertilizer" className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm font-medium" />
        </div>

        <div className="pt-2">
          <label className="flex items-center gap-3 p-4 border border-success rounded-lg bg-success bg-opacity-10 cursor-pointer">
            <div className="w-6 h-6 rounded-full border-2 border-success flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-success"></div>
            </div>
            <div>
              <p className="font-bold text-sm text-success">Pay with M-Pesa</p>
              <p className="text-xs text-muted">Auto-record receipt and SMS</p>
            </div>
            <div className="ml-auto">
              <span className="text-2xl">📱</span>
            </div>
          </label>
        </div>

        <button className="w-full py-4 mt-4 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary-hover hover:shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 text-lg">
          Save & Pay
        </button>
      </div>
    </div>
  );
}
