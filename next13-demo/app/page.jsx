import Link from "next/link";
import Character from "./Character";
import PagPage from "./pagpage";





export default async function Home() {
  let page = ``;
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${page}`
  )
  const res = await data.json();

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((results) => (
          <Character
            key={results.id}
            id={results.id}
            species={results.species}
            name={results.name}
            image={results.image}
          />
        ))}
        <PagPage 
          count={res.info.count}
          pages={res.info.pages}
          next={res.info.next}
          prev={res.info.prev}
        />
      </div>
    </main>
  );
}
