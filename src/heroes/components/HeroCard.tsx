import { Link } from "react-router-dom";

interface HeroCardProps {
    hero: {
        id: string;
        superhero: string;
        publisher: string;
        alter_ego: string;
        first_appearance: string;
        characters: string;
    };
}

export const HeroCard = ({ hero }: HeroCardProps) => {

    const heroImageUrl = `/assets/heroes/${hero.id}.webp`


    return (
        <>

            <div className="flex my-3 outline-2 outline-gray-300 rounded w-[calc(100vw-32px)] sm:w-full sm:pr-2">
                <img className=" w-36 md:mr-6 rounded object-cover" src={heroImageUrl} alt="" />
                <div className="pl-2 md:pl-0">
                    <h5 className="text-2xl font-bold">{hero.superhero}</h5>
                    <div className="flex flex-col h-full max-h-[calc(100%-2rem)]">

                        <p className="pt-3 font-semibold">{hero.alter_ego}</p>

                        {
                            (hero.characters !== hero.alter_ego) && (<p className="font-semibold pr-8">{hero.characters}</p>)
                        }
                        <p className="flex flex-col py-3 text-gray-500 font-semibold">{hero.first_appearance}</p>

                        <Link className="cursor-pointer underline text-blue-600" to={`/hero/${hero.id}`}>
                            Mas..
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
