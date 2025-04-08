import { TrendingUp, Users, Star, Clock } from "lucide-react"

export default function AnalyticsOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Analytics Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Monthly Revenue */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Monthly Revenue</h3>
            </div>
            <div className="bg-green-100 p-2 rounded-md">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-bold">$24,500</p>
            <p className="flex items-center text-green-600">
              <span className="text-lg">↑ 12%</span>
              <span className="text-gray-500 text-sm ml-2">from last month</span>
            </p>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Active Users</h3>
            </div>
            <div className="bg-blue-100 p-2 rounded-md">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-bold">1,234</p>
            <p className="flex items-center text-blue-600">
              <span className="text-lg">↑ 8%</span>
              <span className="text-gray-500 text-sm ml-2">from last week</span>
            </p>
          </div>
        </div>

        {/* Satisfaction */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Satisfaction</h3>
            </div>
            <div className="bg-yellow-100 p-2 rounded-md">
              <Star className="h-5 w-5 text-yellow-600" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-bold">4.8/5.0</p>
            <p className="text-gray-500 text-sm">Based on 789 reviews</p>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Pending Tasks</h3>
            </div>
            <div className="bg-red-100 p-2 rounded-md">
              <Clock className="h-5 w-5 text-red-600" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-bold">23</p>
            <p className="text-red-600 text-sm">5 high priority</p>
          </div>
        </div>
      </div>
    </div>
  )
}
