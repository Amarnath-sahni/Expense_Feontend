import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function Saving() {
  // User's target inputs
  const [targetIncome, setTargetIncome] = useState(100000); // default
  const [targetExpense, setTargetExpense] = useState(50000); // default

  // Actual numbers (later you can fetch from backend)
  const [actualIncome, setActualIncome] = useState(80000);
  const [actualExpense, setActualExpense] = useState(45000);

  // Handle target update
  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Targets Updated! You can integrate backend logic here.");
  };

  // Prepare data for chart
  const data = [
    {
      name: "Income",
      Actual: actualIncome,
      Target: targetIncome,
    },
    {
      name: "Expense",
      Actual: actualExpense,
      Target: targetExpense,
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Yearly Targets</h1>

      {/* Target Form */}
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-md rounded-xl p-6 mb-8 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Set Your Targets</h2>

        <label className="block mb-3">
          <span className="text-gray-700">Target Income (₹)</span>
          <input
            type="number"
            value={targetIncome}
            onChange={(e) => setTargetIncome(Number(e.target.value))}
            className="w-full border p-2 rounded-lg mt-1"
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700">Target Expense (₹)</span>
          <input
            type="number"
            value={targetExpense}
            onChange={(e) => setTargetExpense(Number(e.target.value))}
            className="w-full border p-2 rounded-lg mt-1"
          />
        </label>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Update Targets
        </button>
      </form>

      {/* Display Current Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Income</h3>
          <p>Target: ₹{targetIncome.toLocaleString("en-IN")}</p>
          <p>Actual: ₹{actualIncome.toLocaleString("en-IN")}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Expense</h3>
          <p>Target: ₹{targetExpense.toLocaleString("en-IN")}</p>
          <p>Actual: ₹{actualExpense.toLocaleString("en-IN")}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Remaining</h3>
          <p>Target: ₹{(targetIncome - targetExpense).toLocaleString("en-IN")}</p>
          <p>Actual: ₹{(actualIncome - actualExpense).toLocaleString("en-IN")}</p>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Yearly Growth</h2>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Actual" fill="#0088FE" />
          <Bar dataKey="Target" fill="#00C49F" />
        </BarChart>
      </div>
    </div>
  );
}

export default Saving;
