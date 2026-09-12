import React, { useState, useMemo } from 'react';
import { timelineData } from '../data/timelineData';
import { TimelineItem, CategoryType } from '../types';
import { Search, Filter, BookOpen, Clock, MapPin, Users, CheckCircle2, ChevronRight, X, Quote, Sparkles } from 'lucide-react';

const categoryLabels: Record<CategoryType, { label: string; color: string }> = {
  early_life: { label: '早年期・学生時代 (1854-1880)', color: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30' },
  baker_street: { label: 'ベイカー街初期 (1881-1887)', color: 'bg-blue-950/60 text-blue-300 border-blue-500/30' },
  fame_period: { label: '名声確立期 (1888-1891)', color: 'bg-amber-950/60 text-amber-300 border-amber-500/30' },
  great_hiatus: { label: '大空白期 (1891-1894)', color: 'bg-purple-950/60 text-purple-300 border-purple-500/30' },
  return_period: { label: '帰還・成熟期 (1894-1902)', color: 'bg-rose-950/60 text-rose-300 border-rose-500/30' },
  retirement: { label: '引退・サセックス期 (1903-1914)', color: 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30' },
};

interface TimelineSectionProps {
  highlightId?: string | null;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ highlightId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all');
  const [selectedItemForModal, setSelectedItemForModal] = useState<TimelineItem | null>(null);
  const [onlyHighImportance, setOnlyHighImportance] = useState(false);

  // Filtered timeline list
  const filteredItems = useMemo(() => {
    return timelineData.filter(item => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Importance filter
      if (onlyHighImportance && item.importance !== 'high') {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchSummary = item.summary.toLowerCase().includes(query);
        const matchActions = item.actionsPerformed.some(a => a.toLowerCase().includes(query));
        const matchSource = item.source.titleJa.toLowerCase().includes(query) || item.source.titleEn.toLowerCase().includes(query);
        const matchLocation = item.location.toLowerCase().includes(query);
        const matchFigures = item.keyFigures.some(f => f.toLowerCase().includes(query));

        return matchTitle || matchSummary || matchActions || matchSource || matchLocation || matchFigures;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, onlyHighImportance]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#c99a4e]/20 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a4e] font-cinzel mb-2">
            <Clock className="w-4 h-4" />
            <span>Chronological Canon Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white">
            シャーロック・ホームズ 作中行動年表
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            聖典全60作品から編纂したホームズの具体的行動と事件履歴。すべての出来事には原典作品および章の根拠が明記されています。
          </p>
        </div>

        <div className="text-sm text-[#c99a4e] font-medium bg-[#c99a4e]/10 px-4 py-2 rounded-lg border border-[#c99a4e]/30 flex items-center space-x-2">
          <span>表示件数: {filteredItems.length} / {timelineData.length} 件</span>
        </div>
      </div>

      {/* Filters & Search Control Bar */}
      <div className="glass-panel p-4 sm:p-6 rounded-2xl space-y-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="出来事・行動・登場人物・作品名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/15 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#c99a4e] focus:ring-1 focus:ring-[#c99a4e] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#c99a4e] text-black font-bold border-[#c99a4e]'
                  : 'bg-black/40 text-gray-300 border-white/10 hover:border-white/30'
              }`}
            >
              全期間
            </button>
            {(Object.keys(categoryLabels) as CategoryType[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#c99a4e] text-black font-bold border-[#c99a4e]'
                    : 'bg-black/40 text-gray-300 border-white/10 hover:border-white/30'
                }`}
              >
                {categoryLabels[cat].label.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Timeline List */}
      <div className="relative pl-4 sm:pl-8 border-l-2 border-[#c99a4e]/30 space-y-10 my-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl">
            <Search className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-300 font-medium">該当する年表エントリが見つかりませんでした。</p>
            <p className="text-xs text-gray-500 mt-1">検索条件を変更するか、フィルターをリセットしてください。</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 bg-[#c99a4e]/20 text-[#c99a4e] border border-[#c99a4e]/40 rounded-lg text-xs font-medium hover:bg-[#c99a4e]/30"
            >
              フィルターをリセット
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isHighlighted = highlightId === item.id;
            const categoryInfo = categoryLabels[item.category];

            return (
              <div 
                key={item.id} 
                id={item.id}
                className={`relative transition-all duration-500 ${
                  isHighlighted ? 'ring-2 ring-[#c99a4e] ring-offset-4 ring-offset-[#0b0c10] rounded-2xl p-2 bg-[#c99a4e]/10' : ''
                }`}
              >
                {/* Timeline Point Bullet Marker */}
                <div className="absolute -left-[25px] sm:-left-[41px] top-6 w-5 h-5 rounded-full bg-[#0b0c10] border-2 border-[#c99a4e] flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full bg-[#c99a4e] animate-pulse" />
                </div>

                {/* Timeline Card */}
                <div className="glass-card rounded-2xl p-6 space-y-5 border border-white/10 hover:border-[#c99a4e]/40">
                  
                  {/* Card Header: Year & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl sm:text-2xl font-black font-cinzel text-gold-gradient">
                        {item.displayDate}
                      </span>
                      <span className={`text-[11px] px-2.5 py-1 rounded-full border font-medium ${categoryInfo.color}`}>
                        {categoryInfo.label}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-[#c99a4e]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-xl font-bold font-serif-custom text-white hover:text-[#c99a4e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Actions Performed (ホームズが作中で行なったこと) */}
                  <div className="bg-black/40 rounded-xl p-4 border border-white/5 space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-[#c99a4e] uppercase tracking-wider font-cinzel">
                      <CheckCircle2 className="w-4 h-4 text-[#c99a4e]" />
                      <span>作中でシャーロック・ホームズが行ったこと</span>
                    </div>
                    <ul className="space-y-1.5 pt-1">
                      {item.actionsPerformed.map((action, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-gray-200 flex items-start space-x-2">
                          <span className="text-[#c99a4e] font-bold mt-0.5">•</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deduction Notes if available */}
                  {item.deductionNotes && (
                    <div className="text-xs text-amber-200/90 bg-[#c99a4e]/10 border-l-2 border-[#c99a4e] p-3 rounded-r-lg italic">
                      <strong className="font-sans not-italic text-[#c99a4e] font-semibold">推論のポイント: </strong>
                      {item.deductionNotes}
                    </div>
                  )}

                  {/* Card Footer: Figures & Primary Source Trigger */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/10">
                    
                    {/* Key Figures */}
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>関係者: {item.keyFigures.join(', ')}</span>
                    </div>

                    {/* Primary Source Button */}
                    <button
                      onClick={() => setSelectedItemForModal(item)}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#c99a4e]/15 hover:bg-[#c99a4e]/30 border border-[#c99a4e]/40 text-xs font-semibold text-[#e5b362] transition-all self-start sm:self-auto group"
                    >
                      <BookOpen className="w-4 h-4 text-[#c99a4e]" />
                      <span>原典ソースを表示: 『{item.source.titleJa}』</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#c99a4e] group-hover:translate-x-0.5 transition-transform" />
                    </button>

                  </div>

                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Primary Source Detail Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-[#c99a4e]/40 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#14171d] to-[#1c222e]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#c99a4e]/20 border border-[#c99a4e]/40 flex items-center justify-center text-[#c99a4e]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 tracking-widest uppercase font-cinzel block">
                    Primary Canon Source Verification
                  </span>
                  <h3 className="text-xl font-bold font-cinzel text-white">
                    原典ソース根拠データ
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Event Title Reference */}
              <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="text-xs text-gray-400 mb-1">対象の年表出来事 ({selectedItemForModal.displayDate})</div>
                <div className="text-base font-bold text-white font-serif-custom">{selectedItemForModal.title}</div>
              </div>

              {/* Source Work Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl border border-white/10 space-y-1">
                  <div className="text-xs text-[#c99a4e] font-cinzel font-semibold">作品名（日本語）</div>
                  <div className="text-lg font-bold text-white">{selectedItemForModal.source.titleJa}</div>
                  <div className="text-xs text-gray-400">({selectedItemForModal.source.type === 'Novel' ? '長編小説' : '短編小説'})</div>
                </div>

                <div className="glass-card p-4 rounded-xl border border-white/10 space-y-1">
                  <div className="text-xs text-[#c99a4e] font-cinzel font-semibold">English Title & Abbr</div>
                  <div className="text-base font-bold text-white italic">{selectedItemForModal.source.titleEn}</div>
                  <div className="text-xs text-gray-400">略称: {selectedItemForModal.source.abbreviation} / 発表: {selectedItemForModal.source.publishedYear}年</div>
                </div>
              </div>

              {/* Chapter & Location */}
              <div className="glass-card p-4 rounded-xl border border-white/10 space-y-2">
                <div className="text-xs text-[#c99a4e] font-cinzel font-semibold">聖典内の該当箇所（章 / 節）</div>
                <div className="text-sm text-gray-200 font-medium">{selectedItemForModal.source.chapterOrSection}</div>
              </div>

              {/* Original Quote */}
              {selectedItemForModal.source.quoteJa && (
                <div className="bg-gradient-to-r from-[#721c24]/20 to-black/60 p-5 rounded-xl border border-[#721c24]/40 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-rose-300 font-cinzel">
                    <Quote className="w-4 h-4 text-rose-400" />
                    <span>聖典からの引用テキスト (Canon Citation)</span>
                  </div>
                  <blockquote className="text-sm font-serif-custom italic text-amber-100 pl-3 border-l-2 border-rose-400">
                    "{selectedItemForModal.source.quoteJa}"
                  </blockquote>
                  {selectedItemForModal.source.quoteEn && (
                    <div className="text-xs text-gray-400 italic pt-1 pl-3">
                      English: "{selectedItemForModal.source.quoteEn}"
                    </div>
                  )}
                </div>
              )}

              {/* Actions List in Modal */}
              <div className="space-y-2">
                <div className="text-xs text-gray-400 font-semibold font-cinzel uppercase">
                  作中におけるホームズの主要な実行事項
                </div>
                <div className="bg-black/30 p-3 rounded-xl border border-white/5 space-y-1.5">
                  {selectedItemForModal.actionsPerformed.map((act, i) => (
                    <div key={i} className="text-xs text-gray-300 flex items-start space-x-2">
                      <span className="text-[#c99a4e] font-bold">•</span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-black/40 text-right">
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="px-5 py-2 bg-[#c99a4e] text-black font-bold rounded-lg text-xs hover:brightness-110 transition-all"
              >
                閉じる
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
