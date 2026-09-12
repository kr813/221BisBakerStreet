# 221BisBakerStreet ポータルサイト システム基本・詳細仕様書 (System Specification)

本書は、シャーロック・ホームズの作中行動年表、原典ソースアーカイブ、およびAI対話・演繹推理シミュレーターを備えたポータルサイト「221B Baker Street Portal」のシステム基本・詳細仕様書である。

---

## 1. プロジェクト概要 (Project Overview)

| 項目 | 内容 |
| :--- | :--- |
| **システム名称** | 221B Baker Street - Sherlock Holmes Chronology & AI Intelligence Portal |
| **リポジトリ** | `https://github.com/kr813/221BisBakerStreet.git` |
| **公開URL** | `https://kr813.github.io/221BisBakerStreet/` |
| **ホスティング環境** | GitHub Pages (GitHub Actions パイプラインによる自動デプロイ) |
| **開発言語・フレームワーク** | React 18, TypeScript 5, Vite 5, Tailwind CSS 3 |
| **目的** | アーサー・コナン・ドイル卿の聖典全60作品からホームズの生涯と具体的な行動を年表化し、その原典根拠を厳密に提示するとともに、AIスキルによるインタラクティブな対話・推理体験を提供する。 |

---

## 2. システムアーキテクチャ (System Architecture)

### 2.1 技術スタック (Tech Stack)
* **Frontend Core**: React 18 (TypeScript TSX)
* **Build Tool & Bundler**: Vite 5 (GitHub Pages用 `base: '/221BisBakerStreet/'` 設定)
* **Styling**: Tailwind CSS 3, Custom CSS (ヴィクトリア調モダンダークデザイン・ガラスモフィズム)
* **Iconography**: Lucide React
* **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)

### 2.2 ディレクトリ・ファイル構造 (Directory Structure)
```text
221BisBakerStreet/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自動デプロイワークフロー
├── src/
│   ├── components/             # UI・機能コンポーネント群
│   │   ├── Navbar.tsx          # ヘッダーナビゲーション & タブ切り替え
│   │   ├── Hero.tsx            # ヒーローセクション & イントロダクション
│   │   ├── TimelineSection.tsx # インタラクティブ作中行動年表 & 原典モーダル
│   │   ├── SourceCatalog.tsx   # 聖典60作品カタログ & 年表逆引き
│   │   ├── AIWatsonAssistant.tsx# AI ワトソン博士対話チャットコンポーネント
│   │   ├── AIDeductionLab.tsx  # AI 演繹推理シミュレーター
│   │   └── Footer.tsx          # フッター & リポジトリリンク
│   ├── data/                   # 聖典ナレッジ＆年表データベース
│   │   ├── timelineData.ts     # ホームズの生涯・作中行動・原典ソースデータ
│   │   └── canonData.ts        # 聖典60作品リスト（長編4作・短編56作）
│   ├── types/
│   │   └── index.ts            # TypeScript型定義（TimelineItem, Source, Canon, Chat等）
│   ├── App.tsx                 # アプリケーション統合エントリーポイント
│   ├── main.tsx                # DOMレンダリングエントリー
│   ├── index.css               # グローバルデザインシステム & カラーパレット
│   └── vite-env.d.ts           # モジュール型宣言
├── SPECIFICATION.md            # 【本書】システム仕様書
├── index.html                  # HTML5 エントリー & メタタグ
├── vite.config.ts              # Viteビルド設定
├── tailwind.config.js          # Tailwindテーマ＆カラーパレット設定
├── tsconfig.json               # TypeScriptコンパイラ設定
└── package.json                # パッケージ依存関係
```

---

## 3. データモデル仕様 (Data Schema Specifications)

### 3.1 `TimelineItem` (年表項目)
ホームズの生涯および作中出来事の標準型定義。

```typescript
export interface TimelineItem {
  id: string;               // 一意の識別子 (例: "tl-1881-study-in-scarlet")
  year: number;             // 推定年代 (例: 1881)
  displayDate: string;      // 表示用日付表記 (例: "1881年3月")
  title: string;            // 出来事・事件タイトル
  summary: string;          // 概要説明
  actionsPerformed: string[]; // シャーロック・ホームズが作中で行なった具体的行動
  deductionNotes?: string;  // ホームズの推論・特筆すべき観察ポイント
  category: CategoryType;   // カテゴリ区分 ('early_life' | 'baker_street' | 'fame_period' | 'great_hiatus' | 'return_period' | 'retirement')
  location: string;         // 発生場所
  keyFigures: string[];     // 主要登場人物
  source: PrimarySource;    // 原典ソース根拠データ
  importance: 'high' | 'medium' | 'normal'; // 重要度
}
```

### 3.2 `PrimarySource` (原典ソース構造)
各年表エントリの根拠となる作品情報。

```typescript
export interface PrimarySource {
  titleJa: string;            // 作品名（日本語）: 例「緋色の研究」
  titleEn: string;            // 作品名（英語）: 例 "A Study in Scarlet"
  abbreviation: string;       // 聖典略称: 例 "STUD"
  publishedYear: number;      // 発表年: 例 1887
  chapterOrSection: string;   // 該当章/節: 例 "第3章 / Part 1, Chap 3"
  quoteJa?: string;           // 聖典からの引用テキスト（日本語）
  quoteEn?: string;           // 聖典からの引用テキスト（英語）
  type: 'Novel' | 'Short Story'; // 長編 / 短編
}
```

### 3.3 `CanonWork` (聖典作品カタログ)
```typescript
export interface CanonWork {
  id: string;
  titleJa: string;
  titleEn: string;
  abbreviation: string;
  publishedYear: number;
  type: 'Novel' | 'Short Story';
  collectionJa: string; // 収録短編集名
  summary: string;
  timelineYear: number; // 作中推定年代
  keyCharacters: string[];
}
```

