import { LayoutDashboard, BarChart3, Users, Package, Settings, LifeBuoy, LogOut } from "lucide-react"
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="bg-white h-full w-64 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-5 border-b">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-700 bg-gray-100 rounded-md">
              <LayoutDashboard className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md">
              <BarChart3 className="h-5 w-5 mr-3" />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md">
              <Users className="h-5 w-5 mr-3" />
              <span>Customers</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md">
              <Package className="h-5 w-5 mr-3" />
              <span>Products</span>
            </Link>
          </li>
        </ul>

        <div className="border-t my-4"></div>

        <ul className="space-y-1 px-3">
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md">
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md">
              <LifeBuoy className="h-5 w-5 mr-3" />
              <span>Help</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md">
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
