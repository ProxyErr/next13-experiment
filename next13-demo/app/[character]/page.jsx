
//Gets Initial Id and pre-renders all charcter pages
export async function generateStaticParams(){
  const data = await fetch(`https://rickandmortyapi.com/api/character`)
  const res = await data.json()
  return res.results.map((results) => ({
     results: toString(results.id),
  }))
}


//gets character by Id
export default async function CharacterDetail({ params }) {
  const { character: id } = params;
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const res = await data.json();
  return (
    <div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src={res.image}
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>

          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-sky-950 px-3 py-0.5 text-xs font-medium tracking-wide text-pink-600">
             {res.species}
            </strong>

            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">
                  {res.name}
                </h1>

                <p className="text-sm">Status: {res.status}</p>
              </div>

              <p className="text-lg font-bold"> Origin: {res.origin.name}</p>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                Location: {res.location.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
