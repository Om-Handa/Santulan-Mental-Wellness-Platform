import React, { useState } from "react";
import { Menu, X, Users, Settings, BarChart3, User } from "lucide-react";
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";;

const AdminNavbar = () => {
    const location = useLocation();
    const { } = location.state || {};
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="h-screen">
            <div className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 z-50`}>
                <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-700">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    <span className="font-bold text-lg">Santulan Admin</span>
                </div>
                <nav className="space-y-2">
                    {[
                        { name: "Dashboard", icon: <BarChart3 size={18} />, link: "/admindashboard" },
                        { name: "Students", icon: <Users size={18} />, link: "/Studentlist" },
                        { name: "Profile", icon: <User size={18} />, link: "/adminprofile" },
                    ].map((item) => (
                        <NavLink
                            to={item.link}
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={({ isActive }) => `flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium transition ${isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-400 hover:bg-gray-700 hover:text-white"
                                }`}
                        >
                            {item.icon}
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <button
                className="absolute top-4 left-4 md:hidden z-50 p-2 bg-gray-800 rounded"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <X /> : <Menu />}
            </button>
        </div>
    )
}

export default AdminNavbar
