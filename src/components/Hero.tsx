import React from 'react';
import { Compass, Search, Sparkles, BookOpen, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: 'timeline' | 'sources' | 'watson' | 'deduction') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#10141d] via-[#0d0f17] to-[#0b0c10] pt-12 pb-16 border-b border-[#c99a4e]/20">
      
      {/* Background Subtle Glow & Fog Effect */}
      <div className="absolute inset-0 bg-fog-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#c99a4e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#721c24]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#c99a4e]/40 bg-[#c99a4e]/10 backdrop-blur-md">
            <Compass className="w-4 h-4 text-[#c99a4e] animate-spin" style={{ animationDuration: '20s' }} />
            <span className="text-xs font-semibold tracking-wider text-[#e5b362] uppercase font-cinzel">
              Canon Chronology & AI Intelligence Hub
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-cinzel text-white leading-tight">
            シャーロック・ホームズ <br />
            <span className="text-gold-gradient font-serif-custom italic">聖典年表 & 原典アーカイブ</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
            1854年の生誕から、ワトソンとの運命の出会い、ライヘンバッハの滝での死闘、そしてサセックスでの隠遁生活まで。
            ホームズが作中で残した具体的な行動と、すべての根拠となる<strong className="text-[#c99a4e]">原典ソース（全60作品）</strong>をAIスキルとともに体系化したポータルサイト。
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('timeline')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#c99a4e] to-[#aa7c11] text-black font-bold text-sm tracking-wide shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-0.5"
            >
              <Clock className="w-5 h-5" />
              <span>聖典年表を見る</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigate('watson')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-lg border border-[#c99a4e]/40 bg-black/40 hover:bg-[#c99a4e]/15 text-white font-medium text-sm transition-all"
            >
              <Sparkles className="w-5 h-5 text-[#c99a4e]" />
              <span>AI ワトソン君と対話する</span>
            </button>
          </div>

          {/* Feature Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div 
              onClick={() => onNavigate('timeline')}
              className="glass-card p-4 rounded-xl cursor-pointer hover:border-[#c99a4e]/50 group"
            >
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-5 h-5 text-[#c99a4e]" />
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-cinzel">1854-1914</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#c99a4e] transition-colors">生涯全作中年表</h3>
              <p className="text-xs text-gray-400 mt-1">ホームズの具体的な行動記録と年代順一覧</p>
            </div>

            <div 
              onClick={() => onNavigate('sources')}
              className="glass-card p-4 rounded-xl cursor-pointer hover:border-[#c99a4e]/50 group"
            >
              <div className="flex items-center justify-between mb-2">
                <BookOpen className="w-5 h-5 text-[#c99a4e]" />
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-cinzel">60 Works</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#c99a4e] transition-colors">原典ソース証明</h3>
              <p className="text-xs text-gray-400 mt-1">登場作品・章・原典引用テキストを明記</p>
            </div>

            <div 
              onClick={() => onNavigate('watson')}
              className="glass-card p-4 rounded-xl cursor-pointer hover:border-[#c99a4e]/50 group"
            >
              <div className="flex items-center justify-between mb-2">
                <Sparkles className="w-5 h-5 text-[#c99a4e]" />
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-cinzel">AI Agent</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#c99a4e] transition-colors">AI ワトソン相談室</h3>
              <p className="text-xs text-gray-400 mt-1">聖典知識を持つAIとの対話＆カード案内</p>
            </div>

            <div 
              onClick={() => onNavigate('deduction')}
              className="glass-card p-4 rounded-xl cursor-pointer hover:border-[#c99a4e]/50 group"
            >
              <div className="flex items-center justify-between mb-2">
                <Search className="w-5 h-5 text-[#c99a4e]" />
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-cinzel">AI Deduction</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#c99a4e] transition-colors">AI 演繹推理室</h3>
              <p className="text-xs text-gray-400 mt-1">観察手がかりからのホームズ風推論体験</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
