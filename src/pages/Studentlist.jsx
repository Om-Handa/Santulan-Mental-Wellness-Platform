import { useState,useEffect } from "react";
import { ChevronDown } from "lucide-react";
import AdminNavbar from "../components/AdminNavbar";
import { NavLink } from "react-router-dom";

const students = [
  { name: "Harry", college: "CGC, Landran", status: "High Risk", issue: "Anxiety", color: "red-600" },
  { name: "Ashok", college: "CGC, Landran", status: "Moderate Risk", issue: "Stress", color: "yellow-500" },
  { name: "Rohan", college: "CGC, Landran", status: "Low Risk", issue: "N/A", color: "green-600" },
  { name: "Ishita", college: "CGC, Landran", status: "High Risk", issue: "Depression", color: "red-600" },
  { name: "Kashish", college: "CGC, Landran", status: "Low Risk", issue: "N/A", color: "green-600" },
  { name: "Aman", college: "CGC, Landran", status: "Moderate Risk", issue: "Loneliness", color: "yellow-500" },
];

export default function Studentslist() {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  const [search, setSearch] = useState("");
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-800 text-gray-100">
      <AdminNavbar />
      <main className="flex-1 p-4 md:p-8">
        <h2 className="text-2xl font-semibold mb-1 text-center md:text-start">Students</h2>
        <p className="text-gray-400 mb-6 text-center md:text-start">Manage and track student well-being.</p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 rounded-lg text-sm hover:bg-gray-700">
            Sort By <ChevronDown size={16} />
          </button>
        </div>

        <div className="hidden md:block bg-gray-900 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">College</th>
                <th className="px-6 py-3 text-left">Well-Being Status</th>
                <th className="px-6 py-3 text-left">Primary Issue</th>
                <th className="px-6 py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, i) => (
                <tr key={i} className="border-t border-gray-700 hover:bg-gray-700/50">
                  <td className="px-6 py-3">{student.name}</td>
                  <td className="px-6 py-3">{student.college}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-${student.color}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">{student.issue}</td>
                  <td className="px-6 py-3">
                    <NavLink to="/StudentReport" state={{ name: student.name, issue: student.issue, color: student.color, college: student.college, status: student.status }} className="text-blue-400 hover:underline">
                      View Details
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:hidden">
          {filteredStudents.map((student, i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-4 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{student.name}</h3>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-${student.color}`}>
                  {student.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{student.college}</p>
              <p className="text-gray-300 text-sm mt-1">Issue: {student.issue}</p>
              <NavLink to="/StudentReport" state={{ name: student.name, issue: student.issue, color: student.color, college: student.college, status: student.status }} className="text-blue-400 hover:underline text-sm mt-2 block">
                View Details
              </NavLink>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
