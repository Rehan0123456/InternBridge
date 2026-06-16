import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "@/assets/internbridge-logo.png.asset.json";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Internships", path: "/internships" },
  { label: "Partnerships", path: "/partnerships" },
  { label: "Research", path: "/research" },
  { label: "Join Our Team", path: "/join" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="InternBridge" className="h-10 w-auto" />
          <span className="hidden text-lg font-black tracking-tight text-slate-950 sm:inline">InternBridge</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return <Link key={item.path} to={item.path} className={`rounded-xl px-3 py-2 text-sm font-bold transition ${isActive ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"}`}>{item.label}</Link>;
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/login" className="rounded-xl px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">Login</Link>
          <Link to="/register" className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700">Register</Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden"><Link to="/register" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white">Register</Link><Menu className="h-6 w-6 text-slate-600" /></div>
      </div>
    </nav>
  );
};

export default Navbar;
