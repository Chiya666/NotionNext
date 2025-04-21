import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { SVGEmail } from './svg/SVGEmail'
import { SVGLocation } from './svg/SVGLocation'
/* eslint-disable react/no-unescaped-entities */
/**
 * Contact 組件 - 顯示聯繫方式和留言表單
 * 包含以下功能：
 * 1. 顯示聯繫標題和描述文字
 * 2. 顯示位置信息
 * 3. 顯示郵箱信息
 * 4. 可選的外部留言表單嵌入
 */
export const Contact = () => {
  // 獲取外部留言表單URL配置
  const url = siteConfig('STARTER_CONTACT_MSG_EXTERNAL_URL')
  return (
    <>
      {/* <!-- ====== Contact Start ====== --> */}
      <section id='contact' className='relative py-20 md:py-[120px]'>
        <div className='absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark'></div>
        <div className='absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2'></div>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center'>
            {/* 左側內容區域 */}
            <div className='w-full px-4 lg:w-7/12 xl:w-8/12'>
              <div className='ud-contact-content-wrapper'>
                {/* 標題部分 */}
                <div className='ud-contact-title mb-12 lg:mb-[150px]'>
                  {/* 可在 config 中配置 STARTER_CONTACT_TITLE */}
                  <span className='mb-6 block text-base font-medium text-dark dark:text-white'>
                    {siteConfig('STARTER_CONTACT_TITLE')}
                  </span>
                  {/* 可在 config 中配置 STARTER_CONTACT_TEXT */}
                  <h2 className='max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white'>
                    {siteConfig('STARTER_CONTACT_TEXT')}
                  </h2>
                </div>

                {/* 聯繫信息區域 */}
                <div className='mb-12 flex flex-wrap justify-between lg:mb-0'>
                  {/* 位置信息 */}
                  <div className='mb-8 flex w-[330px] max-w-full'>
                    <div className='mr-6 text-[32px] text-primary'>
                      <SVGLocation />
                    </div>
                    <div>
                      {/* 可在 config 中配置 STARTER_CONTACT_LOCATION_TITLE */}
                      <h5 className='mb-[18px] text-lg font-semibold text-dark dark:text-white'>
                        {siteConfig('STARTER_CONTACT_LOCATION_TITLE', null, CONFIG)}
                      </h5>
                      {/* 可在 config 中配置 STARTER_CONTACT_LOCATION_TEXT */}
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('STARTER_CONTACT_LOCATION_TEXT', null, CONFIG)}
                      </p>
                    </div>
                  </div>

                  {/* 郵箱信息 */}
                  <div className='mb-8 flex w-[330px] max-w-full'>
                    <div className='mr-6 text-[32px] text-primary'>
                      <SVGEmail />
                    </div>
                    <div>
                      {/* 可在 config 中配置 STARTER_CONTACT_EMAIL_TITLE */}
                      <h5 className='mb-[18px] text-lg font-semibold text-dark dark:text-white'>
                        {siteConfig('STARTER_CONTACT_EMAIL_TITLE', null, CONFIG)}
                      </h5>
                      {/* 可在 config 中配置 STARTER_CONTACT_EMAIL_TEXT */}
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('STARTER_CONTACT_EMAIL_TEXT')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側留言表單區域 - 僅在設置了外部表單URL時顯示 */}
            {url && url !== '' && (
              <>
                <div className='w-full px-4 lg:w-5/12 xl:w-4/12'>
                  <div className='wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]'
                    data-wow-delay='.2s'>
                    {/* 外部表單嵌入 - 可在 config 中配置 STARTER_CONTACT_MSG_EXTERNAL_URL */}
                    <iframe
                      src={siteConfig('STARTER_CONTACT_MSG_EXTERNAL_URL', null, CONFIG)}
                      width='100%'
                      height='590px'
                      frameBorder='0'></iframe>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ====== Contact End ====== --> */}
    </>
  )
}
