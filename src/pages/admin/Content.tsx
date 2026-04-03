import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';

const mockContent = [
  { id: 1, title: '2024年端午节放假通知', category: '系统公告', status: '已发布', time: '2024-05-20 10:00' },
  { id: 2, title: '新手接入API快速指南', category: '帮助文档', status: '已发布', time: '2024-05-18 14:30' },
  { id: 3, title: '关于支付接口调整的说明', category: '重要通知', status: '草稿', time: '2024-05-15 09:15' },
  { id: 4, title: '如何配置自定义域名？', category: '帮助文档', status: '已发布', time: '2024-05-10 16:45' },
];

export function Content() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">内容管理</h1>
          <p className="text-sm text-gray-500 mt-1">管理系统文章、公告、单页图文等内容。</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors gap-2">
          <Plus size={18} /> 发布新内容
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="搜索标题..." className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none" />
          </div>
          <select className="border border-gray-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none">
             <option>所有分类</option>
             <option>系统公告</option>
             <option>帮助文档</option>
          </select>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">标题</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分类</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">发布时间</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {mockContent.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.category}</td>
                <td className="px-6 py-4">
                   <span className={`px-2 py-1 text-xs rounded-full \${item.status === '已发布' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {item.status}
                   </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.time}</td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-800 mr-3"><Edit2 size={16} /></button>
                  <button className="text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
