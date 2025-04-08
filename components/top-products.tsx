const TopProducts = () => {
  const products = [
    { name: "Product A", sales: 1823, percentage: 45 },
    { name: "Product B", sales: 1240, percentage: 30 },
    { name: "Product C", sales: 823, percentage: 20 },
    { name: "Product D", sales: 412, percentage: 5 },
  ]

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm h-full">
      <h3 className="text-lg font-medium mb-4">Top Products</h3>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">{product.name}</span>
              <span className="text-gray-500">{product.sales} sales</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${product.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopProducts
