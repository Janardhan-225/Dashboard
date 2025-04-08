import React from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
}

const StatCard = ({ title, value, change, trend, icon }: StatCardProps) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <div className="flex items-center mt-2">
            <span
              className={`text-xs font-medium flex items-center ${trend === "up" ? "text-green-600" : "text-red-600"}`}
            >
              {trend === "up" ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
              {change}
            </span>
            <span className="text-xs text-gray-500 ml-1">from last month</span>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded-md">{icon}</div>
      </div>
    </div>
  )
}

export default StatCard
