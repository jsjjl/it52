import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Users, Activity, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight, Package, CreditCard } from 'lucide-react';

const data = [
  { name: '10-18', api: 4000, users: 2400, order: 2400 },
  { name: '10-19', api: 3000, users: 1398, order: 2210 },
  { name: '10-20', api: 2000, users: 9800, order: 2290 },
  { name: '10-21', api: 2780, users: 3908, order: 2000 },
  { name: '10-22', api: 1890, users: 4800, order: 2181 },
  { name: '10-23', api: 2390, users: 3800, order: 2500 },
  { name: '10-24', api: 3490, users: 4300, order: 2100 },
];

const stats = [
  { 
    name: '今日API调用', 
    value: '124,592', 
    change: '+12.5%', 
    trend: 'up', 
    icon: Activity, 
    color: 'text-blue-500', 
    bg: 'bg-blue-50' 
  },
  { 
    name: '今日新增用户', 
    value: '842', 
    change: '+5.2%', 
    trend: 'up', 
    icon: Users, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50' 
  },
  { 
    name: '今日新增订单', 
    value: '156', 
    change: '-2.4%', 
    trend: 'down', 
    icon: ShoppingCart, 
    color: 'text-orange-500', 
    bg: 'bg-orange-50' 
  },
  { 
    name: '今日收入(元)', 
    value: '¥ 45,231', 
    change: '+18.2%', 
    trend: 'up', 
    icon: DollarSign, 
    color: 'text-indigo-500', 
    bg: 'bg-indigo-50' 
  },
];

const quickLinks = [
  { name: '发布商品', icon: Package, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: '订单处理', icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: '财务对账', icon: CreditCard, color: 'text-green-600', bg: 'bg-green-50' },
  { name: '用户管理', icon: Users, color: 'text-orange-600', bg: 'bg-orange-50' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 顶部欢迎区 */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
           <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="Avatar" 
              className="w-16 h-16 rounded-full border-2 border-gray-100"
            />
            <div>
               <h1 className="text-xl font-bold text-gray-900">早安，管理员，祝你开心每一天！</h1>
               <p className="text-sm text-gray-500 mt-1">专属域名：<span className="font-mono text-blue-600 font-medium">tz82910</span> (请妥善保管)</p>
            </div>
        </div>
        <div className="flex gap-8 text-center">
            <div>
                <p className="text-sm text-gray-500 mb-1">系统版本</p>
                <p className="text-xl font-medium text-gray-900">v5.0.2</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-200 h-10"></div>
            <div>
                <p className="text-sm text-gray-500 mb-1">到期时间</p>
                <p className="text-xl font-medium text-gray-900">2025-12-31</p>
            </div>
        </div>
      </div>

      {/* 核心数据卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center \${stat.bg}`}>
                <stat.icon className={`w-5 h-5 \${stat.color}`} />
              </div>
            </div>
            <div className="flex items-end justify-between">
               <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
               <div className={`flex items-center text-sm font-medium mb-1 \${
                 stat.trend === 'up' ? 'text-green-500' : stat.trend === 'down' ? 'text-red-500' : 'text-gray-500'
               }`}>
                 {stat.trend === 'up' && <ArrowUpRight className="w-4 h-4 mr-0.5" />}
                 {stat.trend === 'down' && <ArrowDownRight className="w-4 h-4 mr-0.5" />}
                 {stat.change}
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 数据走势图表 */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">近七日数据走势</h2>
            <div className="flex gap-2 text-sm">
               <button className="px-3 py-1 text-blue-600 bg-blue-50 rounded">API调用</button>
               <button className="px-3 py-1 text-gray-600 hover:bg-gray-50 rounded">用户增长</button>
               <button className="px-3 py-1 text-gray-600 hover:bg-gray-50 rounded">订单趋势</button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #f3f4f6', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}
                />
                <Area type="monotone" dataKey="api" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorApi)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 右侧快捷操作与动态 */}
        <div className="space-y-6">
            {/* 快捷操作 */}
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">快捷操作</h2>
                <div className="grid grid-cols-2 gap-4">
                   {quickLinks.map((link) => (
                      <button key={link.name} className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-50">
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 \${link.bg} \${link.color}`}>
                             <link.icon size={20} />
                         </div>
                         <span className="text-sm text-gray-700">{link.name}</span>
                      </button>
                   ))}
                </div>
            </div>

            {/* 系统公告 */}
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                   <h2 className="text-lg font-bold text-gray-900">系统公告</h2>
                   <a href="#" className="text-sm text-blue-600 hover:underline">更多</a>
                </div>
                <ul className="space-y-4">
                    <li className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer truncate pr-4">api工厂 v5.0 版本重磅发布及更新说明</span>
                        <span className="text-xs text-gray-400 shrink-0 mt-0.5">10-24</span>
                    </li>
                    <li className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer truncate pr-4">关于短信接口计费规则调整的通知</span>
                        <span className="text-xs text-gray-400 shrink-0 mt-0.5">10-18</span>
                    </li>
                    <li className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer truncate pr-4">小程序交易组件接入指南及注意事项</span>
                        <span className="text-xs text-gray-400 shrink-0 mt-0.5">10-15</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
