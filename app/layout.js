import './globals.css'
import PreloaderController from './components/PreloaderController'

export const metadata = {
  title: 'Mates',
  description: 'Converted site',
  icons: {
    icon: '/favicon.ico'
  },
  other: {
    // Vendor CSS loaded via <link> below in head
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/team-style.css" />
      </head>
      <body>
        <PreloaderController />
        {children}
        {/* Vendor scripts */}
        <script src="/js/jquery-2.1.4.min.js" defer></script>
        <script src="/js/bootstrap.min.js" defer></script>
        <script src="/js/owl.carousel.min.js" defer></script>
        <script src="/js/magnific-popup.min.js" defer></script>
        <script src="/js/isotope.pkgd.min.js" defer></script>
        <script src="/js/jquery.owl-filter.js" defer></script>
        <script src="/js/main.js" defer></script>
      </body>
    </html>
  )
}
