import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
import { MapContext } from '../../context/MapContext';
// Icons
import { IoLogOut, IoVolumeHigh, IoVolumeMute, IoHome, IoSettings } from 'react-icons/io5';
import { IoIosStats, IoIosImages } from 'react-icons/io';
import { FaListOl } from 'react-icons/fa';
// Constants
import { HOME_PAGE_URL } from '../../utils/Constants';

function RightSideQatToolbar() {
  const {
    mapPageSettings,
    toggleMusic,
    toggleQatToolbar,
    toggleMapSettingsContainer,
    toggleStatsContainer,
    toggleUploadImagesContainer,
    toggleCountryListContainer,
  } = useContext(MapContext);
  const { setUser } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  let navigate = useNavigate();

  const logoutUser = (event) => {
    event.preventDefault();
    setActiveNav(HOME_PAGE_URL);
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigate(HOME_PAGE_URL, { replace: true });
  };

  const buttons = [
    {
      Component: Link,
      to: HOME_PAGE_URL,
      onClick: null,
      title: 'Home page',
      icon: <IoHome />,
    },
    {
      Component: 'button',
      to: null,
      onClick: toggleMapSettingsContainer,
      title: 'Open Settings',
      icon: <IoSettings />,
    },
    {
      Component: 'button',
      to: null,
      onClick: toggleStatsContainer,
      title: 'Hide Stats Display',
      icon: <IoIosStats />,
    },
    {
      Component: 'button',
      to: null,
      onClick: toggleUploadImagesContainer,
      title: 'Upload Images',
      icon: <IoIosImages />,
    },
    {
      Component: 'button',
      to: null,
      onClick: toggleCountryListContainer,
      title: 'Countries visited list',
      icon: <FaListOl />,
    },
    {
      Component: 'button',
      to: null,
      onClick: toggleMusic,
      title: mapPageSettings.isMuted ? 'Unmute Music' : 'Mute Music',
      icon: mapPageSettings.isMuted ? <IoVolumeHigh /> : <IoVolumeMute />,
    },
    {
      Component: 'button',
      to: null,
      onClick: logoutUser,
      title: 'Logout now',
      icon: <IoLogOut />,
    },
  ];

  return (
    <section
      title='Settings menu (double click to close)'
      className='grid absolute right-2 top-2 h-full cursor-pointer'
      onDoubleClick={toggleQatToolbar}
    >
      <div
        className={`grid gap-2 border-solid border-black border-2 h-fit w-fit rounded-full ${mapPageSettings.selectedStyle.styleSettings.altBackgroundColour} px-2 py-4 shadow-lg`}
      >
        {buttons.map((button, index) => {
          const { Component, to, onClick, title, icon } = button;
          return (
            <Component
              key={index}
              to={to}
              onClick={onClick}
              title={title}
              className={`border-solid border-black border-2 rounded-full text-xl p-1 ${mapPageSettings.selectedStyle.styleSettings.buttonColour} hover:brightness-110 cursor-pointer no__highlights h-[50px] w-[50px] active:scale-95 shadow-lg`}
            >
              <div className='grid h-full items-center justify-center'>
                {icon}
              </div>
            </Component>
          );
        })}
      </div>
    </section>
  );
}

export default RightSideQatToolbar;
