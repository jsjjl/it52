import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BookOpen, ArrowRight } from 'lucide-react';

const docs = [
  {
    id: 'frontend',
    title: '前端接口文档',
    description: '使用前端接口进行前端开发APP，小程序,H5等任何可以调用API的使用场景。',
    icon: Code2,
    link: 'https://api.it120.cc/doc.html#/home',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'backend',
    title: '后台接口文档',
    description: '和您现有系统做集成对接、或者基于现有功能做扩展开发和集成。',
    icon: Server,
    link: 'https://user.api.it120.cc/doc.html',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'sdk',
    title: 'SDK使用文档',
    description: 'SDK帮你封装好了所有的前端API接口，可以更加方便的进行前端开发。',
    icon: BookOpen,
    link: 'https://www.it120.cc/sdk/index.html',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  }
];

export function DocsNav() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">API接口 / SDK文档</h2>
          <p className="text-lg text-gray-600">
            在您的前端代码中快速集成我们的API接口或者SDK，大幅提升开发效率。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {docs.map((doc, index) => (
            <motion.a
              key={doc.id}
              href={doc.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`block p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group`}
            >
              <div className={`w-14 h-14 rounded-xl \${doc.bgColor} flex items-center justify-center mb-6 border \${doc.borderColor}` }>
                <doc.icon className={`w-7 h-7 \${doc.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {doc.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                {doc.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                立即查阅
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
