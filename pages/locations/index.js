import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Bottom from '@components/Bottom'
import ServiceGridBergen from '@components/ServiceGridBergen'

export default function Locations() {
  return (
    <div className="container">
      <Head>
        <title>Triton Coating &amp; Construction | Locations We Service</title>
        <meta name="description" content="Triton Coating &amp; Construction is dedicated to quality painting services in Bergen County, Rockalnd County, Westchester County, Passaic County, and Hudson County. Call today for a free estimate!" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <br />
        <br />
        <center style={{color: "black", fontSize: "25px", fontWeight: "bold"}}>
          Locations we service in Bergen County
        </center>
        <br />
        <ServiceGridBergen></ServiceGridBergen>

      </main>

      <Bottom />
      <Footer />
    </div>
  )
}
