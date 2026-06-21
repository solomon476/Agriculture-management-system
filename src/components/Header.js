export default function Header() {
  return (
    <header className="header p-4 bg-primary text-white flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="logo-icon bg-white text-primary rounded-full w-8 h-8 flex justify-center items-center font-bold text-lg">
          A
        </div>
        <h1 className="text-xl font-bold font-heading m-0 text-white">AgriBloom</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="icon-btn text-white" aria-label="Notifications">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
        <div className="avatar w-8 h-8 rounded-full bg-accent border-2 border-white"></div>
      </div>
    </header>
  );
}
