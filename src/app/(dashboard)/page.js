import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import TaskChecklist from "@/components/TaskChecklist";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch user's profile for their name
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  const firstName = profile?.full_name?.split(" ")[0] || user.email?.split("@")[0] || "Farmer";

  // Fetch real farm data
  const { data: farm } = await supabase
    .from("farms")
    .select("id")
    .eq("owner_id", user.id)
    .single();

  let totalIncome = 0;
  let totalExpenses = 0;
  let cropCount = 0;

  if (farm) {
    const { data: transactions } = await supabase
      .from("transactions")
      .select("type, amount")
      .eq("farm_id", farm.id);

    if (transactions) {
      totalIncome = transactions.filter((t) => t.type === "Income").reduce((s, t) => s + Number(t.amount), 0);
      totalExpenses = transactions.filter((t) => t.type === "Expense").reduce((s, t) => s + Number(t.amount), 0);
    }

    const { count } = await supabase
      .from("crops")
      .select("id", { count: "exact", head: true })
      .eq("farm_id", farm.id)
      .eq("status", "Growing");
    cropCount = count || 0;
  }

  const profit = totalIncome - totalExpenses;
  const today = new Date().toLocaleDateString("en-KE", { weekday: "long", day: "numeric", month: "long" });

  return (
    <div className="container py-4 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">{getGreeting()}, {firstName}!</h2>
          <p className="text-muted text-sm mt-1">{today}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-primary">{cropCount} Crop{cropCount !== 1 ? "s" : ""}</div>
          <p className="text-muted text-xs">Currently growing</p>
        </div>
      </div>

      {/* Quick Actions */}
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

      {/* Profit/Loss Overview — REAL data */}
      <h3 className="font-bold mb-3">Season Overview</h3>
      {totalIncome === 0 && totalExpenses === 0 ? (
        <div className="card mb-6 flex flex-col items-center justify-center py-8 text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center text-primary">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div>
            <p className="font-bold text-gray-700">No financial data yet</p>
            <p className="text-sm text-muted mt-1">Log your first income or expense to see your profit here.</p>
          </div>
          <Link href="/add?type=expense" className="btn btn-primary text-sm px-4 py-2">Log First Transaction</Link>
        </div>
      ) : (
        <div className="card mb-6 bg-gradient-to-br from-primary to-primary-hover text-white border-none relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Current Profit</p>
              <h2 className="text-3xl font-bold">KES {profit.toLocaleString()}</h2>
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded-md ${profit >= 0 ? "bg-white text-primary" : "bg-danger text-white"}`}>
              {profit >= 0 ? "▲ Profit" : "▼ Loss"}
            </span>
          </div>
          <div className="flex justify-between border-t border-white border-opacity-20 pt-3">
            <div>
              <p className="text-xs opacity-80">Income</p>
              <p className="font-medium">KES {totalIncome.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80">Expenses</p>
              <p className="font-medium">KES {totalExpenses.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

      {/* Today's Tasks */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold">Today&apos;s Tasks</h3>
        <Link href="/crops" className="text-primary text-sm font-medium">See all</Link>
      </div>
      <TaskChecklist />

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3 mt-2">
        <Link href="/crops" className="card flex items-center gap-3 p-4 hover:border-primary transition-colors">
          <span className="text-2xl">🌱</span>
          <div>
            <p className="font-bold text-sm">My Crops</p>
            <p className="text-xs text-muted">Manage active crops</p>
          </div>
        </Link>
        <Link href="/inventory" className="card flex items-center gap-3 p-4 hover:border-primary transition-colors">
          <span className="text-2xl">📦</span>
          <div>
            <p className="font-bold text-sm">Inventory</p>
            <p className="text-xs text-muted">Track supplies</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
