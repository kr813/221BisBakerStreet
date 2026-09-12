import React from 'react';
import { BookOpen, Clock, MessageSquare, Compass, Github, Search } from 'lucide-react';

interface NavbarProps {
  activeTab: 'timeline' | 'sources' | 'watson' | 'deduction';
  setActiveTab: (tab: 'timeline' | 'sources' | 'watson' | 'deduction') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 apple-header-glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Minimalist Apple-style Logo */}
          <div 
            onClick={() => setActiveTab('timeline')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/20 flex items-center justify-center text-[#f5f5f7] font-semibold text-xs font-serif transition-transform group-hover:scale-105">
              221B
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-[#f5f5f7]">
                Sherlock Holmes
              </span>
              <span className="text-[10px] text-[#86868b] tracking-wider uppercase">
                221B Baker Street Archive
              </span>
            </div>
          </div>

          {/* Apple Pill Navigation */}
          <nav className="hidden md:flex items-center bg-[#1c1c1e]/80 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'timeline'
                  ? 'bg-[#f5f5f7] text-black shadow-sm font-semibold'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>年表</span>
            </button>

            <button
              onClick={() => setActiveTab('sources')}
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'sources'
                  ? 'bg-[#f5f5f7] text-black shadow-sm font-semibold'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>原典ソース</span>
            </button>

            <button
              onClick={() => setActiveTab('watson')}
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'watson'
                  ? 'bg-[#f5f5f7] text-black shadow-sm font-semibold'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>ワトソン対話室</span>
            </button>

            <button
              onClick={() => setActiveTab('deduction')}
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'deduction'
                  ? 'bg-[#f5f5f7] text-black shadow-sm font-semibold'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>演繹考察ラボ</span>
            </button>
          </nav>

          {/* GitHub Button */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/kr813/221BisBakerStreet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1c1c1e] hover:bg-[#2c2c2e] border border-white/10 text-xs font-medium text-[#f5f5f7] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'timeline' ? 'text-[#f5f5f7]' : 'text-[#86868b]'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span className="text-[10px]">年表</span>
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'sources' ? 'text-[#f5f5f7]' : 'text-[#86868b]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[10px]">原典</span>
          </button>

          <button
            onClick={() => setActiveTab('watson')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'watson' ? 'text-[#f5f5f7]' : 'text-[#86868b]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px]">対話</span>
          </button>

          <button
            onClick={() => setActiveTab('deduction')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'deduction' ? 'text-[#f5f5f7]' : 'text-[#86868b]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="text-[10px]">演繹</span>
          </button>
        </div>

      </div>
    </header>
  );
};
