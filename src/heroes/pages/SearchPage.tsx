import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getByHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);
  const initialQuery = typeof q === 'string' ? q : '';
  const { searchText, onInputChange } = useForm({ searchText: initialQuery });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((searchText ?? '').trim().length <= 1) return;
    navigate(`?q=${searchText!.toLowerCase()}`);
  };

  const heroes = getByHeroByName(initialQuery);
  const showSearch = initialQuery.length === 0;
  const showError = initialQuery.length > 1 && heroes.length === 0;

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-extrabold text-[#4f46e5]">Search</h1>
      <hr className="border-[#4f46e5]/30" />

      <div className="flex flex-col gap-10 md:flex-row">
        {/* Formulario */}
        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm space-y-4 rounded-3xl bg-gradient-to-r from-[#2ab6c9] via-[#7cd9e6] to-[#7cd9e6] p-6
                     shadow-md ring-1 ring-black/5 backdrop-blur-md
                     dark:bg-gray-900/60 dark:ring-white/10"
        >
          <label className="block text-sm font-semibold tracking-wide">
            Busca tu héroe
          </label>
          <input
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
            className="w-full rounded-lg border border-gray-300/50
                       bg-transparent px-3 py-2 outline-none
                       focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]
                       dark:border-gray-600 dark:focus:border-[#4f46e5]"
            placeholder="Batman…"
          />
          <button
            className="w-full rounded-lg bg-[#4f46e5] px-4 py-2 font-bold text-white
                       transition hover:bg-[#4f46e5]/90"
          >
            Buscar
          </button>
        </form>

        {/* Resultados */}
        <div className="flex-1 space-y-6">
          {showSearch && (
            <div className="rounded-xl bg-[#4f46e5]/10 p-4 text-center text-[#4f46e5]">
              Escribe un nombre para comenzar
            </div>
          )}
          {showError && (
            <div className="rounded-xl bg-red-200 p-4 text-center text-red-600">
              Héroe no encontrado <b>{q}</b>
            </div>
          )}

          <div className="grid gap-8 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
            {heroes.map(h => (
              <HeroCard key={h.id} hero={h} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
