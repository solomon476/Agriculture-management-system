"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

const navItems = [
  { href: "/", label: "Overview", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>) },
  { href: "/crops", label: "Crop Management", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>) },
  { href: "/inventory", label: "Inventory", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-9 5-9-5"></path><path d="m21 8-9 5-9-5"></path><path d="m3 8 9-5 9 5-9 5-9-5Z"></path></svg>) },
  { href: "/labor", label: "Labor & Payroll", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>) },
  { href: "/reports", label: "Financial Reports", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>) },
];

export default function Sidebar({ userName, userEmail }) {
  const pathname = usePathname();

  const initials = userName
    ? userName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  return (
    <aside className="desktop-sidebar hidden-mobile p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-10">
        <img src="/logo.png" alt="AgriBloom Logo" className="w-10 h-10 object-contain" />
        <div>
          <h1 className="text-2xl font-bold font-heading text-primary m-0 leading-tight">AgriBloom</h1>
          <p className="text-xs text-muted font-medium">Farm Manager</p>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? "bg-primary-light text-primary font-bold"
                  : "text-muted hover:bg-bg-surface-hover hover:text-primary"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/add"
          className="flex items-center gap-3 p-3 rounded-lg font-medium bg-primary text-white hover:bg-primary-hover transition-colors mt-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add New Record
        </Link>
      </nav>

      {/* User Profile & Logout */}
      <div className="mt-auto pt-6 border-t border-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            {initials}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="font-bold text-sm truncate">{userName}</p>
            <p className="text-xs text-muted truncate">{userEmail}</p>
          </div>
        </div>
        <LogoutButton />
      </div>
    </aside>
  );
}
