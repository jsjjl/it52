import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Wallet, QrCode, CheckCircle, 
  Package, Ticket, Clock, Utensils, CalendarDays, Smartphone, MonitorSmartphone
} from 'lucide-react';

const scenes = [
  {
    id: '01',
    title: '客户信息管理',
    desc: '客户管理、实物会员卡、电子会员卡；USB刷卡器、动态会员码',
    icon: Users,
  },
  {
    id: '02',
    title: '预存及消费',
    desc: '类似食堂预充值、刷卡/扫码/凭手机号码消费扣款，详尽资金明细可溯源',
    icon: Wallet,
  },
  {
    id: '03',
    title: '付款码收款',
    desc: '输入扣款金额，用户出示付款码，结合扫码盒子可自动识别微信/支付宝',
    icon: QrCode,
  },
  {
    id: '04',
    title: '核销订单',
    desc: '根据订单ID、订单号、核销码可实现一键扫码核销；用户自助核销',
    icon: CheckCircle,
  },
  {
    id: '05',
    title: '商品管理',
    desc: '商品快速上架、下架；以及更多商品管理功能即将上线，敬请期待',
    icon: Package,
  },
  {
    id: '06',
    title: '优惠券核销',
    desc: '优惠券、商家券、活动券核销功能；扫码验券更方便，提供更多营销方案',
    icon: Ticket,
  },
  {
    id: '07',
    title: '排队取号',
    desc: '大桌/小桌取号、叫号、重置队列；绑定小票打印机自动打印取号小票',
    icon: Clock,
  },
  {
    id: '08',
    title: '点单/点餐',
    desc: '堂食帮助用户点单、支持无会员顾客点单以及帮助会员点单从预存结算',
    icon: Utensils,
  },
  {
    id: '09',
    title: '预约/报名处理',
    desc: '查看预约、报名、在线订座项目，查看预约信息并受理、取消、删除',
    icon: CalendarDays,
  }
];

export function BusinessScenes() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 移动端管理后台 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl text-blue-600 mb-6">
              <Smartphone size={32} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">移动端管理后台</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              虽然我们强烈建议您在电脑上使用管理后台，但是在紧急情况下，使用我们的移动端管理系统小程序，会更加方便。
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                <span className="text-gray-700">在外不方便使用电脑端管理后台</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                <span className="text-gray-700">进行简单的应急处理，手机操作更方便</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                <span className="text-gray-700">测试账号: 商户ID 9519 用户名 11100000224 密码 123456</span>
              </li>
            </ul>
            <a 
              href="https://admin.s2m.cc/" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors text-lg"
            >
              前往电脑端管理后台 →
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-6 scale-105 -z-10"></div>
            <img 
              src="https://dcdn.it120.cc/2025/03/29/6f8fba08-6ade-4c3b-9685-5e19d98e4a88.jpg" 
              alt="Mobile Admin" 
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* Pad就是收银机 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl text-indigo-600 mb-6">
            <MonitorSmartphone size={32} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pad 就是收银机</h2>
          <p className="text-xl text-gray-600 mb-8">可以随身携带的收银机</p>
          <a 
            href="https://www.pgyer.com/eSKP" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md hover:shadow-indigo-500/30"
          >
            下载 App 安装包
          </a>
        </div>

        {/* 9个业务场景 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenes.map((scene, index) => (
            <motion.div 
              key={scene.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-indigo-50 transition-colors duration-300 group border border-gray-100 hover:border-indigo-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                  <scene.icon size={24} />
                </div>
                <span className="text-3xl font-extrabold text-gray-200 group-hover:text-indigo-200 transition-colors">
                  {scene.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{scene.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {scene.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
