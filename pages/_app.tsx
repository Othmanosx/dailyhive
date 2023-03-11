import "@/styles/globals.css"
import "@/styles/style.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import { useState } from "react"

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
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
