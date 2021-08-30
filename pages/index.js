import Head from 'next/head'
import CategoryCard from '../components/CategoryCard'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Game store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="section-home">
        <div className="container">
          <div className="grid grid-cols-3 gap-4">
            <CategoryCard title="Xbox" image="https://imgur.com/uKQqsuA.png" />
            <CategoryCard title="PS5" image="https://imgur.com/3Y1DLYC.png" />
            <CategoryCard title="Switch" image="https://imgur.com/Dm212HS.png" />
          </div>
          <div className="grid grid-cols-2 gap-4 py-2">
          <CategoryCard image="https://imgur.com/qb6IW1f.png" title="PC" />
          <CategoryCard image="https://imgur.com/HsUfuRU.png" title="Accessories"/>
          </div>
        </div>
      </section>
    </>
  )
}
