import { DollarSign, ShoppingBag, UsersIcon, BarChart } from "lucide-react"
import StatCard from "./stat-card"
import RecentOrders from "./recent-orders"
import SalesChart from "./sales-chart"
import TopProducts from "./top-products"

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          trend="up"
          icon={<DollarSign className="h-6 w-6" />}
        />
        <StatCard title="Orders" value="356" change="+12.2%" trend="up" icon={<ShoppingBag className="h-6 w-6" />} />
        <StatCard title="Customers" value="2,420" change="+4.6%" trend="up" icon={<UsersIcon className="h-6 w-6" />} />
        <StatCard
          title="Conversion Rate"
          value="3.65%"
          change="-0.82%"
          trend="down"
          icon={<BarChart className="h-6 w-6" />}
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <TopProducts />
        </div>
      </div>

      {/* Recent Orders */}
      <RecentOrders />
    </div>
  )
}

export default Dashboard
