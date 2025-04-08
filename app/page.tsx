"use client"

import { useState } from "react"
import { Bell, Home, Clock, Menu, Search, X } from "lucide-react"
import TeamMembers from "@/components/team-members"
import AnalyticsOverview from "@/components/analytics-overview"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("team") // "team" or "analytics"

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed z-30 top-4 left-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md text-white"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative z-20 w-64 h-full transition-all duration-300 ease-in-out ${
          sidebarOpen ? "left-0" : "-left-64"
        } lg:left-0`}
      >
        <div className="h-full bg-gradient-to-b from-indigo-900 to-purple-900 text-white flex flex-col">
          {/* Logo */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-300">Bizeye</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 mt-6">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("team")}
                  className={`flex items-center w-full px-6 py-3 text-lg ${
                    activeTab === "team" ? "bg-indigo-800 text-white" : "text-gray-300 hover:bg-indigo-800/50"
                  }`}
                >
                  <Home className="h-5 w-5 mr-3" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("analytics")}
                  className={`flex items-center w-full px-6 py-3 text-lg ${
                    activeTab === "analytics" ? "bg-indigo-800 text-white" : "text-gray-300 hover:bg-indigo-800/50"
                  }`}
                >
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Reports</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search anything..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100 relative mr-4">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
              </button>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-700">👤</span>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6">
          {activeTab === "team" ? <TeamMembers /> : <AnalyticsOverview />}
        </main>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
