import React from 'react';
import { Clock, BookOpen, MessageSquare, Compass, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: 'timeline' | 'sources' | 'watson' | 'deduction') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-black text-[#f5f5f7] pt-20 pb-20 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Apple Sub-badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#1c1c1e] border border-white/10 text-[11px] font-medium text-[#86868b]">
          221B Baker Street Archive
        </div>

        {/* Minimal Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
          Sherlock Holmes
        </h1>
        <p className="text-lg sm:text-xl text-[#86868b] font-normal tracking-tight">
          聖典作中行動年表・原典アーカイブ
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onNavigate('timeline')}
            className="apple-button-primary px-6 py-2.5 text-xs flex items-center space-x-2"
          >
            <span>年表を見る</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate('sources')}
            className="apple-button-secondary px-6 py-2.5 text-xs flex items-center space-x-2"
          >
            <span>原典カタログ</span>
          </button>
        </div>

        {/* Minimal Grid */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          <div 
            onClick={() => onNavigate('timeline')}
            className="apple-card p-6 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <Clock className="w-4 h-4 text-[#f5f5f7]" />
              <span className="text-[10px] font-mono text-[#86868b]">1854–1914</span>
            </div>
            <h3 className="text-sm font-semibold text-white group-hover:text-[#e3c07b] transition-colors">
              作中行動年表
            </h3>
            <p className="text-xs text-[#86868b] mt-1">
              全60作品の行動履歴。
            </p>
          </div>

          <div 
            onClick={() => onNavigate('sources')}
            className="apple-card p-6 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <BookOpen className="w-4 h-4 text-[#f5f5f7]" />
              <span className="text-[10px] font-mono text-[#86868b]">60 Works</span>
            </div>
            <h3 className="text-sm font-semibold text-white group-hover:text-[#e3c07b] transition-colors">
              原典ソース
            </h3>
            <p className="text-xs text-[#86868b] mt-1">
              該当作品・章・引用の照合。
            </p>
          </div>

          <div 
            onClick={() => onNavigate('watson')}
            className="apple-card p-6 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <MessageSquare className="w-4 h-4 text-[#f5f5f7]" />
              <span className="text-[10px] text-[#86868b]">Dialogue</span>
            </div>
            <h3 className="text-sm font-semibold text-white group-hover:text-[#e3c07b] transition-colors">
              ワトソン対話室
            </h3>
            <p className="text-xs text-[#86868b] mt-1">
              聖典記録に基づく対話。
            </p>
          </div>

          <div 
            onClick={() => onNavigate('deduction')}
            className="apple-card p-6 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <Compass className="w-4 h-4 text-[#f5f5f7]" />
              <span className="text-[10px] text-[#86868b]">Deduction</span>
            </div>
            <h3 className="text-sm font-semibold text-white group-hover:text-[#e3c07b] transition-colors">
              演繹考察ラボ
            </h3>
            <p className="text-xs text-[#86868b] mt-1">
              観察からの推論再構成。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
