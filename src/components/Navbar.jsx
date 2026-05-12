import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Avatar from "./Avatar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Community", href: "/community" },
    { name: "Resources", href: "/resources" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center md:w-10 md:h-10 w-8 h-8 border-black border-2 rounded-xl ">
            <img src="/logo.png" alt="" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">SANTULAN</span>
            <span className="text-xs text-gray-500">Your Mind, Your Strength</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === item.href
                ? "bg-blue-500 text-blue-600-foreground"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <NavLink to="/profile" className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">🔔</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Harry</span>
              <span className="text-xs text-gray-500">Level 12</span>
            </div>
          </div>
        </NavLink>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="block w-4 h-0.5 bg-foreground transition-all"></span>
            <span className="block w-6 h-0.5 bg-foreground transition-all"></span>
            <span className="block w-4 h-0.5 bg-foreground transition-all"></span>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${location.pathname === item.href
                  ? "bg-blue-500 text-blue-600-foreground"
                  : "text-gray-900 hover:bg-gray-100"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 px-4 py-2">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                  H
                </div>
                <div>
                  <div className="font-medium">Harry</div>
                  <div className="text-sm text-gray-500">Level 12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;