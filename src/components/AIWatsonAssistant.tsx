import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { timelineData } from '../data/timelineData';
import { Bot, Send, User, Sparkles, Clock, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';

interface AIWatsonAssistantProps {
  onNavigateTimeline: (timelineId: string) => void;
}

const initialPrompts = [
  'ホームズとワトソンが初めて出会ったのは何年のどこですか？',
  'モリアーty教授とのライヘンバッハの滝での事件について教えてください',
  '「斑の紐」の事件でホームズが行った推理と行動は？',
  '「ボヘミアの醜聞」でホームズを負かしたアイリーン・アドラーとは？',
  'ホームズが現役を引退した後はどこで何をしていたのですか？'
];

export const AIWatsonAssistant: React.FC<AIWatsonAssistantProps> = ({ onNavigateTimeline }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'watson',
      text: 'やあ友よ！私はジョン・H・ワトソン軍医だ。ベイカー街221Bでのホームズとの思い出や、彼が解決してきた事件の年代・原典について、何でも尋ねてくれたまえ。私が記録した聖典データからお答えしよう。',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedPrompts: initialPrompts
    }
  ]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isGenerating]);

  // Simulated Intelligent AI Watson Engine
  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsGenerating(true);

    // AI Generation Logic based on timeline dataset
    setTimeout(() => {
      let botResponse = '';
      let matchedTimelineId: string | undefined = undefined;

      const qLower = query.toLowerCase();

      if (qLower.includes('出会') || qLower.includes('最初') || qLower.includes('出会った')) {
        const item = timelineData.find(i => i.id === 'tl-1881-meeting-watson');
        botResponse = `ああ、あの運命の1881年1月のことだね！聖バーソロミュー病院の化学実験室で、スタンフォードの紹介で初めて出会ったのだ。ホームズは私と握手するなり「アフガニスタンへ行ってこられましたね？」と即座に見抜いて私を驚かせたのだよ！`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('モリアーティ') || qLower.includes('ライヘンバッハ') || qLower.includes('滝') || qLower.includes('最後')) {
        const item = timelineData.find(i => i.id === 'tl-1891-final-problem');
        botResponse = `悪夢のような1891年5月4日のことだ...「犯罪界のナポレオン」モリアーティ教授とスイスのライヘンバッハの滝で対峙した。ホームズは日本の武術バリツを駆使して教授を滝壺へ落としたが、モラン大佐の追手を避けるため暫く姿を消したのだよ。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('斑の紐') || qLower.includes('蛇') || qLower.includes('ロイロット')) {
        const item = timelineData.find(i => i.id === 'tl-1889-speckled-band');
        botResponse = `1889年4月の「斑の紐」事件だな！ヘレン・ストナー嬢の依頼でストーク・モランへ向かい、通気口とダミーのベルの紐を利用したロイロット博士の猛毒蛇（沼ハブ）のトリックをホームズが見破ったスリリングな事件だ。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('アイリーン') || qLower.includes('ボヘミア') || qLower.includes('女性')) {
        const item = timelineData.find(i => i.id === 'tl-1888-scandal-bohemia');
        botResponse = `アイリーン・アドラー！ホームズにとって彼女は常に「あの女性（The Woman）」なのだ。1888年3月、ボヘミア国王の依頼で写真奪還に挑んだが、彼女の機知が一枚上手でホームズを負かしたのだよ。彼が生涯で敬意を抱いた唯一の女性だ。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('引退') || qLower.includes('サセックス') || qLower.includes('蜂') || qLower.includes('ミツバチ')) {
        const item = timelineData.find(i => i.id === 'tl-1903-retirement');
        botResponse = `ホームズは1903年秋にロンドンでの探偵業を引退し、サセックスのサウス・ダウンズの小さな農園へ移住したのだ。そこで大好きなミツバチの観察と『養蜂実用手引書』の執筆を行っていたよ。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('犬') || qLower.includes('バスカヴィル')) {
        const item = timelineData.find(i => i.id === 'tl-1889-baskervilles');
        botResponse = `1889年10月の「バスカヴィル家の犬」事件だね！ダートムアの大湿原に響き渡る魔犬の遠吠え...ステープルトンがリン塗料を塗った巨大犬を使った陰謀を、ホームズは科学的観察と変装で暴いたのだ。`;
        matchedTimelineId = item?.id;
      } else {
        // Generic AI response searching timeline database keywords
        const found = timelineData.find(i => 
          i.title.includes(query) || i.summary.includes(query) || i.source.titleJa.includes(query) || i.actionsPerformed.some(a => a.includes(query))
        );

        if (found) {
          botResponse = `ご質問の件について、私の記録（『${found.source.titleJa}』 ${found.displayDate}）にあるな！${found.summary} ホームズはこの時「${found.actionsPerformed[0]}」という行動をとったのだ。`;
          matchedTimelineId = found.id;
        } else {
          botResponse = `なるほど、「${query}」についてだね。ホームズの聖典記録から探してみたよ。彼は「観察と演繹推理」を最も尊び、現場の微小な足跡や煙草の灰（140種類の論文を執筆）から真実を導き出した。詳細な年代については是非年表アーカイブも参照してくれたまえ！`;
        }
      }

      const watsonReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'watson',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        relatedTimelineId: matchedTimelineId
      };

      setMessages(prev => [...prev, watsonReply]);
      setIsGenerating(false);
    }, 900);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#721c24]/20 border border-[#721c24]/40 text-rose-300 text-xs font-cinzel">
          <Bot className="w-4 h-4 text-[#c99a4e]" />
          <span>Watson Interactive AI Agent</span>
        </div>
        <h2 className="text-3xl font-extrabold font-cinzel text-white">
          AI ワトソン博士の聖典相談室
        </h2>
        <p className="text-sm text-gray-400">
          ベイカー街221Bのワトソン君が、ホームズの行なった事件や年表の疑問に直接回答します。
        </p>
      </div>

      {/* Chat Container Window */}
      <div className="glass-panel rounded-2xl border border-[#c99a4e]/30 shadow-2xl flex flex-col h-[650px] overflow-hidden">
        
        {/* Top Window Bar */}
        <div className="bg-[#14171d] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#721c24] flex items-center justify-center border border-[#c99a4e]">
                <Bot className="w-6 h-6 text-amber-200" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#14171d]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-cinzel">Dr. John H. Watson</h3>
              <p className="text-[11px] text-[#c99a4e]">聖典データ連動 AI アシスタント</p>
            </div>
          </div>

          <div className="text-xs text-gray-400 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-[#c99a4e]" />
            <span>221B Knowledge Engine</span>
          </div>
        </div>

        {/* Messages Stream */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-black/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-end space-x-2 max-w-[85%]">
                {msg.sender === 'watson' && (
                  <div className="w-7 h-7 rounded-full bg-[#721c24] border border-[#c99a4e]/50 flex items-center justify-center text-amber-200 text-xs flex-shrink-0">
                    W
                  </div>
                )}

                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#c99a4e] to-[#aa7c11] text-black font-medium rounded-br-none shadow-md'
                      : 'bg-[#1a202c] text-gray-100 border border-white/10 rounded-bl-none shadow-md'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* AI Generated Timeline Card Jump Link */}
                  {msg.relatedTimelineId && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <button
                        onClick={() => onNavigateTimeline(msg.relatedTimelineId!)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#c99a4e]/20 hover:bg-[#c99a4e]/30 border border-[#c99a4e]/40 text-xs font-semibold text-[#e5b362] transition-all"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>関連する年表カードを開く</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>

              <span className="text-[10px] text-gray-500 mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}

          {isGenerating && (
            <div className="flex items-center space-x-2 text-xs text-gray-400 italic bg-[#1a202c] p-3 rounded-2xl w-max">
              <Bot className="w-4 h-4 text-[#c99a4e] animate-bounce" />
              <span>ワトソン博士が聖典をめくって回答中...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        <div className="px-6 py-2 bg-[#101319] border-t border-white/5 flex items-center space-x-2 overflow-x-auto">
          <span className="text-[10px] text-gray-500 font-cinzel flex-shrink-0">質問例:</span>
          {initialPrompts.slice(0, 3).map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#c99a4e]/20 border border-white/10 hover:border-[#c99a4e]/40 text-[11px] text-gray-300 hover:text-white whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 bg-[#14171d] border-t border-white/10 flex items-center space-x-3">
          <input
            type="text"
            placeholder="ワトソン博士にホームズや事件について質問する..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={isGenerating}
            className="flex-1 bg-black/50 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#c99a4e]"
          />
          <button
            onClick={() => handleSend()}
            disabled={isGenerating || !input.trim()}
            className="p-3 rounded-xl bg-[#c99a4e] hover:bg-[#e5b362] text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
};
