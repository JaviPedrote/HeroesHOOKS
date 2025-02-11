import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext} from 'react';

export const Navbar = () => {

    const navigate  = useNavigate();
    const {user , logout } = useContext(AuthContext)
    
    const onLogout = () => {
        logout()
        navigate('/login',{replace:true})
    

    }
    return (
        <nav className="bg-gray-900 text-white p-4 flex gap-6 items-center justify-between">

            <div className="flex space-x-4 items-center">
                <Link
                    className="text-xl font-bold mr-10"
                    to="/"
                >
                    Asociaciones
                </Link>
                <NavLink
                    className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'text-white' : 'hover:bg-gray-700 text-gray-400'}`}
                    to="/marvel"
                >
                    Marvel
                </NavLink>

                <NavLink
                    className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'text-white' : 'hover:bg-gray-700 text-gray-400'}`}
                    to="/dc"
                >
                    DC
                </NavLink>
                <NavLink
                    className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'text-white' : 'hover:bg-gray-700 text-gray-400'}`}
                    to="/search"
                >
                    Search
                </NavLink>
            </div>

            <div className='justify-end '>

                <span className='text-blue-600'>{user?.name}</span>
                <button onClick={onLogout} className="cursor-pointer px-3 py-2 rounded text-gray-400 ml-8 hover:outline-2 hover:outline-blue-200 "
                >
                    Logout
                </button>

            </div>
        </nav>
    );
}