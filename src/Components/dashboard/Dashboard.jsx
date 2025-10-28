// src/components/Dashboard.jsx
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopCards from './TopCards'
import GrowthChart from './GrowthChart'
import InvestPanel from './InvestPanel'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from 'lucide-react'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100 p-4 sm:p-6 relative pt-18 sm:pt-22"
      >
        {/* 🔹 Mobile Top Bar */}
        <div className="flex items-center justify-between sm:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md bg-slate-800 hover:bg-slate-700"
          >
            <User className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-4 sm:p-6 card-sketch">
            <div className="grid grid-cols-12 gap-6">
              {/* 🔹 Sidebar (hidden on mobile) */}
              <aside className="hidden sm:block col-span-3">
                <Sidebar />
              </aside>

              {/* 🔹 Main Area */}
              <main className="col-span-12 sm:col-span-9">
                <TopCards />

                <div className="mt-6 grid grid-cols-12 gap-6">
                  <section className="col-span-12 sm:col-span-8">
                    <GrowthChart />
                  </section>

                  <aside className="col-span-12 sm:col-span-4">
                    <InvestPanel />
                  </aside>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* 🔹 Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40 sm:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="fixed top-0 left-0 w-64 h-full bg-slate-900 p-4 z-50 sm:hidden shadow-lg"
              >
                <Sidebar />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Dashboard
