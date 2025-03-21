import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import RecoilProvider from '@/config/RecoilProvider'
import { ThemeProvider } from 'config/material-tailwind-theme-provider'
import ReactQueryClientProvider from 'config/ReactQueryClientProvider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TMDBFLIX',
  description: 'Netflix clone using TMDB API',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
          integrity='sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </head>
      <body className={poppins.className}>
        <RecoilProvider>
          <ReactQueryClientProvider>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </ReactQueryClientProvider>
        </RecoilProvider>
      </body>
    </html>
  )
}
