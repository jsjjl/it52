import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { Users, Activity, CreditCard, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';

const data = [
  { name: '00:00', api: 4000, users: 2400, amt: 2400 },
  { name: '04:00', api: 3000, users: 1398, amt: 2210 },
  { name: '08:00', api: 2000, users: 9800, amt: 2290 },
  { name: '12:00', api: 2780, users: 3908, amt: 2000 },
  { name: '16:00', api: 1890, users: 4800, amt: 2181 },
  { name: '20:00', api: 2390, users: 3800, amt: 2500 },
  { name: '24:00', api: 3490, users: 4300, amt: 2100 },
];

const stats = [
  { 
    name: '今日 API 调用', 
    value: '124,592', 
    change: '+12.5%', 
    trend: 'up', 
    icon: Activity, 
    color: 'text-blue-600', 
    bg: 'bg-blue-100' 
  },
  { 
    name: '新增注册用户', 
    value: '842', 
    change: '+5.2%', 
    trend: 'up', 
    icon: Users, 
    color: 'text-green-600', 
    bg: 'bg-green-100' 
  },
  { 
    name: '今日订单金额', 
    value: '¥ 45,231.89', 
    change: '-2.4%', 
    trend: 'down', 
    icon: CreditCard, 
    color: 'text-purple-600', 
    bg: 'bg-purple-100' 
  },
  { 
    name: '系统负载', 
    value: '24%', 
    change: '正常', 
    trend: 'neutral', 
    icon: Zap, 
    color: 'text-yellow-600', 
    bg: 'bg-yellow-100' 
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">控制台概览</h1>
          <p className="text-sm text-gray-500 mt-1">欢迎回来，这是您的今日业务数据摘要。</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            导出报告
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
            刷新数据
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center \${stat.bg}`}>
                <stat.icon className={`w-6 h-6 \${stat.color}`} />
              </div>
              <div className={`flex items-center text-sm font-medium \${
                stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-gray-500'
              }`}>
                {stat.trend === 'up' && <ArrowUpRight className="w-4 h-4 mr-1" />}
                {stat.trend === 'down' && <ArrowDownRight className="w-4 h-4 mr-1" />}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">API 调用趋势</h2>
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
              <option>今日</option>
              <option>近7天</option>
              <option>本月</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#1f2937', fontWeight: 500 }}
                />
                <Area type="monotone" dataKey="api" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorApi)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Chart / Info */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">用户活跃时段</h2>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f3f4f6'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="users" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
