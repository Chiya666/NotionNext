/* eslint-disable react/no-unknown-property */

/**
 * 此處樣式只對當前主題生效
 * 此處不支持tailwindCSS的 @apply 語法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
  /* 導航欄固定效果 */
  #theme-starter .sticky{
    position: fixed;
    z-index: 20;
    background-color: rgb(255 255 255 / 0.8);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  
  /* 暗色模式下的導航欄背景 */
  :is(.dark #theme-starter .sticky){
    background-color: rgb(17 25 40 / 0.8);
  }
  
  /* 導航欄模糊效果和陰影 */
  #theme-starter .sticky {
    -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
  
  /* 導航欄 Logo 樣式 */
  #theme-starter .sticky .navbar-logo{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  /* 導航欄漢堡選單按鈕樣式 */
  #theme-starter .sticky #navbarToggler span{
    --tw-bg-opacity: 1;
    background-color: rgb(17 25 40 / var(--tw-bg-opacity));
  }
  
  /* 暗色模式下的漢堡選單按鈕 */
  :is(.dark #theme-starter .sticky #navbarToggler span){
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  
  /* 導航欄選單項目樣式 */
  #theme-starter .sticky #navbarCollapse li > a{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  /* 導航欄選單項目懸停效果 */
  #theme-starter .sticky #navbarCollapse li > a:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }

  /* 導航欄按鈕樣式 */
  #theme-starter .sticky #navbarCollapse li > button{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  /* 暗色模式下的導航欄選單項目 */
  :is(.dark #theme-starter .sticky #navbarCollapse li > a){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  /* 暗色模式下的導航欄選單項目懸停效果 */
  :is(.dark #theme-starter .sticky #navbarCollapse li > a:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }

  /* 暗色模式下的導航欄按鈕 */
  :is(.dark #theme-starter .sticky #navbarCollapse li > button){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  /* 導航欄滾動選單項目激活狀態 */
  #navbarCollapse li .ud-menu-scroll.active{
    opacity: 0.7;
  }
  
  /* 固定導航欄下的滾動選單項目激活狀態 */
  #theme-starter .sticky #navbarCollapse li .ud-menu-scroll.active{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  /* 登入按鈕樣式 */
  #theme-starter .sticky .loginBtn{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  /* 登入按鈕懸停效果 */
  #theme-starter .sticky .loginBtn:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  /* 暗色模式下的登入按鈕 */
  :is(.dark #theme-starter .sticky .loginBtn){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  /* 暗色模式下的登入按鈕懸停效果 */
  :is(.dark #theme-starter .sticky .loginBtn:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }
  
  /* 註冊按鈕樣式 */
  #theme-starter .sticky .signUpBtn{
    --tw-bg-opacity: 1;
    background-color: rgb(55 88 249 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  /* 註冊按鈕懸停效果 */
  #theme-starter .sticky .signUpBtn:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(27 68 200 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  /* 主題切換器文字樣式 */
  #theme-starter .sticky #themeSwitcher ~ span{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  /* 暗色模式下的主題切換器文字 */
  :is(.dark #theme-starter .sticky #themeSwitcher ~ span){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  /* 漢堡選單按鈕動畫效果 */
  .navbarTogglerActive > span:nth-child(1){
    top: 7px;
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .navbarTogglerActive > span:nth-child(2){
    opacity: 0;
  }
  
  .navbarTogglerActive > span:nth-child(3){
    top: -8px;
    --tw-rotate: 135deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  /* 主要文字顏色 */
  .text-body-color{
    --tw-text-opacity: 1;
    color: rgb(99 115 129 / var(--tw-text-opacity));
  }
  
  /* 次要文字顏色 */
  .text-body-secondary{
    --tw-text-opacity: 1;
    color: rgb(136 153 168 / var(--tw-text-opacity));
  }

  /* 輪播圖按鈕樣式 */
  .common-carousel .swiper-button-next:after,
  .common-carousel .swiper-button-prev:after{
    display: none;
  }

  /* 輪播圖導航按鈕基本樣式 */
  .common-carousel .swiper-button-next,
  .common-carousel .swiper-button-prev{
    position: static !important;
    margin: 0px;
    height: 3rem;
    width: 3rem;
    border-radius: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
    --tw-shadow: 0px 8px 15px 0px rgba(72, 72, 138, 0.08);
    --tw-shadow-colored: 0px 8px 15px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  /* 輪播圖導航按鈕懸停效果 */
  .common-carousel .swiper-button-next:hover,
  .common-carousel .swiper-button-prev:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(55 88 249 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  /* 暗色模式下的輪播圖導航按鈕 */
  :is(.dark .common-carousel .swiper-button-next),:is(.dark 
  .common-carousel .swiper-button-prev){
    --tw-bg-opacity: 1;
    background-color: rgb(17 25 40 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  /* 輪播圖導航按鈕圖標大小 */
  .common-carousel .swiper-button-next svg,
  .common-carousel .swiper-button-prev svg{
    height: auto;
    width: auto;
  }
  `}</style>
}

export { Style }
