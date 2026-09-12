export type CategoryType = 
  | 'early_life'     // 早年期・学生時代
  | 'baker_street'   // ベイカー街初期
  | 'fame_period'    // 名声確立期
  | 'great_hiatus'   // 大空白期 (1891-1894)
  | 'return_period'  // 帰還・成熟期
  | 'retirement';    // 引退・サセックス期

export interface PrimarySource {
  titleJa: string;            // 作品名（日本語）: 例「緋色の研究」
  titleEn: string;            // 作品名（英語）: 例 "A Study in Scarlet"
  abbreviation: string;       // 聖典略称: 例 "STUD"
  publishedYear: number;      // 発表年: 例 1887
  chapterOrSection: string;   // 該当章/節: 例 "第3章 / Part 1, Chap 3"
  quoteJa?: string;           // 原典からの引用文（日本語）
  quoteEn?: string;           // 原典からの引用文（英語）
  type: 'Novel' | 'Short Story'; // 長編 / 短編
}

export interface TimelineItem {
  id: string;
  year: number;               // 推定年代 (例: 1881)
  displayDate: string;        // 表示用日付文字列 (例: "1881年1月" や "1891年5月4日")
  title: string;              // 出来事タイトル
  summary: string;            // 出来事の概要
  actionsPerformed: string[]; // シャーロック・ホームズが行ったこと（具体的な行動リスト）
  deductionNotes?: string;    // ホームズの推論・特筆すべき手法
  category: CategoryType;
  location: string;           // 発生場所 (例: "ロンドン ベイカー街221B", "ライヘンバッハの滝")
  keyFigures: string[];       // 登場人物 (ワトソン, モリアーティ, アイリーン等)
  source: PrimarySource;      // 原典ソース情報
  importance: 'high' | 'medium' | 'normal';
}

export interface CanonWork {
  id: string;
  titleJa: string;
  titleEn: string;
  abbreviation: string;
  publishedYear: number;
  type: 'Novel' | 'Short Story';
  collectionJa: string; // 収録短編集名（短編の場合）
  summary: string;
  timelineYear: number; // 作中事件の推定年代
  keyCharacters: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'watson' | 'user' | 'system';
  text: string;
  timestamp: string;
  relatedTimelineId?: string; // 関連する年表アイテムID
  suggestedPrompts?: string[];
}

export interface DeductionInput {
  clues: string[];
  location: string;
  suspectsStr: string;
}

export interface DeductionResult {
  hypothesis: string;
  deductiveSteps: string[];
  conclusion: string;
  matchingCanonCase: {
    title: string;
    similarityReason: string;
    timelineId: string;
  };
}
