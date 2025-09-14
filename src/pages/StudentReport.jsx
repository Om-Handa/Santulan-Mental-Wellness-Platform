import { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Sep", score: 20 },
    { month: "Oct", score: 35 },
    { month: "Nov", score: 55 },
    { month: "Dec", score: 70 },
    { month: "Jan", score: 65 },
    { month: "Feb", score: 85 },
];

export default function StudentReport() {

    const location = useLocation();
    const { name, issue, color, college, status } = location.state || {};

    const activities = [
        {
            date: "2024-02-15",
            activity: "Anxiety Screener (GAD-7)",
            status: "Completed",
            outcome: `${status}`,
        },
        {
            date: "2024-02-10",
            activity: "Journal Entry",
            status: "Completed",
            outcome: "Positive Sentiment",
        },
        {
            date: "2024-02-05",
            activity: "Goal Setting: 'Practice Mindfulness'",
            status: "In Progress",
            outcome: "3/5 days completed",
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-800 text-gray-100">
            <AdminNavbar />

            <main className="flex-1 p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center md:text-start">Student Report</h2>

                <div className="bg-gray-900 rounded-2xl p-6 mb-6 flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:items-center">
                    <div className="flex items-center gap-4">
                        <img src="/user.jpg" alt="student" className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{name}</h3>
                            <p className="text-sm text-gray-400">{college}</p>
                            <p className={`text-sm mt-1 text-${color}`}>
                                Primary Issue: {issue}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-lg bg-gray-700 text-sm hover:bg-gray-600">
                            Contact Student
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-blue-600 text-sm hover:bg-blue-500">
                            View Full Report
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 w-full">
                    <div className="bg-gray-900 p-6 rounded-2xl text-center">
                        <p className="text-gray-400 text-sm">Growth Rate</p>
                        <p className="text-green-400 text-xl font-semibold">+15%</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-2xl text-center">
                        <p className="text-gray-400 text-sm">Improvement Rate</p>
                        <p className="text-blue-400 text-xl font-semibold">+25%</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-2xl text-center col-span-2 md:col-span-1">
                        <p className="text-gray-400 text-sm">Risk Factors</p>
                        <p className={`text-${color} text-xl font-semibold`}>{status}</p>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-6 mb-6">
                    <div className="col-span-2 bg-gray-900 p-6 rounded-2xl md:w-2/3">
                        <h4 className="mb-4 font-semibold">Mental Health Score Over Time</h4>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                                <XAxis dataKey="month" stroke="#aaa" />
                                <YAxis stroke="#aaa" />
                                <Tooltip />
                                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl md:w-1/3">
                        <h4 className="mb-4 font-semibold">Risk Factors Breakdown</h4>
                        {[
                            { label: "Anxiety", value: 85, color: "bg-red-500" },
                            { label: "Depression", value: 60, color: "bg-yellow-400" },
                            { label: "Stress", value: 70, color: "bg-blue-400" },
                            { label: "Loneliness", value: 40, color: "bg-green-400" },
                        ].map((factor) => (
                            <div key={factor.label} className="mb-4">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>{factor.label}</span>
                                    <span>{factor.value}%</span>
                                </div>
                                <div className="w-full bg-gray-700 h-2 rounded-full">
                                    <div
                                        className={`${factor.color} h-2 rounded-full`}
                                        style={{ width: `${factor.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-2xl">
                    <h4 className="mb-4 font-semibold text-white">Recent Activity</h4>

                    <div className="hidden md:block">
                        <table className="w-full text-sm">
                            <thead className="text-gray-400">
                                <tr className="text-left">
                                    <th className="pb-2">Date</th>
                                    <th className="pb-2">Activity</th>
                                    <th className="pb-2">Status</th>
                                    <th className="pb-2">Outcome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activities.map((act, i) => (
                                    <tr key={i} className="border-t border-gray-700">
                                        <td className="py-2 whitespace-nowrap">{act.date}</td>
                                        <td className="py-2">{act.activity}</td>
                                        <td className="py-2">
                                            <span className={`px-2 py-1 rounded-lg text-xs ${act.status === "Completed" ? "bg-green-600 text-white" : "bg-yellow-500 text-black"}`}>{act.status}</span>
                                        </td>
                                        <td className="py-2">{act.outcome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="md:hidden space-y-4">
                        {activities.map((act, i) => (
                            <div key={i} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-400 text-sm">Date</span>
                                    <span className="text-white text-sm">{act.date}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-400 text-sm">Activity</span>
                                    <span className="text-white text-sm">{act.activity}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-400 text-sm">Status</span>
                                    <span className={`px-2 py-1 rounded-lg text-xs ${act.status === "Completed" ? "bg-green-600 text-white" : "bg-yellow-500 text-black"}`}> {act.status}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400 text-sm">Outcome</span>
                                    <span className="text-white text-sm">{act.outcome}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

