import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="desktop-layout">
      <Sidebar />
      
      <div className="desktop-main flex flex-col pb-16 lg:pb-0">
        <div className="hidden-desktop">
          <Header />
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
