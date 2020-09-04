import '../styles/globals.sass'
import Head from "next/head";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Home | Test Fulogy</title>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
