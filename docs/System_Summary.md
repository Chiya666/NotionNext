# 系統開發手冊 - 啟雅工程形象網站

## 系統功能
啟雅工程企業股份有限公司的企業形象網站，基於 NotionNext 開源專案客製化開發。

### 核心功能
- **企業形象展示**: Hero 區塊、服務特色、關於我們、FAQ 等區塊
- **Notion CMS**: 使用 Notion 資料庫作為內容管理系統，支援文章發佈與管理
- **多語系支援**: 支援中文（zh-TW）與英文（en）雙語系
- **部落格系統**: 文章列表、分類、標籤、搜尋功能
- **SEO 最佳化**: Sitemap、RSS、Meta 標籤自動生成
- **響應式設計**: 支援桌面、平板、手機等各種裝置

## 系統架構

### 資料流
```
Notion Database (CMS)
  └─> NotionNext API Layer (lib/notion/)
        └─> Cache Layer (Memory / Redis / File)
              └─> Next.js SSG / ISR
                    └─> starter_chiya Theme (themes/starter_chiya/)
                          └─> Vercel CDN → User Browser
```

### 主題架構
`starter_chiya` 主題為企業形象Landing Page，包含以下區塊：
- **NavBar**: 導航列（Logo + 選單 + CTA 按鈕）
- **Hero**: 英雄區塊（主視覺 + 標語 + CTA）
- **Features**: 服務特色展示（水刀清洗/切割等）
- **About**: 關於我們（企業介紹 + 圖片）
- **FAQ**: 常見問答（手風琴式展開）
- **Blog List**: 部落格文章列表
- **Footer**: 頁尾（聯絡資訊 + 版權）

## 技術棧

| 層級 | 技術 |
|---|---|
| 框架 | Next.js 14（Pages Router, SSG + ISR） |
| 語言 | JavaScript + TypeScript（混合） |
| 樣式 | Tailwind CSS 3.4 |
| CMS | Notion（react-notion-x 7.7.1 + notion-client 7.7.1） |
| 認證 | Clerk（可選，功能開關控制） |
| 快取 | Memory Cache / Redis (ioredis) / File Cache |
| 部署 | Vercel（主要）/ Docker |
| 動畫 | WOW.js |
| SEO | next-sitemap / feed（RSS） |

## 檔案結構

```
NotionNext_Chiya/
├── .claude/
│   └── CLAUDE.md              # Claude 專案指引
├── blog.config.js             # 全站主設定檔
├── next.config.js             # Next.js 框架設定
├── middleware.ts              # Edge Middleware（Clerk 認證 + UUID 重導向）
├── tailwind.config.js         # Tailwind CSS 設定
├── pages/                     # Next.js 路由頁面
│   ├── index.js               # 首頁
│   ├── [prefix]/              # 動態路由（文章、分類等）
│   └── api/                   # API 路由
├── themes/
│   └── starter_chiya/         # 啟雅工程專用主題
│       ├── config.js           # 主題配置（所有區塊內容設定）
│       ├── index.js            # 主題入口（Layout 匯出）
│       ├── components/         # 主題元件
│       │   ├── Hero.js         # 英雄區塊
│       │   ├── NavBar.js       # 導航列
│       │   ├── Features.js     # 服務特色
│       │   ├── About.js        # 關於我們
│       │   ├── FAQ.js          # 常見問答
│       │   └── Footer.js       # 頁尾
│       └── LayoutBase.js       # 基礎佈局
├── lib/
│   ├── notion/                # Notion API 整合層
│   │   ├── getNotionAPI.js     # Notion Client 單例（速率限制 + 請求去重）
│   │   ├── getPostBlocks.js    # 取得頁面區塊（重試 + 快取）
│   │   └── getPageProperties.js # 屬性提取
│   ├── db/
│   │   └── getSiteData.js      # 網站資料協調器
│   └── cache/
│       └── cache_manager.js    # 快取策略管理
├── conf/                      # 拆分設定檔
│   ├── notion.config.js        # Notion 欄位對應
│   ├── comment.config.js       # 留言外掛
│   ├── analytics.config.js     # 流量分析
│   └── ...                     # 其他設定
├── components/                # 共用 React 元件
├── hooks/                     # 自訂 Hooks
├── styles/                    # 全域 CSS
├── public/                    # 靜態資源
│   └── images/starter_chiya/  # 啟雅工程圖片資源
└── docs/                      # 系統文件
    ├── System_Summary.md       # 開發手冊（本文件）
    ├── System_Changelog.md     # 版本變更紀錄
    └── README.md               # 使用手冊
```

## 關鍵設定說明

### blog.config.js
| 設定項 | 目前值 | 說明 |
|---|---|---|
| `NOTION_PAGE_ID` | `02ab3b86...` | Notion 資料庫 Page ID（多語系以逗號分隔） |
| `THEME` | `starter_chiya` | 使用的主題 |
| `LANG` | `zh-TW` | 預設語系 |
| `NEXT_REVALIDATE_SECOND` | `5` | ISR 快取更新間隔（秒） |

### Notion 資料庫欄位
| 欄位 | 說明 |
|---|---|
| `type` | 內容類型（Post / Page / Menu / SubMenu / Notice） |
| `status` | 狀態（Published / Invisible） |
| `title` | 標題 |
| `slug` | URL 路徑 |
| `category` | 分類 |
| `tags` | 標籤 |
| `date` | 發佈日期 |
| `summary` | 摘要 |
