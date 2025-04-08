"use client"

import { useQuery } from "@tanstack/react-query"
import { Fingerprint, Globe, Calendar, Users, Hash } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const fetchNationData = async () => {
  const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  const json = await res.json()
  return json.data
}

export default function NationCards() {
  const { data: nationData = [], isLoading, error } = useQuery({
    queryKey: ["nationData"],
    queryFn: fetchNationData,
  })

  if (isLoading) return <p className="text-center text-xl p-10">Loading...</p>
  if (error) return <p className="text-center text-red-600">Error fetching data</p>

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Nation Population Data
      </h1>

      {/* 🔍 Graph Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-center mb-4">Population Over Years</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={[...nationData].reverse()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Population" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🧩 Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nationData.map((nation: { Nation: string; Year: string; Population: number; "ID Nation": string; "Slug Nation": string }, index: number) => (
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
