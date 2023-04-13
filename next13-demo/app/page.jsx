import Link from "next/link";
import Character from "./Character";


export default async function Home() {
  const data = await fetch(`https://rickandmortyapi.com/api/character`);
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
        ))};
      </div>
    </main>
  );
}
