import '../styles/globals.css'
import '../styles/App.css'

import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";


export default class MyApp extends App {

 
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <link rel="shortcut icon" href="/logo512.png" />
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
        </Head>
        <Component {...pageProps} />
     </React.Fragment>
    )
  }
}

//export default MyApp
