import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Inventory() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: farm } = await supabase
    .from("farms")
    .select("id")
    .eq("owner_id", user.id)
    .single();

  let items = [];
  if (farm) {
    const { data } = await supabase
      .from("inventory")
      .select("*")
      .eq("farm_id", farm.id)
      .order("created_at", { ascending: false });
    items = data || [];
  }

  return (
    <div className="container py-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold font-heading">Inventory</h2>
          <p className="text-muted text-sm mt-1">Track seeds, fertilizers &amp; equipment</p>
        </div>
        <Link href="/add?type=inventory" className="btn btn-primary flex items-center gap-2 text-sm px-3 py-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Item
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="card flex flex-col items-center justify-center py-16 text-center gap-4">
          <span className="text-6xl">📦</span>
          <div>
            <h3 className="font-bold text-lg text-gray-700">No inventory items yet</h3>
            <p className="text-muted text-sm mt-1 max-w-xs">Add your seeds, fertilizers, pesticides, or equipment to track your stock levels.</p>
          </div>
          <Link href="/add?type=inventory" className="btn btn-primary px-6 py-3">Add First Item</Link>
        </div>
      ) : (
        <div className="card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-surface-hover text-muted text-xs uppercase tracking-wider">
                  <th className="p-4 font-bold border-b border-border">Item Name</th>
                  <th className="p-4 font-bold border-b border-border">Category</th>
                  <th className="p-4 font-bold border-b border-border">Quantity</th>
                  <th className="p-4 font-bold border-b border-border">Unit</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-border">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-bg-surface-hover transition-colors">
                    <td className="p-4 font-bold">{item.item_name}</td>
                    <td className="p-4 text-muted">{item.category}</td>
                    <td className="p-4 font-medium">{item.quantity}</td>
                    <td className="p-4 text-muted">{item.unit || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
