import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopCards from "./TopCards";
import GrowthChart from "./GrowthChart";
import InvestPanel from "./InvestPanel";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      // Adjusted for navbar height and cleaner layout
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 px-3 sm:px-6 lg:px-8 pt-24 pb-8 relative"
    >
      {/* 🔹 Mobile Header */}
      <div className="flex items-center justify-between sm:hidden mb-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-lg font-semibold tracking-wide">Dashboard</h1>
      </div>

      {/* 🔹 Main Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-4 sm:p-6 lg:p-8 bg-slate-950/50 backdrop-blur-lg shadow-xl border border-slate-800/60">
          <div className="grid grid-cols-12 gap-6">
            {/* 🔹 Sidebar */}
            <aside className="hidden sm:block col-span-3 xl:col-span-2 rounded-2xl overflow-hidden bg-slate-900/60 shadow-inner">
              <Sidebar />
            </aside>

            {/* 🔹 Content */}
            <main className="col-span-12 sm:col-span-9 xl:col-span-10 space-y-8">
              {/* 🔸 Top Cards */}
              <TopCards />

              {/* 🔸 Chart and Investment */}
              <div className="grid grid-cols-12 gap-6">
                <section className="col-span-12 lg:col-span-8 rounded-2xl bg-slate-900/50 p-5 shadow-inner">
                  <GrowthChart />
                </section>

                <aside className="col-span-12 lg:col-span-4 rounded-2xl bg-slate-900/50 p-5 shadow-inner">
                  <InvestPanel />
                </aside>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 sm:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-0 left-0 w-64 sm:w-72 h-full bg-slate-900 p-4 z-50 sm:hidden shadow-2xl"
            >
              <Sidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dashboard;
