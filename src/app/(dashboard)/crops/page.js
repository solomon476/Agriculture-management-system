import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

const statusColors = {
  Growing: "bg-success bg-opacity-20 text-success",
  Harvesting: "bg-info bg-opacity-20 text-info",
  Completed: "bg-border text-muted",
};

export default async function Crops() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: farm } = await supabase
    .from("farms")
    .select("id")
    .eq("owner_id", user.id)
    .single();

  let crops = [];
  if (farm) {
    const { data } = await supabase
      .from("crops")
      .select("*")
      .eq("farm_id", farm.id)
      .order("created_at", { ascending: false });
    crops = data || [];
  }

  return (
    <div className="container py-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-heading">My Crops</h2>
        <Link href="/add?type=crop" className="bg-primary-light text-primary px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-primary hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Crop
        </Link>
      </div>

      {crops.length === 0 ? (
        <div className="card flex flex-col items-center justify-center py-16 text-center gap-4">
          <span className="text-6xl">🌱</span>
          <div>
            <h3 className="font-bold text-lg text-gray-700">No crops added yet</h3>
            <p className="text-muted text-sm mt-1 max-w-xs">Start tracking your farm by adding your first crop. It only takes a moment!</p>
          </div>
          <Link href="/add?type=crop" className="btn btn-primary px-6 py-3">Add Your First Crop</Link>
        </div>
      ) : (
        <div className="grid gap-4 mb-6">
          {crops.map((crop) => (
            <div key={crop.id} className="card overflow-hidden p-0 border-l-4 border-l-primary">
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">🌾 {crop.crop_name} {crop.variety ? `(${crop.variety})` : ""}</h3>
                    <p className="text-sm text-muted">Added {new Date(crop.created_at).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${statusColors[crop.status] || "bg-border text-muted"}`}>
                    {crop.status}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Planted</p>
                    <p className="text-sm font-medium">{crop.planted_date ? new Date(crop.planted_date).toLocaleDateString() : "—"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Est. Harvest</p>
                    <p className="text-sm font-medium">{crop.expected_harvest_date ? new Date(crop.expected_harvest_date).toLocaleDateString() : "—"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
