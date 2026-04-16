import BLOG from '@/blog.config'
import type { SiteData } from '../site.types'

export function EmptyData(pageId?: string): SiteData {
  return {
    NOTION_CONFIG: {},
    siteInfo: {
      title: BLOG.TITLE || 'NotionNext BLOG',
      description: BLOG.DESCRIPTION || '无法获取 Notion 数据',
      pageCover: BLOG.HOME_BANNER_IMAGE || '/bg_image.jpg',
      icon: BLOG.AVATAR || '/avatar.svg',
      link: BLOG.LINK
    },
    notice: null,
    allPages: [],
    allNavPages: [],
    latestPosts: [],
    categoryOptions: [],
    tagOptions: [],
    customNav: [],
    customMenu: [],
    postCount: 0
  }
}
