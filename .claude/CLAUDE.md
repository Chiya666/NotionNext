# 啟雅工程企業股份有限公司 - 形象網站

## 專案概述
本專案基於 [NotionNext](https://github.com/tangly1024/NotionNext) 開源專案修改，用於建構啟雅工程企業股份有限公司的企業形象網站。以 Notion 作為 CMS 內容管理系統，透過 Next.js 進行靜態網站生成。

## 技術棧
- **框架**: Next.js 14 (Pages Router, SSG + ISR)
- **語言**: JavaScript / TypeScript（混合）
- **樣式**: Tailwind CSS 3.4
- **CMS**: Notion（透過 react-notion-x + notion-client）
- **部署**: Vercel
- **快取**: Memory Cache / Redis / File Cache

## 使用的主題
- 主題名稱: `starter_chiya`（基於 `starter` 主題客製化）
- 主題路徑: `themes/starter_chiya/`
- 主題配置: `themes/starter_chiya/config.js`

## 關鍵設定檔
- `blog.config.js` - 全站主設定（Notion Page ID、主題、語系等）
- `themes/starter_chiya/config.js` - 主題配置（Hero、Features、About、FAQ、Footer 等區塊）
- `conf/` - 拆分設定（留言、分析、圖片、字體等）
- `next.config.js` - Next.js 框架設定（i18n、webpack alias、圖片域名）

## 開發指引
- 主要分支: `main2`
- 語系: `zh-TW`（繁體中文）
- 主題開發時請修改 `themes/starter_chiya/` 下的檔案
- Notion 資料結構變更請參考 `conf/notion.config.js`

## 系統文件
- 開發手冊: `docs/System_Summary.md`
- 使用手冊: `docs/README.md`
- 版本訊息: `docs/System_Changelog.md`
