import { ListHeroes } from "../components/ListHeroes"


export const DcPage = () => {


  return (
    <div>
      <h1 className="mb-3 font-semibold text-xl">Dc Comics</h1>
      <hr />

      <ListHeroes publisher={'DC Comics'} />

    </div>
  )
}
