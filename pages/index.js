import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout';
import { getResourceDataAll } from '../lib/resources';


export async function getStaticProps() {
  const allData = await getResourceDataAll();
  console.log(allData);
  return {
    props: {
      allData
    }
  };
}


export default function Home({ allData }) {
  return (
      <Layout home>
        <h1>List of Names</h1>
        <p><img src="/vercel.svg" alt="Vercel Logo"></img></p>
        <div className="list-group">
          {allData ?
            allData.map(({ id, name }) => (
            <Link key={id} href={`resources/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))
          : null }
        </div>
      </Layout>
  );
}
