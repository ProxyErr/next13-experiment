import Link from "next/link";
import Character from "./Character";

export default async function Home() {
  const data = await fetch('https://rickandmortyapi.com/api/character');
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
        <ol className="flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href={res.info.prev}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href={`/?page=` + 1}
              className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              1
            </a>
          </li>

          <li>
            <a
              href={`/?page=` + 2}
              className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              2
            </a>
          </li>

          <li>
            <a
              href={`/?page=` + 3}
              className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              3
            </a>
          </li>

          <li>
            <a
              href={`/?page=` + 4}
              className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              4
            </a>
          </li>

          <li>
            <a
              href={res.info.next}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </main>
  );
}
