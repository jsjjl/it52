import React, { useState } from 'react';
import { Globe, Shield, MessageSquare, CreditCard, Database, Settings2, Copy, Check, Info } from 'lucide-react';

const modules = [
  { id: 'm1', name: '微信支付', icon: CreditCard, description: '支持微信公众号、小程序、H5、App及扫码支付接入', enabled: true },
  { id: 'm2', name: '支付宝支付', icon: CreditCard, description: '支持支付宝电脑网站、手机网站、App及当面付', enabled: true },
  { id: 'm3', name: '短信服务', icon: MessageSquare, description: '验证码、通知类短信发送，支持自定义签名', enabled: false },
  { id: 'm4', name: '云存储 (OSS)', icon: Database, description: '海量、安全、低成本、高可靠的云存储服务', enabled: true },
  { id: 'm5', name: '实名认证', icon: Shield, description: '身份证二要素、活体检测、银行卡鉴权', enabled: false },
  { id: 'm6', name: '高级配置', icon: Settings2, description: '自定义域名、IP白名单及Webhook回调设置', enabled: true },
];

export function Apps() {
  const [copied, setCopied] = useState(false);
  const [enabledModules, setEnabledModules] = useState<Record<string, boolean>>(
    modules.reduce((acc, m) => ({ ...acc, [m.id]: m.enabled }), {})
  );

  const exclusiveDomain = "tz82910";

  const handleCopy = () => {
    navigator.clipboard.writeText(exclusiveDomain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleModule = (id: string) => {
    setEnabledModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">应用与模块</h1>
        <p className="text-sm text-gray-500 mt-1">管理您的专属域名及功能模块开关配置。</p>
      </div>

      {/* Domain Info */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Globe size={24} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 mb-1">专属域名 (Domain)</h2>
            <p className="text-sm text-gray-500 mb-4 max-w-2xl leading-relaxed">
              您的专属域名是您调用所有接口的唯一凭证，请将其配置在前端项目中。如果是小程序项目，请将其加入到合法域名列表中。
            </p>
            
            <div className="flex items-center gap-3">
              <div className="bg-gray-50 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-800 font-mono font-medium tracking-wider">
                {exclusiveDomain}
              </div>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                {copied ? '已复制' : '复制域名'}
              </button>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-4 py-3 rounded-lg border border-amber-100">
              <Info size={16} className="shrink-0" />
              <span>请妥善保管您的专属域名，不要将其泄露给无关人员。</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">功能模块配置</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const isEnabled = enabledModules[module.id];
            return (
              <div 
                key={module.id} 
                className={`bg-white rounded-2xl p-6 border transition-all duration-300 \${
                  isEnabled ? 'border-blue-200 shadow-md shadow-blue-50/50' : 'border-gray-200 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center \${
                    isEnabled ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <module.icon size={24} />
                  </div>
                  
                  {/* Toggle Switch */}
                  <button 
                    onClick={() => toggleModule(module.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none \${
                      isEnabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 \${
                        isEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <h3 className={`text-lg font-bold mb-2 \${isEnabled ? 'text-gray-900' : 'text-gray-500'}`}>
                  {module.name}
                </h3>
                <p className={`text-sm leading-relaxed \${isEnabled ? 'text-gray-600' : 'text-gray-400'}`}>
                  {module.description}
                </p>
                
                {isEnabled && (
                  <div className="mt-5 pt-4 border-t border-gray-100 flex justify-end">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      参数设置 →
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
