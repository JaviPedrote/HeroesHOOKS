import { ListHeroes } from '../components/ListHeroes';

export const MarvelPage = () => (
  <section className="space-y-6">
    <h1 className="text-3xl font-extrabold text-[#4f46e5]">Marvel Comics</h1>
    <hr className="border-[#ec4899]/30" />
    <ListHeroes publisher="Marvel Comics" />
  </section>
);
