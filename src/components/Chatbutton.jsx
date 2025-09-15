import React from "react";
import { NavLink } from "react-router-dom";

export default function ChatLinkButton() {
  return (
    <NavLink 
    to="/chatbot"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-br from-blue-600 to-blue-500
        text-white text-xl font-bold
        shadow-lg hover:scale-105 active:scale-95
        flex items-center justify-center
        transition-transform
      "
    >
      💬
    </NavLink>
  );
}
