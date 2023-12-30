import Head from 'next/head'

export default function Home() {
  return (
      <>
      <Head>
      <title>Pega Video - Salve seus vídeos favoritos para assistir offline </title>
        <meta
          name="description"
          content="Salve vídeos do Instagram e Youtube direto para seu celular."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <link rel="canonical" href="https://pegavideo.com" />
        <link rel="alternate" hrefLang="x-default" href="https://pegavideo.com"/>
        <link rel="alternate" hrefLang="es" href="https://pegavideo.com/es/"/>
        <link rel="alternate" hrefLang="en" href="https://pegavideo.com/en/"/>
        <link rel="alternate" hrefLang="fr" href="https://pegavideo.com/fr/"/>
        <link rel="alternate" hrefLang="pt" href="https://pegavideo.com/pt/"/>
        <link rel="alternate" hrefLang="in" href="https://pegavideo.com/in/"/>
        <link rel="alternate" hrefLang="id" href="https://pegavideo.com/id/"/>
        {/* <!--Facebook & Instagram cards:--> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pega Video - Salve seus vídeos favoritos para assistir offline " />
        <meta property="og:image" content="https://pegavideo.com/img/capa-de-compartilhamento-home.jpg" />
        <meta property="og:site_name" content="pegavideo.com/" />
        <meta property="og:url" content=" https://pegavideo.com" />
        <meta
          property="og:description"
          content="Salve vídeos do Instagram e Youtube direto para seu celular."
        />
        {/* <!--:Facebook & Instagram cards--> */}
        {/* <!--Twitter cards:--> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pega Video - Salve seus vídeos favoritos para assistir offline " />
        <meta
          name="twitter:description"
          content="Salve vídeos do Instagram e Youtube direto para seu celular."
        />
        <meta name="twitter:image:src" content="https://pegavideo.com/img/capa-de-compartilhamento-home.jpg" />
        <meta name="twitter:url" content="https://pegavideo.com/" />
        <meta name="twitter:domain" content="PegaVideo" />
        <meta name="twitter:creator" content="Pega Vídeo" />
        {/* <!--:Twitter cards--> */}
        <link rel="shortcut icon" type="image/x-icon" href="/img/busqueplano_favicon.png" />
      </Head>
      </>
  )
}
