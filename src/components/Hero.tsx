import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-blue-400 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-blue-300 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              稳定运行 10+ 年
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
              <span className="block text-blue-600">前端PaaS中台</span>
              <span className="block mt-2 text-4xl lg:text-5xl">Web & H5 & 小程序 & App</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              开发应用，将无需写接口，无需写后台，无需买服务器！<br/>
              只需前端开发，即可轻松集成我们的海量API接口，通过在线云后台管理数据。<br/>
              直接使用开源项目，开箱即用，学习成本几乎为 “0”。
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                立即开始
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a 
                href="https://www.it120.cc/help/uq920k.html" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-blue-600 bg-white border border-blue-200 hover:bg-blue-50 hover:border-blue-300 shadow-sm transition-all duration-300"
              >
                开源前端代码
              </a>
              <a 
                href="https://www.it120.cc/changelogs.html" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 shadow-sm transition-all duration-300"
              >
                功能更新日志
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://www.it120.cc/assets/img/svg/illustrations/illustration-3.svg" 
                alt="API Platform Illustration" 
                className="w-full h-auto drop-shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
