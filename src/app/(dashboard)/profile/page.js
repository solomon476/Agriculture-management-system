import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export default async function Profile() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  const { data: farm } = await supabase
    .from("farms")
    .select("id, farm_name, size_acres, location")
    .eq("owner_id", user.id)
    .single();

  const fullName = profile?.full_name || user.email?.split("@")[0] || "Farmer";
  const initials = fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  const joinedDate = new Date(user.created_at).toLocaleDateString("en-KE", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="container py-4 animate-fade-in pb-24">
      <h2 className="text-2xl font-bold font-heading mb-6">My Profile</h2>

      {/* Avatar Card */}
      <div className="card flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
          {initials}
        </div>
        <div>
          <h3 className="text-xl font-bold">{fullName}</h3>
          <p className="text-muted text-sm">{user.email}</p>
          <p className="text-xs text-muted mt-1">Member since {joinedDate}</p>
        </div>
      </div>

      {/* Farm Details */}
      <div className="card mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Farm Details</h3>
          {!farm && (
            <Link href="/add?type=farm" className="btn btn-primary text-sm px-3 py-2">
              Set Up Farm
            </Link>
          )}
        </div>

        {farm ? (
          <div className="space-y-3">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted text-sm">Farm Name</span>
              <span className="font-bold text-sm">{farm.farm_name}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted text-sm">Size</span>
              <span className="font-bold text-sm">{farm.size_acres ? `${farm.size_acres} acres` : "Not set"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted text-sm">Location</span>
              <span className="font-bold text-sm">{farm.location || "Not set"}</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-8 text-center gap-3">
            <span className="text-5xl">🏡</span>
            <p className="text-muted text-sm">No farm set up yet. Add your farm details to get started.</p>
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="card mb-6">
        <h3 className="font-bold mb-4">Quick Actions</h3>
        <div className="space-y-2">
          {[
            { href: "/crops", label: "Manage Crops", emoji: "🌱" },
            { href: "/inventory", label: "View Inventory", emoji: "📦" },
            { href: "/reports", label: "Financial Reports", emoji: "📊" },
            { href: "/labor", label: "Labor & Payroll", emoji: "👷" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-surface-hover transition-colors">
              <span className="text-xl">{item.emoji}</span>
              <span className="font-medium text-sm">{item.label}</span>
              <svg className="ml-auto text-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Sign Out */}
      <div className="card">
        <h3 className="font-bold mb-4">Account</h3>
        <LogoutButton className="w-full justify-center p-3 rounded-lg border border-border hover:bg-danger hover:text-white hover:border-danger" />
      </div>
    </div>
  );
}
