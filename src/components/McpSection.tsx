import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, Bot } from 'lucide-react';

export function McpSection() {
  const [copied, setCopied] = useState(false);

  const mcpCode = `{
  "mcpServers": {
    "api工厂": {
      "type": "http",
      "url": "https://common.apifm.com/xxxxx/mcp/endpoint",
      "autoRecall": true
    }
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(mcpCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl text-blue-600 mb-6">
            <Bot size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">MCP配置 - AI帮你做开发</h2>
          <p className="text-lg text-gray-600">
            在Qoder、Trae、Cursor、Claude等AI开发工具中，添加MCP，你只需要给出指令，AI自动通过MCP检索并学习SDK文档，为您自动完成开发。
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm font-medium text-gray-400">mcp-config.json</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg"
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              {copied ? '已复制' : '复制代码'}
            </button>
          </div>
          
          <div className="p-6 overflow-x-auto text-sm">
            <p className="text-gray-400 mb-4 pb-4 border-b border-gray-800">
              // 开发工具，找到设置，添加MCP的地方，手动添加MCP，复制下面的代码
              <br/>
              // <span className="text-yellow-400">注意：请将【xxxxx】替换成你自己的专属域名</span>
            </p>
            <SyntaxHighlighter
              language="json"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: 0,
                background: 'transparent',
              }}
            >
              {mcpCode}
            </SyntaxHighlighter>
          </div>
        </div>
        
        <div className="text-center mt-12">
           <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              立即开始 AI 开发
            </a>
        </div>
      </div>
    </section>
  );
}
