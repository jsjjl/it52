import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  AppWindow, 
  ShoppingCart, 
  LogOut, 
  Menu, 
  X,
  Bell,
  ChevronDown,
  RefreshCw,
  Search,
  Settings,
  Database,
  FileText,
  Briefcase
} from 'lucide-react';

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // 根据 it120 后台常见的模块扩展左侧菜单
  const navigation = [
    { name: '首页概览', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: '工厂设置', href: '/admin/apps', icon: Settings },
    { name: '用户管理', href: '/admin/users', icon: Users },
    { name: '订单管理', href: '/admin/orders', icon: ShoppingCart },
    { name: '内容管理', href: '/admin/content', icon: FileText },
    { name: '财务管理', href: '/admin/finance', icon: Briefcase },
    { name: '数据字典', href: '/admin/dict', icon: Database },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex">
      {/* Mobile Sidebar Overlay */}
      {!sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        />
      )}

      {/* Sidebar - 深色主题 */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-[#001529] text-gray-300 transform transition-all duration-300 ease-in-out \${
          sidebarOpen ? 'w-64 translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-20'
        } flex flex-col shadow-xl`}
      >
        <div className="h-16 flex items-center justify-center px-4 bg-[#002140] cursor-pointer" onClick={() => navigate('/')}>
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold shrink-0">
              a
            </div>
            {(sidebarOpen || window.innerWidth < 1024) && (
              <span className="text-lg font-bold text-white whitespace-nowrap">
                api工厂
              </span>
            )}
          </div>
        </div>

        <nav className="flex-1 py-4 space-y-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 mx-2 rounded transition-colors \${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-[#002140] hover:text-white'
                }`}
                title={!sidebarOpen ? item.name : undefined}
              >
                <item.icon className={`shrink-0 \${isActive ? 'text-white' : 'text-gray-400'}`} size={18} />
                {(sidebarOpen || window.innerWidth < 1024) && (
                  <span className="ml-3 text-sm">{item.name}</span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Header - 浅色主题 */}
        <header className="h-12 bg-white shadow-sm flex items-center justify-between px-4 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {sidebarOpen ? <Menu size={20} /> : <Menu size={20} />}
            </button>
            <button className="text-gray-500 hover:text-blue-600 focus:outline-none hidden sm:block" title="刷新页面">
               <RefreshCw size={18} />
            </button>
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
               <Search size={14} className="text-gray-400 mr-2" />
               <input type="text" placeholder="搜索功能菜单..." className="bg-transparent text-sm focus:outline-none w-48 text-gray-600" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700 relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition-colors">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="User Avatar" 
                className="w-7 h-7 rounded-full bg-gray-200"
              />
              <span className="text-sm text-gray-700 hidden sm:block">15861382053</span>
              <ChevronDown size={14} className="text-gray-500" />
            </div>
            
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-red-600 focus:outline-none"
              title="退出登录"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {/* Page Content 包含面包屑和内容区 */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>

        <footer className="text-center py-4 text-sm text-gray-500">
           Copyright © {new Date().getFullYear()} api工厂 管理系统
        </footer>
      </div>
    </div>
  );
}
