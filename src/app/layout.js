import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yash Patel- portfolio',
  description:
    'Explore my portfolio—a showcase of my React expertise. Discover dynamic, responsive web applications that bring ideas to life. Lets innovate together!',
  // url: 'https://caphacker.com/',
  ogTitle: 'Yash Patel- portfolio',
  ogDescription:
  'Explore my portfolio—a showcase of my React expertise. Discover dynamic, responsive web applications that bring ideas to life. Lets innovate together!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap"/>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta name="theme-color" content="#febf4b" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="CapHacker" />
        <link rel="canonical" href={metadata.url} />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQ4F87N9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
