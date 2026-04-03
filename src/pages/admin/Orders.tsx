import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, CheckCircle, Clock, XCircle, MoreVertical } from 'lucide-react';

const mockOrders = [
  { id: 'ORD-20231024-001', amount: 299.00, user: '张三', status: 'completed', time: '2023-10-24 14:23:05', method: '微信支付', item: '高级会员年卡' },
  { id: 'ORD-20231024-002', amount: 49.90, user: '李四', status: 'pending', time: '2023-10-24 13:10:22', method: '支付宝', item: '基础服务月包' },
  { id: 'ORD-20231024-003', amount: 199.00, user: '王五', status: 'completed', time: '2023-10-24 11:45:10', method: '微信支付', item: '短信服务套餐' },
  { id: 'ORD-20231024-004', amount: 99.00, user: '赵六', status: 'cancelled', time: '2023-10-24 09:30:00', method: '-', item: '云存储扩容' },
  { id: 'ORD-20231023-005', amount: 299.00, user: '陈七', status: 'completed', time: '2023-10-23 16:20:15', method: '微信支付', item: '高级会员年卡' },
  { id: 'ORD-20231023-006', amount: 15.00, user: '孙八', status: 'completed', time: '2023-10-23 15:05:40', method: '余额扣款', item: '单次实名认证' },
];

const statusStyles = {
  completed: { bg: 'bg-green-100', text: 'text-green-700', label: '已完成', icon: CheckCircle },
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '待支付', icon: Clock },
  cancelled: { bg: 'bg-gray-100', text: 'text-gray-600', label: '已取消', icon: XCircle },
};

export function Orders() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">订单明细</h1>
          <p className="text-sm text-gray-500 mt-1">查看交易订单、核销记录及资金流水。</p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm gap-2">
            导出账单
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <ShoppingBag size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">今日总订单</p>
            <h3 className="text-2xl font-bold text-gray-900">1,284</h3>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">已完成</p>
            <h3 className="text-2xl font-bold text-gray-900">1,156</h3>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">待处理</p>
            <h3 className="text-2xl font-bold text-gray-900">128</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4 bg-gray-50/50">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              placeholder="输入订单号、商品名称或买家进行搜索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg">
              <option>全部状态</option>
              <option>已完成</option>
              <option>待支付</option>
              <option>已取消</option>
            </select>
            <button className="inline-flex items-center px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <Filter size={16} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">订单信息</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">买家</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">支付明细</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">状态</th>
                <th scope="col" className="relative px-6 py-4"><span className="sr-only">操作</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {mockOrders.map((order) => {
                const status = statusStyles[order.status as keyof typeof statusStyles];
                const StatusIcon = status.icon;
                return (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{order.item}</span>
                        <span className="text-xs text-gray-500 mt-1 font-mono">{order.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">
                          {order.user.charAt(0)}
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-900">{order.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">¥ {order.amount.toFixed(2)}</span>
                        <span className="text-xs text-gray-500 mt-1">{order.method}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium \${status.bg} \${status.text}`}>
                        <StatusIcon size={14} className="mr-1.5" />
                        {status.label}
                      </div>
                      <div className="text-xs text-gray-400 mt-1.5">{order.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-900 p-1.5 rounded hover:bg-gray-100 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-center">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            加载更多
          </button>
        </div>
      </div>
    </div>
  );
}
