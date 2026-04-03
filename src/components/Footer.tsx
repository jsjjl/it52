import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                a
              </div>
              <span className="text-2xl font-bold text-white">
                api工厂
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              全面支持 Web & 小程序 & App 开发。通过中台开发你的应用，你将无需写接口，无需写后台，无需买服务器！只要你会前端开发，即可轻松集成我们的海量API接口，通过在线云后台管理数据。如果你啥都不懂，直接使用我们推荐的开源项目，依然可以做到开箱即用，学习成本几乎为 “0”。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">开发资源</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">前端接口文档</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">后台接口文档</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">SDK 使用说明</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">开源前端代码</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">功能更新日志</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">产品服务</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">移动端管理后台</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pad 收银机系统</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">服务价格购买</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">VIP 专属功能</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">小程序插件中心</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} api工厂. 保留所有权利.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">浙ICP备 xxxxxxxx 号</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
