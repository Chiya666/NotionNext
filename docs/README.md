# 啟雅工程企業股份有限公司 - 形象網站使用手冊

## 系統功能
本網站為啟雅工程企業股份有限公司的企業形象網站，提供以下功能：

- **企業形象展示**: 服務特色、關於我們、常見問答等區塊
- **部落格系統**: 透過 Notion 管理文章內容，自動同步至網站
- **多語系**: 支援繁體中文與英文
- **響應式設計**: 適配各種螢幕尺寸

## 環境變數及用途

環境變數範本位於 `.env.example`，請複製為 `.env` 並填入實際值。

| 環境變數 | 用途 | 範例 |
|---|---|---|
| `NOTION_PAGE_ID` | Notion 資料庫頁面 ID | `02ab3b8678004aa69e9e415905ef32a5` |
| `NEXT_PUBLIC_THEME` | 使用的網站主題 | `starter_chiya` |
| `NEXT_PUBLIC_LANG` | 預設語系 | `zh-TW` |
| `API_BASE_URL` | Notion API 端點 | `https://www.notion.so/api/v3` |
| `NOTION_TOKEN_V2` | Notion 私有資料庫授權令牌（若為私有庫） | — |
| `NOTION_ACTIVE_USER` | Notion 活躍使用者 ID（若為私有庫） | — |

## 各功能的使用方法

### 1. 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 啟動生產伺服器
npm run start
```

### 2. 內容管理（Notion CMS）

所有網站內容均透過 Notion 資料庫管理：

1. 開啟對應的 Notion 資料庫頁面
2. 新增或編輯資料列：
   - **type**: 設定為 `Post`（文章）、`Page`（頁面）或 `Menu`（選單）
   - **status**: 設定為 `Published` 發佈，`Invisible` 隱藏
   - **title**: 文章標題
   - **slug**: URL 路徑（例如 `about-us`）
   - **category**: 文章分類
   - **tags**: 文章標籤（多選）
   - **date**: 發佈日期
   - **summary**: 文章摘要
3. 網站會在 ISR 間隔後自動更新內容（預設 5 秒）

### 3. 主題配置

主題設定檔位於 `themes/starter_chiya/config.js`，可調整：

- **Logo**: 設定 `STARTER_LOGO` 和 `STARTER_LOGO_WHITE`
- **Hero 區塊**: 標題、背景圖、CTA 按鈕
- **服務特色**: 圖示、標題、描述
- **關於我們**: 企業介紹文字與圖片
- **FAQ**: 常見問答內容
- **Footer**: 頁尾聯絡資訊

### 4. 部署至 Vercel

1. 將程式碼推送至 GitHub
2. 在 Vercel 中匯入該 Repository
3. 設定環境變數（參考上方環境變數表）
4. 點擊部署

### 5. 選單管理

在 Notion 資料庫中新增 `type` 為 `Menu` 的列：
- `title`: 選單顯示名稱
- `slug`: 連結路徑
- 支援 `SubMenu` 類型作為子選單
