import { ListHeroes } from '../components/ListHeroes';

export const DcPage = () => (
  <section className="space-y-6">
    <h1 className="text-3xl font-extrabold text-[#4f46e5]">DC Comics</h1>
    <hr className="border-[#4f46e5]/30" />
    <ListHeroes publisher="DC Comics" />
  </section>
);
