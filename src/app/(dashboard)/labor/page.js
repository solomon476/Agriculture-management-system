import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Labor() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: farm } = await supabase
    .from("farms")
    .select("id")
    .eq("owner_id", user.id)
    .single();

  let laborExpenses = [];
  let totalLaborCost = 0;

  if (farm) {
    const { data } = await supabase
      .from("transactions")
      .select("*")
      .eq("farm_id", farm.id)
      .eq("type", "Expense")
      .eq("category", "Labor")
      .order("transaction_date", { ascending: false });

    laborExpenses = data || [];
    totalLaborCost = laborExpenses.reduce((s, t) => s + Number(t.amount), 0);
  }

  return (
    <div className="container py-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold font-heading">Labor &amp; Payroll</h2>
          <p className="text-muted text-sm mt-1">Track farm worker payments</p>
        </div>
        <Link href="/add?type=labor" className="btn btn-primary flex items-center gap-2 text-sm px-3 py-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Log Payment
        </Link>
      </div>

      {/* Total labor cost card */}
      {totalLaborCost > 0 && (
        <div className="card mb-6 bg-gradient-to-br from-secondary to-secondary-hover text-white border-none relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
          <h3 className="font-bold text-lg mb-1 opacity-90">Total Labor Cost</h3>
          <h2 className="text-4xl font-bold">KES {totalLaborCost.toLocaleString()}</h2>
          <p className="text-sm opacity-80 mt-2">{laborExpenses.length} payment record{laborExpenses.length !== 1 ? "s" : ""}</p>
        </div>
      )}

      {laborExpenses.length === 0 ? (
        <div className="card flex flex-col items-center justify-center py-16 text-center gap-4">
          <span className="text-6xl">👷</span>
          <div>
            <h3 className="font-bold text-lg text-gray-700">No labor records yet</h3>
            <p className="text-muted text-sm mt-1 max-w-xs">Log your farm worker payments to track your labor costs and payroll history.</p>
          </div>
          <Link href="/add?type=labor" className="btn btn-primary px-6 py-3">Log First Payment</Link>
        </div>
      ) : (
        <div className="card p-0 overflow-hidden">
          <div className="p-4 border-b border-border bg-bg-surface-hover">
            <h3 className="font-bold">Payment History</h3>
          </div>
          <div className="divide-y divide-border">
            {laborExpenses.map((record) => (
              <div key={record.id} className="p-4 flex justify-between items-center hover:bg-bg-surface-hover transition-colors">
                <div>
                  <p className="font-bold text-sm">{record.description || "Labor Payment"}</p>
                  <p className="text-xs text-muted">{new Date(record.transaction_date).toLocaleDateString()}</p>
                </div>
                <span className="font-bold text-sm text-danger">-KES {Number(record.amount).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
