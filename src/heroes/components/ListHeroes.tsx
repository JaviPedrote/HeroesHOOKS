import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

interface ListHeroesProps {
  publisher: string;
}

export const ListHeroes: React.FC<ListHeroesProps> = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mr">
        {heroes.map((heroes) => (
          <HeroCard key={heroes.id} hero={heroes}/>
        ))}
      </div>
    </>
  );
};
