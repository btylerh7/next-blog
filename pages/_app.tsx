import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''} />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
