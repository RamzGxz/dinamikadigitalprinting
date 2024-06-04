import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       <link rel="icon" href="/file.png" />
      </Head>
      <body className='bg-background text-textColor'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
