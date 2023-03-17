import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Brieflytics" />
        <meta property="og:image" content="/thumbnail.webp" />
        <meta
          property="og:description"
          content="streamline project management with AI-powered daily summaries from Jira, Github, and more"
        />
        <meta property="og:url" content="https://brieflytics.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
