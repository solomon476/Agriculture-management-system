import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function Sidebar({ userName, userEmail }) {
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

      <nav className="flex-1 flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-3 p-3 rounded-lg text-muted font-medium hover:bg-bg-surface-hover hover:text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="9"></rect>
            <rect x="14" y="3" width="7" height="5"></rect>
            <rect x="14" y="12" width="7" height="9"></rect>
            <rect x="3" y="16" width="7" height="5"></rect>
          </svg>
          Overview
        </Link>
        <Link href="/crops" className="flex items-center gap-3 p-3 rounded-lg text-muted font-medium hover:bg-bg-surface-hover hover:text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20"></path>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          Crop Management
        </Link>
        <Link href="/inventory" className="flex items-center gap-3 p-3 rounded-lg text-muted font-medium hover:bg-bg-surface-hover hover:text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21 16-9 5-9-5"></path>
            <path d="m21 8-9 5-9-5"></path>
            <path d="m3 8 9-5 9 5-9 5-9-5Z"></path>
          </svg>
          Inventory
        </Link>
        <Link href="/labor" className="flex items-center gap-3 p-3 rounded-lg text-muted font-medium hover:bg-bg-surface-hover hover:text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          Labor &amp; Payroll
        </Link>
        <Link href="/reports" className="flex items-center gap-3 p-3 rounded-lg text-muted font-medium hover:bg-bg-surface-hover hover:text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="m19 9-5 5-4-4-3 3"></path>
          </svg>
          Financial Reports
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
