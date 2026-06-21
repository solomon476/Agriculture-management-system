"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const EXPENSE_CATEGORIES = ["Inputs", "Labor", "Equipment", "Transport", "Other"];
const CROP_STATUSES = ["Growing", "Harvesting", "Completed"];

export default function QuickAdd() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "expense";

  const [mode, setMode] = useState(
    initialType === "crop" ? "crop" : initialType === "inventory" ? "inventory" : "expense"
  );
  const [transactionType, setTransactionType] = useState(initialType === "income" ? "Income" : "Expense");
  const [category, setCategory] = useState("Inputs");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login"); return; }

    // Get or create farm
    let { data: farm } = await supabase
      .from("farms")
      .select("id")
      .eq("owner_id", user.id)
      .single();

    if (!farm) {
      const { data: newFarm, error: farmError } = await supabase
        .from("farms")
        .insert({ owner_id: user.id, farm_name: "My Farm" })
        .select()
        .single();
      if (farmError) { setError(farmError.message); setIsLoading(false); return; }
      farm = newFarm;
    }

    const formData = new FormData(e.target);
    let dbError = null;

    if (mode === "expense" || mode === "income") {
      const { error } = await supabase.from("transactions").insert({
        farm_id: farm.id,
        type: transactionType,
        amount: Number(formData.get("amount")),
        category: category,
        description: formData.get("description"),
        transaction_date: formData.get("date") || new Date().toISOString().split("T")[0],
      });
      dbError = error;
    } else if (mode === "crop") {
      const { error } = await supabase.from("crops").insert({
        farm_id: farm.id,
        crop_name: formData.get("crop_name"),
        variety: formData.get("variety"),
        planted_date: formData.get("planted_date") || null,
        expected_harvest_date: formData.get("harvest_date") || null,
        status: formData.get("status") || "Growing",
      });
      dbError = error;
    } else if (mode === "inventory") {
      const { error } = await supabase.from("inventory").insert({
        farm_id: farm.id,
        item_name: formData.get("item_name"),
        category: formData.get("inv_category") || "Seed",
        quantity: Number(formData.get("quantity")),
        unit: formData.get("unit"),
      });
      dbError = error;
    }

    if (dbError) {
      setError(dbError.message);
      setIsLoading(false);
    } else {
      const redirect = mode === "crop" ? "/crops" : mode === "inventory" ? "/inventory" : "/reports";
      router.push(redirect);
      router.refresh();
    }
  };

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

      {/* Type Selector */}
      <div className="bg-surface rounded-xl border border-border shadow-sm p-2 flex gap-1 mb-6">
        {[
          { key: "expense", label: "Expense" },
          { key: "income", label: "Income" },
          { key: "crop", label: "Add Crop" },
          { key: "inventory", label: "Inventory" },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => { setMode(t.key); if (t.key === "income") setTransactionType("Income"); else if (t.key === "expense") setTransactionType("Expense"); }}
            className={`flex-1 py-2 text-center rounded-lg font-bold text-xs transition-colors ${
              mode === t.key
                ? t.key === "expense" ? "bg-danger text-white shadow-sm"
                  : t.key === "income" ? "bg-success text-white shadow-sm"
                  : "bg-primary text-white shadow-sm"
                : "text-muted hover:bg-bg-surface-hover"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-danger bg-opacity-10 border border-danger rounded-lg text-danger text-sm font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSave} className="card space-y-4">
        {/* EXPENSE / INCOME FORM */}
        {(mode === "expense" || mode === "income") && (
          <>
            <div>
              <label className="block text-sm font-bold text-muted mb-1">Amount (KES)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-bold">KES</span>
                <input name="amount" type="number" min="1" required placeholder="0"
                  className="w-full pl-14 pr-4 py-3 rounded-lg border border-border text-2xl font-bold focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-muted mb-2">Category</label>
              <div className="grid grid-cols-3 gap-2">
                {EXPENSE_CATEGORIES.map((cat) => (
                  <button key={cat} type="button" onClick={() => setCategory(cat)}
                    className={`py-2 border rounded-lg text-xs font-bold transition-colors ${category === cat ? "border-primary bg-primary-light text-primary" : "border-border text-muted hover:border-primary hover:text-primary"}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-muted mb-1">Description</label>
              <input name="description" type="text" placeholder="e.g. 2 bags of DAP fertilizer"
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-muted mb-1">Date</label>
              <input name="date" type="date" defaultValue={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
            </div>
          </>
        )}

        {/* CROP FORM */}
        {mode === "crop" && (
          <>
            <div>
              <label className="block text-sm font-bold text-muted mb-1">Crop Name *</label>
              <input name="crop_name" type="text" required placeholder="e.g. Maize, Tomatoes"
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-muted mb-1">Variety</label>
              <input name="variety" type="text" placeholder="e.g. DK 8031, Anna F1"
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold text-muted mb-1">Planted Date</label>
                <input name="planted_date" type="date"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-bold text-muted mb-1">Est. Harvest</label>
                <input name="harvest_date" type="date"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-muted mb-1">Status</label>
              <select name="status" className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm bg-white">
                {CROP_STATUSES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </>
        )}

        {/* INVENTORY FORM */}
        {mode === "inventory" && (
          <>
            <div>
              <label className="block text-sm font-bold text-muted mb-1">Item Name *</label>
              <input name="item_name" type="text" required placeholder="e.g. DAP Fertilizer"
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold text-muted mb-1">Quantity *</label>
                <input name="quantity" type="number" required min="0" placeholder="0"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-bold text-muted mb-1">Unit</label>
                <input name="unit" type="text" placeholder="kg, liters, bags"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-muted mb-1">Category</label>
              <select name="inv_category" className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary outline-none text-sm bg-white">
                <option value="Seed">Seed</option>
                <option value="Fertilizer">Fertilizer</option>
                <option value="Chemical">Chemical / Pesticide</option>
                <option value="Tool">Tool / Equipment</option>
              </select>
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 mt-2 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary-hover transition-all text-lg disabled:opacity-75 disabled:cursor-wait flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Saving...
            </>
          ) : "Save Record"}
        </button>
      </form>
    </div>
  );
}
