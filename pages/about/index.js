import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Bottom from '@components/Bottom'

export default function Reviews() {
  return (
    <div className="container">
      <Head>
        <title>Triton Coating &amp; Construction | About Us</title>
        <meta name="description" content="Triton Coating &amp; Construction has over 15 years of experience providing top-notch painting services to our customers. Call today for a free estimate." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div style={{ color: "black", textAlign: "center", padding: "60px", paddingBottom: "30px", fontSize: "45px", fontWeight: "bold", backgroundColor: "#791CD" }}>
          <p>The Triton Story</p>
          <p>We know painting. You've seen our work. </p>
        </div>

        <div>
          <div style={{ color: "black", textAlign: "center", lineHeight: "2.5", paddingLeft: "300px", paddingRight: "300px", paddingBottom: "25px", fontSize: "1.25em", fontWeight: "bold", backgroundColor: "#791CD" }}>
            Triton Coating &amp; Construction has operated with strong values aimed at understanding and serving client needs.  We have over 20 years of experience in maintaining and painting all types of surfaces and take pride in executing quality work and efficient production. Get in touch with ustoday, and discover the advantage of working with us.
          </div>

          <div style={{ color: "black", textAlign: "center", lineHeight: "2.5", paddingLeft: "300px", paddingRight: "300px", paddingTop: "25px", paddingBottom: "25px", fontSize: "1.25em", fontWeight: "bold", backgroundColor: "#791CD" }}>
            We started out as structural steel painters based out of Tarpon Springs, Florida. Eventually we moved to NJ and continued painting bridges in the tri-state area. After a while, we started our own painting company out of Fair Lawn, NJ where we live with our family. We have multiple years of experience with painting from sandblasting, painting steel bridges and towers, as well as painting commercial and residential buildings. We started in this industry in 1999, and our business is 100% family owned and operated.</div>

          <div style={{ color: "black", textAlign: "center", lineHeight: "2.5", paddingLeft: "300px", paddingRight: "300px", paddingTop: "25px", paddingBottom: "25px", fontSize: "1.25em", fontWeight: "bold", backgroundColor: "#791CD" }}>
            Triton Coating &amp; Construction is the leading painting, power washing and general contracting company for residential and commercial customers in New Jersey &amp; New York. Fully insured and bonded, we are a family owned business that prides ourselves on giving our clients the same attention to detail as we give to our own homes.
          </div>

          <div style={{ color: "black", textAlign: "center", lineHeight: "2.5", paddingLeft: "300px", paddingRight: "300px", paddingTop: "25px", paddingBottom: "50px", fontSize: "1.25em", fontWeight: "bold", backgroundColor: "#791CD" }}>
            Give us a call today for a quote!
          </div>

        </div>

      </main>

      <Bottom />
      <Footer />
    </div>
  )
}
