import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Lock, Activity, Database, CheckCircle2 } from 'lucide-react';

export function SecuritySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 服务稳定与资金安全 */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* 服务稳定 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Server size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">服务稳定 数据安全</h3>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              由“api工厂”提供稳定高效的云服务，数据多机房异地实时热备，专业运维工程师 7x24 安心运维。
            </p>
            <ul className="space-y-5">
              {[
                { icon: Activity, title: '专业运维', desc: '实时监控入侵和攻击' },
                { icon: Lock, title: '代码安全', desc: '10年打磨，防止代码层面漏洞和BUG' },
                { icon: Database, title: '数据灾备', desc: '跨机房多机热备，防止硬盘故障数据丢失' },
                { icon: ShieldCheck, title: '业务安全', desc: '严格的权限控制以及运维审批机制，防误删' }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4 shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 资金安全 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">资金安全更放心</h3>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              商家在微信、支付宝直接开设专属商户号，只提供技术对接全程不碰资金。支付费率和微信、支付宝自行协商，平台不额外抽佣。
            </p>
            <ul className="space-y-5">
              {[
                '支持线下收款',
                '支持微信付款码收款',
                '支持支付宝付款码收款'
              ].map((text, i) => (
                <li key={i} className="flex items-center bg-gray-50 p-4 rounded-xl">
                  <CheckCircle2 className="text-green-500 mr-3 shrink-0" size={24} />
                  <span className="text-gray-800 font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
              <img 
                src="https://www.it120.cc/assets/img/zijinanquan.jpg" 
                alt="资金安全保障" 
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* 荣誉资质 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">荣誉资质</h2>
          <p className="text-lg text-gray-600">公司获得“浙江省科技型中小企业”、“国家科技型中小企业”等荣誉</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            'https://dcdn.it120.cc/2025/03/29/5fb2a229-22bc-4e7f-9eff-5d6ad4ea3914.png',
            'https://dcdn.it120.cc/2025/03/29/c0e46dfa-9f86-4568-95e9-2793759de697.jpg',
            'https://dcdn.it120.cc/2025/03/29/793929c8-ef0b-4000-9c9c-965f8fdf3a27.jpg',
            'https://dcdn.it120.cc/2025/03/29/1cfc97be-f9f7-4d00-8a29-80984795d0ec.jpg'
          ].map((url, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100"
            >
              <img src={url} alt={`荣誉资质 \${i+1}`} className="w-full h-auto rounded-xl" />
            </motion.div>
          ))}
        </div>

        {/* 合作伙伴 */}
        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -mb-20 -ml-20"></div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 relative z-10">合作伙伴都在用“api工厂”</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto relative z-10 leading-relaxed">
            使用“api工厂”比传统开发至少可以节约 <span className="text-white font-bold border-b-2 border-yellow-400 pb-1">90%</span> 的成本和交付周期。<br/>
            基于成熟稳定的系统交付，可明显减少后期的运维成本。
          </p>
          <button className="bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg relative z-10">
            免费注册体验
          </button>
        </div>

      </div>
    </section>
  );
}
