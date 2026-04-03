import React from 'react';
import { Wallet, CreditCard, ArrowUpRight, ArrowDownRight, RefreshCw, FileText } from 'lucide-react';

const mockFinance = [
  { id: 'T20240520001', type: '收入', amount: 299.00, balance: 15420.50, desc: '微信支付充值', time: '2024-05-20 14:23' },
  { id: 'T20240520002', type: '支出', amount: -15.00, balance: 15405.50, desc: '短信服务扣费 (1000条)', time: '2024-05-20 15:10' },
  { id: 'T20240519001', type: '收入', amount: 49.90, balance: 15121.50, desc: '支付宝充值', time: '2024-05-19 09:30' },
  { id: 'T20240518001', type: '提现', amount: -5000.00, balance: 15071.60, desc: '银行卡提现 (尾号 4567)', time: '2024-05-18 16:45' },
];

export function Finance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">财务管理</h1>
          <p className="text-sm text-gray-500 mt-1">查看资金流水、充值提现及服务扣费明细。</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm gap-2 flex items-center">
            <FileText size={16} /> 导出流水
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 shadow-sm gap-2 flex items-center">
            <Wallet size={16} /> 立即充值
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm shadow-blue-50/50 flex flex-col justify-between">
           <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 text-sm font-medium">账户可用余额 (元)</span>
              <Wallet className="text-blue-600" size={24} />
           </div>
           <div className="text-3xl font-bold text-gray-900">15,405.50</div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm flex flex-col justify-between">
           <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 text-sm font-medium">本月累计收入 (元)</span>
              <ArrowUpRight className="text-green-500" size={24} />
           </div>
           <div className="text-3xl font-bold text-gray-900">8,240.00</div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm flex flex-col justify-between">
           <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 text-sm font-medium">本月累计支出 (元)</span>
              <ArrowDownRight className="text-red-500" size={24} />
           </div>
           <div className="text-3xl font-bold text-gray-900">1,425.80</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <h3 className="font-bold text-gray-900">资金流水明细</h3>
            <button className="text-gray-500 hover:text-blue-600 p-1"><RefreshCw size={16} /></button>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">流水号 / 时间</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">交易类型</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">交易金额</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">账户余额</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">业务描述</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {mockFinance.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                   <div className="text-xs font-mono text-gray-500">{item.id}</div>
                   <div className="text-sm font-medium text-gray-900 mt-1">{item.time}</div>
                </td>
                <td className="px-6 py-4">
                   <span className={`px-2 py-1 text-xs rounded-full font-medium \${
                      item.type === '收入' ? 'bg-green-100 text-green-700' : 
                      item.type === '支出' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                   }`}>
                      {item.type}
                   </span>
                </td>
                <td className="px-6 py-4">
                   <span className={`text-base font-bold \${item.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.amount > 0 ? '+' : ''}{item.amount.toFixed(2)}
                   </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                   ¥ {item.balance.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                   {item.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
