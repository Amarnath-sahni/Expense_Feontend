import React from "react";
import { FaMoneyBillWave, FaChartPie, FaBullseye } from "react-icons/fa";
import { Activity, Settings } from "lucide-react";
import { motion } from "framer-motion";
import phoneImg from "../assets/image.png"; // Add a screenshot of your app here

const features = [
  {
    title: "Income Tracking",
    description: "Easily log and visualize your income from all sources.",
    icon: <FaMoneyBillWave size={28} className="text-blue-500" />,
  },
  {
    title: "Expense Management",
    description: "Categorize and track your spending efficiently.",
    icon: <FaChartPie size={28} className="text-green-500" />,
  },
  {
    title: "Set Targets",
    description: "Set financial goals and monitor your yearly growth.",
    icon: <FaBullseye size={28} className="text-red-500" />,
  },
  {
    title: "AI Insights",
    description: "Get personalized AI suggestions to save and invest.",
    icon: <Activity size={28} className="text-indigo-500" />,
  },
];

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <h1 className="text-5xl font-bold mb-6">Take Control of Your Finances</h1>
          <p className="text-lg mb-6">
            Track your income, manage expenses, set targets, and get AI suggestions — all in one app.
          </p>
          <div className="flex gap-4">
            <a
              href="/signup"
              className="bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="bg-gray-800 border border-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
            >
              Login
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <img
            src={phoneImg}
            alt="App Demo on Phone"
            className="w-72 md:w-96 rounded-3xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl text-center shadow-lg"
          >
            <Settings size={32} className="mx-auto mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold mb-2">Set Up Account</h3>
            <p className="text-gray-300">Sign up and personalize your financial dashboard.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl text-center shadow-lg"
          >
            <FaMoneyBillWave size={32} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Track Finances</h3>
            <p className="text-gray-300">Add your income and expenses manually or via upload.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl text-center shadow-lg"
          >
            <FaChartPie size={32} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Analyze & Grow</h3>
            <p className="text-gray-300">View remaining balance, targets, and AI insights.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        &copy; {new Date().getFullYear()} SmartExpend. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
