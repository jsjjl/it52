import React from 'react';
import { Settings, Image, Database, Key, LayoutTemplate, Zap, FileJson } from 'lucide-react';

export function FactorySettings() {
  const settingsCards = [
    { title: '基本信息', desc: '修改工厂名称、Logo、简介等基础配置', icon: Settings, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: '接口密钥 (Token)', desc: '查看和重置您的API调用凭证', icon: Key, color: 'text-amber-600', bg: 'bg-amber-50' },
    { title: '模块开关', desc: '一键开启或关闭各项扩展功能模块', icon: Zap, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: '域名与HTTPS', desc: '配置专属域名、自定义域名及SSL证书', icon: Database, color: 'text-green-600', bg: 'bg-green-50' },
    { title: '页面主题', desc: '设置系统前台的UI主题与色调', icon: LayoutTemplate, color: 'text-rose-600', bg: 'bg-rose-50' },
    { title: '图库管理', desc: '管理上传的图片、视频等云存储资源', icon: Image, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'Webhook 配置', desc: '设置事件回调地址及数据格式', icon: FileJson, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">工厂设置</h1>
        <p className="text-sm text-gray-500 mt-1">全局管理您的 api工厂 基础配置和功能模块。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {settingsCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
             <div className="flex items-start justify-between mb-4">
                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center \${card.bg} \${card.color} group-hover:scale-110 transition-transform`}>
                    <card.icon size={24} />
                 </div>
             </div>
             <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
             <p className="text-sm text-gray-500 leading-relaxed h-10">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
