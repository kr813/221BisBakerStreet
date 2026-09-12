import { TimelineItem } from '../types';

export const timelineData: TimelineItem[] = [
  {
    id: 'tl-1854-birth',
    year: 1854,
    displayDate: '1854年1月6日頃（推定）',
    title: 'シャーロック・ホームズ誕生',
    summary: '英国の地主貴族の血を引く家に生まれる。祖母はフランスの画家ヴェルネの妹。',
    actionsPerformed: [
      'イギリスの地方貴族の家系に誕生。',
      '少年期より極めて優れた観察眼と化学・解剖学への関心を示す。'
    ],
    deductionNotes: 'ホームズ自身が『ギリシャ語通訳』にて「私の祖母はフランスの画家ヴェルネの妹にあたり、芸術家の血が直感的な観察力を育んだ」と語る。',
    category: 'early_life',
    location: 'イギリス・ヨークシャー（推定）',
    keyFigures: ['マイクロフト・ホームズ（兄）'],
    source: {
      titleJa: 'ギリシャ語通訳',
      titleEn: 'The Adventure of the Greek Interpreter',
      abbreviation: 'GREE',
      publishedYear: 1893,
      chapterOrSection: '短編本文冒頭',
      quoteJa: '「観察力は血統の中に組み込まれているのだ。私の祖母はフランスの画家ヴェルネの妹だった」',
      quoteEn: 'Art in the blood is liable to take the strangest forms... My ancestor was Vernet, the French artist.',
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1874-gloria-scott',
    year: 1874,
    displayDate: '1874年夏',
    title: '【初事件】グロリア・スコット号事件',
    summary: '大学時代の友人ヴィクター・トレヴァーの執事に隠された過去を演繹推理で暴露し、探偵業を志す契機となった最初期の事件。',
    actionsPerformed: [
      '友人の父トレヴァー治安判事の手の入れ墨と傷痕から過去を即座に洞察。',
      '暗号文（「ハチミツの補給は...」）を読解し、暗号解読法を提示。',
      '生涯最初の探偵事件として、観察と推論の有効性を実証した。'
    ],
    deductionNotes: '文字の並びから「1文字おき」に読む解読法を発見。探偵としてのキャリアを開始する動機となった。',
    category: 'early_life',
    location: 'ノーフォーク州 ドニソープ',
    keyFigures: ['ヴィクター・トレヴァー', 'トレヴァー老人'],
    source: {
      titleJa: 'グロリア・スコット号',
      titleEn: 'The Adventure of the Gloria Scott',
      abbreviation: 'GLOR',
      publishedYear: 1893,
      chapterOrSection: '短編本文',
      quoteJa: '「この事件が、私に探偵という職業の可能性を自覚させた最初の事件だった」',
      quoteEn: 'This was the very first case in which I was ever engaged.',
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1879-musgrave',
    year: 1879,
    displayDate: '1879年',
    title: 'マスグレーブ家の儀式文解読',
    summary: '大学時代の友人マスグレーブ家の奇妙な暗号儀式文を数学的・測量的に解読し、チャールズ1世の王冠を発見。',
    actionsPerformed: [
      '17世紀から伝わる家伝の問い答え（儀式文）を影の長さを計算して測量。',
      '楡の木とナラの実の影から幾何学的に地下室の位置を割り出す。',
      '消えた執事ブラントンと侍女の行方を追い、王冠の隠し場所を特定。'
    ],
    deductionNotes: '過去の儀式文を単なる習慣ではなく「具体的な宝の地図」と見抜く柔軟な発想。',
    category: 'early_life',
    location: 'サセックス州 ハールストン',
    keyFigures: ['レジナルド・マスグレーブ', 'ブラントン（執事）'],
    source: {
      titleJa: 'マスグレーブ家の儀式',
      titleEn: 'The Musgrave Ritual',
      abbreviation: 'MUSG',
      publishedYear: 1893,
      chapterOrSection: '短編本文',
      quoteJa: '「影はどこにあったか？ 楡の木の影はナラの実を越え、20フィート先を指していた」',
      type: 'Short Story'
    },
    importance: 'medium'
  },
  {
    id: 'tl-1881-meeting-watson',
    year: 1881,
    displayDate: '1881年1月',
    title: 'ワトソンとの運命的出会い・ベイカー街221B入居',
    summary: '聖バーソロミュー病院の化学実験室でスタンフォードの紹介によりワトソン医師と初対面。即座にアフガニスタン帰りであることを見抜く。',
    actionsPerformed: [
      'ヘモグロビン（血色素）の新沈殿反応テストに成功し興奮してワトソンに説明。',
      '初対面のワトソンの日焼け、左腕の怪我、硬い身ごなしから「アフガニスタン帰りの軍医」と即座に推論。',
      '共同生活のルール（煙草の煙、バイオリン演奏、実験の臭い）を相互確認し、ベイカー街221Bの部屋を借りる。'
    ],
    deductionNotes: '「ここに紳士がいる。医者の面口だが軍人の気風がある。腕に傷があり、顔は日焼けしているが手首は白い。どこで苦労したか？アフガニスタンだ」という有名な推論。',
    category: 'baker_street',
    location: 'ロンドン 聖バーソロミュー病院 / ベイカー街221B',
    keyFigures: ['ジョン・H・ワトソン', 'マイク・スタンフォード', 'ハドスン夫人'],
    source: {
      titleJa: '緋色の研究',
      titleEn: 'A Study in Scarlet',
      abbreviation: 'STUD',
      publishedYear: 1887,
      chapterOrSection: '第1章 / Chapter 1: Mr. Sherlock Holmes',
      quoteJa: '「はじめまして。おや、あなたアフガニスタンへ行ってこられましたね？」',
      quoteEn: "How are you? You have been in Afghanistan, I perceive.",
      type: 'Novel'
    },
    importance: 'high'
  },
  {
    id: 'tl-1881-study-in-scarlet',
    year: 1881,
    displayDate: '1881年3月',
    title: '【緋色の研究事件】殺人現場「RACHE」文字と毒薬の解明',
    summary: 'ローリストン・ガーデンズの空き家で起きたイーノック・ドバーの殺人事件。壁に血で書かれた文字と指輪から復讐劇を見破り犯人を逮捕。',
    actionsPerformed: [
      '現場前の道路の馬車痕、靴跡、壁の高さから犯人の身長・年齢・顔色を推定。',
      '壁の「RACHE」はドイツ語の「復讐」であって女性名「Rachel」ではないと指摘。',
      '落とし物の結婚指輪のダミー広告を新聞に出し、手先の老婆（変装した犯人）を誘い出す。',
      '辻馬車運転手ジェファーソン・ホープを221Bに呼び出し、手錠をかけて現行犯逮捕。'
    ],
    deductionNotes: 'ピルケースに入った毒薬とダミー薬の実験をワトソンの愛犬（病犬）で行い、毒性を実証。',
    category: 'baker_street',
    location: 'ロンドン Brixton Road Lauriston Gardens',
    keyFigures: ['ジョン・H・ワトソン', 'レストレード警部', 'グレグソン警部', 'ジェファーソン・ホープ'],
    source: {
      titleJa: '緋色の研究',
      titleEn: 'A Study in Scarlet',
      abbreviation: 'STUD',
      publishedYear: 1887,
      chapterOrSection: '第3章〜第7章 / Part 1, Chap 3-7',
      quoteJa: '「人生の無味乾燥な糸束の中に、緋色の殺人という一本の糸が織り込まれている」',
      quoteEn: "There's the scarlet thread of murder running through the colourless skein of life.",
      type: 'Novel'
    },
    importance: 'high'
  },
  {
    id: 'tl-1888-sign-of-four',
    year: 1888,
    displayDate: '1888年9月',
    title: '【四つの署名事件】アグラの宝物とテムズ川の追跡',
    summary: 'メアリー・モースタン嬢の依頼を受け、真珠の送り主とアグラの秘宝を巡る事件を解決。ワトソンとメアリーの愛のきっかけとなる。',
    actionsPerformed: [
      'ワトソンの懐中時計の傷と刻印から、亡き兄の性格と酒癖を完璧に言い当てる。',
      '足跡（一本足の男と小さく素早い足跡）から犯人が木義足の男とアンダマン諸島の島民（トビー）だと特定。',
      '名犬トビーを借りてクレオソートの匂いを追跡。',
      '蒸気船「オーロラ号」をテムズ川で追跡し、夜間の高速船チェイスを展開。'
    ],
    deductionNotes: '「不可能なものを除外していき、残ったものがどんなにありそうにないことでも、それが真実なのだ」という金言を提示。',
    category: 'fame_period',
    location: 'ロンドン テムズ川 / ライアル・ロッジ',
    keyFigures: ['メアリー・モースタン', 'ジョナサン・スモール', 'トンガ', 'サディアス・ショルトー'],
    source: {
      titleJa: '四つの署名',
      titleEn: 'The Sign of the Four',
      abbreviation: 'SIGN',
      publishedYear: 1890,
      chapterOrSection: '第1章〜第12章',
      quoteJa: '「すべての不可能を除外したとき、残ったものが、いかに信じられないことであっても、それに違いないのだ」',
      quoteEn: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
      type: 'Novel'
    },
    importance: 'high'
  },
  {
    id: 'tl-1888-scandal-bohemia',
    year: 1888,
    displayDate: '1888年3月',
    title: '【ボヘミアの醜聞】アイリーン・アドラーとの知恵比べ',
    summary: 'ボヘミア国王からの依頼で写真奪還に挑むが、「あの女性（The Woman）」アイリーン・アドラーの機知に敗れ、深い敬意を抱く。',
    actionsPerformed: [
      '変装（御者・貧しい牧師）を駆使してアドラーの邸宅に接近。',
      '発煙筒を窓から投げ込み「火事だ！」と叫ばせることで、彼女が最も大切な写真の隠し場所に駆け出す心理を利用。',
      '写真の隠し場所を特定するが、翌朝アドラーが一枚上を行き逃亡。ホームズに自分の写真を残す。'
    ],
    deductionNotes: 'ホームズが生涯で敬意を表した唯一の女性。報酬として国王の金貨ではなく彼女の写真だけを要求した。',
    category: 'fame_period',
    location: 'ロンドン ブライオニー・ロッジ / ベイカー街',
    keyFigures: ['アイリーン・アドラー', 'ボヘミア国王（フォン・クラム大公）'],
    source: {
      titleJa: 'ボヘミアの醜聞',
      titleEn: 'A Scandal in Bohemia',
      abbreviation: 'SCAN',
      publishedYear: 1891,
      chapterOrSection: '短編本文全般',
      quoteJa: '「ホームズにとって、彼女は常に『あの女性』であった」',
      quoteEn: "To Sherlock Holmes she is always THE woman.",
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1889-speckled-band',
    year: 1889,
    displayDate: '1889年4月',
    title: '【斑の紐事件】ストーク・モランの猛毒蛇を見破る',
    summary: 'ヘレン・ストナーの依頼。密室で姉が怪死した謎を、義父ロイロット博士の罠（沼ハブ/猛毒蛇）と見破り退治。',
    actionsPerformed: [
      'ヘレンの手に残された指の圧痕から、義父ロイロット博士の暴力的な力を分析。',
      '暗闇の寝室でダミーのベルの紐とダクトに潜み、口笛の音とともに現れた「斑の紐」を鞭で打ち据える。',
      '興奮した毒蛇がダクトを逆流し、犯人ロイロット博士自身に噛み付いて即死させる。'
    ],
    deductionNotes: '「ダミーのベルの紐」「固定されたベッド」「通気口の位置」という3つの不自然な共通点から密室トリックを看破。',
    category: 'fame_period',
    location: 'サリー州 ストーク・モラン Manor House',
    keyFigures: ['ヘレン・ストナー', 'ロイロット博士'],
    source: {
      titleJa: '斑の紐',
      titleEn: 'The Adventure of the Speckled Band',
      abbreviation: 'SPEC',
      publishedYear: 1892,
      chapterOrSection: '短編本文',
      quoteJa: '「斑の紐だ！神よ、斑の紐だ！」',
      quoteEn: "It was the band! The speckled band!",
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1889-baskervilles',
    year: 1889,
    displayDate: '1889年10月',
    title: '【バスカヴィル家の犬】ダートムアの魔犬伝説の科学的解明',
    summary: 'ダートムアの大湿原に伝わる魔犬伝説。ステープルトンがリン塗料を塗った巨大犬を使って引き起こした連続殺人を阻止。',
    actionsPerformed: [
      'ロンドンでモーティマー医師のステッキに残された噛み痕・磨耗から愛犬の犬種と所有者の性格を推論。',
      '変装して自ら湿原の古代住居跡に潜伏し、ワトソンに内密で単独捜査を進める。',
      '肖像画の顔を服で隠すことで、昆虫学者ステープルトンがバスカヴィル家の血を引く犯人であることを看破。',
      '濃霧の中、リンで光る凶悪な巨大犬をピストルで射殺。'
    ],
    deductionNotes: '伝説や超自然現象を全否定し、科学的な証拠と肖像画の遺伝的特徴から人間による陰謀を暴いた傑作。',
    category: 'fame_period',
    location: 'デヴォン州 ダートムア湿原 / バスカヴィル・ホール',
    keyFigures: ['ヘンリー・バスカヴィル卿', 'ジェームズ・モーティマー医師', 'ステープルトン'],
    source: {
      titleJa: 'バスカヴィル家の犬',
      titleEn: 'The Hound of the Baskervilles',
      abbreviation: 'HOUN',
      publishedYear: 1901,
      chapterOrSection: '第1章〜第15章',
      quoteJa: '「ワトソン、あれは巨大な漆黒の犬だった。だが地上のものであって、地獄の魔物ではない」',
      type: 'Novel'
    },
    importance: 'high'
  },
  {
    id: 'tl-1891-final-problem',
    year: 1891,
    displayDate: '1891年5月4日',
    title: '【最後の事件】モリアーティ教授との死闘・ライヘンバッハの滝',
    summary: '「犯罪界のナポレオン」ジェームズ・モリアーティ教授の巨大組織を壊滅させるためヨーロッパへ逃避行。ライヘンバッハの滝で一対一の決闘へ。',
    actionsPerformed: [
      'モリアーティの追手から逃れ、変装してロンドンを脱出。',
      'スイスのライヘンバッハの滝でモリアーティ教授と対峙。',
      '日本の武術「バリツ（Baritsu）」を駆使して教授の組み付きをかわし、教授を滝壺へ転落させる。',
      '自身の生存を隠し、組織の残党（モラン大佐）から身を守るため姿を消す。'
    ],
    deductionNotes: 'ホームズの宿敵モリアーティとの決着。全世界に衝撃を与えた死闘。',
    category: 'great_hiatus',
    location: 'スイス マイリンゲン ライヘンバッハの滝',
    keyFigures: ['ジェームズ・モリアーティ教授', 'ジョン・H・ワトソン', 'セバスチャン・モラン大佐'],
    source: {
      titleJa: '最後の事件',
      titleEn: 'The Final Problem',
      abbreviation: 'FINA',
      publishedYear: 1893,
      chapterOrSection: '短編本文クライマックス',
      quoteJa: '「もし彼を滅ぼすことができるなら、私は社会のために自分の生涯を喜んで終えるだろう」',
      quoteEn: "If I were assured of the former eventuality I would cheerfully bring my own career to a close.",
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1891-1894-hiatus',
    year: 1892,
    displayDate: '1891年〜1894年（大空白期）',
    title: '【大空白期】チベット冒険とシグエルソンとしての潜伏',
    summary: '生きてライヘンバッハを脱出したホームズは、モラン大佐の報復を避けるため世界を旅する。「シグエルソン」名義でラサを訪れダライ・ラマに謁見。',
    actionsPerformed: [
      'ノルウェー人の探検家「シグエルソン」と名乗り、チベットのラサを探訪。',
      'ダライ・ラマに面会し、数ヶ月滞在。',
      'ペルシャ、メッカ、ハルツームを旅し、フランスの化学研究所でコールタール誘導体の研究を行う。'
    ],
    deductionNotes: 'マイクロフトだけに生存を知らせ、資金援助を受けながら世界各地で知識を深めた。',
    category: 'great_hiatus',
    location: 'チベット（ラサ）、ペルシャ、モンペリエ',
    keyFigures: ['マイクロフト・ホームズ', 'ダライ・ラマ'],
    source: {
      titleJa: '空き家の冒険',
      titleEn: 'The Adventure of the Empty House',
      abbreviation: 'EMPT',
      publishedYear: 1903,
      chapterOrSection: '冒頭〜ホームズの回想',
      quoteJa: '「私は2年間チベットを旅し、ラサを訪れてダライ・ラマに会った」',
      quoteEn: "I travelled for two years in Tibet, then, and amused myself by visiting Lhassa.",
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1894-empty-house',
    year: 1894,
    displayDate: '1894年4月',
    title: '【空き家の冒険】ホームズの生還・モラン大佐の逮捕',
    summary: '古本屋の老人に変装してワトソンの前に姿を現し失神させる。221Bに向かいの空き家から蝋人形のホームズを空気銃で狙撃したモラン大佐を逮捕。',
    actionsPerformed: [
      '猫背の古本屋に変装し、ワトソンの診察室に現れて正体を明かす。',
      '221Bの窓辺に完璧なシルエットの蝋人形を配置し、ハドスン夫人に定期的に動かさせる。',
      '対面の空き家（カムデン・ハウス）に潜伏し、狙撃に来たモラン大佐を後ろから取り押さえる。'
    ],
    deductionNotes: '心理的トラップと変装技術の極致。モリアーティの右腕モラン大佐の特殊空気銃を無力化した。',
    category: 'return_period',
    location: 'ロンドン カムデン・ハウス / ベイカー街221B',
    keyFigures: ['ジョン・H・ワトソン', 'セバスチャン・モラン大佐', 'ハドスン夫人', 'レストレード警部'],
    source: {
      titleJa: '空き家の冒険',
      titleEn: 'The Adventure of the Empty House',
      abbreviation: 'EMPT',
      publishedYear: 1903,
      chapterOrSection: '短編本文全般',
      quoteJa: '「ワトソン、旧友の姿を見てそんなに驚くことはないじゃないか」',
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1895-bruce-partington',
    year: 1895,
    displayDate: '1895年11月',
    title: '【ブルース・パーティントン設計書事件】国家機密奪還',
    summary: '潜水艦の機密設計書が盗まれ地下鉄線路で死体が発見された事件。兄マイクロフトの直々の依頼で国家の危機を救う。',
    actionsPerformed: [
      '地下鉄の屋根に乗せられた遺体がカーブで落ちたという物理的メカニズムを見抜く。',
      '新聞の個人的伝言欄（暗号アゴニー・コラム）を利用して容疑者オボシュタインを誘い出す。',
      '国家最高機密の設計書を取り戻し、ヴィクトリア女王からエメラルドのタイピンを授与される。'
    ],
    deductionNotes: '政府の最高頭脳である兄マイクロフトとの共同捜査。ホームズの国家貢献度が際立つ。',
    category: 'return_period',
    location: 'ロンドン ウールウィッチ / 地下鉄グロスター・ロード駅',
    keyFigures: ['マイクロフト・ホームズ', 'カドガン・ウェスト', 'ヒュー・ヴァルデマー少佐'],
    source: {
      titleJa: 'ブルース・パーティントン設計書',
      titleEn: 'The Adventure of the Bruce-Partington Plans',
      abbreviation: 'BRUC',
      publishedYear: 1908,
      chapterOrSection: '短編本文',
      quoteJa: '「ヴィクトリア女王陛下より、エメラルドのタイピンを賜った」',
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1903-retirement',
    year: 1903,
    displayDate: '1903年秋',
    title: '現役引退とサセックス農園への移住',
    summary: 'ロンドンでの探偵業を引退し、サセックスのサウス・ダウンズに小さな農園を購入。養蜂（ミツバチの飼育）と哲学の研究に没頭する。',
    actionsPerformed: [
      'ベイカー街221Bを引き払い、サセックスの海を見下ろす丘へ移住。',
      'ミツバチの観察・実験を行い、『養蜂実用手引書（Practical Handbook of Bee Culture）』を執筆。',
      '静かな研究生活を送りつつ、ごく稀に近隣の怪事件（ライオンのたてがみ事件等）を解決。'
    ],
    deductionNotes: '自然科学への探求心は衰えず、観察力をミツバチの習性解明に注いだ。',
    category: 'retirement',
    location: 'サセックス州 サウス・ダウンズ',
    keyFigures: ['ハドスン夫人（または家政婦）', 'ジョン・H・ワトソン'],
    source: {
      titleJa: 'ライオンのたてがみ',
      titleEn: 'The Adventure of the Lion\'s Mane',
      abbreviation: 'LION',
      publishedYear: 1926,
      chapterOrSection: '冒頭文',
      quoteJa: '「私はロンドンの喧騒を離れ、サセックスの静かな丘でミツバチと暮らしている」',
      type: 'Short Story'
    },
    importance: 'high'
  },
  {
    id: 'tl-1914-last-bow',
    year: 1914,
    displayDate: '1914年8月2日',
    title: '【最後の挨拶】第1次世界大戦前夜のスパイ網壊滅',
    summary: 'イギリス政府の要請で「アルタモント」と名乗るアメリカ人親独派スパイに変装し、ドイツの重鎮スパイ・フォン・ボークの諜報網を一手で壊滅。',
    actionsPerformed: [
      '2年間にわたりアメリカのアイルランド系親独派「アルタモント」になりすまし、潜入捜査。',
      'ドイツ皇帝の信頼厚い最高スパイ、フォン・ボークに偽の軍事情報を掴ませ、油断させる。',
      'ワトソンを運転手に変装させ、開戦直前の夜にフォン・ボークを麻酔薬で眠らせて逮捕。'
    ],
    deductionNotes: '60歳を迎えたホームズが祖国のために見せた最後の決定的活躍。名セリフ「東の風が吹いてくる」が提示される。',
    category: 'retirement',
    location: 'エセックス州 ハリッジ海岸',
    keyFigures: ['フォン・ボーク', 'ジョン・H・ワトソン（運転手変装）', '内閣総理大臣'],
    source: {
      titleJa: '最後の挨拶',
      titleEn: 'His Last Bow',
      abbreviation: 'LAST',
      publishedYear: 1917,
      chapterOrSection: '短編本文結び',
      quoteJa: '「東の風が吹いてくるよ、ワトソン。これまでイギリスに吹いたこともないような冷たい風だ。だが風が止んだ時、より清々しい国が残るだろう」',
      quoteEn: "There's a east wind coming, Watson... But it's God's own wind none the less, and a cleaner, better, stronger land will stand in the sunshine when the storm has cleared.",
      type: 'Short Story'
    },
    importance: 'high'
  }
];
