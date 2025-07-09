/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://waffy-game.vercel.app', // เปลี่ยนเป็น URL เว็บของคุณจริง ๆ
  generateRobotsTxt: true,                   // สร้างไฟล์ robots.txt ให้อัตโนมัติ
  sitemapSize: 7000,                         // กำหนดขนาด sitemap หากมีเยอะ
  changefreq: 'weekly',                      // ค่า default ของ changefreq
  priority: 0.7,                            // ค่า default ของ priority
  
}
