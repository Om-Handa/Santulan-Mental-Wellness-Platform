import React, { useState } from "react";
import {
    ResponsiveContainer,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    LineChart, Line, PieChart, Pie, Cell, Legend
} from "recharts";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminDashboard() {

    // Sample data
    const lineData = [
        { name: "Jan", growth: 60 },
        { name: "Feb", growth: 55 },
        { name: "Mar", growth: 70 },
        { name: "Apr", growth: 80 },
        { name: "May", growth: 65 },
        { name: "Jun", growth: 55 },
    ];

    const barData = [
        { name: "Anxiety", value: 12 },
        { name: "Depression", value: 18 },
        { name: "Stress", value: 3 },
        { name: "Sleep", value: 5 },
        { name: "Focus", value: 8 },
    ];

    const pieData = [
        { name: "Low Risk", value: 30, color: "#22c55e" },
        { name: "Moderate Risk", value: 40, color: "#facc15" },
        { name: "High Risk", value: 20, color: "#ef4444" },
        { name: "Needs Support", value: 10, color: "#3b82f6" },
    ];

    return (
        <div className="flex h-screen bg-gray-800 text-white">
            <AdminNavbar />

            <main className="flex-1 overflow-y-auto p-6 space-y-6">
                <h1 className="text-2xl font-bold text-center md:text-start">Dashboard</h1>
                <p className="text-gray-400 text-center md:text-start">Overview of student progress, screening results, and engagement levels</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <p className="text-gray-400">Total Students</p>
                        <h2 className="text-2xl font-bold">250</h2>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <p className="text-gray-400">Screenings Completed</p>
                        <h2 className="text-2xl font-bold">180</h2>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <p className="text-gray-400">Growth Rate</p>
                        <h2 className="text-2xl font-bold text-green-400">+12%</h2>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <p className="text-gray-400">Improvement Rate</p>
                        <h2 className="text-2xl font-bold text-blue-400">+8%</h2>
                    </div>
                </div>

                <div className="flex gap-6 flex-col md:flex-row">
                    <div className="bg-gray-900 rounded-xl p-4 md:w-1/2 ">
                        <h3 className="mb-2 font-semibold text-white">Student Growth Over Time</h3>
                        <div className="w-full h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={lineData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                                    <XAxis dataKey="name" stroke="#aaa" />
                                    <YAxis stroke="#aaa" />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="growth" stroke="#3b82f6" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-xl p-4 md:w-1/2">
                        <h3 className="mb-2 font-semibold">Well-being Improvement</h3>
                        <div className="w-full h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={500} height={250} data={barData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                                    <XAxis dataKey="name" stroke="#aaa" />
                                    <YAxis stroke="#aaa" />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#3b82f6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-4 flex flex-col md:flex-row items-center md:items-start">
                    <h3 className="mb-4 font-semibold text-white w-full md:w-auto text-center md:text-left">
                        Identified Risk Factors
                    </h3>

                    <div className="w-full md:w-1/2 h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius="80%" label>
                                    {pieData.map((entry, idx) => (
                                        <Cell key={`cell-${idx}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <ul className="text-white flex md:flex-nowrap md:flex-col self-center flex-wrap justify-center mt-4 md:mt-0 md:pl-10">
                        {pieData.map((item, idx) => (
                            <li key={idx} className="flex items-center mb-1 w-1/2 md:w-auto">
                                <span
                                    className="w-4 h-4 rounded-full mr-2"
                                    style={{ backgroundColor: item.color }}
                                ></span>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

            </main >
        </div >
    );
}
