import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bottom-nav fixed bottom-0 w-full bg-surface border-t border-border flex justify-around p-2 pb-safe shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] z-50">
      <Link href="/" className="nav-item flex flex-col items-center gap-1 p-2 text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span className="text-[10px] font-medium">Home</span>
      </Link>
      <Link href="/crops" className="nav-item flex flex-col items-center gap-1 p-2 text-muted hover:text-primary transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        <span className="text-[10px] font-medium">Crops</span>
      </Link>
      <div className="nav-item-center -mt-6">
        <Link href="/add" className="add-btn bg-primary text-white rounded-full w-14 h-14 flex justify-center items-center shadow-lg border-4 border-surface hover:bg-primary-hover transition-transform transform hover:scale-105 active:scale-95" aria-label="Add New">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Link>
      </div>
      <Link href="/market" className="nav-item flex flex-col items-center gap-1 p-2 text-muted hover:text-primary transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        <span className="text-[10px] font-medium">Market</span>
      </Link>
      <Link href="/profile" className="nav-item flex flex-col items-center gap-1 p-2 text-muted hover:text-primary transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span className="text-[10px] font-medium">Profile</span>
      </Link>
    </nav>
  );
}
