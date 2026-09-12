import React, { useState, useMemo } from 'react';
import { timelineData } from '../data/timelineData';
import { TimelineItem, CategoryType } from '../types';
import { Search, BookOpen, Clock, MapPin, Users, CheckCircle, ChevronRight, X, Quote } from 'lucide-react';

const categoryLabels: Record<CategoryType, { label: string }> = {
  early_life: { label: '早年期・学生時代 (1854-1880)' },
  baker_street: { label: 'ベイカー街初期 (1881-1887)' },
  fame_period: { label: '名声確立期 (1888-1891)' },
  great_hiatus: { label: '大空白期 (1891-1894)' },
  return_period: { label: '帰還・成熟期 (1894-1902)' },
  retirement: { label: '引退・サセックス期 (1903-1914)' },
};

interface TimelineSectionProps {
  highlightId?: string | null;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ highlightId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all');
  const [selectedItemForModal, setSelectedItemForModal] = useState<TimelineItem | null>(null);

  const filteredItems = useMemo(() => {
    return timelineData.filter(item => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchSummary = item.summary.toLowerCase().includes(query);
        const matchActions = item.actionsPerformed.some(a => a.toLowerCase().includes(query));
        const matchSource = item.source.titleJa.toLowerCase().includes(query) || item.source.titleEn.toLowerCase().includes(query);
        const matchLocation = item.location.toLowerCase().includes(query);

        return matchTitle || matchSummary || matchActions || matchSource || matchLocation;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      
      {/* Apple Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
            Chronology & Actions
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            作中行動年表
          </h2>
        </div>

        <div className="text-xs text-[#86868b] bg-[#1c1c1e] px-4 py-2 rounded-full border border-white/10 self-start md:self-auto">
          {filteredItems.length} / {timelineData.length} エントリ
        </div>
      </div>

      {/* Apple Filter & Search Control */}
      <div className="bg-[#1c1c1e] p-4 rounded-2xl border border-white/10 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Apple Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
            <input
              type="text"
              placeholder="出来事・行動・原典名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/60 border border-white/10 rounded-xl text-xs text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-white/30"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#f5f5f7] text-black font-semibold'
                  : 'bg-black/40 text-[#86868b] hover:text-white'
              }`}
            >
              全期間
            </button>
            {(Object.keys(categoryLabels) as CategoryType[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#f5f5f7] text-black font-semibold'
                    : 'bg-black/40 text-[#86868b] hover:text-white'
                }`}
              >
                {categoryLabels[cat].label.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Apple Cards Timeline List */}
      <div className="space-y-6">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#1c1c1e] rounded-3xl border border-white/10 text-[#86868b]">
            該当する年表エントリが見つかりませんでした。
          </div>
        ) : (
          filteredItems.map((item) => {
            const isHighlighted = highlightId === item.id;
            const categoryInfo = categoryLabels[item.category];

            return (
              <div 
                key={item.id} 
                id={item.id}
                className={`apple-card p-6 sm:p-8 space-y-5 transition-all ${
                  isHighlighted ? 'ring-2 ring-white rounded-3xl bg-[#26262a]' : ''
                }`}
              >
                {/* Year & Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-white font-mono tracking-tight">
                      {item.displayDate}
                    </span>
                    <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#86868b]">
                      {categoryInfo.label}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs text-[#86868b]">
                    <MapPin className="w-3.5 h-3.5 text-[#86868b]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#86868b] mt-2 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>

                {/* Actions Performed (作中で行なったこと) */}
                <div className="bg-black/50 rounded-2xl p-4 border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-white uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>作中でシャーロック・ホームズが行った行動</span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {item.actionsPerformed.map((action, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#f5f5f7] flex items-start space-x-2">
                        <span className="text-[#86868b] font-bold mt-0.5">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deduction Notes if any */}
                {item.deductionNotes && (
                  <div className="text-xs text-[#86868b] bg-white/5 p-3 rounded-xl border border-white/5">
                    <strong className="text-white font-semibold">推論ノート: </strong>
                    {item.deductionNotes}
                  </div>
                )}

                {/* Card Footer: Source Trigger */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center space-x-2 text-xs text-[#86868b]">
                    <Users className="w-4 h-4" />
                    <span>関係者: {item.keyFigures.join(', ')}</span>
                  </div>

                  <button
                    onClick={() => setSelectedItemForModal(item)}
                    className="apple-button-secondary px-4 py-2 text-xs flex items-center space-x-2 self-start sm:self-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>原典ソース: 『{item.source.titleJa}』</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Apple-style Source Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="bg-[#1c1c1e] w-full max-w-xl rounded-3xl border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#86868b] tracking-wider uppercase block">Primary Source Verification</span>
                  <h3 className="text-base font-bold text-white">原典ソース証明データ</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#86868b] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              
              <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                <div className="text-xs text-[#86868b] mb-1">出来事 ({selectedItemForModal.displayDate})</div>
                <div className="text-base font-bold text-white">{selectedItemForModal.title}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-black/30 p-3 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[#86868b] block">日本語作品名</span>
                  <span className="font-bold text-white text-sm">『{selectedItemForModal.source.titleJa}』</span>
                </div>
                <div className="bg-black/30 p-3 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[#86868b] block">English Title & Year</span>
                  <span className="font-bold text-white italic">{selectedItemForModal.source.titleEn}</span>
                  <span className="text-[10px] text-[#86868b] block">({selectedItemForModal.source.publishedYear}年)</span>
                </div>
              </div>

              <div className="bg-black/30 p-3 rounded-xl border border-white/5 text-xs">
                <span className="text-[#86868b] block">該当する章 / 節</span>
                <span className="font-semibold text-white">{selectedItemForModal.source.chapterOrSection}</span>
              </div>

              {selectedItemForModal.source.quoteJa && (
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-medium text-[#86868b]">
                    <Quote className="w-3.5 h-3.5" />
                    <span>聖典からの引用テキスト</span>
                  </div>
                  <blockquote className="text-xs italic text-gray-200 pl-3 border-l border-white/30">
                    "{selectedItemForModal.source.quoteJa}"
                  </blockquote>
                </div>
              )}

            </div>

            <div className="p-4 border-t border-white/10 text-right bg-black/40">
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="apple-button-primary px-5 py-2 text-xs"
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
