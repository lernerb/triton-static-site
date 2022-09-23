import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Bottom from '@components/Bottom'

export default function Locations() {
  return (
    <div className="container">
      <Head>
        <title>Triton Coating &amp; Construction - Locations</title>
        <meta name="description" content="Triton Coating &amp; Construction provides high quality licensed and bonded painters for your residentil or commertial needs. We provide interior, exterior, &amp; other construction services." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <p className="description">
          LOCATIONS
        </p>
      </main>

      <Bottom />
      <Footer />
    </div>
  )
}
