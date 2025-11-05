import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Income() {
  const [incomes, setIncomes] = useState([
    { id: 1, source: "Salary", amount: 50000 },
    { id: 2, source: "Freelance", amount: 15000 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ source: "", amount: "", file: null });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // ✅ Calculate Total Income
  const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.source || !formData.amount) return alert("Please fill all fields");

    const newIncome = {
      id: Date.now(),
      source: formData.source,
      amount: Number(formData.amount),
    };

    setIncomes([...incomes, newIncome]);
    setShowForm(false);
    setFormData({ source: "", amount: "", file: null });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600">
        Income Dashboard
      </h1>

      {/* ✅ Display Total Income */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-green-700">
          Total Income: ₹{totalIncome.toLocaleString("en-IN")}
        </h2>
      </div>

      {/* Add Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {showForm ? "Close Form" : "➕ Add Income"}
        </button>
      </div>

      {/* Add Income Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto mb-8"
        >
          <label className="block mb-3">
            <span className="text-gray-700">Source:</span>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg mt-1"
              placeholder="e.g., Salary, Freelance"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700">Amount (₹):</span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg mt-1"
              placeholder="Enter amount"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Upload File (PDF, Excel, Docx):</span>
            <input
              type="file"
              name="file"
              accept=".pdf,.xlsx,.xls,.docx"
              onChange={handleChange}
              className="w-full mt-1"
            />
          </label>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Save Income
          </button>
        </form>
      )}

      {/* Income Data Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Income List */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Income Records</h2>
          <ul className="space-y-3">
            {incomes.map((item) => (
              <li
                key={item.id}
                className="flex justify-between p-3 bg-gray-100 rounded-lg"
              >
                <span>{item.source}</span>
                <span className="font-semibold text-green-600">
                  ₹{item.amount.toLocaleString("en-IN")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Income Overview</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={incomes}
              dataKey="amount"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {incomes.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Income;
