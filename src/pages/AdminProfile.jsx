import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Mail, Phone, Edit2, } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminProfile = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      <AdminNavbar />

      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6 text-center md:text-start">Admin Profile</h1>

        <div className="bg-gray-900 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between md:flex-row md:gap-y-0 flex-col gap-y-3">
            <div className="flex items-center gap-4">
              <img
                src="/user.jpg"
                alt="Admin"
                className="h-20 w-20 rounded-full border-2 border-gray-600"
              />
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Dr. Divya
                </h2>
                <p className="text-gray-400">
                  Lead Counselor, Psychology Department
                </p>
                <p className="text-blue-400 cursor-pointer hover:underline">
                  CGC, Landran
                </p>
              </div>
            </div>
            <div>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                <Edit2 size={18} className="text-gray-300" />
              </button>
              <NavLink to="/" className="bg-red-600 p-3 rounded-3xl md:ml-5">
                Sign out
              </NavLink>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <div className="flex md:gap-8 gap-5 text-gray-300 flex-col md:flex-row">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>dr.divya@cgc.edu.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 8974563812</span>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          <div>
            <h3 className="text-lg font-semibold mb-3">Professional Details</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>
                <span className="font-medium text-white">Role: </span>
                Administrator, Lead Counselor
              </p>
              <p>
                <span className="font-medium text-white">Admin ID: </span>
                ADMIN-89743
              </p>
              <p>
                <span className="font-medium text-white">Date Joined: </span>
                October 15, 2018
              </p>
              <p>
                <span className="font-medium text-white">Specialization: </span>
                Cognitive Behavioral Therapy (CBT), Student Mental Health
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
