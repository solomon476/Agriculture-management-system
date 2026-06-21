import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";

export default async function DashboardLayout({ children }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch the user's full name from the profiles table
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  const userName = profile?.full_name || user.email?.split("@")[0] || "Farmer";

  return (
    <div className="desktop-layout">
      <Sidebar userName={userName} userEmail={user.email} />
      <div className="desktop-main flex flex-col pb-16 lg:pb-0">
        <div className="hidden-desktop">
          <Header userName={userName} />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <div className="hidden-desktop">
          <Navigation />
        </div>
      </div>
    </div>
  );
}
