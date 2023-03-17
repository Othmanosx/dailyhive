import GoogleAnalyticsReporter from "@/components/GoogleAnalyticsReporter"
import "@/styles/globals.css"
import "@/styles/style.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import Script from "next/script"
import { useState } from "react"
import * as gtag from "../utils/gtag"
import HotJar from "@/components/HotJar"
import { DefaultSeo } from "next-seo"
import Thumbnail from "@/public/thumbnail.png"
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retryDelay: (attemptIndex) =>
              Math.min(10000 * 2.5 ** attemptIndex, 200000),
          },
        },
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo
        title="Brieflytics"
        canonical={"https://brieflytics.vercel.app"}
        description="streamline project management with AI-powered daily summaries from Jira, Github, and more"
        openGraph={{
          type: "website",
          title: "Brieflytics",
          locale: "en",
          url: "https://brieflytics.vercel.app",
          siteName: "Brieflytics",
          description:
            "streamline project management with AI-powered daily summaries from Jira, Github, and more",
          images: [{ url: Thumbnail.src, alt: "Brieflytics platform" }],
        }}
        twitter={{
          site: "@Brieflytics",
          cardType: "summary_large_image",
        }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
      <GoogleAnalyticsReporter />
      <HotJar />
    </QueryClientProvider>
  )
}
