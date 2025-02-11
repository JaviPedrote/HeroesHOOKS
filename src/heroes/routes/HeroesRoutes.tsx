import { Navbar } from '../../ui/components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DcPage } from '../pages/DcPage'
import { SearchPage } from '../pages/SearchPage'
import { HeroPage } from '../pages/HeroPage'


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='p-4'>
                <Routes>

                    <Route path="/*" element={<Navigate to="/marvel" />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                    

                </Routes>
            </div>
        </>
    )
}
