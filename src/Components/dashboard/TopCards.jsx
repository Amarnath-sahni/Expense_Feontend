// src/components/TopCards.jsx
import React from 'react'
import { DollarSign, CreditCard, PieChart } from 'lucide-react'
import { motion } from 'framer-motion'


const TopCards = () => {
const cards = [
{ title: 'Income', value: '$8,420', icon: <DollarSign /> },
{ title: 'Expense', value: '$2,130', icon: <CreditCard /> },
{ title: 'Remaining', value: '$6,290', icon: <PieChart /> },
{ title: 'Target Saving', value: '$12,000', icon: <DollarSign /> }
]


return (
<div className="grid grid-cols-12 gap-4">
{cards.map((c) => (
<motion.div whileHover={{y:-6}} key={c.title} className="col-span-12 sm:col-span-6 md:col-span-3 bg-slate-800 p-4 rounded-xl shadow-sm card-sketch">
<div className="flex items-center gap-4">
<div className="p-3 rounded-lg bg-slate-900">
{React.cloneElement(c.icon, {className:'w-6 h-6 text-slate-300'})}
</div>
<div>
<div className="text-xs text-slate-400">{c.title}</div>
<div className="text-lg font-semibold">{c.value}</div>
</div>
</div>
</motion.div>
))}
</div>
)
}

export default TopCards;