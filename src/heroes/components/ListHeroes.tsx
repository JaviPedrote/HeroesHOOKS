import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';

interface Props {
  publisher: string;
}

export const ListHeroes = ({ publisher }: Props) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <section
      className="grid auto-rows-max gap-8
                 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]"
    >
      {heroes.map(h => (
        <HeroCard key={h.id} hero={h} />
      ))}
    </section>
  );
};
