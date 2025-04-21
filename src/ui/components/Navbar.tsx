import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between gap-4
                 px-4 py-2 sm:px-6
                 bg-gradient-to-r from-[#000130] via-[#86c9da] to-[#000000]
                 text-white shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2 sm:gap-6">
        <a
          href="https://www.kodedev.tech/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm md:text-lg font-black tracking-tight hover:opacity-90"
        >
          Portfolio
        </a>

        {['marvel', 'dc', 'search'].map(path => (
          <NavLink
            key={path}
            to={`/${path}`}
            className={({ isActive }) =>
              [
                'rounded px-2 py-1 text-sm font-semibold capitalize',
                isActive
                  ? 'bg-white/20'
                  : 'hover:bg-white/10 opacity-80 hover:opacity-100',
              ].join(' ')
            }
          >
            {path}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-2 lg:gap-4 text-sm font-medium">
        <button
          onClick={onLogout}
          className="rounded bg-white/20 px-3 py-1 hover:bg-white/30"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
