import React, { useState } from 'react';
import { DeductionResult } from '../types';
import { Compass, BookOpen, Clock, ArrowRight, Check } from 'lucide-react';

interface AIDeductionLabProps {
  onNavigateTimeline: (timelineId: string) => void;
}

export const AIDeductionLab: React.FC<AIDeductionLabProps> = ({ onNavigateTimeline }) => {
  const [cluesText, setCluesText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DeductionResult | null>(null);

  const presetExamples = [
    { label: '観察サンプル1: 袖口のインクと手首の日焼け', clues: '左手首だけ日焼け、右手袖口に黒いインク染み、革靴に赤土粘土', loc: 'ロンドン・ロイド銀行' },
    { label: '観察サンプル2: 懐中時計の傷と刻印', clues: '銀の時計裏にイニシャル刻印、巻きネジ周囲に多数の擦り傷', loc: 'ベイカー街221B' },
    { label: '観察サンプル3: 通気口と密室の口笛', clues: 'ベッドが床に固定、壁に通気口、深夜の甘い口笛', loc: 'サセックスのマナーハウス' }
  ];

  const handleRunDeduction = (cluesInput?: string, locInput?: string) => {
    const finalClues = cluesInput || cluesText;
    if (!finalClues.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      let matchingCanonCase = {
        title: '緋色の研究 (A Study in Scarlet)',
        similarityReason: '「身元や習慣を観察から割り出す」ホームズの演繹的観察手法と一致。',
        timelineId: 'tl-1881-meeting-watson'
      };

      let deductiveSteps: string[] = [];
      let hypothesis = '';
      let conclusion = '';

      if (finalClues.includes('時計') || finalClues.includes('刻印') || finalClues.includes('傷')) {
        deductiveSteps = [
          '観察1: 時計裏のイニシャル「HW」と質屋刻印は代々の遺品を示す。',
          '観察2: 巻きネジ周りの擦り傷は、夜間に手が震えた状態で鍵を差し込んだ痕跡。',
          '観察3: 高級品でありながら質入れの跡があることは一時的な生活困窮を示唆。'
        ];
        hypothesis = '裕福な家に生まれたが、不摂生と酒癖により困窮した人物。';
        conclusion = '「この時計の元の所有者は、酒により身を持ち崩した人物である」';
        matchingCanonCase = {
          title: '四つの署名 (The Sign of the Four)',
          similarityReason: 'ワトソン医師の懐中時計を観察し、亡き兄の性格と酒癖を見抜いた演繹実例。',
          timelineId: 'tl-1888-sign-of-four'
        };
      } else if (finalClues.includes('通気口') || finalClues.includes('口笛') || finalClues.includes('ベッド')) {
        deductiveSteps = [
          '観察1: 床に固定されたベッドは特定の場所に犠牲者を固定する目的。',
          '観察2: 屋外に通じない通気口は、別室から物体を投入するパイプライン。',
          '観察3: 小皿のミルクと紐は生物（爬虫類）の調教と回帰シグナルに合致。'
        ];
        hypothesis = '密室に見えるが、隣室から通気口を通じた人為的毒殺の罠。';
        conclusion = '「隣室の人物が調教された猛毒蛇を凶器として使用した」';
        matchingCanonCase = {
          title: '斑の紐 (The Adventure of the Speckled Band)',
          similarityReason: '通気口と固定ベッドから密室毒殺トリックを看破した名ケース。',
          timelineId: 'tl-1889-speckled-band'
        };
      } else {
        deductiveSteps = [
          `観察1: 「${finalClues.slice(0, 18)}...」から不自然な不均衡を検出。`,
          '観察2: 靴底の泥と磨耗から過去24時間の移動パターンを特定。',
          '観察3: 偶然を除外した結果、特定の職種と目的意識が残る。'
        ];
        hypothesis = '観察事実と表面上の言い分の乖離。';
        conclusion = '「すべての不可能を除外した後に残ったものが真実である」';
        matchingCanonCase = {
          title: 'バスカヴィル家の犬 (The Hound of the Baskervilles)',
          similarityReason: 'ステッキの噛み痕や足跡などの観察から全体像を科学的に再構成。',
          timelineId: 'tl-1889-baskervilles'
        };
      }

      setResult({
        hypothesis,
        deductiveSteps,
        conclusion,
        matchingCanonCase
      });
      setIsAnalyzing(false);
    }, 700);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block">
          Science of Observation & Analysis
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          演繹考察ラボ
        </h2>
      </div>

      {/* Apple Inspector Panel */}
      <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
        
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block">
            サンプルで試す
          </label>
          <div className="flex flex-wrap gap-2">
            {presetExamples.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCluesText(ex.clues);
                  setLocationText(ex.loc);
                  handleRunDeduction(ex.clues, ex.loc);
                }}
                className="px-3 py-1.5 rounded-full bg-black/40 hover:bg-white/10 text-xs text-[#86868b] hover:text-white border border-white/5 transition-all"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-[#86868b] block mb-1">
              観察した手がかり・特徴:
            </label>
            <textarea
              rows={3}
              placeholder="例: 手首の日焼け痕、懐中時計の傷..."
              value={cluesText}
              onChange={(e) => setCluesText(e.target.value)}
              className="w-full bg-black/60 border border-white/10 rounded-2xl p-3.5 text-xs sm:text-sm text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-white/30"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-[#86868b] block mb-1">
              発見場所・環境（任意）:
            </label>
            <input
              type="text"
              placeholder="例: ベイカー街221B..."
              value={locationText}
              onChange={(e) => setLocationText(e.target.value)}
              className="w-full bg-black/60 border border-white/10 rounded-xl p-2.5 text-xs text-[#f5f5f7] placeholder-[#86868b] focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={() => handleRunDeduction()}
          disabled={isAnalyzing || !cluesText.trim()}
          className="apple-button-primary w-full py-3.5 text-xs sm:text-sm flex items-center justify-center space-x-2 disabled:opacity-40"
        >
          <Compass className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
          <span>{isAnalyzing ? '演繹考察を実行中...' : '演繹考察を開始'}</span>
        </button>

      </div>

      {/* Deductive Analysis Output */}
      {result && (
        <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-3xl border border-white/20 space-y-6 animate-fadeIn">
          
          <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-[#86868b] uppercase font-mono block">Deductive Report</span>
              <h3 className="text-lg font-bold text-white">演繹考察結果</h3>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
              観察・考察ステップ
            </h4>
            <div className="space-y-2">
              {result.deductiveSteps.map((step, i) => (
                <div key={i} className="bg-black/50 p-3 rounded-2xl border border-white/5 text-xs text-[#f5f5f7]">
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 space-y-1">
            <div className="text-xs text-[#86868b]">演繹的結論 (Conclusion)</div>
            <div className="text-base font-bold text-white">
              {result.conclusion}
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-semibold text-white">
                <BookOpen className="w-4 h-4" />
                <span>類似する聖典事例</span>
              </div>
            </div>

            <div className="text-sm font-bold text-white">
              『{result.matchingCanonCase.title}』
            </div>
            <p className="text-xs text-[#86868b]">
              {result.matchingCanonCase.similarityReason}
            </p>

            <button
              onClick={() => onNavigateTimeline(result.matchingCanonCase.timelineId)}
              className="apple-button-secondary px-4 py-2 text-xs flex items-center space-x-2"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>該当する年表カードを開く</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

    </section>
  );
};
