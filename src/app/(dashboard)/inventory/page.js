export default function Inventory() {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading">Inventory Management</h1>
          <p className="text-muted mt-1">Track seeds, fertilizers, and farm equipment</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Item
        </button>
      </div>

      {/* Categories Tabs */}
      <div className="flex gap-4 border-b border-border mb-6">
        <button className="pb-3 border-b-2 border-primary text-primary font-bold px-2">All Items</button>
        <button className="pb-3 border-b-2 border-transparent text-muted font-medium px-2 hover:text-primary transition-colors">Fertilizers</button>
        <button className="pb-3 border-b-2 border-transparent text-muted font-medium px-2 hover:text-primary transition-colors">Seeds</button>
        <button className="pb-3 border-b-2 border-transparent text-muted font-medium px-2 hover:text-primary transition-colors">Pesticides</button>
      </div>

      {/* Inventory Table */}
      <div className="card overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-surface-hover text-muted text-xs uppercase tracking-wider">
                <th className="p-4 font-bold border-b border-border">Item Name</th>
                <th className="p-4 font-bold border-b border-border">Category</th>
                <th className="p-4 font-bold border-b border-border">Stock Level</th>
                <th className="p-4 font-bold border-b border-border">Status</th>
                <th className="p-4 font-bold border-b border-border">Value (KES)</th>
                <th className="p-4 font-bold border-b border-border">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border hover:bg-bg-surface-hover transition-colors">
                <td className="p-4 font-bold flex items-center gap-3">
                  <span className="text-2xl">🌱</span> DAP Fertilizer
                </td>
                <td className="p-4 text-muted">Fertilizer</td>
                <td className="p-4 font-bold text-danger">3 Bags (50kg)</td>
                <td className="p-4">
                  <span className="bg-danger bg-opacity-20 text-danger text-xs font-bold px-2 py-1 rounded-md">Low Stock</span>
                </td>
                <td className="p-4 font-medium">10,500</td>
                <td className="p-4 text-primary font-bold cursor-pointer hover:underline">Reorder</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-surface-hover transition-colors">
                <td className="p-4 font-bold flex items-center gap-3">
                  <span className="text-2xl">🌽</span> Maize Seed (DK 8031)
                </td>
                <td className="p-4 text-muted">Seed</td>
                <td className="p-4 font-bold">12 Pkts (2kg)</td>
                <td className="p-4">
                  <span className="bg-success bg-opacity-20 text-success text-xs font-bold px-2 py-1 rounded-md">Optimal</span>
                </td>
                <td className="p-4 font-medium">6,000</td>
                <td className="p-4 text-muted cursor-pointer hover:text-primary transition-colors">Edit</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-surface-hover transition-colors">
                <td className="p-4 font-bold flex items-center gap-3">
                  <span className="text-2xl">🧪</span> Roundup Herbicide
                </td>
                <td className="p-4 text-muted">Pesticide</td>
                <td className="p-4 font-bold">8 Liters</td>
                <td className="p-4">
                  <span className="bg-success bg-opacity-20 text-success text-xs font-bold px-2 py-1 rounded-md">Optimal</span>
                </td>
                <td className="p-4 font-medium">9,600</td>
                <td className="p-4 text-muted cursor-pointer hover:text-primary transition-colors">Edit</td>
              </tr>
              <tr className="hover:bg-bg-surface-hover transition-colors">
                <td className="p-4 font-bold flex items-center gap-3">
                  <span className="text-2xl">🚜</span> Tractor Fuel (Diesel)
                </td>
                <td className="p-4 text-muted">Fuel</td>
                <td className="p-4 font-bold text-warning">45 Liters</td>
                <td className="p-4">
                  <span className="bg-warning bg-opacity-20 text-warning text-xs font-bold px-2 py-1 rounded-md">Reorder Soon</span>
                </td>
                <td className="p-4 font-medium">9,000</td>
                <td className="p-4 text-primary font-bold cursor-pointer hover:underline">Reorder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
