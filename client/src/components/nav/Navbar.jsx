import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Images
import LogoImage from '../../assets/images/logos/wdbt-black.svg';
import {
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
  MAP_PAGE_URL,
  SIGN_UP_PAGE_URL,
} from '../../utils/Constants';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
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

  return (
    <nav>
      <section>
        <ul className='grid grid-flow-col w-fit justify-end gap-4 font-semibold'>
          <li
            className={
              activeNav === HOME_PAGE_URL
                ? 'text-gray-600 hover:text-gray-700 active:scale-95'
                : 'hover:text-gray-700 active:scale-95'
            }
          >
            <Link className='w-full' to={HOME_PAGE_URL}>
              Home
            </Link>
          </li>
          <li
            className={
              activeNav === MAP_PAGE_URL
                ? 'text-gray-600 hover:text-gray-700 active:scale-95'
                : 'hover:text-gray-700 active:scale-95'
            }
          >
            <Link className='w-full' to={MAP_PAGE_URL}>
              Map
            </Link>
          </li>
          {!user.email && (
            <>
              <li
                className={
                  activeNav === LOGIN_PAGE_URL
                    ? 'text-gray-600 hover:text-gray-700 active:scale-95'
                    : 'hover:text-gray-700 active:scale-95'
                }
              >
                <Link className='w-full' to={LOGIN_PAGE_URL}>
                  Login
                </Link>
              </li>
              <li
                className={
                  activeNav === SIGN_UP_PAGE_URL
                    ? 'text-gray-600 hover:text-gray-700 active:scale-95'
                    : 'hover:text-gray-700 active:scale-95'
                }
              >
                <Link className='w-full' to={SIGN_UP_PAGE_URL}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
          {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
            <li
              className={
                activeNav === '/admin'
                  ? 'text-gray-600 hover:text-gray-700 active:scale-95'
                  : 'hover:text-gray-700 active:scale-95'
              }
            >
              <Link className='w-full' to='/admin'>
                Admin
              </Link>
            </li>
          )}
          {user.email && (
            <button className='' onClick={logoutUser}>
              Logout
            </button>
          )}
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
