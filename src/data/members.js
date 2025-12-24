const imageModules = import.meta.glob('../assets/images/**/*.png', { eager: true });

function getMemberImages(folderName) {
    return Object.keys(imageModules)
        .filter(path => path.includes(`/${folderName}/`))
        .sort()
        .map(path => imageModules[path].default);
}

export const members = [
    {
        id: 'shizuku',
        nameEn: 'Shizuku Misumi',
        nameJa: '深澄 シズク',
        role: ['リーダー', 'メインボーカル'],
        age: '23歳',
        birthday: '2002年5月1日',
        colorName: 'アビスブルー',
        colorNameEn: 'Abyssal Blue',
        colorCode: '#3b82f6',
        images: getMemberImages('shizuku'),
        bio: '音楽大学で声楽を専攻していた経歴を持つ、グループ随一の実力派ボーカリスト。\nアカデミックな研鑽を積む中で自身の表現の殻を破れずにいた際、昭島の深層地下水が「70メートル以上の地層というフィルターを経て、30年以上の歳月をかけて磨き上げられる」という事実に感銘を受け、アイドルへの転身を決意した。\n理知的で冷静な性格からリーダーを務める一方、MCでは水質や地質について専門用語を交えて語る「水ソムリエ」としての一面も覗かせる。\nその歌声は「純度100%」と評され、バラードやアンビエント楽曲において圧倒的な透明感を放つ。'
    },
    {
        id: 'kujira',
        nameEn: 'Kujira Amano',
        nameJa: '天野 クジラ',
        role: ['センター', 'メインダンサー'],
        age: '21歳',
        birthday: '2004年8月20日',
        colorName: 'フォッシルホワイト',
        colorNameEn: 'Fossil White',
        colorCode: '#e2e8f0',
        images: getMemberImages('kujira'),
        bio: '160万年前の地層から発見された「アキシマクジラ」の化石をモチーフとし、「太古からの覚醒」を体現するセンター。\n天真爛漫な性格で、普段は少し天然な言動も目立つが、ステージ上では天才的なダンスの才能を発揮する。\nコンテンポラリーダンスの素養を取り入れた、手足を長く使うダイナミックなパフォーマンスが特徴。\n「自分はアキシマクジラの生まれ変わりである」という独自の感性を持ち、多摩川の川面を見つめて涙を流すなど、土地の記憶に深くリンクしたエピソードを持つ。'
    },
    {
        id: 'fuji',
        nameEn: 'Fuji Haijima',
        nameJa: '拝島 フジ',
        role: ['ビジュアル', 'サブボーカル'],
        age: '22歳',
        birthday: '2003年9月15日',
        colorName: 'ウィスタリアパープル',
        colorNameEn: 'Wisteria Purple',
        colorCode: '#c084fc',
        images: getMemberImages('fuji'),
        bio: '拝島公園の都指定天然記念物「千歳のフジ」を象徴する、和の美しさを湛えたビジュアル担当。\n物腰柔らかくグループの精神的支柱であるが、芯の強さも併せ持つ。\n重度の「歴女」という意外な側面があり、拝島宿や日吉神社の歴史に造詣が深い。\nその知識と美貌を活かし、SNSでは着物や浴衣姿で昭島の名所や歴史的背景を発信するインフルエンサー的な役割も担う。\nステージでは扇子を用いたしなやかな舞と、艶のある歌声で観客を魅了する。'
    },
    {
        id: 'sena',
        nameEn: 'Sena Tamagawa',
        nameJa: '多摩川 セナ',
        role: ['ラップ', '盛り上げ隊長'],
        age: '20歳',
        birthday: '2005年',
        colorName: 'リバーエメラルド',
        colorNameEn: 'River Emerald',
        colorCode: '#34d399',
        images: getMemberImages('sena'),
        bio: '「アーバン・ネイチャー」なライフスタイルを体現する、ボーイッシュでアクティブなラッパー。\n休日にはモリパーク アウトドアヴィレッジに入り浸るほどのキャンプ好きであり、自然と遊ぶ知的な都市生活者（キャンパー）としての側面を持つ。\nDIYを得意とし、グループの舞台セットや小道具の制作にも関わる「クリエイティブ・メーカー」でもある。\nライブでは多摩川の激流を思わせるエネルギッシュなラップとアクロバットで、会場の熱量を一気に高める起爆剤となる。'
    },
    {
        id: 'layer',
        nameEn: 'Layer Kohaku',
        nameJa: '琥珀 レイヤ',
        role: ['キーボード', '作曲', '末っ子'],
        age: '20歳',
        birthday: '2005年11月13日',
        colorName: 'ストラットアンバー',
        colorNameEn: 'Stratum Amber',
        colorCode: '#fbbf24',
        images: getMemberImages('layer'),
        bio: '絶対音感を持ち、多摩川のせせらぎや街の環境音をサンプリングして楽曲に取り入れる「音の考古学者」。\n昭島の地層（上総層群）のように、記憶や音を積み重ねることを大切にする探究心旺盛なクリエイター。\n内気な性格だが、握手会などのファン対応は非常に丁寧で評価が高い。\nライブパフォーマンスではシンセサイザーやサンプラーを即興で操り、グループの音楽性に実験的かつ奥行きのあるサウンドスケープを加える演奏担当でもある。'
    }
];
