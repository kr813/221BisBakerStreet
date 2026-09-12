import React, { useState } from 'react';
import { canonWorks } from '../data/canonData';
import { timelineData } from '../data/timelineData';
import { CanonWork } from '../types';
import { BookOpen, Search, ChevronRight, FileText } from 'lucide-react';

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

  const relatedTimelineItems = selectedWork 
    ? timelineData.filter(item => item.source.titleJa === selectedWork.titleJa || item.source.abbreviation === selectedWork.abbreviation)
    : [];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
          Primary Canon Archive
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          原典ソースカタログ
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Works Navigation Sidebar */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-[#1c1c1e] p-3 rounded-2xl border border-white/10 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
              <input
                type="text"
                placeholder="作品名・英語題・略称..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-black/60 border border-white/10 rounded-xl text-xs text-[#f5f5f7] placeholder-[#86868b] focus:outline-none"
              />
            </div>

            <div className="flex gap-1.5">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedType === 'all' ? 'bg-[#f5f5f7] text-black font-semibold' : 'bg-black/40 text-[#86868b]'
                }`}
              >
                全作品 ({canonWorks.length})
              </button>
              <button
                onClick={() => setSelectedType('Novel')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedType === 'Novel' ? 'bg-[#f5f5f7] text-black font-semibold' : 'bg-black/40 text-[#86868b]'
                }`}
              >
                長編 (4)
              </button>
              <button
                onClick={() => setSelectedType('Short Story')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedType === 'Short Story' ? 'bg-[#f5f5f7] text-black font-semibold' : 'bg-black/40 text-[#86868b]'
                }`}
              >
                短編 (56)
              </button>
            </div>
          </div>

          <div className="space-y-2 max-h-[550px] overflow-y-auto pr-1">
            {filteredWorks.map((work) => {
              const isSelected = selectedWork?.id === work.id;
              return (
                <div
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                    isSelected
                      ? 'bg-[#2c2c2e] border-white/30 shadow-md'
                      : 'bg-[#1c1c1e] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#86868b]">
                    <span>[{work.abbreviation}] {work.publishedYear}年</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/10">
                      {work.type === 'Novel' ? '長編' : '短編'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">
                    『{work.titleJa}』
                  </h4>
                  <p className="text-xs text-[#86868b] italic">
                    {work.titleEn}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Work Detail Panel */}
        <div className="lg:col-span-7">
          {selectedWork ? (
            <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              
              <div className="border-b border-white/10 pb-6 space-y-2">
                <div className="text-xs text-[#86868b] font-mono">
                  Primary Canon Record • 推定年代: 約{selectedWork.timelineYear}年
                </div>
                <h3 className="text-3xl font-extrabold text-white">
                  『{selectedWork.titleJa}』
                </h3>
                <p className="text-sm text-[#86868b] italic">
                  {selectedWork.titleEn} (略称: {selectedWork.abbreviation})
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
                  <span className="text-[#86868b] block">発表年 / 分類</span>
                  <span className="font-bold text-white">{selectedWork.publishedYear}年 / {selectedWork.type === 'Novel' ? '長編' : '短編'}</span>
                </div>
                <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
                  <span className="text-[#86868b] block">収録コレクション</span>
                  <span className="font-bold text-white">{selectedWork.collectionJa}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
                  作品概要
                </h4>
                <p className="text-xs sm:text-sm text-[#f5f5f7] leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/5">
                  {selectedWork.summary}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
                  主要登場人物
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.keyCharacters.map((char, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-[#f5f5f7] text-xs border border-white/10">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Timeline Items */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-xs font-semibold text-white uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#86868b]" />
                  <span>この作品に紐づく作中行動年表</span>
                </div>

                {relatedTimelineItems.length === 0 ? (
                  <p className="text-xs text-[#86868b] italic">
                    ※ 年表データベースの追加入力中
                  </p>
                ) : (
                  <div className="space-y-2">
                    {relatedTimelineItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-black/50 p-4 rounded-2xl border border-white/5 hover:border-white/20 flex items-center justify-between transition-all"
                      >
                        <div>
                          <div className="text-xs text-white font-mono">{item.displayDate}</div>
                          <div className="text-sm font-bold text-white">{item.title}</div>
                        </div>

                        <button
                          onClick={() => onSelectTimelineItem(item.id)}
                          className="apple-button-secondary px-3 py-1.5 text-xs flex items-center space-x-1"
                        >
                          <span>年表で開く</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="bg-[#1c1c1e] p-12 rounded-3xl text-center text-[#86868b]">
              作品を選択してください
            </div>
          )}
        </div>

      </div>

    </section>
  );
};
