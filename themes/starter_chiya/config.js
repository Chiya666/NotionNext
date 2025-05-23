/**
 * Starter 主題配置文件
 */

// =============== 基礎配置區塊 ===============
const CONFIG = {
  // 默認只展示Logo文字，如果設置了logo圖片，會在文字左側顯示圖標
  STARTER_LOGO: '/images/starter_chiya/logo/ChiyaLogo.png', // 普通logo圖片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter_chiya/logo/ChiyaLogo.png', // 透明底淺色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜單部分不在此處配置，請在Notion數據庫中添加MENU

  // =============== 導航區塊 ===============
  STARTER_NAV_BUTTONS_ENABLE: false, // 控制是否顯示登錄/註冊按鈕
  // region 區塊內容
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',
  // endregion

  // =============== 英雄區塊 ===============
  STARTER_HERO_ENABLE: true, // 開啟英雄區
  // region 區塊內容
  // Hero背景相關配置
  STARTER_HERO_BACKGROUND_ENABLE: true, // 是否啟用背景圖
  STARTER_HERO_BACKGROUND_IMAGE: '', // 自定義背景圖，留空則使用Notion封面圖
  STARTER_HERO_BACKGROUND_OPACITY: 0.7, // 背景圖透明度
  STARTER_HERO_BACKGROUND_FIXED: false, // 背景圖是否固定
  // 英雄區文字
  STARTER_HERO_TITLE_1: '', // 英雄區主標題
  STARTER_HERO_TITLE_2: '', // 英雄區副標題
  // 英雄區兩個按鈕，如果TEXT留空則隱藏按鈕
  STARTER_HERO_BUTTON_1_TEXT: '', // 英雄區按鈕
  STARTER_HERO_BUTTON_1_URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄區按鈕
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄區按鈕
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄區按鈕
  STARTER_HERO_BUTTON_2_ICON: '/images/starter_chiya/github.svg', // 英雄區按鈕2的圖標，不需要則留空

  // 英雄區配圖，如需隱藏，改為空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '', // 產品預覽圖 ，默認讀取public目錄下圖片
  STARTER_HERO_BANNER_IMAGE: '', // hero區下方的全寬圖
  // endregion

  // =============== 品牌合作區塊 ===============
  STARTER_BRANDS_ENABLE: false, // 合作伙伴開關
  // region 區塊內容
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],
  // endregion

  // =============== 服務特性區塊 ===============
  STARTER_FEATURE_ENABLE: true, // 特性區塊開關
  // region 區塊內容
  STARTER_FEATURE_TITLE: '啟雅工程企業股份有限公司', // 特性
  STARTER_FEATURE_TEXT_1: '主要服務項目', // 特性
  STARTER_FEATURE_TEXT_2: '以深耕行業超過30年的經驗為您解決問題。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '水刀清洗', // 特性1
  STARTER_FEATURE_1_TEXT_1: '項目細節說明', // 特性1說明
  STARTER_FEATURE_1_BUTTON_TEXT: '瞭解更多', // 特性1按鈕
  STARTER_FEATURE_1_BUTTON_URL: '/ServiceOffering1', // 特性1連結

  STARTER_FEATURE_2_TITLE_1: '水刀切割', // 特性2
  STARTER_FEATURE_2_TEXT_1: '項目細節說明', // 特性2說明
  STARTER_FEATURE_2_BUTTON_TEXT: '瞭解更多', // 特性2按鈕
  STARTER_FEATURE_2_BUTTON_URL: '/ServiceOffering2', // 特性2連結

  STARTER_FEATURE_3_TITLE_1: '免入槽水刀清洗', // 特性3
  STARTER_FEATURE_3_TEXT_1: '項目細節說明', // 特性3說明
  STARTER_FEATURE_3_BUTTON_TEXT: '瞭解更多', // 特性3按鈕
  STARTER_FEATURE_3_BUTTON_URL: '/ServiceOffering3', // 特性3連結

  STARTER_FEATURE_4_TITLE_1: '換熱器整修', // 特性4
  STARTER_FEATURE_4_TEXT_1: '項目細節說明', // 特性4說明
  STARTER_FEATURE_4_BUTTON_TEXT: '瞭解更多', // 特性4按鈕
  STARTER_FEATURE_4_BUTTON_URL: '/ServiceOffering4', // 特性4連結
  // endregion

  // =============== 關於我們區塊 ===============
  STARTER_ABOUT_ENABLE: true, // ABOUT區塊開關
  // region 區塊內容
  STARTER_ABOUT_TITLE: '關於我們',
  STARTER_ABOUT_TEXT:
    '我們是一家成立超過30年的水刀工程公司，專注於設備管路的清洗和不動火切割，服務項目涵蓋換熱器維護相關工程，如現場法蘭修復及管束抽裝等。 <br /> <br />我們提供卓越的技術和豐富的經驗，為客戶提供全方位的解決方案。',
  STARTER_ABOUT_BUTTON_TEXT: '瞭解更多',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter_chiya/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter_chiya/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '+',
  STARTER_ABOUT_TIPS_1_IMAGE: '/images/starter_chiya/about/about-image-03.jpg', // 用於替換數字顯示的照片
  STARTER_ABOUT_TIPS_2: '博客站點',
  STARTER_ABOUT_TIPS_3: '正在線上運行',
  // endregion

  // =============== 價格方案區塊 ===============
  STARTER_PRICING_ENABLE: false, // 價格區塊開關
  // region 區塊內容
  STARTER_PRICING_TITLE: '價格表',
  STARTER_PRICING_TEXT_1: '很棒的定價計劃',
  STARTER_PRICING_TEXT_2:
    '我們制定了靈活的付費模式，您可以按需選擇。（NotionNext免費開源，這裡僅演示產品訂閱付費功能，請勿下單購買！）',

  STARTER_PRICING_1_TITLE: '入門版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能點',
  STARTER_PRICING_1_FEATURES: '所有的主題,免費更新,幫助手冊', // 英文逗號隔開
  STARTER_PRICING_1_BUTTON_TEXT: '立即購買',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推薦',
  STARTER_PRICING_2_TITLE: '基礎版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能點',
  STARTER_PRICING_2_FEATURES: '包含入門版,項目源碼,內部社群,技術諮詢,SEO優化', // 英文逗號隔開
  STARTER_PRICING_2_BUTTON_TEXT: '立即購買',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高級版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能點',
  STARTER_PRICING_3_FEATURES: '包含基礎版,功能定制開發', // 英文逗號隔開
  STARTER_PRICING_3_BUTTON_TEXT: '立即購買',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',
  // endregion

  // =============== 用戶評價區塊 ===============
  STARTER_TESTIMONIALS_ENABLE: false, // 測評區塊開關
  // region 區塊內容
  STARTER_TESTIMONIALS_TITLE: '用戶反饋',
  STARTER_TESTIMONIALS_TEXT_1: '我們的用戶怎麼說',
  STARTER_TESTIMONIALS_TEXT_2:
    '數千位站長選擇用NotionNext搭建他們的網站,通過幫助手冊、交流社群以及技術諮詢，大家成功上線了自己的網站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 評分圖標

  // 這裡不支持CONFIG和環境變量，需要一一修改此處代碼。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感謝大佬的方法。之前嘗試過Super、Potion等國外的第三方平台，實現效果一般，個性化程度遠不如這個方法，已經用起來了！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站長',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '很喜歡這個主題，本代碼小白用三天颱風假期搭建出來了，還根據大佬的教程弄了自定義域名，十分感謝，已請喝咖啡~',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百寶袋 站長',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '嗚嗚嗚，經過一個下午的努力，終於把博客部署好啦，非常感謝Tangly1024大佬的框架和教程，這是有生之年用過的最好用的博客框架┭┮﹏┭┮。從今之後，我就可以在自己的博客裡bb啦，( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且聽風吟 站長',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感謝提供這麼好的項目哈哈 之前一直不知道怎麼部署(別的項目好難好複雜)這個相對非常簡單 新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI資源分享 Blog',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '灰常感謝大佬的博客項目，能將博客和notion結合起來，這一直是我挺期待的博客模式。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站長',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感謝了',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考驗輔導 站長',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],
  // endregion

  // =============== FAQ常見問題區塊 ===============
  STARTER_FAQ_ENABLE: true, // 常見問題模塊開關
  // region 區塊內容
  STARTER_FAQ_TITLE: '常見問題解答',
  STARTER_FAQ_TEXT_1: '有任何問題嗎？請看這裡',
  STARTER_FAQ_TEXT_2: '我們收集了常見的用戶疑問',

  STARTER_FAQ_1_QUESTION: '什麼是水刀?',
  STARTER_FAQ_1_ANSWER:
    '問題解答(HTML格式)',

  STARTER_FAQ_2_QUESTION: '水刀能做什麼?',
  STARTER_FAQ_2_ANSWER:
    '問題解答(HTML格式)',

  STARTER_FAQ_3_QUESTION: '水刀會打壞設備嗎?',
  STARTER_FAQ_3_ANSWER:
    '問題解答(HTML格式)',

  STARTER_FAQ_4_QUESTION: '問題4',
  STARTER_FAQ_4_ANSWER:
    '問題解答(HTML格式)',
  // endregion

  // =============== 團隊成員區塊 ===============
  STARTER_TEAM_ENABLE: false, // 團隊成員區塊開關
  // region 區塊內容
  STARTER_TEAM_TITLE: '團隊成員',
  STARTER_TEAM_TEXT_1: '我們的開發者團隊',
  STARTER_TEAM_TEXT_2:
    'NotionNext 由眾多開源技術愛好者們共同合作完成，感謝每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">貢獻者</a>',

  // 這裡不支持CONFIG和環境變量，需要一一修改此處代碼。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],
  // endregion

  // =============== 文章區塊 ===============
  STARTER_BLOG_ENABLE: true, // 首頁博文區塊開關
  // region 區塊內容
  STARTER_BLOG_TITLE: '文章彙整',
  STARTER_BLOG_COUNT: 3, // 首頁博文區塊默認展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新聞',
  STARTER_BLOG_TEXT_2: '這裡會發布一些最新動態',
  // endregion

  // =============== 聯繫我們區塊 ===============
  STARTER_CONTACT_ENABLE: true, // 聯繫模塊開關
  // region 區塊內容
  STARTER_CONTACT_TITLE: '聯繫我們',
  STARTER_CONTACT_TEXT: '告訴我們您遇到的問題',
  STARTER_CONTACT_LOCATION_TITLE: '我們的位置',
  STARTER_CONTACT_LOCATION_TEXT: '高雄、雲林',
  STARTER_CONTACT_EMAIL_TITLE: '我們如何幫助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'chiya.n20218@msa.hinet.net',

  // 嵌入外部表單
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/9pimno', // 基於NoteForm創建，將留言數據存在Notion中
  // endregion
  
  // =============== 行動呼籲區塊 ===============
  STARTER_CTA_ENABLE: false,
  // region 區塊內容
  STARTER_CTA_TITLE: '你還在等待什麼呢？',
  STARTER_CTA_TITLE_2: '現在開始吧',
  STARTER_CTA_DESCRIPTION:
    '訪問NotionNext的操作文檔，我們提供了詳細的教程，幫助你即刻搭建站點',
  STARTER_CTA_BUTTON: true, // 是否顯示按鈕
  STARTER_CTA_BUTTON_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  STARTER_CTA_BUTTON_TEXT: '開始體驗',
  // endregion

  // =============== 頁尾區塊 ===============
  // region 區塊內容
  STARTER_FOOTER_SLOGAN: '啟雅工程企業股份有限公司',
  // 聯絡資訊，段落可自由添加
  STARTER_FOOTER_CONTACT_INFO: [
    '高雄市林園區半部路92巷30號',
    '電話：07-6428290',
    '雲林縣麥寮鄉海豐村平和60之52',
    '電話：05-6937784'
  ],

  /* 頁腳菜單組，可自由添加項目，
  增加項目複製
      {
      TITLE: '主要服務項目',
      LINK_GROUP: [
        {TITLE: '頁面標題', URL: '/頁面連結'}
      ]
    }
  增加頁面連結複製{TITLE: '頁面標題', URL: '/頁面連結'}
  增加外部連結複製{TITLE: '外部連結', URL: '外部連結'}
  */
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '主要服務項目',
      LINK_GROUP: [
        { TITLE: '水刀清洗', URL: '/ServiceOffering1' },
        { TITLE: '水刀切割', URL: '/ServiceOffering2' },
        { TITLE: '免入槽水刀清洗', URL: '/ServiceOffering3'},
        { TITLE: '換熱器整修', URL: '/ServiceOffering4'}
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隱私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律聲明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服務協議',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',
  // endregion

  // =============== 錯誤頁面區塊 ===============
  // region 區塊內容
  // 404頁面的提示語
  STARTER_404_TITLE: '我們似乎找不到您要找的頁面。',
  STARTER_404_TEXT: '抱歉！您要查找的頁面不存在。可能已經移動或刪除。',
  STARTER_404_BACK: '回到主頁',
  // endregion

  // =============== 其他功能區塊 ===============
  // region 區塊內容
  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://www.chiya.com.tw', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false, // 是否開啟郵件訂閱 請先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
  // endregion
}

export default CONFIG
