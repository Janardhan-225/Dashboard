const SalesChart = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Sales Overview</h3>
        <select className="text-sm border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
        </select>
      </div>

      <div className="h-64 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p>Chart placeholder</p>
          <p className="text-sm">Sales data visualization would appear here</p>
        </div>
      </div>
    </div>
  )
}

export default SalesChart
