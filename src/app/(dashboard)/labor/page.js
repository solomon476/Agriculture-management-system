export default function Labor() {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading">Labor & Payroll</h1>
          <p className="text-muted mt-1">Manage farm workers, assignments, and payments</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Worker
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Assignments */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="card p-0 overflow-hidden">
            <div className="p-4 border-b border-border bg-bg-surface-hover flex justify-between items-center">
              <h3 className="font-bold">Today&apos;s Assignments</h3>
              <span className="text-xs font-bold bg-primary text-white px-2 py-1 rounded-full">8 Active</span>
            </div>
            <div className="divide-y divide-border">
              {/* Assignment 1 */}
              <div className="p-4 flex justify-between items-center hover:bg-bg-surface-hover transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-info text-white flex items-center justify-center font-bold">
                    KO
                  </div>
                  <div>
                    <p className="font-bold text-sm">Kevin Ochieng</p>
                    <p className="text-xs text-muted flex items-center gap-1">
                      <span className="text-warning">🚜</span> Tractor Plowing • Plot 3
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-warning bg-opacity-20 text-warning text-xs font-bold px-2 py-1 rounded-md">In Progress</span>
                  <p className="text-xs text-muted mt-1">Started 07:00 AM</p>
                </div>
              </div>
              
              {/* Assignment 2 */}
              <div className="p-4 flex justify-between items-center hover:bg-bg-surface-hover transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    MW
                  </div>
                  <div>
                    <p className="font-bold text-sm">Mary Wanjiku</p>
                    <p className="text-xs text-muted flex items-center gap-1">
                      <span className="text-info">💧</span> Irrigation • Greenhouse 1
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-success bg-opacity-20 text-success text-xs font-bold px-2 py-1 rounded-md">Completed</span>
                  <p className="text-xs text-muted mt-1">Finished 11:30 AM</p>
                </div>
              </div>

              {/* Assignment 3 */}
              <div className="p-4 flex justify-between items-center hover:bg-bg-surface-hover transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                    JN
                  </div>
                  <div>
                    <p className="font-bold text-sm">John Njuguna</p>
                    <p className="text-xs text-muted flex items-center gap-1">
                      <span className="text-danger">🧪</span> Spraying Pesticides • Plot 4
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-border text-muted text-xs font-bold px-2 py-1 rounded-md">Pending</span>
                  <p className="text-xs text-muted mt-1">Scheduled 03:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payroll Summary */}
        <div className="flex flex-col gap-6">
          <div className="card bg-gradient-to-br from-secondary to-secondary-hover text-white border-none relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
            <h3 className="font-bold text-lg mb-2 opacity-90">Pending Payroll</h3>
            <h2 className="text-4xl font-bold mb-4">KES 32,500</h2>
            <p className="text-sm opacity-80 mb-6">Due this Friday (Oct 26)</p>
            
            <button className="w-full py-3 bg-white text-secondary font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-colors flex justify-center items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
              Process via M-Pesa
            </button>
          </div>

          <div className="card">
            <h3 className="font-bold mb-4">Recent Payments</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <div>
                  <p className="font-bold text-sm">Casual Labor (5 Workers)</p>
                  <p className="text-xs text-muted">Weeding • Plot 1</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm text-danger">-KES 5,000</span>
                  <p className="text-[10px] text-muted">Yesterday</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">Tractor Driver</p>
                  <p className="text-xs text-muted">Bonus Payment</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm text-danger">-KES 1,500</span>
                  <p className="text-[10px] text-muted">Oct 20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
