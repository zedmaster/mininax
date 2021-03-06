//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
//import logo from './logo.webp';
//import styles from '../styles/App.css'

export default function Home() {
  return (
    
    <div>
    <head>
      
      <link rel="icon" href="/logo512.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />      
      
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Atelie Mininax || Costura || Artesanato || Curitiba - PR"/>
      <meta property="og:description" content="O Ateliê Mininax trabalha com artesanato e costura em Curitiba - Barreirinha"/>
      <meta property="og:url" content="https://mininax.com.br"/>
      <meta property="og:site_name" content="Mininax"/>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Atelie Mininax || Costura || Artesanato || Curitiba - PR" />
      <meta name="twitter:description" content="O Ateliê Mininax trabalha com artesanato e costura em Curitiba - Barreirinha" />
      <link rel="canonical" href="https://mininax.com.br" /> 
      <title>Mininax</title>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-W5KW36HEMD"></script>
      <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-W5KW36HEMD');
              `,
            }}
      />
  </head>
  <body>
  <div className="App">
      <header className="App-header">
        <img src="/logo.webp" className="App-logo" alt="logo" />
        <p>
          Opa!! O site ainda não esta pronto, enquanto isto curta nossas redes sociais. Valeu!!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/atelie.mininax/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="App-link"
          href="https://www.facebook.com/ateliemininax-111346864341195"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </header>
    </div>
    
  </body>


    </div>
  )
}
