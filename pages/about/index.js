import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Bottom from '@components/Bottom'

export default function Reviews() {
  return (
    <div className="container">
      <Head>
        <title>Triton Coating &amp; Construction - About</title>
        <meta name="description" content="Triton Coating &amp; Construction provides high quality licensed and bonded painters for your residentil or commertial needs. We provide interior, exterior, &amp; other construction services." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <p className="description">
          What You Need to Know
        </p>
        <p>
          Triton Coating &amp; Construction has operated with strong values aimed at understanding and serving client needs.  We have over 20 years of experience in maintaining and painting all types of surfaces and take pride in executing quality work and efficient production.  Get in touch today, and discover the advantage of working with us.
        </p>
      </main>

      <Bottom />
      <Footer />
    </div>
  )
}
