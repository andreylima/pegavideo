import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx: any) => {

  const paginas_estaticas = [
    {
      loc: "https://pegavideo.com/pt/instagram",
      changefreq: "daily",
      priority: 1
    }
  ]

  const fields = [...paginas_estaticas]

  return getServerSideSitemap(ctx, fields)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Site () {}
