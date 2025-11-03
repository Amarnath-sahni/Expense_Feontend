import React from "react";
import { motion } from "framer-motion";
import { HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineChartPie, HiOutlineHome, HiOutlineSparkles, HiOutlineBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Budget Tracking",
    description:
      "Automatically track income & expenses, set budgets and get alerted when you’re close to limits.",
    icon: <HiOutlineChartBar className="w-7 h-7" />,
    cta: "/dashboard",
  },
  {
    id: 2,
    title: "Expense Analytics",
    description:
      "Visualize spend categories, discover trends and find easy ways to save with AI-driven insights.",
    icon: <HiOutlineChartPie className="w-7 h-7" />,
    cta: "/analytics",
  },
  {
    id: 3,
    title: "AI Finance Assistant",
    description:
      "Ask the assistant for budgeting tips, forecast expenses or get personalized saving plans.",
    icon: <HiOutlineSparkles className="w-7 h-7" />,
    cta: "/assistant",
  },
  {
    id: 4,
    title: "Financial Reports",
    description:
      "Generate monthly and yearly reports (CSV/PDF) that explain where your money went.",
    icon: <HiOutlineBadgeCheck className="w-7 h-7" />,
    cta: "/reports",
  },
  {
    id: 5,
    title: "Secure Cloud Storage",
    description:
      "Encrypted backups for receipts and financial documents — access them anytime, securely.",
    icon: <HiOutlineShieldCheck className="w-7 h-7" />,
    cta: "/settings/backups",
  },
  {
    id: 6,
    title: "Smart Dashboard",
    description:
      "A unified view of your balance, goals, alerts and the most important numbers at a glance.",
    icon: <HiOutlineHome className="w-7 h-7" />,
    cta: "/dashboard",
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* HERO */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          >
            SmartSpense <span className="text-indigo-400">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-gray-300 text-lg"
          >
            Smarter money. Better decisions. Access all the tools you need to master your
            finances in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/signup" className="inline-block">
              <button className="px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-lg">
                Get Started
              </button>
            </Link>
            <Link to="/pricing" className="inline-block">
              <button className="px-6 py-3 rounded-2xl border border-gray-700 text-gray-200 hover:bg-gray-800">
                View Plans
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6 pb-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              variants={cardVariants}
              className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transform-gpu transition-transform duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 group-hover:bg-indigo-600 group-hover:scale-105 transition-all">
                  <div className="text-indigo-300">{s.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-gray-400 text-sm">{s.description}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Link to={s.cta} className="text-sm font-medium text-indigo-300 hover:underline">
                  Learn more
                </Link>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm"
                >
                  Try it
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA BAR */}
      <footer className="bg-gradient-to-t from-gray-900 to-transparent border-t border-gray-800">
        <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold">Ready to take control of your money?</h4>
            <p className="text-sm text-gray-400">Start free — upgrade when you’re ready.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/signup">
              <button className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium">Get Started</button>
            </Link>
            <Link to="/contact">
              <button className="px-5 py-2 rounded-full border border-gray-700 text-gray-200 hover:bg-gray-800">Contact Sales</button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
