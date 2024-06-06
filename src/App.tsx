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
      <main className="h-screen w-full flex flex-col items-center">
        <menu className="w-full max-w-lg flex justify-between p-2">
           <h1 className="text-white text-2xl font-bold">Good Books 📚</h1>
            <button className="p-2 border-2 rounded-md border-emerald-400  text-emerald-400 font-semibold">My list</button>
        </menu>
        <section className="m-4 flex flex-wrap justify-center gap-4 max-w-lg">
          {
            data.books.map((data) => (
              <Books id={data.id} title={data.title} img={data.img}/>
            ))
          }
        </section>
      </main> 
       
  )
}


export default App
