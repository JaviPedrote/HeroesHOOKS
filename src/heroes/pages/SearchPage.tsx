
import { HeroCard } from "../components/HeroCard"
import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { getByHeroByName } from "../helpers/getHeroByName";




export const SearchPage = () => {


  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const query = typeof q === 'string' ? q : undefined;

  // Manejo del formulario con estado sincronizado a la query
  const { searchText, onInputChange } = useForm({ searchText: query });

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText!.length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  const heroes = getByHeroByName(query);
  const showSearch = q?.length===0
  const showError = q!.length > 1 && heroes.length===0

  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold mb-3">Search</h1>
      <hr />

      <div className="flex mt-4">
        {/* Sección de búsqueda */}
        <div className="w-2/6">
          <h4 className="font-semibold">Search</h4>
          <hr className="my-3" />
          <form onSubmit={onSearchSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Buscar"
              className="border border-gray-300 focus:border-blue-400 rounded w-full px-2 py-1 outline-none"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
              Buscar
            </button>
          </form>
        </div>

        {/* Sección de resultados */}
        <div className="w-4/6 ml-4">
          <h4 className="font-semibold">Results</h4>
          <hr className="my-3" />
          <div className={`bg-blue-200 text-center py-3 rounded ${showSearch ? 'block' : 'hidden'}`}>Busca un héroe</div>
          <div className={`bg-red-200 text-center py-3 rounded ${showError ? 'block' : 'hidden'}`}>
            Héroe no encontrado <b>{q}</b>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
