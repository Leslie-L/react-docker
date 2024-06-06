import { useQuery, gql } from '@apollo/client';
import Books from './components/Books';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      img
    }
  }
`;

function App(){
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error : {error.message}</p>;
  return (
      <main className="h-screen w-full">
        <h1 className="text-white text-2xl font-bold">Good Books 📚</h1>
        <section className="m-4 flex flex-wrap gap-4">
          {
            data.books.map((data) => (
              <Books id={data.id} title={data.title} img={data.img}/>
            ))
          }
        </section>
      </main> 
       
  )
}

function DisplayBooks() {
 

  return data.books.map(({ id, title,img }) => (
    <div key={id}>
      <h3 className="text-white">{title}</h3>
      <img width="200" height="100" alt="location-reference" src={`${img}`} />
    </div>
  ));
}
export default App