---

## 4. コア機能仕様 (Core Feature Specifications)

### 4.1 聖典作中行動年表 (`TimelineSection.tsx`)
* **年表表示ビュー**: 縦型タイムライン軸に沿って、年代順にカード形式で表示。
* **ホームズの作中行動明記**: 各カードに `actionsPerformed` を箇条書きで強調表示。
* **インタラクティブフィルター**:
  * **カテゴリ切り替え**: 早年期 (1854-1880), ベイカー街初期 (1881-1887), 名声期 (1888-1891), 大空白期 (1891-1894), 帰還期 (1894-1902), 引退期 (1903-1914)。
  * **フリーワードリアルタイム検索**: タイトル、あらすじ、行動、登場人物、場所、原典名での即時絞り込み。
* **原典ソースモーダル表示**:
  * 各カードの「原典ソースを表示」ボタンをクリックするとモーダルが開く。
  * 聖典からの正確な引用テキスト（`quoteJa` / `quoteEn`）、該当章（`chapterOrSection`）、発表年などを提示。

### 4.2 原典ソースカタログ (`SourceCatalog.tsx`)
* 聖典全60作品のリスト表示と長編/短編切り替え。
* 選択した作品の詳細データ表示。
* **年表逆引き機能**: 選択した作品に紐づく作中行動年表エントリを一覧化し、ワンクリックで年表の該当カードへ切り替え・自動スクロール。

### 4.3 AI ワトソン相談室 (`AIWatsonAssistant.tsx`)
* **ペルソナ**: 聖典の記録者である軍医ジョン・H・ワトソン博士。
* **ナレッジエンジン**: ユーザーの入力テキストを解析し、聖典・年表データベースと照合してレスポンスを生成。
* **年表カードダイレクト連携**: 回答に関連する事件がある場合、チャット内に「関連する年表カードを開く」ボタンを動的に配置し、クリックで対象カードへジャンプ。

### 4.4 AI 演繹推理室 (`AIDeductionLab.tsx`)
* **演繹法（Deduction）思考パイプライン**:
  1. **観察 (Observation)**: 服の汚れ、傷、所持品、不自然な共通点の抽出。
  2. **仮説 (Hypothesis)**: 日常生活の不均衡と行動目的の推論。
  3. **検証 (Verification)**: 物理法則や心理トラップの照合。
  4. **演繹的結論 (Conclusion)**: 「すべての不可能を除外した後に残ったものが真実である」の導出。
* **聖典ケースマッチング**: 入力された手がかりパターンを聖典（『四つの署名』の時計推論、『斑の紐』の密室通気口など）と自動照合し、年表カードへのリンクを提示。

---

## 5. UI/UX & デザインシステム仕様 (Design System)

ヴィクトリア朝の気品とベイカー街221Bの世界観を凝縮したモダンダークデザイン。

### 5.1 カラーパレット (Color Palette)
| 変数名 / 用途 | カラーコード | 印象 |
| :--- | :--- | :--- |
| **Victorian Dark** (背景ベース) | `#0b0c10` / `#10141d` | ロンドンの夜と霧 |
| **Brass Gold** (プライマリアクセント) | `#c99a4e` / `#e5b362` | 221Bの真鍮ドアプレート、ランタンの光 |
| **Crimson / Burgundy** (サブアクセント) | `#721c24` | ベイカー街の暖炉、アームチェア |
| **Paper Parchment** (テキスト/引用) | `#f7f4ea` / `#e2e8f0` | 古びた羊皮紙・紙面 |
| **Glass Panel / Card** | `rgba(20, 23, 29, 0.75)` | ガラスモフィズムによる現代的立体感 |

### 5.2 タイポグラフィ (Typography)
* **見出し・ブランドロゴ**: `Cinzel` (クラシックローマン体)
* **タイトル・引用文**: `Playfair Display` (ヴィクトリアン・エレガントセリフ)
* **本文・操作UI**: `Inter` (視認性の高い現代サンセリフ)

---

## 6. GitHub Pages 自動デプロイ仕様 (CI/CD Specification)

### 6.1 デプロイワークフロー (`.github/workflows/deploy.yml`)
* `main` ブランチへのプッシュ時に自動起動。
* Node.js 20 環境での `npm run build` 実行。
* `actions/deploy-pages@v4` による `./dist` ディレクトリの自動ホスティング。

### 6.2 Vite 設定 (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/221BisBakerStreet/', // GitHub Pages リポジトリ名パス
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
```

---

## 7. 保守・拡張ガイド (Maintenance & Extension Guide)

### 7.1 年表データの追加手順
[src/data/timelineData.ts](file:///c:/Users/champ/iCloudDrive/Work/20260912_221BisBakerStreet/src/data/timelineData.ts) の `timelineData` 配列に新しい `TimelineItem` オブジェクトを追加することで、自動的に年表カード、検索インデックス、原典ソースモーダル、AI連携に反映される。

### 7.2 AI ナレッジパターンの拡張
* [AIWatsonAssistant.tsx](file:///c:/Users/champ/iCloudDrive/Work/20260912_221BisBakerStreet/src/components/AIWatsonAssistant.tsx) 内のキーワード判定ロジックを追加することで、ワトソン博士の回答バリエーションを無制限に拡張可能。
* [AIDeductionLab.tsx](file:///c:/Users/champ/iCloudDrive/Work/20260912_221BisBakerStreet/src/components/AIDeductionLab.tsx) 内の手がかり解析パターンを追加することで、より多角的な演繹推理シミュレーションが可能。

---
*初版作成日: 2026年9月12日*  
*作成: 221B Baker Street Project Team*
