import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, MessageCircle, Phone, Mail } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<'phone' | 'email'>('phone');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (account === '15861382053' && password === 'a2024') {
        navigate('/admin/dashboard');
    } else {
        alert("账号或密码错误！");
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* 顶部语言切换 */}
      <div className="absolute top-4 right-8 text-sm text-gray-500 cursor-pointer hover:text-gray-900 transition-colors">
        简体中文
      </div>

      <div className="max-w-md w-full mx-auto relative z-10">
        
        {/* 标题区 */}
        <div className="text-center mb-8">
           <h2 className="text-3xl font-bold text-gray-900 tracking-tight">后台管理系统</h2>
           <p className="mt-2 text-sm text-gray-500">Management System v5.0</p>
        </div>

        {/* 登录卡片 */}
        <div className="bg-white py-8 px-6 shadow-md sm:rounded-lg sm:px-10 border border-gray-100">
          
          {/* 登录方式切换 */}
          <div className="flex border-b border-gray-200 mb-8">
             <button 
                onClick={() => setLoginType('phone')}
                className={`flex-1 pb-3 text-center text-sm font-medium transition-colors \${loginType === 'phone' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
             >
                 <Phone size={16} className="inline mr-2 -mt-0.5" />
                 手机登录
             </button>
             <button 
                onClick={() => setLoginType('email')}
                className={`flex-1 pb-3 text-center text-sm font-medium transition-colors \${loginType === 'email' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
             >
                 <Mail size={16} className="inline mr-2 -mt-0.5" />
                 邮箱登录
             </button>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* 账号输入框 */}
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder={loginType === 'phone' ? '请输入手机号' : '请输入邮箱'}
                />
              </div>
            </div>

            {/* 密码输入框 */}
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="请输入密码"
                />
              </div>
            </div>

            {/* 记住密码 & 登录按钮 */}
            <div className="flex items-center justify-between mt-4 mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                  记住登录状态
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                登录
              </button>
            </div>
          </form>

          {/* 底部辅助链接 */}
          <div className="mt-8 flex justify-between items-center text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  开通新后台
              </a>
              <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                     忘记密码
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors flex items-center">
                     有问题找客服
                  </a>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}
