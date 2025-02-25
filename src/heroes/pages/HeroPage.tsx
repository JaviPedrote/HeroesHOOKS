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
    <div className=" flex mt-5">
      <img className='h-96' src={`../../../assets/heroes/${heroe.id}.webp`} alt={heroe.superhero} />
      <div className="ml-4 w-full">
        <h3 className="font-bold text-2xl">{heroe?.superhero}</h3>
        <ul className="pl-3 mr-10 mb-6">
          <li className="mt-2 border-b-gray-300 border-b-2 pb-1"><b>Alter Ego:</b>{heroe.alter_ego}</li>
          <li className="mt-1 border-b-gray-300 border-b-2 pb-1"><b>Publisher:</b>{heroe.publisher}</li>
          <li><b>Primera aparición:</b>{heroe.first_appearance}</li>
        </ul>
        <h5 className="font-bold text-lg">Characters</h5>
        <p className="font-semibold">{heroe.characters}</p>
        <button onClick={onNavigateBack} className="outline-blue-500 outline-2 p-1 mt-6 text-blue-500 font-semibold rounded cursor-pointer hover:bg-blue-500 hover:text-white">
          Regresar
        </button>
      </div>
    </div>
  )
}
