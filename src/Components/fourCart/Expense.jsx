import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Expense() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Food", amount: 2000 },
    { id: 2, category: "Travel", amount: 5000 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ category: "", amount: "", file: null });

  // Colors for pie chart
  const COLORS = ["#FF6384", "#FF9F40", "#FFCD56", "#36A2EB", "#9966FF"];

  // ✅ Calculate Total Expense
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category || !formData.amount)
      return alert("Please fill all fields");

    const newExpense = {
      id: Date.now(),
      category: formData.category,
      amount: Number(formData.amount),
    };

    setExpenses([...expenses, newExpense]);
    setShowForm(false);
    setFormData({ category: "", amount: "", file: null });

    // 🧠 Example backend integration:
    // const data = new FormData();
    // data.append("category", formData.category);
    // data.append("amount", formData.amount);
    // if (formData.file) data.append("file", formData.file);
    // await fetch("http://localhost:5000/api/expense", { method: "POST", body: data });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center mb-6 text-red-600">
        Expense Dashboard
      </h1>

      {/* ✅ Total Expense */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-red-700">
          Total Expense: ₹{totalExpense.toLocaleString("en-IN")}
        </h2>
      </div>

      {/* Add Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
        >
          {showForm ? "Close Form" : "➕ Add Expense"}
        </button>
      </div>

      {/* Add Expense Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto mb-8"
        >
          <label className="block mb-3">
            <span className="text-gray-700">Category:</span>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg mt-1"
              placeholder="e.g., Food, Rent, Shopping"
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
            <span className="text-gray-700">Upload Bill (PDF, Excel, Docx):</span>
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
            Save Expense
          </button>
        </form>
      )}

      {/* Expense Data Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Expense List */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Expense Records</h2>
          <ul className="space-y-3">
            {expenses.map((item) => (
              <li
                key={item.id}
                className="flex justify-between p-3 bg-gray-100 rounded-lg"
              >
                <span>{item.category}</span>
                <span className="font-semibold text-red-600">
                  ₹{item.amount.toLocaleString("en-IN")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Expense Overview</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={expenses}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {expenses.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
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

export default Expense;
