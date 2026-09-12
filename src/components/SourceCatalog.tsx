import React, { useState } from 'react';
import { canonWorks } from '../data/canonData';
import { timelineData } from '../data/timelineData';
import { CanonWork, TimelineItem } from '../types';
import { BookOpen, Search, Filter, Calendar, Users, ChevronRight, FileText } from 'lucide-react';

interface SourceCatalogProps {
  onSelectTimelineItem: (timelineId: string) => void;
}

export const SourceCatalog: React.FC<SourceCatalogProps> = ({ onSelectTimelineItem }) => {
  const [selectedType, setSelectedType] = useState<'all' | 'Novel' | 'Short Story'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWork, setSelectedWork] = useState<CanonWork | null>(canonWorks[0]);

  const filteredWorks = canonWorks.filter(work => {
    if (selectedType !== 'all' && work.type !== selectedType) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return work.titleJa.toLowerCase().includes(q) || work.titleEn.toLowerCase().includes(q) || work.abbreviation.toLowerCase().includes(q);
    }
    return true;
  });

  // Find related timeline items for selected work
  const relatedTimelineItems = selectedWork 
    ? timelineData.filter(item => item.source.titleJa === selectedWork.titleJa || item.source.abbreviation === selectedWork.abbreviation)
    : [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#c99a4e]/20 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a4e] font-cinzel mb-2">
          <BookOpen className="w-4 h-4" />
          <span>The Canon of Sherlock Holmes Archive</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white">
          聖典原典ソース カタログ
        </h2>
        <p className="text-sm text-gray-400 mt-1 max-w-2xl">
          アーサー・コナン・ドイル卿によって著された長編4作・短編56作の作品情報および、作品内でホームズが解決した事件年表への逆引き。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Works List */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Search & Filter */}
          <div className="glass-panel p-4 rounded-xl space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="作品名・英語題・略称で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/15 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#c99a4e]"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1 rounded-md text-xs font-medium border ${
                  selectedType === 'all' ? 'bg-[#c99a4e] text-black border-[#c99a4e]' : 'bg-black/40 text-gray-400 border-white/10'
                }`}
              >
                全作品 ({canonWorks.length})
              </button>
              <button
                onClick={() => setSelectedType('Novel')}
                className={`px-3 py-1 rounded-md text-xs font-medium border ${
                  selectedType === 'Novel' ? 'bg-[#c99a4e] text-black border-[#c99a4e]' : 'bg-black/40 text-gray-400 border-white/10'
                }`}
              >
                長編小説 (4)
              </button>
              <button
                onClick={() => setSelectedType('Short Story')}
                className={`px-3 py-1 rounded-md text-xs font-medium border ${
                  selectedType === 'Short Story' ? 'bg-[#c99a4e] text-black border-[#c99a4e]' : 'bg-black/40 text-gray-400 border-white/10'
                }`}
              >
                短編小説 (56)
              </button>
            </div>
          </div>

          {/* List items */}
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            {filteredWorks.map((work) => {
              const isSelected = selectedWork?.id === work.id;
              return (
                <div
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all ${
                    isSelected
                      ? 'bg-[#c99a4e]/20 border-[#c99a4e] shadow-lg'
                      : 'glass-card border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-cinzel text-[#c99a4e]">
                      [{work.abbreviation}] {work.publishedYear}年発表
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-gray-300 border border-white/10">
                      {work.type === 'Novel' ? '長編' : '短編'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-serif-custom mt-1">
                    『{work.titleJa}』
                  </h4>
                  <p className="text-xs text-gray-400 italic">
                    {work.titleEn}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Side: Selected Work Detail & Related Timeline Actions */}
        <div className="lg:col-span-7">
          {selectedWork ? (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#c99a4e]/30 space-y-6">
              
              {/* Header Info */}
              <div className="border-b border-white/10 pb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c99a4e] font-cinzel">
                    Primary Canon Record
                  </span>
                  <span className="text-xs text-gray-400">
                    作中推定年代: 約{selectedWork.timelineYear}年
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold font-serif-custom text-white">
                  『{selectedWork.titleJa}』
                </h3>
                <p className="text-sm text-[#e5b362] italic font-serif-custom">
                  {selectedWork.titleEn} (聖典略称: {selectedWork.abbreviation})
                </p>
              </div>

              {/* Work Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 space-y-1">
                  <span className="text-gray-400 font-cinzel block">発表年 / 分類</span>
                  <span className="font-bold text-white">{selectedWork.publishedYear}年 / {selectedWork.type === 'Novel' ? '長編作品' : '短編集収録'}</span>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 space-y-1">
                  <span className="text-gray-400 font-cinzel block">収録コレクション</span>
                  <span className="font-bold text-white">{selectedWork.collectionJa}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-[#c99a4e] uppercase tracking-wider font-cinzel">
                  作品あらすじ・特徴
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                  {selectedWork.summary}
                </p>
              </div>

              {/* Key Characters */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-cinzel">
                  登場する主要人物
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.keyCharacters.map((char, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Timeline Items (年表逆引き) */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#c99a4e] uppercase tracking-wider font-cinzel">
                  <FileText className="w-4 h-4 text-[#c99a4e]" />
                  <span>この作品に紐づく作中行動年表エントリ</span>
                </div>

                {relatedTimelineItems.length === 0 ? (
                  <p className="text-xs text-gray-400 italic">
                    ※ 現在年表データベースには全主要事件を収録中ですが、該当作品の単体カードへのリンクを順次拡張しています。
                  </p>
                ) : (
                  <div className="space-y-3">
                    {relatedTimelineItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-black/50 p-4 rounded-xl border border-white/10 hover:border-[#c99a4e]/50 flex items-center justify-between group transition-all"
                      >
                        <div>
                          <div className="text-xs text-[#c99a4e] font-cinzel font-bold">{item.displayDate}</div>
                          <div className="text-sm font-bold text-white font-serif-custom">{item.title}</div>
                          <div className="text-xs text-gray-400 mt-1 line-clamp-1">{item.summary}</div>
                        </div>

                        <button
                          onClick={() => onSelectTimelineItem(item.id)}
                          className="px-3 py-1.5 rounded-lg bg-[#c99a4e]/20 text-[#c99a4e] border border-[#c99a4e]/30 text-xs font-semibold hover:bg-[#c99a4e]/30 flex items-center space-x-1 flex-shrink-0 ml-4"
                        >
                          <span>年表で見る</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="glass-panel p-12 rounded-2xl text-center text-gray-400">
              作品を選択してください
            </div>
          )}
        </div>

      </div>

    </section>
  );
};
