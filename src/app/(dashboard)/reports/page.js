import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Reports() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: farm } = await supabase
    .from("farms")
    .select("id")
    .eq("owner_id", user.id)
    .single();

  let transactions = [];
  let totalIncome = 0;
  let totalExpenses = 0;

  if (farm) {
    const { data } = await supabase
      .from("transactions")
      .select("*")
      .eq("farm_id", farm.id)
      .order("transaction_date", { ascending: false });

    transactions = data || [];
    totalIncome = transactions.filter((t) => t.type === "Income").reduce((s, t) => s + Number(t.amount), 0);
    totalExpenses = transactions.filter((t) => t.type === "Expense").reduce((s, t) => s + Number(t.amount), 0);
  }

  const profit = totalIncome - totalExpenses;

  return (
    <div className="container py-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold font-heading">Financial Reports</h2>
          <p className="text-muted text-sm mt-1">Your real farm performance</p>
        </div>
        <Link href="/add?type=expense" className="btn btn-primary flex items-center gap-2 text-sm px-3 py-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Log Transaction
        </Link>
      </div>

      {transactions.length === 0 ? (
        <div className="card flex flex-col items-center justify-center py-16 text-center gap-4">
          <span className="text-6xl">📊</span>
          <div>
            <h3 className="font-bold text-lg text-gray-700">No transactions yet</h3>
            <p className="text-muted text-sm mt-1 max-w-xs">
              Start logging your farm income and expenses. Your reports and profit analysis will appear here automatically.
            </p>
          </div>
          <Link href="/add?type=expense" className="btn btn-primary px-6 py-3">Log First Transaction</Link>
        </div>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="card p-4 text-center">
              <p className="text-xs text-muted uppercase tracking-wider font-bold mb-1">Income</p>
              <p className="text-xl font-bold text-success">KES {totalIncome.toLocaleString()}</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-xs text-muted uppercase tracking-wider font-bold mb-1">Expenses</p>
              <p className="text-xl font-bold text-danger">KES {totalExpenses.toLocaleString()}</p>
            </div>
            <div className={`card p-4 text-center ${profit >= 0 ? "bg-primary-light" : "bg-danger bg-opacity-10"}`}>
              <p className="text-xs text-muted uppercase tracking-wider font-bold mb-1">Profit</p>
              <p className={`text-xl font-bold ${profit >= 0 ? "text-primary" : "text-danger"}`}>
                KES {profit.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="card p-0 overflow-hidden">
            <div className="p-4 border-b border-border bg-bg-surface-hover">
              <h3 className="font-bold">Transaction History</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-bg-surface-hover text-muted text-xs uppercase tracking-wider">
                    <th className="p-4 font-bold border-b border-border">Date</th>
                    <th className="p-4 font-bold border-b border-border">Description</th>
                    <th className="p-4 font-bold border-b border-border">Category</th>
                    <th className="p-4 font-bold border-b border-border text-right">Amount (KES)</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-border">
                  {transactions.map((t) => (
                    <tr key={t.id} className="hover:bg-bg-surface-hover transition-colors">
                      <td className="p-4 text-muted">{new Date(t.transaction_date).toLocaleDateString()}</td>
                      <td className="p-4 font-bold">{t.description || "—"}</td>
                      <td className="p-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          t.type === "Income"
                            ? "bg-success bg-opacity-10 text-success"
                            : "bg-warning bg-opacity-10 text-warning"
                        }`}>
                          {t.category || t.type}
                        </span>
                      </td>
                      <td className={`p-4 font-bold text-right ${t.type === "Income" ? "text-success" : "text-danger"}`}>
                        {t.type === "Income" ? "+" : "-"}{Number(t.amount).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
