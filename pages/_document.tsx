import Document, { Html, Head, Main, NextScript } from "next/document";
/* eslint-disable @next/next/no-sync-scripts */

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
          {/* <script src="https://developers.kakao.com/sdk/js/kakao.js"></script> */}
          <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
          <script>Kakao.init(`7816541a5fa13a30a93fce72c90eafa2`);</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
