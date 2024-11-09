import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
import { MapContext } from '../../context/MapContext';
// Images
import LogoImage from '../../assets/images/logos/my_planet_camera_travel_logo.png';
// Constants
import {
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
  MAP_PAGE_URL,
  SIGN_UP_PAGE_URL,
  TERMS_PAGE_URL,
} from '../../utils/Constants';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { toggleMapSettingsContainer } = useContext(MapContext);
  const { toggleNavbarOpenClosed, toggleNavigation, activeNav, setActiveNav } =
    useContext(ToggleContext);

  let navigate = useNavigate();

  const logoutUser = (event) => {
    event.preventDefault();
    setActiveNav(HOME_PAGE_URL);
    toggleNavbarOpenClosed();
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate(HOME_PAGE_URL, { replace: true });
  };

  const links = [
    { to: HOME_PAGE_URL, label: 'Home' },
    { to: MAP_PAGE_URL, label: 'Map' },
    { to: TERMS_PAGE_URL, label: 'Terms and Privacy' },
    ...(user.email
      ? []
      : [
          { to: LOGIN_PAGE_URL, label: 'Login' },
          { to: SIGN_UP_PAGE_URL, label: 'Sign Up' },
        ]),
    ...(user.role === 'ADMIN' || user.role === 'DEVELOPER'
      ? [{ to: '/admin', label: 'Admin' }]
      : []),
  ];

  // Pre open settings container
  const handleSettingsClick = () => {
    toggleMapSettingsContainer();
  };

  let basisTabStyle =
    'hover:text-gray-700 bg-red-500 active:scale-95 grid items-center h-fit w-full py-1';

  let activeTabStyle = 'text-white hover:text-gray-700 active:scale-95 bg-red-800 grid items-center h-fit w-full py-1'

  return (
    <nav className='grid bg-alt-colour h-full w-full overflow-hidden lg:min-w-[300px] border-black border-2 border-solid'>
      <div className='grid grid-cols-reg lg:grid-rows-reg lg:grid-cols-1 h-full gap-2 py-2 px-1 md:px-2'>
        {/* Nav image */}
        <section className='grid items-center lg:justify-center lg:py-2 h-full w-full'>
          <div>
            <Link to={HOME_PAGE_URL}>
              <img
                src={LogoImage}
                alt='myPlanet logo'
                className='w-8 h-8 lg:w-44 lg:h-44'
              />
            </Link>
          </div>
        </section>

        {/* Main nav items */}
        <section className='grid items-center justify-end lg:justify-normal w-full h-full'>
          <ul className='grid grid-flow-col font-travel text-center lg:text-xl lg:grid-flow-row w-full h-fit gap-2 font-semibold lg:mb-10'>
            {links.map((link) => (
              <li
                key={link.to}
                className={
                  activeNav === link.to
                    ? `${activeTabStyle}`
                    : `${basisTabStyle}`
                }
              >
                <Link className='w-full' to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={`${basisTabStyle}`}>
              <Link
                className='w-full'
                to={MAP_PAGE_URL}
                onClick={handleSettingsClick}
              >
                Settings
              </Link>
            </li>
            {user.email && (
              <button className='' onClick={logoutUser}>
                Logout
              </button>
            )}
          </ul>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
