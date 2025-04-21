import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) throw new Error('No existe superhero con ese id');

  const hero = useMemo(() => getHeroById(id), [id]);
  if (!hero) return <Navigate to="/" />;

  return (
    <section
      className="flex flex-col gap-8 py-6 md:flex-row md:gap-10
                 rounded-3xl bg-gradient-to-r from-[#2ab6c9] via-[#7cd9e6] to-[#7cd9e6] p-6 shadow-lg
                 ring-1 ring-black/5 backdrop-blur-md"
    >
      <img
        src={`/assets/heroes/${hero.id}.webp`}
        alt={hero.superhero}
        className="mx-auto aspect-[3/5] w-70 rounded-2xl object-cover shadow-md"
      />

      <div className="flex flex-1 flex-col">
        <h2 className="text-2xl font-extrabold">{hero.superhero}</h2>

        <ul className="mt-4 space-y-2 text-sm md:text-base">
          <li>
            <span className="font-semibold">Alter Ego:</span> {hero.alter_ego}
          </li>
          <li>
            <span className="font-semibold">Publisher:</span> {hero.publisher}
          </li>
          <li>
            <span className="font-semibold">Primera aparición:</span>{' '}
            {hero.first_appearance}
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Characters</h3>
        <p className="text-gray-700 dark:text-gray-300">{hero.characters}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 self-start rounded-lg bg-[#4f46e5]/90 px-4 py-2
                     font-semibold text-white hover:bg-[#4f46e5]"
        >
          Regresar
        </button>
      </div>
    </section>
  );
};
