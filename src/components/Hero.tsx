import React from 'react';
import { Clock, BookOpen, MessageSquare, Compass, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: 'timeline' | 'sources' | 'watson' | 'deduction') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-black text-[#f5f5f7] pt-20 pb-24 border-b border-white/10">
      
      {/* Subtle Background Glow (Apple-style subtle gradient spotlight) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#333338]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Apple Sub-badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1c1c1e] border border-white/10 text-[12px] font-medium text-[#86868b]">
          <span>The Complete Canon Chronology & Interactive Archive</span>
        </div>

        {/* Hero Headline (Apple Typography) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Sherlock Holmes. <br />
          <span className="text-[#86868b] font-serif italic">聖典作中行動年表と原典アーカイブ</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#86868b] max-w-2xl mx-auto leading-relaxed font-normal">
          1854年の生誕から、ワトソンとの出会い、数々の怪事件、そしてサセックスでの隠遁まで。
          ホームズが作中で行ったすべての行動と、その根拠となる聖典60作品の原典ソースを体系化。
        </p>

        {/* Apple Style Action Buttons */}
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onNavigate('timeline')}
            className="apple-button-primary px-6 py-3 text-sm flex items-center space-x-2"
          >
            <span>年表アーカイブを探索</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('sources')}
            className="apple-button-secondary px-6 py-3 text-sm flex items-center space-x-2"
          >
            <span>原典ソースカタログ</span>
          </button>
        </div>

        {/* Apple Feature Grid (Minimal Product Cards) */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          <div 
            onClick={() => onNavigate('timeline')}
            className="apple-card p-6 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-5 h-5 text-[#f5f5f7]" />
              <span className="text-[11px] font-mono text-[#86868b]">1854–1914</span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-[#e3c07b] transition-colors">
              生涯全作中年表
            </h3>
            <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
              聖典全60作品から抽出した具体的行動履歴と年代順記録。
            </p>
          </div>

          <div 
            onClick={() => onNavigate('sources')}
            className="apple-card p-6 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="w-5 h-5 text-[#f5f5f7]" />
              <span className="text-[11px] font-mono text-[#86868b]">60 Works</span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-[#e3c07b] transition-colors">
              原典ソース根拠
            </h3>
            <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
              該当作品・章・節および原典引用テキストを厳密に照合。
            </p>
          </div>

          <div 
            onClick={() => onNavigate('watson')}
            className="apple-card p-6 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="w-5 h-5 text-[#f5f5f7]" />
              <span className="text-[11px] text-[#86868b]">Dialogue</span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-[#e3c07b] transition-colors">
              ワトソン対話室
            </h3>
            <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
              ワトソン博士の記録に基づくインタラクティブ対話アーキテクチャ。
            </p>
          </div>

          <div 
            onClick={() => onNavigate('deduction')}
            className="apple-card p-6 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <Compass className="w-5 h-5 text-[#f5f5f7]" />
              <span className="text-[11px] text-[#86868b]">Deduction</span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-[#e3c07b] transition-colors">
              演繹考察ラボ
            </h3>
            <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
              観察手がかりからホームズの推論プロセスを科学的に再構成。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
