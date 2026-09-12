import React, { useState } from 'react';
import { DeductionResult } from '../types';
import { timelineData } from '../data/timelineData';
import { Search, Sparkles, Brain, Compass, BookOpen, Clock, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface AIDeductionLabProps {
  onNavigateTimeline: (timelineId: string) => void;
}

export const AIDeductionLab: React.FC<AIDeductionLabProps> = ({ onNavigateTimeline }) => {
  const [cluesText, setCluesText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DeductionResult | null>(null);

  const presetExamples = [
    { label: '例1: 袖口のインクと手首の日焼け', clues: '左手首だけ日焼け、右手袖口に黒いインク染み、革靴に赤い赤土粘土', loc: 'ロンドン・ロイド銀行' },
    { label: '例2: 懐中時計の傷と刻印', clues: '銀の時計裏にイニシャル刻印、巻きネジ周囲に多数の擦り傷、留め具の磨耗', loc: 'ベイカー街221B' },
    { label: '例3: 通気口と密室の口笛', clues: 'ベッドが床に固定、壁に通気口、深夜の甘い口笛、ミルクの小皿', loc: 'サセックスのマナーハウス' }
  ];

  const handleRunDeduction = (cluesInput?: string, locInput?: string) => {
    const finalClues = cluesInput || cluesText;
    const finalLoc = locInput || locationText;

    if (!finalClues.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    // AI Deductive Thinking Generator Simulation
    setTimeout(() => {
      let matchingCanonCase = {
        title: '緋色の研究 (A Study in Scarlet)',
        similarityReason: '「観察から身元や職業を割り出す」ホームズの基本演繹法と一致します。',
        timelineId: 'tl-1881-meeting-watson'
      };

      let deductiveSteps: string[] = [];
      let hypothesis = '';
      let conclusion = '';

      if (finalClues.includes('時計') || finalClues.includes('刻印') || finalClues.includes('傷')) {
        deductiveSteps = [
          '観察1: 時計裏のイニシャル「HW」と質屋の刻印は、代々の遺品であることを示す。',
          '観察2: 巻きネジ穴周辺の無数の不規則な傷は、夜間に手が震えた状態で鍵を差し込んだ証拠である。',
          '観察3: 高級時計でありながら質入れの痕跡があることは、一時的な金欠と浪費を示している。'
        ];
        hypothesis = 'この所有者は裕福な家に生まれたが、不摂生と酒癖により困窮した人物である。';
        conclusion = '「この時計の元の所有者は、酒のために身を持ち崩した人物である」';
        matchingCanonCase = {
          title: '四つの署名 (The Sign of the Four)',
          similarityReason: 'ワトソン医師の亡き兄の懐中時計を観察し、性格と酒癖を完璧に見抜いた名演繹。',
          timelineId: 'tl-1888-sign-of-four'
        };
      } else if (finalClues.includes('通気口') || finalClues.includes('口笛') || finalClues.includes('ベッド')) {
        deductiveSteps = [
          '観察1: 床に固定されたベッドは、特定の場所から動けない犠牲者を配置する目的である。',
          '観察2: 屋外に通じない不自然な通気口は、何か小さな物体を別室から投入するためのパイプラインである。',
          '観察3: 小皿のミルクと紐は、生物（特に爬虫類）の調教と回帰シグナルの目的に合致する。'
        ];
        hypothesis = '密室事件に見えるが、隣室から通気口を通じて猛毒生物を送り込む人為的な罠である。';
        conclusion = '「犯人は隣室の人物であり、調教された猛毒蛇を凶器として使用した」';
        matchingCanonCase = {
          title: '斑の紐 (The Adventure of the Speckled Band)',
          similarityReason: '密室の通気口と固定ベッドから、沼ハブを使った毒殺トリックを完璧に見破った事件。',
          timelineId: 'tl-1889-speckled-band'
        };
      } else {
        deductiveSteps = [
          `観察1: 「${finalClues.slice(0, 20)}...」という複数の断片から、日常生活では生じえない不自然な不均衡を検出。`,
          '観察2: 観察対象の靴底の泥と磨耗パターンから、直近24時間の移動経路と天候地域を特定。',
          '観察3: 単なる偶然を除外した結果、特定の職種と強い目的意識を持った行動パターンが残る。'
        ];
        hypothesis = '表面上の言い分と観察事実の乖離から、隠された真の動機が存在する。';
        conclusion = '「見えているものが全てではない。すべての不可能を除外した後に残ったものが真実である」';
        matchingCanonCase = {
          title: 'バスカヴィル家の犬 (The Hound of the Baskervilles)',
          similarityReason: 'ステッキの噛み痕や足跡などの微小な観察から全体像を科学的に再構成する手法。',
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
    }, 1200);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#c99a4e]/20 border border-[#c99a4e]/40 text-[#e5b362] text-xs font-cinzel">
          <Brain className="w-4 h-4 text-[#c99a4e]" />
          <span>AI Deduction Engine & Science of Observation</span>
        </div>
        <h2 className="text-3xl font-extrabold font-cinzel text-white">
          AI 演繹推理室 (Deduction Lab)
        </h2>
        <p className="text-sm text-gray-400">
          観察の手がかりを入力してください。シャーロック・ホームズの演繹法（Deduction）を再現するAIが思考ステップを分析し、聖典の類似事件と照合します。
        </p>
      </div>

      {/* Input Panel */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#c99a4e]/30 space-y-6">
        
        {/* Preset Prompt Buttons */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#c99a4e] uppercase tracking-wider font-cinzel">
            プリセット観察サンプルを試す:
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
                className="px-3 py-1.5 rounded-lg bg-black/40 hover:bg-[#c99a4e]/20 border border-white/10 hover:border-[#c99a4e]/40 text-xs text-gray-300 transition-colors"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-300 block mb-1">
              観察した手がかり・特徴（服装、傷、所持品、不自然な点など）:
            </label>
            <textarea
              rows={3}
              placeholder="例: 手首の日焼け痕、懐中時計の傷、靴の粘土汚れ..."
              value={cluesText}
              onChange={(e) => setCluesText(e.target.value)}
              className="w-full bg-black/50 border border-white/15 rounded-xl p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#c99a4e]"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-300 block mb-1">
              発見場所・環境（任意）:
            </label>
            <input
              type="text"
              placeholder="例: ベイカー街221B, ロンドン橋付近..."
              value={locationText}
              onChange={(e) => setLocationText(e.target.value)}
              className="w-full bg-black/50 border border-white/15 rounded-xl p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#c99a4e]"
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => handleRunDeduction()}
          disabled={isAnalyzing || !cluesText.trim()}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c99a4e] to-[#aa7c11] text-black font-bold text-sm tracking-wide shadow-lg hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
        >
          {isAnalyzing ? (
            <>
              <Compass className="w-5 h-5 animate-spin" />
              <span>ホームズの演繹思考プロセスを実行中...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>演繹推理（Deduction）を開始する</span>
            </>
          )}
        </button>

      </div>

      {/* Deduction Result Display */}
      {result && (
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/40 space-y-6 animate-fadeIn">
          
          <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-emerald-400 font-cinzel tracking-widest uppercase">
                AI Deductive Analysis Completed
              </span>
              <h3 className="text-xl font-bold font-cinzel text-white">
                演繹推理 結果レポート
              </h3>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#c99a4e] uppercase tracking-wider font-cinzel">
              ホームズの観察・推論ステップ
            </h4>
            <div className="space-y-2">
              {result.deductiveSteps.map((step, i) => (
                <div key={i} className="bg-black/40 p-3 rounded-xl border border-white/5 text-xs sm:text-sm text-gray-200">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Hypothesis & Conclusion */}
          <div className="bg-gradient-to-r from-[#14171d] to-[#1c222e] p-5 rounded-xl border border-[#c99a4e]/30 space-y-2">
            <div className="text-xs text-[#c99a4e] font-cinzel font-semibold">演繹的結論 (Deductive Conclusion)</div>
            <div className="text-base font-bold text-amber-100 font-serif-custom">
              {result.conclusion}
            </div>
            <p className="text-xs text-gray-300 mt-1">
              仮説背景: {result.hypothesis}
            </p>
          </div>

          {/* Matching Canon Case */}
          <div className="bg-[#721c24]/20 border border-[#721c24]/40 p-5 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-semibold text-rose-300 font-cinzel">
                <BookOpen className="w-4 h-4 text-rose-400" />
                <span>類似する聖典原典ケース</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-200 border border-rose-800">
                Canon Match
              </span>
            </div>

            <div className="text-base font-bold text-white font-serif-custom">
              『{result.matchingCanonCase.title}』
            </div>
            <p className="text-xs text-gray-300">
              {result.matchingCanonCase.similarityReason}
            </p>

            <button
              onClick={() => onNavigateTimeline(result.matchingCanonCase.timelineId)}
              className="mt-2 inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#c99a4e] text-black text-xs font-bold hover:bg-[#e5b362] transition-colors"
            >
              <Clock className="w-4 h-4" />
              <span>該当する年表出来事カードへ移動する</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

    </section>
  );
};
