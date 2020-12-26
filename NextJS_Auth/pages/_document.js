import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head >
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://unpkg.com/@tabler/core@latest/dist/css/tabler.min.css" />
          </Head>
        <body className="antialiased theme-dark">
          <Main />
          <NextScript />
          <script async defer src="https://unpkg.com/@tabler/core@latest/dist/js/tabler.min.js"></script>
          <script async defer src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument