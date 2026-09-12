import { CanonWork } from '../types';

export const canonWorks: CanonWork[] = [
  // 長編 4作
  {
    id: 'canon-stud',
    titleJa: '緋色の研究',
    titleEn: 'A Study in Scarlet',
    abbreviation: 'STUD',
    publishedYear: 1887,
    type: 'Novel',
    collectionJa: '長編第1作',
    summary: 'シャーロック・ホームズとワトソン医師の出会い、そして復讐に燃える殺人事件の謎を解き明かす記念すべき第1作。',
    timelineYear: 1881,
    keyCharacters: ['シャーロック・ホームズ', 'ジョン・H・ワトソン', 'レストレード警部', 'ジェファーソン・ホープ']
  },
  {
    id: 'canon-sign',
    titleJa: '四つの署名',
    titleEn: 'The Sign of the Four',
    abbreviation: 'SIGN',
    publishedYear: 1890,
    type: 'Novel',
    collectionJa: '長編第2作',
    summary: 'インドのアグラの宝物を巡る密室殺人とテムズ川の高速追跡劇。ワトソンの未来の妻メアリー・モースタンが登場。',
    timelineYear: 1888,
    keyCharacters: ['メアリー・モースタン', 'ジョナサン・スモール', 'トンガ', 'サディアス・ショルトー']
  },
  {
    id: 'canon-houn',
    titleJa: 'バスカヴィル家の犬',
    titleEn: 'The Hound of the Baskervilles',
    abbreviation: 'HOUN',
    publishedYear: 1901,
    type: 'Novel',
    collectionJa: '長編第3作',
    summary: 'ダートムアの荒野に囁かれる魔犬伝説。科学と冷徹な観察眼で恐ろしい陰謀を暴き出す最高傑作。',
    timelineYear: 1889,
    keyCharacters: ['ヘンリー・バスカヴィル卿', 'ステープルトン', 'モーティマー医師']
  },
  {
    id: 'canon-vall',
    titleJa: '恐怖の谷',
    titleEn: 'The Valley of Fear',
    abbreviation: 'VALL',
    publishedYear: 1915,
    type: 'Novel',
    collectionJa: '長編第4作',
    summary: 'バールストーン館で起きた頭部無き死体の密室殺人と、モリアーティ教授の影、アメリカ秘密結社の過去。',
    timelineYear: 1888,
    keyCharacters: ['ジョン・ダグラス', 'マクドナルド警部', 'モリアーティ教授']
  },
  
  // 代表的短編作品（冒険集・回想集・帰還集・最後の挨拶・事件簿より抜粋）
  {
    id: 'canon-scan',
    titleJa: 'ボヘミアの醜聞',
    titleEn: 'A Scandal in Bohemia',
    abbreviation: 'SCAN',
    publishedYear: 1891,
    type: 'Short Story',
    collectionJa: 'シャーロック・ホームズの冒険',
    summary: 'ホームズの変装と知恵の裏をかき、唯一彼を負かした「あの女性」アイリーン・アドラーとの知恵比べ。',
    timelineYear: 1888,
    keyCharacters: ['アイリーン・アドラー', 'ボヘミア国王']
  },
  {
    id: 'canon-spec',
    titleJa: '斑の紐',
    titleEn: 'The Adventure of the Speckled Band',
    abbreviation: 'SPEC',
    publishedYear: 1892,
    type: 'Short Story',
    collectionJa: 'シャーロック・ホームズの冒険',
    summary: '密室で聞こえた「口笛」と「斑の紐」。ホームズ自身が最もスリリングと評した密室殺人事件。',
    timelineYear: 1889,
    keyCharacters: ['ヘレン・ストナー', 'ロイロット博士']
  },
  {
    id: 'canon-fina',
    titleJa: '最後の事件',
    titleEn: 'The Final Problem',
    abbreviation: 'FINA',
    publishedYear: 1893,
    type: 'Short Story',
    collectionJa: 'シャーロック・ホームズの思い出',
    summary: '宿敵モリアーティ教授との熾烈な闘いと、スイス・ライヘンバッハの滝での衝撃的なクライマックス。',
    timelineYear: 1891,
    keyCharacters: ['ジェームズ・モリアーティ教授', 'セバスチャン・モラン大佐']
  },
  {
    id: 'canon-empt',
    titleJa: '空き家の冒険',
    titleEn: 'The Adventure of the Empty House',
    abbreviation: 'EMPT',
    publishedYear: 1903,
    type: 'Short Story',
    collectionJa: 'シャーロック・ホームズの帰還',
    summary: '奇跡の生還を果たしたホームズがワトソンの前に再登場し、モリアーティの残党モラン大佐を逮捕する。',
    timelineYear: 1894,
    keyCharacters: ['セバスチャン・モラン大佐', 'ロナルド・アデア']
  },
  {
    id: 'canon-bruc',
    titleJa: 'ブルース・パーティントン設計書',
    titleEn: 'The Adventure of the Bruce-Partington Plans',
    abbreviation: 'BRUC',
    publishedYear: 1908,
    type: 'Short Story',
    collectionJa: 'シャーロック・ホームズ最後の挨拶',
    summary: '盗まれた潜水艦の機密設計図と地下鉄線路の遺体。兄マイクロフトとともに国家の危急を救う。',
    timelineYear: 1895,
    keyCharacters: ['マイクロフト・ホームズ', 'カドガン・ウェスト']
  },
  {
    id: 'canon-last',
    titleJa: '最後の挨拶',
    titleEn: 'His Last Bow',
    abbreviation: 'LAST',
    publishedYear: 1917,
    type: 'Short Story',
    collectionJa: 'シャーロック・ホームズ最後の挨拶',
    summary: '第1次世界大戦直前の夜、アメリカ人スパイに変装したホームズがドイツの諜報網を一手で破砕する。',
    timelineYear: 1914,
    keyCharacters: ['フォン・ボーク', 'アルタモント（ホームズ変装）']
  }
];
