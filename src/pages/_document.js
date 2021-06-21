import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Marco Escaleira Portfolio" />
          <meta
            name="description"
            content="My own personal portfolio on web development. A journey full-field of adventures and challenges overcome."
          />
          <meta
            name="keywords"
            content="portfolio, marco, escaleira, websites, web, frontend, front-end, motojoy"
          />

          <meta name="robots" content="noindex, nofollow" />

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Marco Escaleira" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
