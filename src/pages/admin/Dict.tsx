import React from 'react';
import { Database, Plus, Search, BookOpen } from 'lucide-react';

const mockDict = [
  { id: 1, key: 'ORDER_STATUS', name: '订单状态字典', desc: '定义所有业务订单的生命周期状态', count: 5, time: '2024-05-10' },
  { id: 2, key: 'USER_LEVEL', name: '用户等级字典', desc: '区分普通、VIP及高级代理商', count: 3, time: '2024-05-12' },
  { id: 3, key: 'PAY_METHOD', name: '支付方式配置', desc: '支持的第三方支付通道枚举', count: 4, time: '2024-05-15' },
  { id: 4, key: 'REFUND_REASON', name: '退款原因模板', desc: '用户发起退款时可选择的常见原因', count: 8, time: '2024-05-18' },
];

export function Dict() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">数据字典</h1>
          <p className="text-sm text-gray-500 mt-1">维护系统常用的键值对、枚举与配置项。</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors gap-2">
          <Plus size={18} /> 新增字典项
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="搜索字典名称或 Key..." className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none" />
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">字典名称 / Key</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述说明</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项数</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">更新时间</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {mockDict.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                   <div className="text-sm font-bold text-gray-900 flex items-center gap-2">
                      <Database size={14} className="text-blue-500" />
                      {item.name}
                   </div>
                   <div className="text-xs font-mono text-gray-500 mt-1 bg-gray-100 px-1 py-0.5 rounded inline-block">{item.key}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.desc}</td>
                <td className="px-6 py-4">
                   <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                      {item.count} 项
                   </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.time}</td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center justify-end w-full gap-1">
                     <BookOpen size={16} /> 配置数据
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
