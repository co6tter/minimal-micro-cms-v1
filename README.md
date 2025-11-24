# minimal-micro-cms-v1

## Overview

microCMS（ヘッドレスCMS）を使用したシンプルなサンプルアプリケーションです。Vercel Serverless Functionsを使用してmicroCMSからコンテンツを取得し、フロントエンドで表示します。

## Demo

- https://minimal-micro-cms-v1.vercel.app/

## Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **CMS**: microCMS
- **SDK**: microcms-js-sdk (v3.1.2)
- **Hosting**: Vercel
- **Runtime**: Node.js (ES Modules)

## Setup

1. リポジトリをクローン:
```bash
git clone https://github.com/co6tter/minimal-micro-cms-v1.git
cd minimal-micro-cms-v1
```

2. 依存関係をインストール:
```bash
npm install
```

3. 環境変数を設定:

`.env`ファイルをプロジェクトルートに作成し、以下の変数を設定してください:
```
SERVICE_DOMAIN=your-service-domain
API_KEY=your-api-key
```

4. Vercelにデプロイ:
```bash
vercel
```

## Usage

### ローカル開発

Vercel CLIを使用してローカル環境で実行:
```bash
vercel dev
```

### 機能

- microCMSから「お知らせ」コンテンツを取得して表示
- ページネーション機能（More ボタンで追加読み込み）
- ローディング状態の表示
- エラーハンドリング

### APIエンドポイント

- `GET /api/search?q={query}` - microCMSからコンテンツを検索して取得

## Directory Structure

```
minimal-micro-cms-v1/
├── api/
│   └── search.js          # Vercel Serverless Function（コンテンツ取得API）
├── libs/
│   └── client.js          # microCMSクライアント設定
├── index.html             # メインHTMLファイル
├── style.css              # スタイルシート
├── package.json           # プロジェクト設定
└── .env                   # 環境変数（要作成）
```

## License

This repository is for personal/private use only.

