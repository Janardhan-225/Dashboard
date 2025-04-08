"use client"

import { useEffect, useState } from "react"
import { Fingerprint, Globe, Calendar, Users, Hash } from "lucide-react"

export default function NationCards() {
  const [nationData, setNationData] = useState([])

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then((data) => setNationData(data.data))
      .catch((err) => console.error("Error fetching data:", err))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Nation Population Data
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nationData.map((nation, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 transition hover:scale-[1.02] hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">
              {nation.Nation} ({nation.Year})
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Fingerprint className="text-purple-500 w-5 h-5" />
                <span className="text-gray-700 text-sm">ID Nation: {nation["ID Nation"]}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-green-500 w-5 h-5" />
                <span className="text-gray-700 text-sm">Nation: {nation.Nation}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-orange-500 w-5 h-5" />
                <span className="text-gray-700 text-sm">Year: {nation.Year}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-blue-500 w-5 h-5" />
                <span className="text-gray-700 text-sm">
                  Population: {nation.Population.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Hash className="text-pink-500 w-5 h-5" />
                <span className="text-gray-700 text-sm">Slug: {nation["Slug Nation"]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
