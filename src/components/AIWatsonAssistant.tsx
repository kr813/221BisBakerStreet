import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { timelineData } from '../data/timelineData';
import { Send, User, Clock, ChevronRight, MessageSquare } from 'lucide-react';

interface AIWatsonAssistantProps {
  onNavigateTimeline: (timelineId: string) => void;
}

const initialPrompts = [
  'ホームズとワトソンが初めて出会ったのは何年のどこ？',
  'モリアーティ教授とのライヘンバッハの滝での事件について',
  '「斑の紐」の事件でホームズが行った推理と行動は？',
  '「ボヘミアの醜聞」のアイリーン・アドラーについて',
  'ホームズが現役を引退した後はどこで何をしていたの？'
];

export const AIWatsonAssistant: React.FC<AIWatsonAssistantProps> = ({ onNavigateTimeline }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'watson',
      text: 'やあ友よ。私はジョン・H・ワトソン軍医だ。ベイカー街221Bでのホームズとの思い出や、彼が解決した事件の年代・原典について、何でも尋ねてくれたまえ。',
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

    setTimeout(() => {
      let botResponse = '';
      let matchedTimelineId: string | undefined = undefined;
      const qLower = query.toLowerCase();

      if (qLower.includes('出会') || qLower.includes('最初') || qLower.includes('出会った')) {
        const item = timelineData.find(i => i.id === 'tl-1881-meeting-watson');
        botResponse = `ああ、1881年1月のことだね！聖バーソロミュー病院の実験室で初対面した際、ホームズは私を見るなり「アフガニスタンへ行ってこられましたね？」と即座に見抜いて驚かせたのだよ。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('モリアーティ') || qLower.includes('ライヘンバッハ') || qLower.includes('滝') || qLower.includes('最後')) {
        const item = timelineData.find(i => i.id === 'tl-1891-final-problem');
        botResponse = `1891年5月4日、スイスのライヘンバッハの滝で宿敵モリアーティ教授と死闘を繰り広げた。ホームズは武術バリツで教授を滝壺へ落とし、組織の残党から身を守るため暫く姿を消したのだ。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('斑の紐') || qLower.includes('蛇') || qLower.includes('ロイロット')) {
        const item = timelineData.find(i => i.id === 'tl-1889-speckled-band');
        botResponse = `1889年4月の「斑の紐」事件だね。通気口とダミーのベルの紐を利用したロイロット博士の猛毒蛇のトリックをホームズが暴いた。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('アイリーン') || qLower.includes('ボヘミア') || qLower.includes('女性')) {
        const item = timelineData.find(i => i.id === 'tl-1888-scandal-bohemia');
        botResponse = `アイリーン・アドラー！ホームズにとって彼女は常に「あの女性」だ。1888年3月、写真奪還に挑むも彼女の機知に敗れ、ホームズが生涯で深い敬意を抱いた唯一の女性となった。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('引退') || qLower.includes('サセックス') || qLower.includes('蜂') || qLower.includes('ミツバチ')) {
        const item = timelineData.find(i => i.id === 'tl-1903-retirement');
        botResponse = `ホームズは1903年秋に現役を引退し、サセックスの丘でミツバチの観察と『養蜂実用手引書』の執筆を行っていたよ。`;
        matchedTimelineId = item?.id;
      } else if (qLower.includes('犬') || qLower.includes('バスカヴィル')) {
        const item = timelineData.find(i => i.id === 'tl-1889-baskervilles');
        botResponse = `1889年10月の「バスカヴィル家の犬」事件だ。ダートムアの魔犬伝説を背景に、リン塗料の巨大犬を使った陰謀を科学的観察で解明した。`;
        matchedTimelineId = item?.id;
      } else {
        const found = timelineData.find(i => 
          i.title.includes(query) || i.summary.includes(query) || i.source.titleJa.includes(query) || i.actionsPerformed.some(a => a.includes(query))
        );

        if (found) {
          botResponse = `『${found.source.titleJa}』（${found.displayDate}）の記録にあるね。${found.summary} この時ホームズは「${found.actionsPerformed[0]}」を行っている。`;
          matchedTimelineId = found.id;
        } else {
          botResponse = `「${query}」についての質問だね。ホームズは観察と演繹推理を尊び、現場の微小な足跡や煙草の灰から真実を導き出した。詳細な年代は年表アーカイブで参照してほしい。`;
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
    }, 600);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block">
          Interactive Dialogue Archive
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          ワトソン対話室
        </h2>
      </div>

      {/* iMessage Style Container */}
      <div className="bg-[#1c1c1e] rounded-3xl border border-white/10 shadow-2xl flex flex-col h-[600px] overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#2c2c2e]/60 backdrop-blur-md px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#3a3a3c] flex items-center justify-center text-white text-xs font-bold font-serif">
              W
            </div>
            <div>
              <h3 className="text-xs font-bold text-white">Dr. John H. Watson</h3>
              <p className="text-[10px] text-[#86868b]">221B Baker Street Dialogue</p>
            </div>
          </div>
          <MessageSquare className="w-4 h-4 text-[#86868b]" />
        </div>

        {/* Message Stream (iMessage UI) */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-black/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-end space-x-2 max-w-[85%]">
                <div
                  className={`px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'apple-message-user'
                      : 'apple-message-watson'
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.relatedTimelineId && (
                    <div className="mt-3 pt-2.5 border-t border-white/10">
                      <button
                        onClick={() => onNavigateTimeline(msg.relatedTimelineId!)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>関連する年表カードを開く</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <span className="text-[10px] text-[#86868b] mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}

          {isGenerating && (
            <div className="text-xs text-[#86868b] bg-[#2c2c2e] px-4 py-2 rounded-2xl w-max">
              ワトソン博士が記録を照合中...
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Quick Suggestions */}
        <div className="px-4 py-2 bg-[#1c1c1e] border-t border-white/5 flex items-center space-x-2 overflow-x-auto">
          <span className="text-[10px] text-[#86868b] flex-shrink-0">質問例:</span>
          {initialPrompts.slice(0, 3).map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-[11px] text-[#86868b] hover:text-white whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#1c1c1e] border-t border-white/10 flex items-center space-x-2">
          <input
            type="text"
            placeholder="質問を入力..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={isGenerating}
            className="flex-1 bg-black/60 border border-white/10 rounded-full px-4 py-2.5 text-xs text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-white/30"
          />
          <button
            onClick={() => handleSend()}
            disabled={isGenerating || !input.trim()}
            className="w-8 h-8 rounded-full bg-[#007aff] hover:bg-[#0062cc] text-white flex items-center justify-center disabled:opacity-40 transition-all flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
};
