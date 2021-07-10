import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm bonzo. I'm a software engineer. {' '} <a href="https://github.com/baramatsubonzo">my github account .</a> </p>
      </section>
    </Layout>
  )
}