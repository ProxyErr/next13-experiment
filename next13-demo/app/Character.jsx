import Link from "next/link";
import Image from "next/image";

export default function Character({ name, id, image, species }) {
  return (
    <Link href={`/${id}`} className="group relative block bg-black">
      <Image
        alt="Developer"
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        width={1000}
        height={1000}
        priority
      />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {species}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
