/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

/**
 * 網站 Logo 組件
 * 負責顯示網站的標誌和標題
 * 根據頁面滾動位置和深色模式自動切換 Logo 顏色
 * @returns {JSX.Element} Logo 組件
 */
export const Logo = props => {
  // 從 props 中解構出是否為白色模式和 Notion 配置
  const { white, NOTION_CONFIG } = props
  const router = useRouter()
  // 獲取配置中的白色和普通 Logo 圖片
  const logoWhite = siteConfig('STARTER_LOGO_WHITE')
  const logoNormal = siteConfig('STARTER_LOGO')
  // 獲取全局深色模式狀態
  const { isDarkMode } = useGlobal()
  // 設置 Logo 狀態，首頁使用白色 Logo，其他頁面使用普通 Logo
  const [logo, setLogo] = useState(router.route === '/' ? logoWhite : logoNormal)
  // 設置 Logo 文字顏色狀態
  const [logoTextColor, setLogoTextColor] = useState(router.route === '/' ? 'text-white' : 'text-black')

  useEffect(() => {
    // 滚动监听
    // 設置滾動監聽的節流時間（200ms）
    const throttleMs = 200
    // 創建滾動監聽函數，使用 lodash 的節流功能
    const navBarScrollListener = throttle(() => {
      const scrollY = window.scrollY
      // 判斷是否在首頁且滾動位置在頂部
      const homePageNavBar = router.route === '/' && scrollY < 10

      // 根據條件切換 Logo 和文字顏色
      if (white || isDarkMode || homePageNavBar) {
        setLogo(logoWhite)
        setLogoTextColor('text-white')
      } else {
        setLogo(logoNormal)
        setLogoTextColor('text-black')
      }
    }, throttleMs)

    // 立即執行一次以設置初始狀態
    navBarScrollListener()
    // 添加滾動監聽事件
    window.addEventListener('scroll', navBarScrollListener)
    // 清理函數：移除滾動監聽事件
    return () => {
      window.removeEventListener('scroll', navBarScrollListener)
    }
  }, [isDarkMode, router, white, logoWhite, logoNormal])

  return (
    // Logo 容器，設置寬度和內邊距
    <div className='w-60 max-w-full px-4'>
      {/* Logo 內容區域，使用 flex 布局 */}
      <div className='navbar-logo flex items-center w-full py-5 cursor-pointer'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* Logo 圖片 */}
        {logo && (
          <LazyImage
            priority
            onClick={() => {
              router.push('/')
            }}
            src={logo}
            alt='logo'
            className='header-logo mr-1 h-10' // 設置 Logo大小， 圖片樣式：右邊距 1 單位，高度 10 單位
          />
        )}
        {/* Logo 文字 */}
        <span
          onClick={() => {
            router.push('/')
          }}
          className={`${logoTextColor} logo dark:text-white py-1.5 header-logo-text whitespace-nowrap text-2xl font-semibold`}>
          {siteConfig('TITLE')}
        </span>
      </div>
    </div>
  )
}
