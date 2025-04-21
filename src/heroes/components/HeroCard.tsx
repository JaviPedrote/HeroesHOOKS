import { Link } from 'react-router-dom';


interface HeroCardProps {
    hero: {
        id: string;
        superhero: string;
        publisher: string;
        alter_ego: string;
        first_appearance: string;
        characters: string;
    };
}

export const HeroCard = ({ hero }: HeroCardProps) => {
  const img = `/assets/heroes/${hero.id}.webp`;

  return (
    <article
      className="group overflow-hidden rounded-3xl bg-white/70 shadow-lg
                 ring-1 ring-black/5 backdrop-blur-md transition
                 hover:-translate-y-1 hover:shadow-2xl
                 dark:bg-gray-900/60 dark:ring-white/10"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={img}
          alt={`Imagen de ${hero.superhero}`}
          className="h-full w-full object-cover transition group-hover:scale-105"
          loading="lazy"
          onError={e =>
            ((e.currentTarget as HTMLImageElement).src = '/assets/placeholder.webp')
          }
        />
      </div>
      <div className="flex flex-col p-5">
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {hero.superhero}
        </h2>
        <p className="mt-1 font-medium text-gray-600 dark:text-gray-300">
          {hero.alter_ego}
        </p>
        {hero.characters !== hero.alter_ego && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {hero.characters}
          </p>
        )}
        <p className="mt-4 text-xs uppercase tracking-widest text-gray-400">
          {hero.first_appearance}
        </p>
        <Link
          to={`/hero/${hero.id}`}
          className="mt-4 inline-flex w-max items-center gap-1 self-start
                     text-[#4f46e5] hover:underline"
        >
          Más detalles →
        </Link>
      </div>
    </article>
  );
};
