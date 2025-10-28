// src/components/GrowthChart.jsx
import React from 'react'
import { motion } from 'framer-motion'


const GrowthChart = () => {
const points = '10,70 40,55 70,40 100,45 130,30 160,35 190,20 220,25 250,15'
return (
<motion.div initial={{opacity:0}} animate={{opacity:1}} className="p-4 rounded-xl h-72 card-sketch">
<div className="flex items-center justify-between mb-4">
<h4 className="font-semibold">User growth chart</h4>
<div className="text-sm text-slate-400">Last 30 days</div>
</div>
<div className="w-full h-full bg-slate-900 rounded-md p-4">
<svg viewBox="0 0 260 90" preserveAspectRatio="none" className="w-full h-full">
<polyline fill="none" stroke="#06b6d4" strokeWidth="2" points={points} strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
</motion.div>
)
}

export default GrowthChart;