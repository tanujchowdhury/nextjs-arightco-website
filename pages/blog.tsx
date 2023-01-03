import Head from 'next/head';
import Layout from '../components/layout';

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog Content</h1>
    </Layout>
  )
}