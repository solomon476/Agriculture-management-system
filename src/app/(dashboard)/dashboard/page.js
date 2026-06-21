import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardDetail() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: farm } = await supabase
    .from("farms")
    .select("id, farm_name")
    .eq("owner_id", user.id)
    .single();

  let totalIncome = 0, totalExpenses = 0, cropCount = 0;
  let recentTransactions = [];

  if (farm) {
    const { data: txs } = await supabase
      .from("transactions")
      .select("*")
      .eq("farm_id", farm.id)
      .order("transaction_date", { ascending: false })
      .limit(5);
    recentTransactions = txs || [];
    totalIncome = recentTransactions.filter(t => t.type === "Income").reduce((s, t) => s + Number(t.amount), 0);

    const { data: allTxs } = await supabase.from("transactions").select("type, amount").eq("farm_id", farm.id);
    if (allTxs) {
      totalIncome = allTxs.filter(t => t.type === "Income").reduce((s, t) => s + Number(t.amount), 0);
      totalExpenses = allTxs.filter(t => t.type === "Expense").reduce((s, t) => s + Number(t.amount), 0);
    }

    const { count } = await supabase.from("crops").select("id", { count: "exact", head: true }).eq("farm_id", farm.id);
    cropCount = count || 0;
  }

  const profit = totalIncome - totalExpenses;

  return (
    <div className="container py-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold font-heading">Farm Analytics</h2>
          <p className="text-muted text-sm mt-1">{farm?.farm_name || "My Farm"}</p>
        </div>
        <Link href="/reports" className="btn btn-primary flex items-center gap-2 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path>
          </svg>
          Full Reports
        </Link>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card border-l-4 border-l-success p-4">
          <p className="text-muted text-xs font-bold uppercase tracking-wider mb-1">Total Income</p>
          <h3 className="text-2xl font-bold text-success">KES {totalIncome.toLocaleString()}</h3>
        </div>
        <div className="card border-l-4 border-l-danger p-4">
          <p className="text-muted text-xs font-bold uppercase tracking-wider mb-1">Total Expenses</p>
          <h3 className="text-2xl font-bold text-danger">KES {totalExpenses.toLocaleString()}</h3>
        </div>
        <div className={`card border-l-4 p-4 ${profit >= 0 ? "border-l-primary" : "border-l-danger"}`}>
          <p className="text-muted text-xs font-bold uppercase tracking-wider mb-1">Net Profit</p>
          <h3 className={`text-2xl font-bold ${profit >= 0 ? "text-primary" : "text-danger"}`}>KES {profit.toLocaleString()}</h3>
        </div>
        <div className="card border-l-4 border-l-info p-4">
          <p className="text-muted text-xs font-bold uppercase tracking-wider mb-1">Active Crops</p>
          <h3 className="text-2xl font-bold">{cropCount}</h3>
        </div>
      </div>

      {/* Quick actions grid */}
      <h3 className="font-bold mb-3">Farm Management</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          { href: "/add?type=crop", label: "Add New Crop", emoji: "🌱", desc: "Record a new crop" },
          { href: "/add?type=expense", label: "Log Expense", emoji: "💸", desc: "Record an expense" },
          { href: "/add?type=income", label: "Log Income", emoji: "💰", desc: "Record a sale" },
          { href: "/add?type=inventory", label: "Add Inventory", emoji: "📦", desc: "Track supplies" },
          { href: "/add?type=labor", label: "Log Labor", emoji: "👷", desc: "Record a payment" },
          { href: "/reports", label: "View Reports", emoji: "📊", desc: "See full analytics" },
        ].map((item) => (
          <Link key={item.href} href={item.href} className="card flex items-center gap-3 p-4 hover:border-primary hover:shadow-md transition-all">
            <span className="text-2xl">{item.emoji}</span>
            <div>
              <p className="font-bold text-sm">{item.label}</p>
              <p className="text-xs text-muted">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Transactions */}
      {recentTransactions.length > 0 && (
        <>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">Recent Transactions</h3>
            <Link href="/reports" className="text-primary text-sm font-medium">See all</Link>
          </div>
          <div className="card p-0 overflow-hidden">
            <div className="divide-y divide-border">
              {recentTransactions.map((t) => (
                <div key={t.id} className="p-4 flex justify-between items-center hover:bg-bg-surface-hover transition-colors">
                  <div>
                    <p className="font-bold text-sm">{t.description || t.category || t.type}</p>
                    <p className="text-xs text-muted">{new Date(t.transaction_date).toLocaleDateString()}</p>
                  </div>
                  <span className={`font-bold text-sm ${t.type === "Income" ? "text-success" : "text-danger"}`}>
                    {t.type === "Income" ? "+" : "-"}KES {Number(t.amount).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {recentTransactions.length === 0 && (
        <div className="card flex flex-col items-center py-12 text-center gap-3">
          <span className="text-5xl">📊</span>
          <p className="font-bold text-gray-700">No transactions yet</p>
          <p className="text-sm text-muted">Start logging income and expenses to see your analytics here.</p>
          <Link href="/add?type=expense" className="btn btn-primary mt-2">Log First Transaction</Link>
        </div>
      )}
    </div>
  );
}
