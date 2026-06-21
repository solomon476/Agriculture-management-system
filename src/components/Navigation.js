"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>) },
  { href: "/crops", label: "Crops", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>) },
  { href: "/inventory", label: "Inventory", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-9 5-9-5"></path><path d="m21 8-9 5-9-5"></path><path d="m3 8 9-5 9 5-9 5-9-5Z"></path></svg>) },
  { href: "/reports", label: "Reports", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>) },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav fixed bottom-0 w-full bg-surface border-t border-border flex justify-around p-2 pb-safe shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] z-50">
      {navItems.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item flex flex-col items-center gap-1 p-2 transition-colors ${isActive ? "text-primary" : "text-muted hover:text-primary"}`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}

      {/* Centre Add Button */}
      <div className="nav-item-center -mt-6 flex flex-col items-center">
        <Link
          href="/add"
          className="add-btn bg-primary text-white rounded-full w-14 h-14 flex justify-center items-center shadow-lg border-4 border-surface hover:bg-primary-hover transition-transform transform hover:scale-105 active:scale-95"
          aria-label="Add New"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Link>
        <span className="text-[10px] font-medium text-muted mt-1">Add</span>
      </div>

      <Link href="/labor" className={`nav-item flex flex-col items-center gap-1 p-2 transition-colors ${pathname.startsWith("/labor") ? "text-primary" : "text-muted hover:text-primary"}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span className="text-[10px] font-medium">Labor</span>
      </Link>

      <Link href="/profile" className={`nav-item flex flex-col items-center gap-1 p-2 transition-colors ${pathname.startsWith("/profile") ? "text-primary" : "text-muted hover:text-primary"}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span className="text-[10px] font-medium">Profile</span>
      </Link>
    </nav>
  );
}
