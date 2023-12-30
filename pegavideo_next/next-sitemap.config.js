const siteUrl = 'https://www.pegavideo.com.br'
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404']
      },
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`
    ]
  }
}
