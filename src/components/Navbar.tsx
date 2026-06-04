import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/internbridge-logo.png.asset.json";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/internships" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 mx-4 mt-3">
      <div className="max-w-5xl mx-auto bg-background/80 backdrop-blur-lg rounded-2xl border border-border px-6 py-3 flex items-center justify-between shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="InternBridge" className="h-9 w-auto" />
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
