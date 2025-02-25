import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
import { useMemo } from "react"


export const HeroPage = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  if (!id) {
    throw new Error('No existe superhero con ese id')
  }

  const heroe = useMemo(() => getHeroById(id), [id])

  if (!heroe) {
    return <Navigate to='/' />
  }


  const onNavigateBack = () => {
    return navigate(-1)
  }


  return (
    <div className=" flex flex-col sm:flex-row mt-5 items-center">
      <img className='h-96 w-60 object-cover' src={`../../../assets/heroes/${heroe.id}.webp`} alt={heroe.superhero} />
      <div className="ml-4 w-full">
        <h3 className="font-semibold sm:font-bold text-xl sm:text-2xl">{heroe?.superhero}</h3>
        <ul className="pl-2 sm:pl-3 mr-6 md:mr-10 mb-3 sm:mb-6">
          <li className="mt-2 border-b-gray-300 border-b-2 pb-1"><span className="font-semibold sm:font-bold">Alter Ego:</span>{heroe.alter_ego}</li>
          <li className="mt-1 border-b-gray-300 border-b-2 pb-1"><span className="font-semibold sm:font-bold">Publisher:</span>{heroe.publisher}</li>
          <li><span className="font-semibold sm:font-bold">Primera aparición:</span>{heroe.first_appearance}</li>
        </ul>
        <h5 className="font-semibold sm:font-bold text-lg">Characters</h5>
        <p className="sm:font-semibold">{heroe.characters}</p>
        <button onClick={onNavigateBack} className="outline-blue-500 outline-2 p-1 mt-6 text-blue-500 font-semibold rounded cursor-pointer hover:bg-blue-500 hover:text-white">
          Regresar
        </button>
      </div>
    </div>
  )
}
