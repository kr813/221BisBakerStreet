import React from 'react';
import { BookOpen, Clock, Bot, Compass, Github, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: 'timeline' | 'sources' | 'watson' | 'deduction';
  setActiveTab: (tab: 'timeline' | 'sources' | 'watson' | 'deduction') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-[#c99a4e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Title */}
          <div 
            onClick={() => setActiveTab('timeline')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c99a4e] to-[#721c24] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-xl font-bold font-cinzel text-black">221B</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-wider font-cinzel text-gold-gradient block leading-tight">
                221B Baker Street
              </span>
              <span className="text-[10px] text-gray-400 font-sans tracking-widest uppercase block">
                Sherlock Holmes Portal & Chronology
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'timeline'
                  ? 'bg-[#c99a4e]/20 text-[#c99a4e] border border-[#c99a4e]/40 shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Clock className="w-4 h-4 text-[#c99a4e]" />
              <span>聖典年表</span>
            </button>

            <button
              onClick={() => setActiveTab('sources')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'sources'
                  ? 'bg-[#c99a4e]/20 text-[#c99a4e] border border-[#c99a4e]/40 shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#c99a4e]" />
              <span>原典ソース</span>
            </button>

            <button
              onClick={() => setActiveTab('watson')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all relative ${
                activeTab === 'watson'
                  ? 'bg-[#c99a4e]/20 text-[#c99a4e] border border-[#c99a4e]/40 shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Bot className="w-4 h-4 text-[#c99a4e]" />
              <span>AI ワトソン相談室</span>
              <span className="absolute -top-1 -right-1 bg-[#721c24] text-[9px] text-amber-200 px-1.5 py-0.5 rounded-full border border-amber-400/40">
                AI
              </span>
            </button>

            <button
              onClick={() => setActiveTab('deduction')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all relative ${
                activeTab === 'deduction'
                  ? 'bg-[#c99a4e]/20 text-[#c99a4e] border border-[#c99a4e]/40 shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#c99a4e]" />
              <span>AI 演繹推理室</span>
            </button>
          </nav>

          {/* GitHub Repo Button */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/kr813/221BisBakerStreet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#c99a4e]/30 bg-black/40 hover:bg-[#c99a4e]/20 hover:border-[#c99a4e] text-xs font-medium text-gray-300 hover:text-white transition-all"
            >
              <Github className="w-4 h-4 text-[#c99a4e]" />
              <span className="hidden sm:inline">GitHub Repo</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Tab Bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'timeline' ? 'text-[#c99a4e]' : 'text-gray-400'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>年表</span>
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'sources' ? 'text-[#c99a4e]' : 'text-gray-400'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>原典ソース</span>
          </button>

          <button
            onClick={() => setActiveTab('watson')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'watson' ? 'text-[#c99a4e]' : 'text-gray-400'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>AIワトソン</span>
          </button>

          <button
            onClick={() => setActiveTab('deduction')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'deduction' ? 'text-[#c99a4e]' : 'text-gray-400'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI推理室</span>
          </button>
        </div>

      </div>
    </header>
  );
};
