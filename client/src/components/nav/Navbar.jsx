import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Icons
import { IoMdMenu } from 'react-icons/io';
// Images
import LogoImage from '../../assets/images/logos/my_planet_camera_travel_logo.png';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import {
  ADMIN_PAGE_URL,
  CompanyName,
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
  MAP_PAGE_URL,
  SIGN_UP_PAGE_URL,
  TERMS_PAGE_URL,
} from '../../utils/Constants';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function Navbar() {
  const { user, setUser } = useUser();
  const { navigateToPage } = useNavigateToPage();

  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  const togglePhoneNav = () => {
    setIsPhoneNavOpen((prev) => !prev);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigateToPage(HOME_PAGE_URL, { replace: true });
  };

  const navItems = [
    { path: HOME_PAGE_URL, label: 'Home' },
    { path: MAP_PAGE_URL, label: 'Map' },
    { path: TERMS_PAGE_URL, label: 'Terms and Privacy' },
    ...(user?.email
      ? [
          ...(user.role === 'ADMIN' || user.role === 'DEVELOPER'
            ? [{ path: ADMIN_PAGE_URL, label: 'Admin' }]
            : []),
        ]
      : [
          { path: LOGIN_PAGE_URL, label: 'Login' },
          { path: SIGN_UP_PAGE_URL, label: 'Sign Up' },
        ]),
  ];

  return (
    <nav
      role='navigation'
      aria-label='Main Navigation'
      className='relative bg-nav-colour shadow-internal-main border-r-8 border-solid border-[#97572b]'
    >
      <div className='grid grid-cols-reg lg:grid-rows-reg lg:grid-cols-none px-4 py-4 lg:h-full'>
        <section className='grid w-full lg:justify-center lg:pt-8'>
          <NavLink to={HOME_PAGE_URL}>
            <img
              src={LogoImage}
              alt={`${CompanyName} business logo`}
              className='w-10 h-10 lg:w-32 lg:h-32 xl:w-44 xl:h-44 cursor-pointer active:scale-95'
            />
          </NavLink>
        </section>

        <section className='grid justify-end lg:justify-normal lg:items-center lg:h-full'>
          {/* Mobile screen */}
          <button
            aria-label='Toggle navigation menu'
            onClick={togglePhoneNav}
            className='grid lg:hidden w-fit h-fit items-center justify-center text-4xl text-white cursor-pointer'
          >
            <IoMdMenu className='active:scale-90 duration-300' />
          </button>

          {/* Large screen */}
          <ul className='hidden lg:grid grid-flow-col lg:grid-flow-row lg:text-center lg:h-fit gap-1 items-center'>
            {navItems.map(({ path, label }) => (
              <NavItem key={label} url={path} title={label} />
            ))}
            {user?.email && (
              <li>
                <button
                  className='hover:text-colour5 active:scale-95'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </section>
      </div>

      {/* Phone navbar */}
      <div
        className={`phone-nav absolute top-full left-0 w-full bg-nav-background transition-transform duration-300 ${
          isPhoneNavOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <ul className='grid gap-8 items-center justify-center text-center bg-nav-colour text-orange-600 py-10'>
          {navItems.map(({ path, label }) => (
            <NavItem key={label} url={path} title={label} />
          ))}
          {user?.email && (
            <li>
              <button
                className='w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-yellow-500 text-gray-800 font-semibold'
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ url, title }) => {
  return (
    <li className='active:scale-90'>
      <NavLink
        to={url}
        aria-label={`${title} page navigation tab`}
        className='text-xl md:text-lg lg:text-2xl font-semibold font-travel text-black hover:brightness-90 duration-200 hover:text-gray-700 bg-gradient-to-br from-red-500 to-red-800 active:scale-95 grid items-center h-fit w-full py-1 px-4 border-2 border-solid border-black'
        aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        style={({ isActive }) => {
          return isActive ? { color: 'white' } : {};
        }}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default Navbar;
