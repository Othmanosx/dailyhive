import GoogleAnalyticsReporter from "@/components/GoogleAnalyticsReporter"
import "@/styles/globals.css"
import "@/styles/style.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import Script from "next/script"
import { useState } from "react"
import * as gtag from "../utils/gtag"
import HotJar from "@/components/HotJar"

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
