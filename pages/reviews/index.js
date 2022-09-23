import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Bottom from '@components/Bottom'
import Grid from '@components/Grid'
import GridItem from '@components/GridItem'

export default function Reviews() {
  return (
    <div className="container">
      <Head>
        <title>Triton Coating &amp; Construction | Customer Reviews</title>
        <meta name="description" content="Triton Coating &amp; Construction is a highly rated painting company that provides top-notch service. Call now for a free estimate." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <br />
        <br />
        <center>
          <a href="https://www.homeadvisor.com/rated.TritonCoating.68741553.html#reviews"><img src="angies1.webp" alt="Angies" /></a>
          <a href="https://www.homeadvisor.com/rated.TritonCoating.68741553.html#reviews"><img src="angies2.webp" alt="Angies" /></a>
          <a href="https://www.homeadvisor.com/rated.TritonCoating.68741553.html#reviews"><img src="angies3.webp" alt="Angies" /></a>
          <a href="https://www.homeadvisor.com/rated.TritonCoating.68741553.html#reviews"><img src="angies4.webp" alt="Angies" /></a>
          <a href="https://www.homeadvisor.com/rated.TritonCoating.68741553.html#reviews"><img src="angies5.webp" alt="Angies" /></a>
        </center>
        <br />
        <br />

        <center style={{color: "orange", fontSize: "30px", fontWeight: "bold"}}>
          READ REVIEWS FROM SOME OF OUR CUSTOMERS.
        </center>


        <Grid />
      </main>

      <Bottom />
      <Footer />
    </div>
  )
}
