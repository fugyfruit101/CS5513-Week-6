import Layout from '../../components/layout';
import { getResourceIds, getResourceData } from '../../lib/resources';


export async function getStaticProps({ params }) {
  const itemData = await getResourceData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getResourceIds();
  // console.log(paths);
  return {
    paths,
    fallback: false
  };
}


export default function Entry({ itemData }) {
  return (
    <Layout>
      {/* render details about one entity in persons.json saved in itemData */}
      <article className="card col-6">
        <h2>Person Details</h2>
        <div className="card-body">
          <h5 className="card-title">{itemData.data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.data.phone}</h6>
          <p className="card-text">{itemData.data.birthdate}</p>
          <a href={'mailto:' + itemData.data.email} className="card-link">{itemData.data.email}</a>
        </div>
      </article>
      {/* render details about all other entities in persons.json related to id */}
      <div className="list-group col-6">
        
      </div>
    </Layout>
  );
}