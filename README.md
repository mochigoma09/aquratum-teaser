# Aquratum Official Website Project

昭島市発のアイドルグループ「**Aquratum**（アクラータム）」の公式ウェブサイトのリポジトリです。
ファン（ユーザー）がライブ情報やメンバー情報に素早くアクセスできる、モバイルファーストな設計を採用しています。

現在、ティザーサイトとして「深層地下水」と「160万年前の地層」をコンセプトとした、没入感のある「反重力 & 流体工学 (Antigravity & Fluid Tech)」デザインを展開しています。

## 🛠 技術スタック (Tech Stack)

- **Framework**: [Vue.js 3](https://vuejs.org/) (Composition API / `<script setup>`)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [Vue Router 4](https://router.vuejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (ユーティリティクラス + カスタムデザイン)
- **Icons**: [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)
- **State Management**: Pinia (必要に応じて導入)

## 📂 ディレクトリ構成 (Project Structure)

主要なページコンポーネントは `src/views` に配置し、共通パーツは `src/components` に管理しています。

```text
src/
├── assets/          # 静的アセット（ロゴ、背景画像、共通スタイル）
├── components/      # 共通コンポーネント
│   ├── Hero.vue     # ヒーローセクション（泡アニメーション、ロゴ）
│   ├── Concept.vue  # コンセプトセクション
│   ├── MemberList.vue # メンバー一覧（浮遊カード）
│   └── MemberDetail.vue # メンバー詳細モーダル
├── views/           # ページコンポーネント（Router View）
│   ├── HomeView.vue          # TOPページ (Teaser)
│   ├── MembersView.vue       # メンバー一覧ページ
│   ├── NewsView.vue          # NEWS一覧 & 詳細
│   └── ScheduleView.vue      # SCHEDULE一覧 & 詳細
├── router/
│   └── index.js     # ルーティング定義
└── App.vue
```

## 🚀 セットアップと実行 (Setup & Run)

### 前提条件
- Node.js (v18以上推奨)

### インストール
```bash
npm install
```

### ローカル開発サーバー起動
```bash
npm run dev
```
http://localhost:5173 で起動します。

### ビルド（本番環境用）
```bash
npm run build
```

### 本番ビルドのプレビュー
```bash
npm run preview
```

## 📄 ページ構成と仕様概要

### 1. TOP / TEASER (/)
- **Concept: Deep Stream**: スクロール連動のテキストフェード、上昇する泡のアニメーションで世界観を表現。
- **Immersive UI**: グラスモーフィズムや幾何学的な背景を使用したプレミアムなデザイン。
- **Pickup Schedule**: (Official移行時) 直近のライブ情報を上部に固定表示し、CV率向上を図る。

### 2. MEMBER (/members)
- **一覧**: 3D視差効果を用いた浮遊するメンバーカード。バストアップ写真、名前、担当カラーを表示。
- **詳細 (/members/:id)**:
    - キーボード（矢印キー）およびボタンによる前後ナビゲーション。
    - 各メンバーカラー（Abyssal Blue, Fossil White等）を基調とした背景演出。
    - 自己紹介、SNSリンク、担当ロール表示。

### 3. NEWS (/news)
- **一覧**: カテゴリ（Live, Release, Media, Other）でフィルタリング可能なリスト。
- **詳細 (/news/:id)**: 記事本文。画像や外部リンクを含む。

### 4. SCHEDULE (/schedule)
**※本サイトの最重要コンテンツ**
- **一覧**: Googleカレンダー埋め込み、またはリスト形式。
    - **「予約ボタン（TiGET/LivePocket）」を目立たせる設計**。
- **詳細 (/schedule/:id)**:
    - 会場アクセス（Google Maps連携）、タイムテーブル、特典会レギュレーション。

## ⚠️ 開発上の注意点 (Guidelines)

- **レスポンシブ対応**: 地下アイドルのファン層は9割以上がスマートフォンからのアクセスです。PCビューよりも**スマホビュー（特にiPhone）での表示崩れがないかを最優先で確認**してください。
- **画像最適化**: メンバーの写真は高画質である必要がありますが、読み込み速度を落とさないよう webp 形式の利用や遅延読み込み（Lazy Load）を推奨します。
- **コンプライアンス**: 著作権や肖像権に配慮し、画像の右クリック保存禁止（contextmenuイベント制御）などの簡易的な保護策を実装しています。
