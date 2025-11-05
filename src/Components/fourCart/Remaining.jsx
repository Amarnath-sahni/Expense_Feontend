import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF8042"]; // Green = income, Orange = expense

function Remaining({ totalIncome = 0, totalExpense = 0 }) {
  const remaining = totalIncome - totalExpense;

  const data = [
    { name: "Income", value: totalIncome },
    { name: "Expenses", value: totalExpense },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Remaining Balance Overview
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Total Income</h2>
          <p className="text-2xl font-bold text-green-600">
            ₹{totalIncome.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Total Expenses</h2>
          <p className="text-2xl font-bold text-red-600">
            ₹{totalExpense.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Remaining</h2>
          <p className="text-2xl font-bold text-blue-600">
            ₹{remaining.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center mb-6">
        <h2 className="text-xl font-semibold mb-4">Income vs Expense</h2>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* AI Suggestion Button */}
      <button
        onClick={() => (window.location.href = "/ai")}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
      >
        💡 Get AI Suggestion
      </button>
    </div>
  );
}

export default Remaining;
